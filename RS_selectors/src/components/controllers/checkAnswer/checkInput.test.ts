/**
 * @jest-environment jsdom
 */

import {screen} from '@testing-library/dom';
import { changeIndicatorRight, changeIndicatorWrong, checkInput } from './checkAnswer';

describe('testing change classname of indicator', () => {
  test('indicator have class "indicator rightIndicator"', () => {
    document.body.innerHTML = `<span data-testid="right" class="indicator"></span>`;

    const indicator = screen.getByTestId('right');

    changeIndicatorRight();

    expect(indicator).toHaveClass('indicator rightIndicator');
  });

  test('indicator havent class "indicator rightIndicator"', () => {
    document.body.innerHTML = `<span data-testid="right" class="indicator rightIndicator"></span>`;

    const indicator = screen.getByTestId('right');

    changeIndicatorWrong();

    expect(indicator).not.toHaveClass('indicator rightIndicator');
  });
});