import { levelParams } from "../taskField/levels";
import { nodeToText } from "../nodeToString";
import { createElement } from "../../utills/createElement";

export function htmlTable(): HTMLElement | null {
  const table: HTMLElement | null = document.querySelector('.table');
  const arrows: HTMLElement | null = document.querySelector('.arrows');

  if (table) {
  const tableWrapper = createElement('div', 'table-wrapper');
  let i = 0;
  let levelText: string = nodeToText(levelParams[i].node);
  tableWrapper.innerHTML = levelText;
  table.append(tableWrapper);

  arrows?.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).classList.contains('arrows__right')) {
      i += 1;
      if (i >= levelParams.length) {
        i = 0;
      }
      levelText = nodeToText(levelParams[i].node);
      tableWrapper.innerHTML = levelText;
    } else if ((event.target as HTMLElement).classList.contains('arrows__left')) {
      i -= 1;
      // if (i < 0) {
      //   i = levelParams.length - 1;
      // }
      levelText = nodeToText(levelParams[i].node);
      tableWrapper.innerHTML = levelText;
    }
    table.append(tableWrapper);
  })
  }

  return table;
}