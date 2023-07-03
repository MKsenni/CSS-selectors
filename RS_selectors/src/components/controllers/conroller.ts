import { state } from "../model/state";
import { hiddenLevel, levelParams } from "../view/taskField/levels";
import { hiddenTask } from "../view/taskField/renderTask";
import { viewLevel } from "../view/view";

export const checkAnswer = (): void => {
  const input: HTMLInputElement | null = document.querySelector('.input-css');
  const enterBtn = document.querySelector('.enter');
  
  enterBtn?.addEventListener('click', (event) => {
    input?.focus();
    if (event && input) {
      const rightAnswer = levelParams[state.currentLevel].answer;
      checkInput(input, rightAnswer);
    }
  })

  input?.addEventListener('keydown', (event): void => {
    const rightAnswer = levelParams[state.currentLevel].answer;
    if (event.code === 'Enter') {
      checkInput(input, rightAnswer);
    }
  })
}

const checkInput = (input: HTMLInputElement, rightVar: string, ): void => {
  const tableWrapper = document.querySelector('.table-wrapper');
  const htmlField = document.querySelector('.layout');
  const tableParent = document.querySelector('.play-field__table');
  const htmlFieldParent = document.querySelector('.text-html');

  console.log(input.value);
  console.log(rightVar);
  console.log(state.currentLevel);
  if (input.value.trim().toLowerCase() === rightVar) {
    rightAnswerAnimation();
    setTimeout(() => {
      clearElements(tableParent, tableWrapper);
      clearElements(htmlFieldParent, htmlField);
      hiddenTask(state.currentLevel);
      hiddenLevel(state.currentLevel);
      if (state.currentLevel < 15) {
        state.currentLevel += 1;
      } else {
        state.currentLevel = 0;
      }
      input.value = '';
      changeIndicatorRight();
      viewLevel(state.currentLevel);
      
    }, 1000);
  } else {
    changeIndicatorWrong();
    wrongAnswerAnimation();
  }
}

export const wrongAnswerAnimation = (): void => {
  const table = document.querySelector('tablecloth');
  table?.classList.add('wrongAnswer');
  setTimeout(() => {
    table?.classList.remove('wrongAnswer');
  }, 1000);
}

const rightAnswerAnimation = (): void => {
  const rightElements = document.querySelectorAll('.right');
  rightElements.forEach((element) => {
    element.classList.add('rightAnswer');
    setTimeout(() => {
      element.classList.remove('rightAnswer');
    }, 1000);
  })
}

export const clearElements = (parent: Element | null, element: Element | null): void => {
  if (parent && element) {
    parent.removeChild(element);
  }
}

const changeIndicatorRight = (): void => {
  const indicator = document.querySelector('.indicator');
  indicator?.classList.add('rightIndicator');
}

const changeIndicatorWrong = (): void => {
  const indicator = document.querySelector('.indicator');
  indicator?.classList.remove('rightIndicator');
}


