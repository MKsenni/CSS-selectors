import { Tags, TaskLevel } from "../../../types/types";
import { TreeNode } from "../../model/TreeNode";
import { createElement } from "../../utills/createElement";

export type levels = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |13 | 14 | 15;

interface Level {
  level: levels,
  answer: string,
  task: TaskLevel,
  node: TreeNode,
}

const count: levels = 15;

function renderLevels(count: number): NodeListOf<HTMLDivElement> {
  const levelsWrapper = document.querySelector('.levels-wrapper');
  for (let i = 0; i < count; i += 1) {
    const level = createElement('span', 'level');
    level.textContent = `Level ${i + 1} of ${count} `;
    levelsWrapper?.append(level);
  }
  const allLevels: NodeListOf<HTMLDivElement> = document.querySelectorAll('.level');
  return allLevels;
}

export const showLevel = (currentLevel: number): void => {
  const allLevels = renderLevels(count);
  allLevels[currentLevel].classList.add('active');
}

export const levelParams: Level[] = [
  {
    level: 1,
    answer: 'plate',
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
    answer: 'coffee',
    task: TaskLevel.TASK2,
    node: 
      new TreeNode(
        Tags.TABLE,
        false, 
        [
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
    answer: '#with-milk',
    task: TaskLevel.TASK3,
    node: 
      new TreeNode(
        Tags.TABLE,
        false, 
          [
            new TreeNode(
              Tags.CROISSANT,
              false,
            ),
            new TreeNode(
              Tags.COFFEE,//#with-milk
              true,
            ),
            new TreeNode(
              Tags.COFFEE,
              false,
            ),
          ]
      ),
  },
  {
    level: 4,
    answer: 'plate toast',
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
                  Tags.TOAST,
                  true,
                ),
              ]
            ),
            new TreeNode(
              Tags.CROISSANT,
              false,
            ),
          ]
      ),
  },
  {
    level: 5,
    answer: '#green eggs',
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
              Tags.PLATE,//#green
              false,
              [
                new TreeNode(
                  Tags.EGGS,//.boiled
                  true,
                ),
              ]
            ),
            new TreeNode(
              Tags.PLATE,
              false,
              [
                new TreeNode(
                  Tags.CROISSANT,
                  false,
                ),
              ]
            ),
          ]
      ),
  },
  {
    level: 6,  //#boiled  #fried
    answer: '.boiled',
    task: TaskLevel.TASK6,
    node: 
      new TreeNode(
        Tags.TABLE,
        false, 
          [
            new TreeNode(
              Tags.EGGS,//.boiled
              false,
            ),
            new TreeNode(
              Tags.COFFEE,
              true,
            ),
            new TreeNode(
              Tags.PLATE,
              false,
              [
                new TreeNode(
                  Tags.EGGS,//.boiled
                  true,
                ),
              ]
            ),
          ]
      ),
  },
  {
    level: 7,
    answer: 'eggs .fried',
    task: TaskLevel.TASK7,
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
                  Tags.EGGS,//.fried
                  true,
                ),
              ]
            ),
            new TreeNode(
              Tags.PLATE,
              false,
              [
                new TreeNode(
                  Tags.REDHOT,//.fried
                  false,
                ),
              ]
            ),
            new TreeNode(
              Tags.PLATE,
              false,
              [
                new TreeNode(
                  Tags.EGGS,//.fried
                  true,
                ),
              ]
            ),
          ]
      ),
  },
  {
    level: 8,
    answer: 'coffee, plate',
    task: TaskLevel.TASK8,
    node: 
      new TreeNode(
        Tags.TABLE,
        false, 
          [
            new TreeNode(
              Tags.COFFEE,
              true,
            ),
            new TreeNode(
              Tags.PLATE,
              true,
              [
                new TreeNode(
                  Tags.CROISSANT,
                  true,
                ),
              ]
            ),
            new TreeNode(
              Tags.PLATE,
              false,
              [
                new TreeNode(
                  Tags.TOAST,
                  false,
                ),
              ]
            ),
          ]
      ),
  },
  {
    level: 9,
    answer: '*',
    task: TaskLevel.TASK9,
    node: 
      new TreeNode(
        Tags.TABLE,
        false, 
          [
            new TreeNode(
              Tags.APPLE,
              true,
            ),
            new TreeNode(
              Tags.COFFEE,
              true,
            ),
            new TreeNode(
              Tags.PLATE,
              true,
              [
                new TreeNode(
                  Tags.REDHOT,
                  true,
                ),
              ]
            ),
            new TreeNode(
              Tags.PLATE,
              true,
              [
                new TreeNode(
                  Tags.CROISSANT,
                  true,
                ),
              ]
            ),
          ]
      ),
  },
  {
    level: 10,
    answer: 'plate *',
    task: TaskLevel.TASK10,
    node: 
      new TreeNode(
        Tags.TABLE,
        false, 
          [
            new TreeNode(
              Tags.PLATE,
              true,
              [
                new TreeNode(
                  Tags.TOAST,
                  true,
                ),
              ]
            ),
            new TreeNode(
              Tags.CROISSANT,
              false,
            ),
            new TreeNode(
              Tags.PLATE,
              true,
              [
                new TreeNode(
                  Tags.EGGS, //.fried
                  true,
                ),
              ]
            ),
          ]
      ),
  },
  {
    level: 11,
    answer: 'cooffee + cookie',
    task: TaskLevel.TASK10,
    node: 
      new TreeNode(
        Tags.TABLE,
        false, 
          [
            new TreeNode(
              Tags.COOKIE,//.big
              true,
            ),
            new TreeNode(
              Tags.COFFEE,
              true,
            ),
            new TreeNode(
              Tags.COOKIE,//.small
              true,
            ),
            new TreeNode(
              Tags.ORANGE,
              false,
            ),
          ]
      ),
  },
  {
    level: 12,
    answer: 'cooffee ~ cookie',
    task: TaskLevel.TASK10,
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
              Tags.COOKIE,//.small
              true,
            ),
            new TreeNode(
              Tags.COOKIE,//.big
              true,
            ),
            new TreeNode(
              Tags.PLATE,
              false,
              [
                new TreeNode(
                  Tags.COOKIE, //.small
                  false,
                ),
              ]
            ),
          ]
      ),
  },
  {
    level: 13,
    answer: 'plate > eggs',
    task: TaskLevel.TASK10,
    node: 
      new TreeNode(
        Tags.TABLE,
        false, 
          [
            new TreeNode(
              Tags.PLATE,
              false,
              [
                new TreeNode(
                  Tags.TOAST,
                  false,
                  [
                    new TreeNode(
                      Tags.EGGS, //.fired
                      false,
                    ),
                  ]
                ),
              ]
            ),
            new TreeNode(
              Tags.PLATE,
              true,
              [
                new TreeNode(
                  Tags.EGGS, //.fired
                  true,
                ),
              ]
            ),
            new TreeNode(
              Tags.COFFEE,
              false,
            ),
          ]
      ),
  },
  {
    level: 14,
    answer: 'cookie:first-child',
    task: TaskLevel.TASK10,
    node: 
      new TreeNode(
        Tags.TABLE,
        false, 
          [
            new TreeNode(
              Tags.PLATE,
              false,
              [
                new TreeNode(
                  Tags.COOKIE,//.small
                  true,
                ),
                new TreeNode(
                  Tags.COOKIE,//.small
                  false,
                ),
                new TreeNode(
                  Tags.COOKIE,//.small
                  false,
                ),
              ],
            ),
            new TreeNode(
              Tags.COFFEE,
              false,
            ),
          ]
      ),
  },
  {
    level: 15,
    answer: '.fired:last-class',
    task: TaskLevel.TASK10,
    node: 
      new TreeNode(
        Tags.TABLE,
        false, 
          [
            new TreeNode(
              Tags.TOAST,
              false,
              [
                new TreeNode(
                Tags.REDHOT, //.fired
                true,
                ),
              ]
            ),
            new TreeNode(
              Tags.COFFEE,
              false,
            ),
            new TreeNode(
              Tags.PLATE,
              false,
              [
                new TreeNode(
                  Tags.EGGS, //.fired
                  true,
                ),
              ]
            ),
          ]
      ),
  },
]


