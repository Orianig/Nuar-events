# 🎬 Intro Animation - Documentación Técnica

## 📋 Descripción

Componente de **Opening Sequence / Splash Screen** que se muestra solo cuando el usuario entra al sitio desde fuera (no en navegación interna). Incluye scroll lock durante la animación.

---

## 🎯 Comportamiento

### ✅ Cuándo SE muestra la intro:
- Primera visita al sitio
- Recarga de página (F5 o Ctrl+R)
- Entrada desde un enlace externo
- Nueva pestaña del navegador

### ❌ Cuándo NO se muestra:
- Navegación interna (Home → Projects → Home)
- Ya se vio en la sesión actual (usa `sessionStorage`)
- Misma pestaña navegando entre páginas del sitio

---

## 🏗️ Estructura del Componente

```astro
<IntroAnimation 
  backgroundGif="/Home-bg.gif"  // GIF de fondo
  logoImage="/Logo-2.png"        // Logo central
  duration={3500}                // Duración en ms
/>
```

---

## ⚙️ Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `backgroundGif` | `string` | `"/Home-bg.gif"` | Ruta al GIF de fondo |
| `logoImage` | `string` | `"/Logo-2.png"` | Ruta al logo |
| `duration` | `number` | `3500` | Duración total en milisegundos |

---

## 🎨 Animaciones

### 1. **Logo Fade In** (0.3s - 1.8s)
```css
opacity: 0 → 1
scale: 0.8 → 1
translateY: 20px → 0
```

### 2. **Loader Dots** (1.5s en adelante)
- 3 puntos con bounce animado
- Delay secuencial (0s, 0.2s, 0.4s)

### 3. **Curtain Up Exit** (al finalizar)
```css
transform: translateY(0) → translateY(-100%)
opacity: 1 → 0
Duration: 1s
```

---

## 🔒 Scroll Lock

### Cómo funciona:

```javascript
// Al inicio de la intro
document.body.style.overflow = 'hidden';

// Al terminar
document.body.style.overflow = 'auto';
```

**Resultado:** El usuario no puede hacer scroll mientras la intro está activa.

---

## 🧠 Lógica de Detección

### SessionStorage
```javascript
sessionStorage.setItem('intro-shown', 'true');
```
- Persiste durante la sesión del navegador
- Se borra al cerrar la pestaña/navegador
- Evita que se repita la intro en la misma sesión

### Navegación Interna
```javascript
const isInternalNavigation = 
  performance.getEntriesByType('navigation')[0]?.type === 'navigate' 
  && document.referrer.includes(window.location.hostname);
```
- Detecta si vienes de una página del mismo dominio
- Si es interno, no muestra la intro

---

## ⌨️ Interacción del Usuario

### Saltar la Intro

El usuario puede saltar la intro de 2 formas:

1. **Clic en cualquier parte** del overlay
2. **Presionar ESC**

Ambos activan:
```javascript
fadeOut (0.3s) → remover overlay → restaurar scroll
```

---

## 🎯 Timeline Completo

```
0ms     →  Intro se muestra
           Body overflow: hidden
           
300ms   →  Logo empieza fade in

1800ms  →  Logo completamente visible

1500ms  →  Loader dots aparecen

3500ms  →  (duration) Inicia curtain up

4500ms  →  Overlay removido del DOM
           Body overflow: auto
           Usuario puede interactuar
```

---

## 📱 Responsive

El logo se adapta según el viewport:

```css
w-48      /* Móvil: 192px */
md:w-64   /* Tablet: 256px */
lg:w-80   /* Desktop: 320px */
```

---

## 🎨 Estilos CSS

### Overlay
```css
position: fixed
inset: 0
z-index: 9999
background: GIF + overlay negro (40% opacity)
```

### Animaciones Definidas
- `logoFadeIn`: Entrada suave del logo
- `loaderFadeIn`: Aparición del loader
- `curtainUp`: Salida tipo cortina hacia arriba
- `fadeOut`: Fade out rápido (skip)

---

## 🔧 Personalización

### Cambiar duración
```astro
<IntroAnimation duration={5000} /> <!-- 5 segundos -->
```

### Cambiar animación de salida

Edita en `IntroAnimation.astro`:
```javascript
// Línea ~137
introOverlay.style.animation = 'fadeOut 1s ease-out forwards';
// Opciones: 'curtainUp', 'fadeOut', o crear tu propia @keyframe
```

### Deshabilitar skip
Comenta las líneas ~147-158 en el script:
```javascript
// introOverlay?.addEventListener('click', skipIntro);
// document.addEventListener('keydown', (e) => { ... });
```

---

## 🐛 Debugging

### Ver si la intro debería mostrarse:

1. Abre DevTools Console
2. Verifica:
```javascript
sessionStorage.getItem('intro-shown')  // null = se mostrará
document.referrer                       // vacío o externo = se mostrará
```

### Forzar que se muestre de nuevo:
```javascript
sessionStorage.removeItem('intro-shown');
location.reload();
```

---

## 📂 Archivos Necesarios

```
public/
├── Home-bg.gif      // GIF de fondo (recomendado: < 5MB)
└── Logo-2.png       // Logo PNG con transparencia

src/components/home/
└── IntroAnimation.astro
```

---

## ⚡ Performance Tips

1. **Optimiza el GIF**: Comprime a < 3MB si es posible
2. **Usa PNG optimizado**: TinyPNG o similar para el logo
3. **Considera WebP**: Para mejor compresión
4. **Lazy load**: El resto del sitio se carga normalmente

---

## 🚀 Ventajas de Este Enfoque

✅ No bloquea la carga del sitio
✅ Funciona sin JavaScript (CSS puro para animaciones)
✅ JavaScript solo para lógica de show/hide
✅ No necesita librerías externas (GSAP, Lottie)
✅ Ligero y performante
✅ Responsive out of the box
✅ Accesible (se puede saltar con ESC)

---

## 🎯 Casos de Uso

### Ejemplo 1: Intro más larga
```astro
<IntroAnimation duration={6000} />
```

### Ejemplo 2: Otro logo
```astro
<IntroAnimation 
  logoImage="/Logo-1.png"
  duration={4000}
/>
```

### Ejemplo 3: Sin GIF (video/imagen estática)
Edita `IntroAnimation.astro` línea ~23:
```astro
<video autoplay muted loop class="w-full h-full object-cover">
  <source src="/intro-video.mp4" type="video/mp4" />
</video>
```

---

## 🔄 Alternativas

Si necesitas algo más complejo:

1. **GSAP Timeline**: Para control fino de múltiples elementos
2. **Lottie**: Para animaciones vectoriales complejas
3. **Framer Motion**: Si usas React
4. **Three.js**: Para animaciones 3D

Pero para la mayoría de casos, esta implementación vanilla es suficiente.

---

## 📞 Integración

El componente ya está integrado en:

```astro
// src/pages/index.astro
<IntroAnimation 
  backgroundGif="/Home-bg.gif"
  logoImage="/Logo-2.png"
  duration={3500}
/>
```

Solo se incluye en el Home. Si quieres en otras páginas, importa el componente.

---

## ✅ Checklist de Implementación

- [x] Componente creado
- [x] Props configurables
- [x] Scroll lock funcional
- [x] Detección de navegación interna
- [x] SessionStorage para no repetir
- [x] Animaciones suaves
- [x] Skip con clic/ESC
- [x] Responsive
- [x] Integrado en Home

---

¿Necesitas ajustar algo específico de la intro?
