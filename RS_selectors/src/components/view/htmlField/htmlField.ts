import { nodeToString } from "../nodeToString";
import { clearElements } from "../../utills/clearElement";
import { createElement } from "../../utills/createElement";
import { levelParams } from "../../model/dataLevels";

export function htmlField(currentLevel: number): HTMLElement | null {
  const htmlEditor: HTMLElement | null = document.querySelector('.text-html');
  const layout = createElement('pre', 'layout');

  if (htmlEditor) {
    nodeToString(levelParams[currentLevel].node, 0, layout);
    htmlEditor.append(layout);
  }
  return htmlEditor;
}

export const clearHTML = (): void => {
  const htmlField = document.querySelector('.layout');
  const htmlFieldParent = document.querySelector('.text-html');
  clearElements(htmlFieldParent, htmlField);
}
