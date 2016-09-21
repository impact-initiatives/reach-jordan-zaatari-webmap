export const DESKTOP_WIDTH_MIN = 768;
export const DESKTOP_WIDTH_MAX = 1366;

export function isMobile() {
  return document.body.clientWidth < DESKTOP_WIDTH_MIN;
}
