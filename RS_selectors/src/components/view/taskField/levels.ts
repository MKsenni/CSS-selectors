import { levels } from "../../model/dataLevels";
import { createElement } from "../../utills/createElement";

const count: levels = 15;

export const renderLevels = (): void => {
  const levelsWrapper = document.querySelector('.levels-wrapper');
  for (let i = 0; i < count; i += 1) {
    const level = createElement('span', 'level');
    level.textContent = `Level ${i + 1} of ${count} `;
    levelsWrapper?.append(level);
  }
}

export const renderLevelsBurger = (): void => {
  const levelsBurger = document.querySelector('.burger__menu');
  for (let i = 0; i < count; i += 1) {
    const level = createElement('li', 'level-burger');
    level.textContent = `Level ${i + 1} of ${count} `;
    levelsBurger?.append(level);
  }
}

export const showLevel = (currentLevel: number): void => {
  const allLevels = document.querySelectorAll('.level');
  allLevels[currentLevel].classList.add('active');
}

export const hiddenLevel = (currentLevel: number): void => {
  const allLevels = document.querySelectorAll('.level');
  allLevels[currentLevel].classList.remove('active');
}

export const removeAllLevels = (): void => {
  const allLevels = document.querySelector('.burger__menu');
  const allLevelsBurger = document.querySelector('.levels-wrapper');
  allLevels?.replaceChildren();
  allLevelsBurger?.replaceChildren();
}
