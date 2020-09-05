const hasWindow = typeof window !== 'undefined';

export function getWindowHeight() {
  const height = hasWindow ? window.innerHeight : null;
  return height
}

export function getWindowWidth() {
  const width = hasWindow ? window.innerWidth : null;
  return width;
}
