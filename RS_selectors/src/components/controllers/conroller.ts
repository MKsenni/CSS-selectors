import { state } from "../model/state";
import { levelParams } from "../view/taskField/levels";
import { viewLevel } from "../view/view";

export const checkAnswer = (): void => {
  const input: HTMLInputElement | null = document.querySelector('.input-css');
  const enterBtn = document.querySelector('.enter');
  const rightAnswer = levelParams[state.currentLevel].answer;

  enterBtn?.addEventListener('click', (event) => {
    if (event) {
      if (input) {
        console.log(input.value);
        
        if (input.value === rightAnswer) {
          viewLevel(state.currentLevel + 1);
          input.value = '';
        } else {
          wrongAnswer();
        }
      }
    }
  })
}

const wrongAnswer = (): void => {
  const table = document.querySelector('tablecloth');
  table?.classList.add('wrongAnswer');
}