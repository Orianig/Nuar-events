import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import XLSX from 'xlsx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const docsDir = path.join(root, 'public', 'documents');
const outPath = path.join(root, 'src', 'data', 'bbdd.generated.ts');
const IMAGE_EXTS = ['.png', '.jpg', '.jpeg', '.webp', '.avif'];

const TYPE_TO_SLUG = {
  corporateEvent: 'corporativos',
  teamBuilding: 'corporativos',
  wedding: 'bodas',
  birthday: 'cumpleanos',
  graduation: 'graduaciones',
  otherEvent: 'otros',
  activation: 'otros',
  bachelorAndBacheloretteParty: 'otros',
  familyCelebration: 'otros',
};

function padCode(code) {
  return String(code).padStart(3, '0');
}

function excelDateToIso(value) {
  if (value == null || value === '') return '';
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}/.test(value)) return value.slice(0, 10);
  if (typeof value === 'number') {
    const epoch = new Date(Date.UTC(1899, 11, 30));
    const date = new Date(epoch.getTime() + value * 86400000);
    return date.toISOString().slice(0, 10);
  }
  return String(value);
}

function parsePublished(value) {
  if (value == null || value === '') return true;
  if (typeof value === 'boolean') return value;
  const v = String(value).trim().toLowerCase();
  if (['false', '0', 'no'].includes(v)) return false;
  return true;
}

function parseAttendees(value) {
  if (value == null || value === '') return { attendees: 0, attendeesLabel: '0' };
  const raw = String(value).trim();
  const num = Number.parseInt(raw.replace(/[^\d]/g, ''), 10);
  return {
    attendees: Number.isFinite(num) ? num : 0,
    attendeesLabel: raw,
  };
}

function splitPaths(value) {
  if (value == null || value === '') return [];
  return String(value)
    .split(/[,|]/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => (s.startsWith('/') ? s : `/${s.replace(/^\/+/, '')}`));
}

function findExisting(absBaseNoExt) {
  for (const ext of IMAGE_EXTS) {
    const abs = `${absBaseNoExt}${ext}`;
    if (fs.existsSync(abs)) {
      const rel = abs.slice(path.join(root, 'public').length).replaceAll('\\', '/');
      return rel.startsWith('/') ? rel : `/${rel}`;
    }
  }
  return '';
}

function resolveEventCover(code, excelCover) {
  const fromExcel = splitPaths(excelCover)[0];
  if (fromExcel) {
    const abs = path.join(root, 'public', fromExcel.replace(/^\//, ''));
    if (fs.existsSync(abs)) return fromExcel;
  }
  const folder = path.join(root, 'public', 'events', code);
  return (
    findExisting(path.join(folder, 'hero')) ||
    findExisting(path.join(folder, `${code}_hero`)) ||
    ''
  );
}

function resolveEventGallery(code, excelGallery) {
  const fromExcel = splitPaths(excelGallery);
  if (fromExcel.length) {
    return fromExcel.filter((p) => fs.existsSync(path.join(root, 'public', p.replace(/^\//, ''))));
  }
  const folder = path.join(root, 'public', 'events', code);
  const out = [];
  for (let i = 1; i <= 30; i += 1) {
    const n = String(i).padStart(2, '0');
    const found = findExisting(path.join(folder, `gallery${n}`));
    if (found) out.push(found);
  }
  return out;
}

function loc(es) {
  const v = String(es ?? '');
  return { es: v, en: v };
}

function loadEventRows() {
  const xlsxPath = path.join(docsDir, 'bbdd events.xlsx');
  const csvPath = path.join(docsDir, 'bbdd events - Eventos.csv');

  if (fs.existsSync(xlsxPath)) {
    const wb = XLSX.readFile(xlsxPath);
    return XLSX.utils.sheet_to_json(wb.Sheets.Eventos, { defval: null });
  }

  if (fs.existsSync(csvPath)) {
    const wb = XLSX.readFile(csvPath, { type: 'file', codepage: 65001 });
    const sheet = wb.Sheets[wb.SheetNames[0]];
    return XLSX.utils.sheet_to_json(sheet, { defval: null });
  }

  console.error('No BBDD file found (xlsx or Eventos.csv) in public/documents');
  process.exit(1);
}

function main() {
  const eventRows = loadEventRows();

  const events = eventRows
    .map((row) => {
      const code = padCode(row.code);
      const excelType = String(row.type ?? '').trim();
      const type = TYPE_TO_SLUG[excelType] ?? 'otros';
      const { attendees, attendeesLabel } = parseAttendees(row.attendees);
      const coverImage = resolveEventCover(code, row.coverImage);
      const gallery = resolveEventGallery(code, row.gallery);
      const published = parsePublished(row.published);

      if (!coverImage) console.warn(`Event ${code}: missing hero image`);

      return {
        code,
        title: loc(row.title ?? ''),
        type,
        excelType,
        tipology: String(row.tipology ?? ''),
        date: excelDateToIso(row.date),
        name: loc(row.name ?? ''),
        attendees,
        attendeesLabel,
        location: loc(row.location ?? ''),
        experience: loc(row.experience ?? ''),
        details: loc(row.details ?? ''),
        coverImage,
        images: gallery,
        published,
      };
    })
    .filter((e) => e.published);

  const file = `/* AUTO-GENERATED by scripts/sync-bbdd.mjs — do not edit by hand */\n\nexport const generatedEvents = ${JSON.stringify(events, null, 2)} as const;\n`;

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, file, 'utf8');
  console.log(`Wrote ${events.length} events → ${path.relative(root, outPath)}`);
}

main();
