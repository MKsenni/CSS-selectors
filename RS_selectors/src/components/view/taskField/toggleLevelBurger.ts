import { state } from "../../model/state";
import { clearHTML, htmlField } from "../htmlField/htmlField";
import { clearTable, htmlTable } from "../table/htmlTable";
import { hiddenLevel, showLevel } from "./levels";
import { hiddenTask, showTask } from "./renderTask";
import { offhighlightLevel } from "../../controllers/highlight/highlight";
import { highlightLevel } from "../../controllers/highlight/highlight";

export const toggleLevelBurger = (): void => {
  const allLevels = document.querySelectorAll('.level-burger');
  
  if (allLevels) {
    for (let i = 0; i < allLevels.length; i += 1) {
      allLevels[i].addEventListener('click', (event) => {
        if (event) {
          clearTable();
          clearHTML();
          hiddenTask(state.currentLevel);
          hiddenLevel(state.currentLevel);
          offhighlightLevel(state.currentLevel);

          state.currentLevel = i;

          htmlField(i);
          htmlTable(i);
          showTask(i);
          showLevel(i);
          highlightLevel(i);
        }
      })
    }
  }
}