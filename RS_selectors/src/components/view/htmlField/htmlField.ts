import { levelParams } from "../taskField/levels";
import { nodeToString } from "../nodeToString";
import { createElement } from "../../utills/createElement";

export function htmlField(currentLevel: number): HTMLElement | null {
  const htmlEditor: HTMLElement | null = document.querySelector('.text-html');
  const arrows: HTMLElement | null = document.querySelector('.arrows');

  if (htmlEditor) {
    const layoutHTML = createElement('pre', 'layout');
    let levelText: string = nodeToString(levelParams[currentLevel].node);
    layoutHTML.textContent = levelText;

    arrows?.addEventListener('click', (event) => {
      if ((event.target as HTMLElement).classList.contains('arrows__right')) {
        currentLevel += 1;
        if (currentLevel >= levelParams.length) {
          currentLevel = 0;
        }
        levelText = nodeToString(levelParams[currentLevel].node);
        layoutHTML.textContent = levelText;
      } else if ((event.target as HTMLElement).classList.contains('arrows__left')) {
        if (currentLevel <= 0) {
          currentLevel = levelParams.length - 1;
        } else {
          currentLevel -= 1;
        }
        levelText = nodeToString(levelParams[currentLevel].node);
        layoutHTML.textContent = levelText;
      }
    })
    htmlEditor.append(layoutHTML);
  }
  return htmlEditor;
}
