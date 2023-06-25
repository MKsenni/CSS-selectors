import { Tags, TaskLevel } from "../../../types/types";
import { TreeNode } from "../../model/TreeNode";
import { createElement } from "../../utills/createElement";

export type levels = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |13 | 14 | 15;

interface Level {
  level: levels,
  task: TaskLevel,
  node: TreeNode,
}

const count: levels = 15;
const levelsWrapper: HTMLElement | null = document.querySelector('.levels-wrapper');


function createLevels(parent: HTMLElement, count: number): void {
  for (let i = 0; i < count; i += 1) {
    const level = createElement('span', 'level');
    level.textContent = `Level ${i + 1} of ${count} `;
    parent.append(level);
  }
}

if (levelsWrapper) {
  createLevels(levelsWrapper, count);
}

export const levelParams: Level[] = [
  {
    level: 1,
    task: TaskLevel.TASK1,
    node: 
      new TreeNode(
        Tags.TABLE,
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
    task: TaskLevel.TASK2,
    node: 
      new TreeNode(
        Tags.TABLE,
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
    level: 3,
    task: TaskLevel.TASK3,
    node: 
      new TreeNode(
        Tags.TABLE,
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
    task: TaskLevel.TASK4,
    node: 
      new TreeNode(
        Tags.TABLE,
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
    task: TaskLevel.TASK5,
    node: 
      new TreeNode(
        Tags.TABLE,
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
    level: 6,
    task: TaskLevel.TASK6,
    node: 
      new TreeNode(
        Tags.TABLE,
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
    level: 7,
    task: TaskLevel.TASK7,
    node: 
      new TreeNode(
        Tags.TABLE,
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
    level: 8,
    task: TaskLevel.TASK8,
    node: 
      new TreeNode(
        Tags.TABLE,
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
    level: 9,
    task: TaskLevel.TASK9,
    node: 
      new TreeNode(
        Tags.TABLE,
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
    level: 10,
    task: TaskLevel.TASK10,
    node: 
      new TreeNode(
        Tags.TABLE,
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
    level: 11,
    task: TaskLevel.TASK10,
    node: 
      new TreeNode(
        Tags.TABLE,
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
    level: 12,
    task: TaskLevel.TASK10,
    node: 
      new TreeNode(
        Tags.TABLE,
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
    level: 13,
    task: TaskLevel.TASK10,
    node: 
      new TreeNode(
        Tags.TABLE,
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
    level: 14,
    task: TaskLevel.TASK10,
    node: 
      new TreeNode(
        Tags.TABLE,
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
    level: 15,
    task: TaskLevel.TASK10,
    node: 
      new TreeNode(
        Tags.TABLE,
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


