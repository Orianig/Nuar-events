const VISIBLE_CLASSES = ['opacity-100', 'translate-y-0', 'scale-100'];
const HIDDEN_CLASSES = ['opacity-0', 'translate-y-1', 'scale-95'];

export function initCopyToClipboard(root: ParentNode = document): void {
  const feedback = root.querySelector('[data-copy-feedback]') as HTMLElement | null;
  let hideTimer: ReturnType<typeof setTimeout> | undefined;

  const hideToast = () => {
    if (!feedback) return;
    feedback.classList.remove(...VISIBLE_CLASSES);
    feedback.classList.add(...HIDDEN_CLASSES);
    feedback.setAttribute('aria-hidden', 'true');
  };

  const showToast = () => {
    if (!feedback) return;
    feedback.classList.remove(...HIDDEN_CLASSES);
    feedback.classList.add(...VISIBLE_CLASSES);
    feedback.setAttribute('aria-hidden', 'false');
    clearTimeout(hideTimer);
    hideTimer = setTimeout(hideToast, 2200);
  };

  hideToast();

  root.querySelectorAll('[data-copy]').forEach((element) => {
    if (!(element instanceof HTMLButtonElement)) return;

    element.addEventListener('click', async () => {
      const value = element.dataset.copy;
      if (!value) return;

      try {
        await navigator.clipboard.writeText(value);
      } catch {
        const textarea = document.createElement('textarea');
        textarea.value = value;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      showToast();
    });
  });
}
