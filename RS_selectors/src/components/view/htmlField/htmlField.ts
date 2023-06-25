import { levelParams } from "../taskField/levels";
import { nodeToText } from "../nodeToString";
import { createElement } from "../../utills/createElement";

export function htmlField(): HTMLElement | null {
  const htmlEditor: HTMLElement | null = document.querySelector('.editor__html');
  const arrows: HTMLElement | null = document.querySelector('.arrows');

  if (htmlEditor) {
    const layoutHTML = createElement('pre', 'layout');
    let i = 0;
    let levelText: string = nodeToText(levelParams[i].node);
    layoutHTML.textContent = levelText;

    arrows?.addEventListener('click', (event) => {
      if ((event.target as HTMLElement).classList.contains('arrows__right')) {
        i += 1;
        if (i >= levelParams.length) {
          i = 0;
        }
        levelText = nodeToText(levelParams[i].node);
        layoutHTML.textContent = levelText;
      } else if ((event.target as HTMLElement).classList.contains('arrows__left')) {
        i -= 1;
        // if (i < 0) {
        //   i = levelParams.length - 1;
        // }
        levelText = nodeToText(levelParams[i].node);
        layoutHTML.textContent = levelText;
      }
    })
    htmlEditor.append(layoutHTML);
  }
  return htmlEditor;
}
