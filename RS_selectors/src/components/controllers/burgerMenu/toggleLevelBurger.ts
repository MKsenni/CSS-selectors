import { state } from "../../model/state";
import { offhighlightLevel } from "../highlight/highlight";

export const toggleLevelBurger = (): void => {
  const burgerMenu: HTMLUListElement | null = document.querySelector('.burger__menu');
  if (burgerMenu) {
    burgerMenu.addEventListener('click', (event) => {
      if (event) {
        const arrFromCollection = Array.from(burgerMenu.children);
        for (let i = 0; i < arrFromCollection.length; i += 1) {
          if (arrFromCollection[i])
          offhighlightLevel(state.currentLevel);
          // highlightLevel();

        }
        // arrFromCollection.forEach((item, i) => {
        //   hiddenLevel(state.currentLevel);
        //   showLevel(i);
        //   clearTable();
        //   clearHTML();
        //   hiddenTask(state.currentLevel);
        //   showTask(i);
        // })
      }
    })
  }
}