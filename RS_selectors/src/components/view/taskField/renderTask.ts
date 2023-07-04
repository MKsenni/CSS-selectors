import { IDataTask, dataTask } from "../../model/dataTask";
import { Task } from "./Task";

export const tasksCards: Task[] = [];

export const generateTask = (data: IDataTask[]): Task[] => {
  data.forEach((task) => tasksCards.push(new Task(task)));
  return tasksCards;
}

export const renderTasks = (): NodeListOf<HTMLDivElement> => {
  const taskWrapper = document.querySelector('.descr-wrapper');
  generateTask(dataTask).forEach((task) => taskWrapper?.append(task.generateTaskField()));
  const allTasks: NodeListOf<HTMLDivElement> = document.querySelectorAll('.descrLevel');
  return allTasks;
}

export const showTask = (currentLevel: number): void => {
  const allTasks: NodeListOf<HTMLDivElement> = renderTasks();
  allTasks[currentLevel].classList.add('active');
}

export const hiddenTask = (currentLevel: number): void => {
  const allTasks: NodeListOf<HTMLDivElement> = renderTasks();
  allTasks[currentLevel].classList.remove('active');
}

export const generateTasks = (): void => {
  const taskWrapper = document.querySelector('.descr-wrapper');
  generateTask(dataTask).forEach((task) => taskWrapper?.append(task.generateTaskField()));
}

export const removeAllTasks = (): void => {
  console.log('removeAll');
  const taskWrapper = document.querySelector('.descr-wrapper');
  taskWrapper?.replaceChildren();
}