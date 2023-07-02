import { htmlField } from "./htmlField/htmlField";
import { htmlTable } from "./table/htmlTable";
import { showLevel } from "./taskField/levels";
import { showTask } from "./taskField/renderTask";

export function viewLevel (currentLevel: number): void {
  htmlField(currentLevel);
  htmlTable(currentLevel);
  showLevel(currentLevel)
  showTask(currentLevel);
}
