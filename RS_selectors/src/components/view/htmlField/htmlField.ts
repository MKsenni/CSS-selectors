import { levelParams } from "../taskField/levels";
import { nodeToString } from "../nodeToString";
// import { createElement } from "../../utills/createElement";
import { clearElements } from "../../utills/clearElement";
import { createElement } from "../../utills/createElement";

export function htmlField(currentLevel: number): HTMLElement | null {
  const htmlEditor: HTMLElement | null = document.querySelector('.text-html');
  const layout = createElement('pre', 'layout');

  if (htmlEditor) {
    // const layoutHTML = createElement('pre', 'layout');
    nodeToString(levelParams[currentLevel].node, 0, layout);
    // layoutHTML.textContent = levelText;
    htmlEditor.append(layout);
  }
  return htmlEditor;
}

export const clearHTML = (): void => {
  const htmlField = document.querySelector('.layout');
  const htmlFieldParent = document.querySelector('.text-html');
  clearElements(htmlFieldParent, htmlField);
}
