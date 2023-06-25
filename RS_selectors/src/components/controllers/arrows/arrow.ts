// import { Task } from "../../view/taskField/Task";

// export class Arrow {
//   public arrowLeft: HTMLElement | null;
//   public arrowRight: HTMLElement | null;
//   public step: number;
//   public wrapper: HTMLElement | null;

//   constructor() {
//     this.arrowLeft = document.querySelector('.arrows__left');
//     this.arrowRight = document.querySelector('.arrows__right');
//     this.step = 0;
//     this.wrapper = document.querySelector('.descr-wrapper');
//   }

//   public nextStep(data: Task[]) {
//     this.arrowRight?.addEventListener('click', () => {
//       let i = 0;
//       for (; i > data.length; i++) {
//         this.wrapper[i].style.display = 'none';
//         this.wrapper?.children[i+1].nextElementSibling.style.display = 'block';
//       }
//       this.wrapper.children.style.display = 'none';
//       this.step += 1;
//       data[this.step].style.display = 'block';
//     })
//   }
  
//   public previousStep() {}
// }

export function arrows(): void {
  const tasks: NodeListOf<HTMLDivElement> = document.querySelectorAll('.descrLevel');
  const levels: NodeListOf<HTMLDivElement> = document.querySelectorAll('.level');
  const arrows = document.querySelector('.arrows');

  let i = 0;
  let j = 0;

  arrows?.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).classList.contains('arrows__right')) {
      tasks[i].style.display = 'none';
      i += 1;
      if (i >= tasks.length) i = 0;
      tasks[i].style.display = 'flex';

      levels[j].style.display = 'none';
      j += 1;
      if (j >= levels.length) j = 0;
      levels[j].style.display = 'flex';
    } else if ((event.target as HTMLElement).classList.contains('arrows__left')) {
      tasks[i].style.display = 'none';
      i -= 1;
      if (i < 0) i = tasks.length - 1;
      tasks[i].style.display = 'flex';

      levels[j].style.display = 'none';
      j -= 1;
      if (j < 0) j = levels.length - 1;
      levels[j].style.display = 'flex';
    }
  })
}

// nextArrow?.addEventListener('click', () => {
//   tasks[i].style.display = 'none';
//   i += 1;
//   if (i >= tasks.length) {
//     i = 0;
//   }
//   tasks[i].style.display = 'flex';

//   levels[j].style.display = 'none';
//   j += 1;
//   if (j >= levels.length) j = 0;
//   levels[j].style.display = 'flex';
// })

// prewArrow?.addEventListener('click', () => {
//   tasks[i].style.display = 'none';
//   i -= 1;
//   if (i < 0) {
//     i = tasks.length - 1;
//   }
//   tasks[i].style.display = 'flex';

//   levels[j].style.display = 'none';
//   j -= 1;
//   if (j < 0) {
//     j = levels.length - 1;
//   }
//   levels[j].style.display = 'flex';
// }
// )
// рабочий вариант с позиционированием
// const levels: NodeListOf<Element> = document.querySelectorAll('.descrLevel');
// console.log(levels);

// const arrows: HTMLElement | null = document.querySelector('.arrows');
// const nextArrow = document.querySelector('.arrows__right');
// let currentIndex = 0;

// function showImage(index: number): void {
//   levels[currentIndex].classList.remove('active');
//   levels[index].classList.add('active');
//   currentIndex = index;
// }

// nextArrow?.addEventListener('click', (event) => {
//   if (event) {
//     let index = currentIndex - 1;
//       if (index < 0) {
//         index = levels.length - 1;
//       }
//       showImage(index);
//   }
// })
// showImage(currentIndex);


// if (arrows) {
//   arrows.addEventListener('click', (event: Event | null) => {
//     if (event) {
//       if (event?.target?.classList.contains('arrows__left')) {
//         let index = currentIndex - 1;
//         if (index < 0) {
//           index = levels.length - 1;
//         }
//         showImage(index);
//       } else if (event?.target?.classList.contains('arrows__right')) {
//         let index = currentIndex + 1;
//         if (index >= levels.length) {
//           index = 0;
//         }
//         showImage(index);
//       }
//     }
//   });

// }