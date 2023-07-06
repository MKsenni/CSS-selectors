import { Arrows } from '../controllers/arrows/Arrows';
import { checkAnswer, highlightHTML, wrongAnswerAnimation } from '../controllers/conroller';
import { getLocalStorage, setLocalStorage } from '../controllers/localStorage/localStorage';
import { state } from '../model/state';
import { useBurger } from '../controllers/burgerMenu/burgerList';
import { viewLevel } from '../view/view';
import './style.css';
import { toggleLevelBurger } from '../view/taskField/levels';

export const appLoadGame = (): void => {
  window.addEventListener('load', () => {
    getLocalStorage();
    viewLevel(state.currentLevel);
    new Arrows(state);
    checkAnswer();
    useBurger();
  })
  wrongAnswerAnimation();
  toggleLevelBurger();
  highlightHTML();
}

export const beforeUnloadGame = (): void => {
  window.addEventListener('beforeunload', () => {
    setLocalStorage(state.currentLevel);
  })
}