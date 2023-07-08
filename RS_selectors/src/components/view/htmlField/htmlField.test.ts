/**
 * @jest-environment jsdom
 */

import {screen} from '@testing-library/dom';
import { htmlField } from './htmlField';

describe('testing creating elements in element', () => {
  test('element not empty', () => {
    document.body.innerHTML = `<div data-testid="not-empty" class="text-html"></div>`;
    const textHtml = screen.getByTestId('not-empty');

    htmlField(1);

    expect(textHtml).not.toBeEmptyDOMElement();
  });
});