import { state } from "../../model/state";

export function setLocalStorage(value: number): void {
  localStorage.setItem('currentValue', value.toString());
}

export function getLocalStorage(): void {
  state.currentLevel = Number(localStorage.getItem('currentValue'));
}