// import { nextStep } from '../controllers/arrows/arrow';
import { arrows } from '../controllers/arrows/arrow';
import { dataTask } from '../model/dataTask';
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
      arrows();
      }
  }

  // дерево для html элементов
  // createView() {
  // }
}