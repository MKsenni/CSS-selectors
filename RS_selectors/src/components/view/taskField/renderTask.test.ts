import { Levels, TitleTask, TaskLevel, Selector, DescriptionTask, Examples } from "../../../types/types"
import { generateTask } from "./renderTask"

const dataTask = [
  {
    'level': Levels.LEVEL1,
    'title': TitleTask.TITLE1,
    'task': TaskLevel.TASK1,
    'selector': Selector.SELECTOR1,
    'description': DescriptionTask.DESCRIPTION1,
    'example': Examples.EXAMPLES1,
  }
];

describe('testing render task', () => {
  test('test generate Task', () => {
    const result = generateTask(dataTask);
    expect(result).toHaveLength(1);
  });
});
