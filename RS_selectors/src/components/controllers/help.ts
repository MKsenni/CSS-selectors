import { state } from "../model/state";
import { levelParams } from "../view/taskField/levels";

export const help = (): void => {
  const buttonHelp = document.querySelector('.help');
  const input: HTMLInputElement | null = document.querySelector('.input-css');

  if (input) {
    buttonHelp?.addEventListener('click', (event): void => {
      event.preventDefault();
      if (event) {
        const char: string[] = levelParams[state.currentLevel].answer.split('');
        char.forEach((item) => {
          setTimeout(() => {
            input.value = item;
          }, 1000);
        })
      }
    })
  }
}