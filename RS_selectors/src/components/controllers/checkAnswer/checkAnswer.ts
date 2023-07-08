import { levelParams } from "../../model/dataLevels";
import { state } from "../../model/state";
import { clearHTML, htmlField } from "../../view/htmlField/htmlField";
import { clearTable, htmlTable } from "../../view/table/htmlTable";
import { hiddenLevel, showLevel } from "../../view/taskField/levels";
import { hiddenTask, showTask } from "../../view/taskField/renderTask";
import { offhighlightLevel, highlightLevel } from "../highlight/highlight";

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

export const checkInput = (input: HTMLInputElement, rightVar: string, ): void => {
  if (input.value.trim().toLowerCase() === rightVar) {
    rightAnswerAnimation();
    setTimeout(() => {
      clearTable();
      clearHTML();
      hiddenTask(state.currentLevel);
      hiddenLevel(state.currentLevel);
      offhighlightLevel(state.currentLevel);

      pushInWinArr(state.currentLevel);

      checkWin();

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

export const changeIndicatorRight = (): void => {
  const indicator = document.querySelector('.indicator');
  indicator?.classList.add('rightIndicator');
}

export const changeIndicatorWrong = (): void => {
  const indicator = document.querySelector('.indicator');
  indicator?.classList.remove('rightIndicator');
}

export const checkWin = (): boolean => {
  const winnerArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14];
  const sortUserArray: number[] = state.completedLevels.sort((a, b) => a - b);
  if (winnerArray.length === sortUserArray.length) {
    const sortArr: boolean = sortUserArray.every((item, i) => item === winnerArray[i]);
    if (sortArr === true) {
      return true;
    }
  }
  return false;
}

export const pushInWinArr = (currentLevel: number): void => {
  const check: boolean = state.completedLevels.includes(currentLevel);
  if (!check) {
    state.completedLevels.push(currentLevel);
    console.log(state.completedLevels);
  }
}