export const checkVisibility = (element: HTMLElement) => {
  const clientRect = element.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(clientRect.bottom < 0 || clientRect.top - viewHeight >= 0);
};
