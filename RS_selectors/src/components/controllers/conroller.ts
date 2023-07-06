import { state } from "../model/state";
import { clearHTML, htmlField } from "../view/htmlField/htmlField";
import { clearTable, htmlTable } from "../view/table/htmlTable";
import { hiddenLevel, highlightLevel, levelParams, offhighlightLevel, showLevel } from "../view/taskField/levels";
import { hiddenTask, showTask } from "../view/taskField/renderTask";
import { help } from "./help";

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
  help();
}

const checkInput = (input: HTMLInputElement, rightVar: string, ): void => {
  console.log(input.value);
  console.log(rightVar);
  console.log(state.currentLevel);
  if (input.value.trim().toLowerCase() === rightVar) {
    rightAnswerAnimation();
    setTimeout(() => {
      clearTable();
      clearHTML();
      hiddenTask(state.currentLevel);
      hiddenLevel(state.currentLevel);
      offhighlightLevel(state.currentLevel);

      pushInkWinArr(state.currentLevel);

      if (checkWin()) alert('Are you win! Good work! Bon appetite!');

      if (state.currentLevel === 14) {
        state.currentLevel = 0;
      } else if (state.currentLevel < 14) {
        state.currentLevel += 1;
      }

      input.value = '';
      changeIndicatorRight();
      htmlField(state.currentLevel);
      htmlTable(state.currentLevel);
      showTask(state.currentLevel);
      showLevel(state.currentLevel);
      highlightLevel(state.currentLevel);
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

const changeIndicatorRight = (): void => {
  const indicator = document.querySelector('.indicator');
  indicator?.classList.add('rightIndicator');
}

const changeIndicatorWrong = (): void => {
  const indicator = document.querySelector('.indicator');
  indicator?.classList.remove('rightIndicator');
}

const checkWin = (): boolean => {
  const winnerArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14];
  const sortUserArray: number[] = state.completedLevels.sort((a, b) => a - b);
  if (winnerArray.length === sortUserArray.length) {
    const sortArr: boolean = sortUserArray.every((item, i) => item === winnerArray[i]);
    return sortArr;
  }
  return false;
}

const pushInkWinArr = (level: number): void => {
  const check: boolean = state.completedLevels.includes(level);
  if (!check) {
    state.completedLevels.push(state.currentLevel);
  }
}


//TODO: сделать функцию подсветки элемента из разметки на элемент на столе
export const highlightHTML = (): void => {
  const tag = document.querySelector('.text-html');
  const plate = document.getElementsByTagName('plate');
  
  // const dataAtr = tag?.getAttribute('data-id');
  tag?.addEventListener('mouseover', (event) => {
    if (event) {
      const arr = Array.from(plate);
      arr?.forEach(element => {
        element.setAttribute('data-id', '');
      });
    }
  })

  tag?.addEventListener('mouseout', (event) => {
    if (event) {
      const arr = Array.from(plate);
      arr?.forEach(element => {
        element.removeAttribute('data-id');
      });
    }
  })
}