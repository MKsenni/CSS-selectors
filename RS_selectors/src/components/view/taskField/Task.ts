// import { DescriptionTask, Examples, Selector, TaskLevel, TitleTask } from "../../../types/types";
import { createElement } from "../../utills/createElement";

interface ITask {
  title: string;
  task: string;
  selector: string;
  description: string;
  example: string;
}

  export class Task {
    public title: string;
    public task: string;
    public selector: string;
    public description: string;
    public example: string;

  constructor({title, task, selector, description, example}: ITask) {
    this.title = title;
    this.task = task;
    this.selector = selector;
    this.description = description;
    this.example = example;
  }

  public generateTaskField(): HTMLElement {
    let template = '';
    const taslElement: HTMLElement = createElement('div', 'descrLevel');
    // taslElement.setAttribute('data-id', this.id);

    this.title &&
    (template += `<h3 class="descrLevel__title">${this.title}</h3>`);

    this.task &&
    (template += `<span class="descrLevel__task">${this.task}</span>`);

    this.selector &&
    (template += `<h4 class="descrLevel__selector">${this.selector}</h4>`);

    this.description &&
    (template += `<span class="descrLevel__descr">${this.description}</span>`);

    this.example &&
    (template += `<h3>Examples</h3><span class="descrLevel__example">${this.example}</span>`);

    taslElement.innerHTML = template;
    return taslElement;
  }
}