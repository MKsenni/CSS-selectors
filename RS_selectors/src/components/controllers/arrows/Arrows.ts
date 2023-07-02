// import { state } from "../../model/state";

import { IState } from "../../model/state";

export class Arrows {
  public state: IState;
  public tasks: NodeListOf<HTMLDivElement>;
  public levels: NodeListOf<HTMLDivElement>;
  public arrows: HTMLElement | null;

  constructor (state: IState) {
    this.state = state;
    this.tasks = document.querySelectorAll('.descrLevel');
    this.levels = document.querySelectorAll('.level');
    this.arrows = document.querySelector('.arrows');
    this.changeHeaderLevel(this.state.currentLevel);
    this.changeTask(this.state.currentLevel);
  }

  public setState (): void {
    if (this.arrows) {
      this.arrows.addEventListener('click', (event) => {
        if ((event.target as HTMLElement).classList.contains('arrows__right')) {
          if (this.state.currentLevel === 14) {
            this.state.currentLevel = 0;
          } else if (this.state.currentLevel < 14) {
            this.state.currentLevel += 1;
          }
        } else if ((event.target as HTMLElement).classList.contains('arrows__left')) {
          if (this.state.currentLevel === 0) {
            this.state.currentLevel = 14;
          } else if (this.state.currentLevel > 0) {
            this.state.currentLevel -= 1;
          }
        }
      })
    }
  }

  public changeHeaderLevel(currentLevel: number): void {
    if (this.arrows) {
      this.arrows.addEventListener('click', (event) => {
        if ((event.target as HTMLElement).classList.contains('arrows__right')) {
          this.levels[currentLevel].classList.remove('active');
          currentLevel += 1;
          if (currentLevel >= this.levels.length) currentLevel = 0;
          this.levels[currentLevel].classList.add('active');
        } else if ((event.target as HTMLElement).classList.contains('arrows__left')) {
          this.levels[currentLevel].classList.remove('active');
          if (currentLevel <= 0) {
            currentLevel = this.levels.length - 1
          } else {
            currentLevel -= 1;
          }
          this.levels[currentLevel].classList.add('active');
        }
      })
    }
  }

  public changeTask(currentLevel: number): void {
    if (this.arrows) {
      this.arrows.addEventListener('click', (event) => {
        if ((event.target as HTMLElement).classList.contains('arrows__right')) {
          this.tasks[currentLevel].classList.remove('active');
          currentLevel += 1;
          if (currentLevel >= this.tasks.length) currentLevel = 0;
          this.tasks[currentLevel].classList.add('active');
        } else if ((event.target as HTMLElement).classList.contains('arrows__left')) {
          this.tasks[currentLevel].classList.remove('active');
          if (currentLevel <= 0) {
            currentLevel = this.tasks.length - 1
          } else {
            currentLevel -= 1;
          }
          this.tasks[currentLevel].classList.add('active');
        }
      })
    }
  }
}