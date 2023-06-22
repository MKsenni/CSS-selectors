import { levelParams } from "../taskField/levels";
import { nodeToText } from "../nodeToString";

export function htmlField(): HTMLElement | null {
  const level: HTMLElement | null = document.querySelector('.task-field');
  const htmlEditor: HTMLElement | null = document.querySelector('.editor__html');

  if (htmlEditor) {
    const layoutHTML = document.createElement('pre');
    layoutHTML.className = 'layout';
  
    if (level) {
      level.addEventListener('click', (event) => {
        if (event) {
          const levelText: string = nodeToText(levelParams[3].node);
          layoutHTML.textContent = levelText;
        }
      })
    }
    htmlEditor.append(layoutHTML);
  }
  return htmlEditor;
}



