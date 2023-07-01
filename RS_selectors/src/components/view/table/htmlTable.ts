import { levelParams } from "../taskField/levels";
import { nodeToElement } from "../nodeToString";
import { createElement } from "../../utills/createElement";

export function htmlTable(): HTMLElement | null {
  const table: HTMLElement | null = document.querySelector('.play-field__table');
  const arrows: HTMLElement | null = document.querySelector('.arrows');

  if (table) {
  const tableWrapper = createElement('div', 'table-wrapper');
  const tableSurface = createElement('div', 'table-surface');
  
  tableWrapper.append(tableSurface);
  let i = 0;
  let levelText = nodeToElement(levelParams[i].node);
  tableWrapper.innerHTML = levelText;
  table.append(tableWrapper);

  arrows?.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).classList.contains('arrows__right')) {
      i += 1;
      if (i >= levelParams.length) {
        i = 0;
      }
      levelText = nodeToElement(levelParams[i].node);
      tableWrapper.innerHTML = levelText;
    } else if ((event.target as HTMLElement).classList.contains('arrows__left')) {
      i -= 1;
      // if (i < 0) {
      //   i = levelParams.length - 1;
      // }
      levelText = nodeToElement(levelParams[i].node);
      tableWrapper.innerHTML = levelText;
    }
    table.append(tableWrapper);
  })
  }

  return table;
}