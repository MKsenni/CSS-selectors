/**
 * @jest-environment jsdom
 */

import {screen} from '@testing-library/dom';
import { highlightLevel, offhighlightLevel } from './highlight';

describe('testing change classname of level element', () => {
  test('add classname', () => {
    document.body.innerHTML = `<li data-testid="level" class="level-burger highlight-level">Level 1 of 15 </li>
    <li data-testid="level" class="level-burger">Level 2 of 15 </li>`;

    const allLevels = screen.getAllByTestId('level');

    highlightLevel(1);

    expect(allLevels[1]).toHaveClass('level-burger highlight-level');
  });

  test('remove classname', () => {
    document.body.innerHTML = `<li data-testid="level" class="level-burger highlight-level">Level 1 of 15 </li>
    <li data-testid="level" class="level-burger">Level 2 of 15 </li>`;

    const allLevels = screen.getAllByTestId('level');

    offhighlightLevel(0);

    expect(allLevels[0]).not.toHaveClass('level-burger highlight-level');
  });
})