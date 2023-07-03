import { Arrows } from '../controllers/arrows/Arrows';
import { checkAnswer, wrongAnswerAnimation } from '../controllers/conroller';
import { getLocalStorage, setLocalStorage } from '../controllers/localStorage/localStorage';
import { state } from '../model/state';
import { useBurger } from '../controllers/burgerMenu/burgerList';
import { viewLevel } from '../view/view';
import './style.css';

export const appLoadGame = (): void => {
  window.addEventListener('load', () => {
    getLocalStorage();
    viewLevel(state.currentLevel);
    const arrows = new Arrows(state);
    arrows.setState();
    checkAnswer();
    useBurger();
  })
  wrongAnswerAnimation();
}

export const beforeUnloadGame = (): void => {
  window.addEventListener('beforeunload', () => {
    setLocalStorage(state.currentLevel);
  })
}