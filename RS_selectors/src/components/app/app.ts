import { controllerApp } from '../controllers/conroller';
import { getLocalStorage, setLocalStorage } from '../controllers/localStorage/localStorage';
import { state } from '../model/state';
import { viewLevel } from '../view/view';
import './style.css';

export const appLoadGame = (): void => {
  window.addEventListener('load', () => {
    getLocalStorage();
    viewLevel(state.currentLevel);
  })
  controllerApp();
}

export const beforeUnloadGame = (): void => {
  window.addEventListener('beforeunload', () => {
    setLocalStorage(state.currentLevel);
  })
}