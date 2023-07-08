import { nodeToElement } from "../nodeToString";
import { createElement } from "../../utills/createElement";
import { clearElements } from "../../utills/clearElement";
import { levelParams } from "../../model/dataLevels";

export function htmlTable(currentLevel: number): HTMLElement | null {
  const table: HTMLElement | null = document.querySelector('.play-field__table');

  if (table) {
  const tableWrapper = createElement('div', 'table-wrapper');
  nodeToElement(levelParams[currentLevel].node, tableWrapper);
  table.append(tableWrapper);
  }
  return table;
}

export const clearTable = (): void => {
  const tableParent = document.querySelector('.play-field__table');
  const tableWrapper = document.querySelector('.table-wrapper');
  clearElements(tableParent, tableWrapper);
}