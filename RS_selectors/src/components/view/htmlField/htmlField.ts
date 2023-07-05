import { levelParams } from "../taskField/levels";
import { nodeToString } from "../nodeToString";
import { createElement } from "../../utills/createElement";
import { clearElements } from "../../utills/clearElement";

export function htmlField(currentLevel: number): HTMLElement | null {
  const htmlEditor: HTMLElement | null = document.querySelector('.text-html');

  if (htmlEditor) {
    const layoutHTML = createElement('pre', 'layout');
    const levelText: string = nodeToString(levelParams[currentLevel].node);
    layoutHTML.textContent = levelText;
    htmlEditor.append(layoutHTML);
  }
  return htmlEditor;
}

export const clearHTML = (): void => {
  const htmlField = document.querySelector('.layout');
  const htmlFieldParent = document.querySelector('.text-html');
  clearElements(htmlFieldParent, htmlField);
}
