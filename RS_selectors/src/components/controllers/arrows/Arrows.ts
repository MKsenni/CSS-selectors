import { IState } from "../../model/state";
import { clearHTML, htmlField } from "../../view/htmlField/htmlField";
import { clearTable, htmlTable } from "../../view/table/htmlTable";
import { hiddenLevel, showLevel } from "../../view/taskField/levels";
import { hiddenTask, showTask } from "../../view/taskField/renderTask";

export class Arrows {
  public state: IState;
  public arrows: HTMLElement | null;
  public input: HTMLInputElement | null;
  public layoutHTML: HTMLInputElement | null;

  constructor (state: IState) {
    this.state = state;
    this.arrows = document.querySelector('.arrows');
    this.input = document.querySelector('.input-css');
    this.layoutHTML = document.querySelector('.layout');
    this.changeHeaderLevel();
  }

  public changeHeaderLevel(): void {
    this.arrows?.addEventListener('click', (event) => {
      this.clearInput();
      clearTable();
      clearHTML();
      if ((event.target as HTMLElement).classList.contains('arrows__right')) {
        hiddenLevel(this.state.currentLevel);
        hiddenTask(this.state.currentLevel);
        if (this.state.currentLevel === 14) {
          this.state.currentLevel = 0;
        } else if (this.state.currentLevel < 14) {
          this.state.currentLevel += 1;
        }
        htmlTable(this.state.currentLevel);
        htmlField(this.state.currentLevel);
        showLevel(this.state.currentLevel);
        showTask(this.state.currentLevel);
      } else if ((event.target as HTMLElement).classList.contains('arrows__left')) {
        hiddenLevel(this.state.currentLevel);
        hiddenTask(this.state.currentLevel);
        if (this.state.currentLevel === 0) {
          this.state.currentLevel = 14;
        } else if (this.state.currentLevel > 0) {
          this.state.currentLevel -= 1;
        }
        htmlTable(this.state.currentLevel);
        htmlField(this.state.currentLevel);
        showLevel(this.state.currentLevel);
        showTask(this.state.currentLevel);
      }
    })
  }

  private clearInput(): void {
    if (this.input) {
      this.input.value = '';
    }
  }
}