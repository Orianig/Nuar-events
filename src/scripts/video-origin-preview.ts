export function initVideoOriginPreview(root: ParentNode = document): void {
  root.querySelectorAll('video[data-origin-preview]').forEach((element) => {
    if (!(element instanceof HTMLVideoElement)) return;

    const previewAt = Number(element.dataset.originPreview);
    if (!Number.isFinite(previewAt)) return;

    let previewing = true;

    const applyPreview = () => {
      if (!previewing) return;
      element.currentTime = previewAt;
    };

    element.addEventListener('loadedmetadata', applyPreview, { once: true });
    element.addEventListener('loadeddata', applyPreview, { once: true });

    element.addEventListener(
      'play',
      () => {
        if (!previewing || Math.abs(element.currentTime - previewAt) > 1) return;
        previewing = false;
        element.pause();
        const resume = () => {
          element.removeEventListener('seeked', resume);
          void element.play();
        };
        element.addEventListener('seeked', resume, { once: true });
        element.currentTime = 0;
      },
      { once: true },
    );
  });
}
