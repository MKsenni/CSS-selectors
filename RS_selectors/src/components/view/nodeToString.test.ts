/**
 * @jest-environment jsdom
 */

import {screen} from '@testing-library/dom';
import { nodeToElement } from './nodeToString';
import { TaskLevel, Tags } from '../../types/types';
import { TreeNode } from '../model/TreeNode';

const levelParams = [
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
            {datatooltip: '<plate/>', dataid: 'redPlate'},
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
]

describe('testing create tree of elements', () => {
  test('element have tree of nodes', () => {
    document.body.innerHTML = `<div data-testid="parent" class="table-wrapper"></div>`;
    const parent = screen.getByTestId('parent');

    nodeToElement(levelParams[0].node, parent);

    expect(parent).not.toBeEmptyDOMElement();
  });
});