import { Arrows } from '../controllers/arrows/Arrows';
import { checkAnswer } from '../controllers/conroller';
import { getLocalStorage, setLocalStorage } from '../controllers/localStorage/localStorage';
import { state } from '../model/state';
import { viewLevel } from '../view/view';
import './style.css';

export const appLoadGame = (): void => {
  window.addEventListener('load', () => {
    getLocalStorage();
    viewLevel(state.currentLevel);
    const arrows = new Arrows(state);
    arrows.setState();
    checkAnswer();
    // arrows.changeHeaderLevel(state.currentLevel);
    // arrows.changeTask(state.currentLevel);
  })
}

export const beforeUnloadGame = (): void => {
  window.addEventListener('beforeunload', () => {
    setLocalStorage(state.currentLevel);
  })
}