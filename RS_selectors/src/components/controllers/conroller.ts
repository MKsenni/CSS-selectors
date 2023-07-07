import { state } from "../model/state";
import { useBurger } from "../view/taskField/burgerList";
import { Arrows } from "./arrows/Arrows";
import { checkAnswer } from "./checkAnswer/checkAnswer";
import { help } from "./help/help";
import { highlightHTML } from "./highlight/highlight";

export const controllerApp = (): void => {
  new Arrows(state);
  checkAnswer();
  help();
  highlightHTML();
  useBurger();
}
