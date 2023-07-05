import { levelParams } from "../taskField/levels";
import { nodeToElement } from "../nodeToString";
import { createElement } from "../../utills/createElement";
import { clearElements } from "../../utills/clearElement";

export function htmlTable(currentLevel: number): HTMLElement | null {
  const table: HTMLElement | null = document.querySelector('.play-field__table');

  if (table) {
  const tableWrapper = createElement('div', 'table-wrapper');
  const levelText: string = nodeToElement(levelParams[currentLevel].node);
  tableWrapper.innerHTML = levelText;
  table.append(tableWrapper);
  }
  return table;
}

export const clearTable = (): void => {
  const tableParent = document.querySelector('.play-field__table');
  const tableWrapper = document.querySelector('.table-wrapper');
  clearElements(tableParent, tableWrapper);
}