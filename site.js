const windowsDownload = document.querySelector('#download-windows');
const macDownload = document.querySelector('#download-mac');
const devicePlatform = navigator.userAgentData?.platform || navigator.platform || '';

if (/^mac/i.test(devicePlatform)) {
  windowsDownload.before(macDownload);
  windowsDownload.classList.remove('primary');
  macDownload.classList.add('primary');
} else if (!/^win/i.test(devicePlatform)) {
  windowsDownload.classList.remove('primary');
}

const demo = document.querySelector('video');
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');

if (!motionPreference.matches) {
  demo.play().catch(() => {
    // Playback remains available through the video controls.
  });
}

motionPreference.addEventListener('change', ({ matches }) => {
  if (matches) demo.pause();
});
