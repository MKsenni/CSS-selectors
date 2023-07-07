import { help } from "../controllers/help";
import { htmlField } from "./htmlField/htmlField";
import { htmlTable } from "./table/htmlTable";
import { highlightLevel, renderLevels, renderLevelsBurger, showLevel } from "./taskField/levels";
import { renderTasks, showTask } from "./taskField/renderTask";

export function viewLevel (currentLevel: number): void {
  htmlField(currentLevel);
  htmlTable(currentLevel);
  renderLevels();
  showLevel(currentLevel)
  renderLevelsBurger();
  highlightLevel(currentLevel);
  renderTasks();
  showTask(currentLevel);
  help();
}
