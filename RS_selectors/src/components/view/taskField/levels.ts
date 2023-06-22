import { DescriptionLevel, Tags } from "../../../types/types";
import { TreeNode } from "../../model/TreeNode";

export type levels = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |13 | 14 | 15;

interface Level {
  level: levels,
  descriptions: DescriptionLevel,
  node: TreeNode,
}

const createElement = (tagName: string, className: string): HTMLElement => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
};

const container = document.body.firstElementChild?.nextElementSibling?.firstElementChild;
console.log(container);

const taskField = createElement('section', 'task-field');
container?.append(taskField);

const taskFieldLevels = createElement('div', 'task-field__levels');
taskField.append(taskFieldLevels);


function createLevels(parent: HTMLElement, count: number): void {
  for (let i = 0; i < count; i += 1) {
    const level = createElement('span', 'level');
    level.textContent = `Level ${i + 1} of ${count}`;
    parent.append(level);
  }
}

createLevels(taskFieldLevels, 10);


export const levelParams: Level[] = [
  {
    level: 1,
    descriptions: DescriptionLevel.LEVEL1,
    node: 
      new TreeNode(
        Tags.PLATE,
        false,
        [
          new TreeNode(
            Tags.PLATE,
            true,
          ),
          new TreeNode(
            Tags.PLATE,
            true,
          ),
        ]
      ),
  },
  {
    level: 2,
    descriptions: DescriptionLevel.LEVEL2,
    node: 
      new TreeNode(
        Tags.PLATE,
        false, 
          [
            new TreeNode(
              Tags.PLATE,
              false,
            ),
            new TreeNode(
              Tags.COFFEE,
              true,
            ),
            new TreeNode(
              Tags.PLATE,
              false,
            ),
          ]
      ),
  },
  {
    level: 3,
    descriptions: DescriptionLevel.LEVEL3,
    node: 
      new TreeNode(
        Tags.PLATE,
        false, 
          [
            new TreeNode(
              Tags.PLATE,
              false,
            ),
            new TreeNode(
              Tags.COFFEE,
              false,
            ),
            new TreeNode(
              Tags.PLATE,
              true,
            ),
          ]
      ),
  },
  {
    level: 4,
    descriptions: DescriptionLevel.LEVEL4,
    node: 
      new TreeNode(
        Tags.PLATE,
        false, 
          [
            new TreeNode(
              Tags.COFFEE,
              false,
            ),
            new TreeNode(
              Tags.PLATE,
              false,
              [
                new TreeNode(
                  Tags.COOKIE,
                  true,
                ),
              ]
            ),
            new TreeNode(
              Tags.COOKIE,
              false,
            ),
          ]
      ),
  },
  {
    level: 5,
    descriptions: DescriptionLevel.LEVEL5,
    node: 
      new TreeNode(
        Tags.PLATE,
        false, 
          [
            new TreeNode(
              Tags.COFFEE,
              false,
            ),
            new TreeNode(
              Tags.PLATE,
              false,
              [
                new TreeNode(
                  Tags.PLATE,
                  true,
                ),
              ]
            ),
            new TreeNode(
              Tags.PLATE,
              false,
            ),
          ]
      ),
  },
  {
    level: 2,
    descriptions: DescriptionLevel.LEVEL2,
    node: 
      new TreeNode(
        Tags.PLATE,
        false, 
          [
            new TreeNode(
              Tags.PLATE,
              false,
            ),
            new TreeNode(
              Tags.COFFEE,
              true,
            ),
            new TreeNode(
              Tags.PLATE,
              false,
            ),
          ]
      ),
  },
  {
    level: 2,
    descriptions: DescriptionLevel.LEVEL2,
    node: 
      new TreeNode(
        Tags.PLATE,
        false, 
          [
            new TreeNode(
              Tags.PLATE,
              false,
            ),
            new TreeNode(
              Tags.COFFEE,
              true,
            ),
            new TreeNode(
              Tags.PLATE,
              false,
            ),
          ]
      ),
  },
  {
    level: 2,
    descriptions: DescriptionLevel.LEVEL2,
    node: 
      new TreeNode(
        Tags.PLATE,
        false, 
          [
            new TreeNode(
              Tags.PLATE,
              false,
            ),
            new TreeNode(
              Tags.COFFEE,
              true,
            ),
            new TreeNode(
              Tags.PLATE,
              false,
            ),
          ]
      ),
  },
  {
    level: 2,
    descriptions: DescriptionLevel.LEVEL2,
    node: 
      new TreeNode(
        Tags.PLATE,
        false, 
          [
            new TreeNode(
              Tags.PLATE,
              false,
            ),
            new TreeNode(
              Tags.COFFEE,
              true,
            ),
            new TreeNode(
              Tags.PLATE,
              false,
            ),
          ]
      ),
  },
  {
    level: 2,
    descriptions: DescriptionLevel.LEVEL2,
    node: 
      new TreeNode(
        Tags.PLATE,
        false, 
          [
            new TreeNode(
              Tags.PLATE,
              false,
            ),
            new TreeNode(
              Tags.COFFEE,
              true,
            ),
            new TreeNode(
              Tags.PLATE,
              false,
            ),
          ]
      ),
  },
]


