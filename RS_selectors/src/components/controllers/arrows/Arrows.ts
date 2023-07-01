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
  }

  public setState (): void {
    if (this.arrows) {
      this.arrows.addEventListener('click', (event) => {
        (event.target as HTMLElement).classList.contains('arrows__right') ?
        this.state.currentLevel += 1 :
        (event.target as HTMLElement).classList.contains('arrows__left') ?
        this.state.currentLevel -= 1 : null
        console.log(this.state.currentLevel);
      })
    }
  }

  public changeHeaderLevel(): void {
    if (this.arrows) {
      let i = 0;
      let j = 0;
      this.arrows.addEventListener('click', (event) => {
        if ((event.target as HTMLElement).classList.contains('arrows__right')) {
          this.tasks[i].style.display = 'none';
          i += 1;
          if (i >= this.tasks.length) i = 0;
          this.tasks[i].style.display = 'flex';
    
          this.levels[j].style.display = 'none';
          j += 1;
          if (j >= this.levels.length) j = 0;
          this.levels[j].style.display = 'flex';
        } else if ((event.target as HTMLElement).classList.contains('arrows__left')) {
          this.tasks[i].style.display = 'none';
          i -= 1;
          if (i < 0) i = this.tasks.length - 1;
          this.tasks[i].style.display = 'flex';
    
          this.levels[j].style.display = 'none';
          j -= 1;
          if (j < 0) j = this.levels.length - 1;
          this.levels[j].style.display = 'flex';
        }
      })
    }
  }
}