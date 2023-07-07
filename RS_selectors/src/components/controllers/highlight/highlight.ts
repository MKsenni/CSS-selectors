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

export const highlightLevel = (currentLevel: number): void => {
  const allLevels = document.querySelectorAll('.level-burger');
  allLevels[currentLevel].classList.add('highlight-level');
}

export const offhighlightLevel = (currentLevel: number): void => {
  const allLevels = document.querySelectorAll('.level-burger');
  allLevels[currentLevel].classList.remove('highlight-level');
}