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
        undefined,
        false,
        [
          new TreeNode(
            Tags.PLATE,
            {datatooltip: '<plate/>'},
            true,
            undefined,
          ),
          new TreeNode(
            Tags.PLATE,
            {datatooltip: '<plate/>'},
            true,
            undefined,
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
        undefined,
        false, 
        [
          new TreeNode(
            Tags.COFFEE,
            {datatooltip: '<coffee />'},
            true,
            undefined,
          ),
          new TreeNode(
            Tags.PLATE,
            {datatooltip: '<plate />'},
            false,
            undefined,
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
        undefined,
        false, 
          [
            new TreeNode(
              Tags.CROISSANT,
              undefined,
              false,
              undefined,
            ),
            new TreeNode(
              Tags.COFFEE,//#with-milk
              {id: 'with-milk', datatooltip: '<coffee id="with-milk"/>'},
              true,
              undefined,
            ),
            new TreeNode(
              Tags.COFFEE,
              {datatooltip: '<coffee />'},
              false,
              undefined,
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
        undefined,
        false, 
          [
            new TreeNode(
              Tags.COFFEE,
              {datatooltip: '<coffee />'},
              false,
              undefined,
            ),
            new TreeNode(
              Tags.PLATE,
              {datatooltip: '<plate></plate>'},
              false,
              [
                new TreeNode(
                  Tags.TOAST,
                  {datatooltip: '<toast/>'},
                  true,
                ),
              ]
            ),
            new TreeNode(
              Tags.CROISSANT,
              undefined,
              false,
              undefined,
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
        undefined,
        false, 
          [
            new TreeNode(
              Tags.COFFEE,
              {datatooltip: '<coffee />'},
              false,
              undefined,
            ),
            new TreeNode(
              Tags.PLATE,//#green
              {id: 'green', datatooltip: '<plate></plate>'},
              false,
              [
                new TreeNode(
                  Tags.EGGS,//.boiled
                  {class: 'boiled', datatooltip: '<eggsclas="boiled"/>'},
                  true,
                  undefined,
                ),
              ]
            ),
            new TreeNode(
              Tags.PLATE,
              {datatooltip: '<plate />'},
              false,
              [
                new TreeNode(
                  Tags.CROISSANT,
                  undefined,
                  false,
                  undefined,
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
        undefined,
        false, 
          [
            new TreeNode(
              Tags.EGGS,//.boiled
              {class: 'boiled', datatooltip: '<eggs class="boiled" />'},
              true,
              undefined,
            ),
            new TreeNode(
              Tags.COFFEE,
              {datatooltip: '<coffee />'},
              false,
              undefined,
            ),
            new TreeNode(
              Tags.PLATE,
              {datatooltip: '<plate></plate>'},
              false,
              [
                new TreeNode(
                  Tags.EGGS,//.boiled
                  {class: 'boiled', datatooltip: '<eggs class="boiled" />'},
                  true,
                  undefined,
                ),
              ]
            ),
          ]
      ),
  },
  {
    level: 7,
    answer: 'eggs.fried',
    task: TaskLevel.TASK7,
    node: 
      new TreeNode(
        Tags.TABLE,
        undefined,
        false, 
          [
            new TreeNode(
              Tags.COFFEE,
              {datatooltip: '<cooffee />'},
              false,
              undefined,
            ),
            new TreeNode(
              Tags.PLATE,
              {datatooltip: '<plate></plate>'},
              false,
              [
                new TreeNode(
                  Tags.EGGS,//.fried
                  {class: 'fired', datatooltip: '<eggsclass="fired" />'},
                  true,
                  undefined,
                ),
              ]
            ),
            new TreeNode(
              Tags.PLATE,
              {datatooltip: '<plate></plate>'},
              false,
              [
                new TreeNode(
                  Tags.REDHOT,//.fried
                  {class: 'fired', datatooltip: '<redhot class="fired" />'},
                  false,
                  undefined,
                ),
              ]
            ),
            new TreeNode(
              Tags.PLATE,
              {datatooltip: '<plate></plate>'},
              false,
              [
                new TreeNode(
                  Tags.EGGS,//.fried
                  {class: 'fired', datatooltip: '<redhot class="fired" />'},
                  true,
                  undefined,
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
        undefined,
        false, 
          [
            new TreeNode(
              Tags.COFFEE,
              {datatooltip: '<cooffee />'},
              true,
              undefined,
            ),
            new TreeNode(
              Tags.PLATE,
              {datatooltip: '<plate></plate>'},
              true,
              [
                new TreeNode(
                  Tags.CROISSANT,
                  undefined,
                  true,
                  undefined,
                ),
              ]
            ),
            new TreeNode(
              Tags.PLATE,
              {datatooltip: '<plate></plate>'},
              false,
              [
                new TreeNode(
                  Tags.TOAST,
                  {datatooltip: '<toast />'},
                  false,
                  undefined,
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
        undefined,
        false, 
          [
            new TreeNode(
              Tags.APPLE,
              {datatooltip: '<apple />'},
              true,
              undefined,
            ),
            new TreeNode(
              Tags.COFFEE,
              {datatooltip: '<coffee />'},
              true,
              undefined,
            ),
            new TreeNode(
              Tags.PLATE,
              {datatooltip: '<plate></plate>'},
              true,
              [
                new TreeNode(
                  Tags.REDHOT,
                  undefined,
                  true,
                  undefined,
                ),
              ]
            ),
            new TreeNode(
              Tags.PLATE,
              {datatooltip: '<plate></plate>'},
              true,
              [
                new TreeNode(
                  Tags.CROISSANT,
                  undefined,
                  true,
                  undefined,
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
        undefined,
        false, 
          [
            new TreeNode(
              Tags.PLATE,
              {datatooltip: '<plate></plate>'},
              true,
              [
                new TreeNode(
                  Tags.TOAST,
                  {datatooltip: '<toast />'},
                  true,
                  undefined,
                ),
              ]
            ),
            new TreeNode(
              Tags.CROISSANT,
              undefined,
              false,
              undefined,
            ),
            new TreeNode(
              Tags.PLATE,
              {datatooltip: '<plate></plate>'},
              true,
              [
                new TreeNode(
                  Tags.EGGS, //.fried
                  {class: 'fired', datatooltip: '<eggs class="fired" />'},
                  true,
                  undefined,
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
        undefined,
        false, 
          [
            new TreeNode(
              Tags.COOKIE,//.big
              {class: 'big', datatooltip: '<eggs cookie="big" />'},
              true,
              undefined,
            ),
            new TreeNode(
              Tags.COFFEE,
              {datatooltip: '<coffee />'},
              true,
              undefined,
            ),
            new TreeNode(
              Tags.COOKIE,//.small
              {class: 'small', datatooltip: '<cookie class="small" />'},
              true,
              undefined,
            ),
            new TreeNode(
              Tags.ORANGE,
              {datatooltip: '<orange />'},
              false,
              undefined,
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
        undefined,
        false, 
          [
            new TreeNode(
              Tags.COFFEE,
              {datatooltip: '<coffee />'},
              false,
              undefined,
            ),
            new TreeNode(
              Tags.COOKIE,//.small
              {class: 'small', datatooltip: '<cookie class="small" />'},
              true,
              undefined,
            ),
            new TreeNode(
              Tags.COOKIE,//.big
              {class: 'big', datatooltip: '<cookie class="big" />'},
              true,
              undefined,
            ),
            new TreeNode(
              Tags.PLATE,
              {datatooltip: '<plate></plate>'},
              false,
              [
                new TreeNode(
                  Tags.COOKIE, //.small
                  {class: 'small', datatooltip: '<cookie class="small" />'},
                  false,
                  undefined,
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
        undefined,
        false, 
          [
            new TreeNode(
              Tags.PLATE,
              {datatooltip: '<plate />'},
              false,
              [
                new TreeNode(
                  Tags.TOAST,
                  {datatooltip: '<toast></toast>'},
                  false,
                  [
                    new TreeNode(
                      Tags.EGGS, //.fired
                      {class: 'fired', datatooltip: '<eggs class="fired" />'},
                      false,
                      undefined,
                    ),
                  ]
                ),
              ]
            ),
            new TreeNode(
              Tags.PLATE,
              {datatooltip: '<plate></plate>'},
              true,
              [
                new TreeNode(
                  Tags.EGGS, //.fired
                  {class: 'fired', datatooltip: '<eggs class="fired" />'},
                  true,
                  undefined,
                ),
              ]
            ),
            new TreeNode(
              Tags.COFFEE,
              {datatooltip: '<coffee />'},
              false,
              undefined,
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
        undefined,
        false, 
          [
            new TreeNode(
              Tags.PLATE,
              {datatooltip: '<plate></plate>'},
              false,
              [
                new TreeNode(
                  Tags.COOKIE,//.small
                  {class: 'small', datatooltip: '<cookie class="small" />'},
                  true,
                  undefined,
                ),
                new TreeNode(
                  Tags.COOKIE,//.small
                  {class: 'small', datatooltip: '<cookie class="small" />'},
                  false,
                  undefined,
                ),
                new TreeNode(
                  Tags.COOKIE,//.small
                  {class: 'small', datatooltip: '<cookie class="small" />'},
                  false,
                  undefined,
                ),
              ],
            ),
            new TreeNode(
              Tags.COFFEE,
              {datatooltip: '<coffee />'},
              false,
              undefined,
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
        undefined,
        false, 
          [
            new TreeNode(
              Tags.TOAST,
              {datatooltip: '<toast></toast>'},
              false,
              [
                new TreeNode(
                Tags.REDHOT, //.fired
                {class: 'fired', datatooltip: '<redhot class="fired" />'},
                true,
                undefined,
                ),
              ]
            ),
            new TreeNode(
              Tags.COFFEE,
              {datatooltip: '<coffee />'},
              false,
              undefined,
            ),
            new TreeNode(
              Tags.PLATE,
              {datatooltip: '<plate></plate>'},
              false,
              [
                new TreeNode(
                  Tags.EGGS, //.fired
                  {class: 'fired', datatooltip: '<eggs class="fired" />'},
                  true,
                  undefined,
                ),
              ]
            ),
          ]
      ),
  },
]


