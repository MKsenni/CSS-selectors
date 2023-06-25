import { IDataTask, dataTask } from "../../model/dataTask";
import { Task } from "./Task";

export const tasksCards: Task[] = [];
console.log(tasksCards);

const generateTask = (data: IDataTask[]): Task[] => {
  

  data.forEach((task) => tasksCards.push(new Task(task)));
  return tasksCards;
}

export const renderTask = (): void => {
  const taskWrapper = document.querySelector('.descr-wrapper');
  generateTask(dataTask).forEach((task) => taskWrapper?.append(task.generateTaskField()));

}