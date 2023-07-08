/**
 * @jest-environment jsdom
 */

import {screen} from '@testing-library/dom';
import { htmlTable } from './htmlTable';

describe('testing creating elements in element', () => {
  test('element not empty', () => {
    document.body.innerHTML = `<div class="play-field__table" data-testid="not-empty"></div>`;

    htmlTable(2);

    const tableTest = screen.getByTestId('not-empty');

    expect(tableTest).not.toBeEmptyDOMElement();
  });
});
