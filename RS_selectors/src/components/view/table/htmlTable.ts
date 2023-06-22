import { levelParams } from "../taskField/levels";
import { nodeToText } from "../nodeToString";

export function htmlTable(): HTMLElement | null {
  const level: HTMLElement | null = document.querySelector('.task-field');
  const table: HTMLElement | null = document.querySelector('.table');

  if (table) {
  const tableWrapper = document.createElement('div');
  tableWrapper.className = 'table-wrapper';

    if (level) {
      level.addEventListener('click', (event) => {
        if (event) {
          const levelText: string = nodeToText(levelParams[3].node);
          tableWrapper.innerHTML = levelText;
        }
      })
    }
    table.append(tableWrapper);
  }

  return table;
}