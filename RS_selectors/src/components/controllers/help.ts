import { state } from "../model/state";
import { levelParams } from "../view/taskField/levels";

export const help = (): void => {
  const buttonHelp = document.querySelector('.help');
  const input: HTMLInputElement | null = document.querySelector('.input-css');

  if (input) {
    let index = 1;
    const writeText = (word: string): string | undefined => {
      input.value = word.slice(0, index);
      index += 1;
      
      if (index > word.length) {
        return word;
      } else {
        setTimeout(() => {
          writeText(word);
        }, 500);
      }
    }
    buttonHelp?.addEventListener('click', (event): void => {
      index = 1;
      event.preventDefault();
      if (event) {
        writeText(levelParams[state.currentLevel].answer);
        input.focus();
      }
    })
  }
}