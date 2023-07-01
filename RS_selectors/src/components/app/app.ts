// import { nextStep } from '../controllers/arrows/arrow';
// import { arrows } from '../controllers/arrows/arrow';
import { Arrows } from '../controllers/arrows/Arrows';
import { dataTask } from '../model/dataTask';
import { state } from '../model/state';
import { htmlField } from '../view/htmlField/htmlField';
import { htmlTable } from '../view/table/htmlTable';
import { renderTask } from '../view/taskField/renderTask';
import './style.css';

export default function App(): void{
  window.onload = function(): void {
    if (dataTask) {
      htmlField();
      htmlTable();
      renderTask();
      const arrows = new Arrows(state);
      arrows.changeHeaderLevel();
      arrows.setState();
      }
  }

  // дерево для html элементов
  // createView() {
  // }
}