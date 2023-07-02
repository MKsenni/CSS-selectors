import { levelParams } from "../taskField/levels";
import { nodeToElement } from "../nodeToString";
import { createElement } from "../../utills/createElement";

export function htmlTable(currentLevel: number): HTMLElement | null {
  const table: HTMLElement | null = document.querySelector('.play-field__table');
  const arrows: HTMLElement | null = document.querySelector('.arrows');

  if (table) {
  const tableWrapper = createElement('div', 'table-wrapper');
  let levelText: string = nodeToElement(levelParams[currentLevel].node);
  tableWrapper.innerHTML = levelText;

  arrows?.addEventListener('click', (event) => {
    console.log(currentLevel);
    
    if ((event.target as HTMLElement).classList.contains('arrows__right')) {
      currentLevel += 1;
      if (currentLevel >= levelParams.length) {
        currentLevel = 0;
      }
      levelText = nodeToElement(levelParams[currentLevel].node);
      tableWrapper.innerHTML = levelText;
    } else if ((event.target as HTMLElement).classList.contains('arrows__left')) {
      if (currentLevel <= 0) {
        currentLevel = levelParams.length - 1;
      } else {
        currentLevel -= 1;
      }
      levelText = nodeToElement(levelParams[currentLevel].node);
      tableWrapper.innerHTML = levelText;
    }
  })
  table.append(tableWrapper);
  }

  return table;
}