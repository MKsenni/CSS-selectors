export const clearElements = (parent: Element | null, element: Element | null): void => {
  if (parent && element) {
    parent.removeChild(element);
  }
}