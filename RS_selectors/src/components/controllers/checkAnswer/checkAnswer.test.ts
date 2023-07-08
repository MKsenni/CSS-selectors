import { state } from "../../model/state";
import { checkWin, pushInWinArr } from "./checkAnswer";

describe('testing add correct num in array', () => {
  test('test not add num', () => {
    state.completedLevels = [4];

    pushInWinArr(4);

    expect(state.completedLevels).toEqual([4]);
  });

  test('test add num', () => {
    state.completedLevels = [2, 3, 5];

    pushInWinArr(1);

    expect(state.completedLevels).toEqual([2, 3, 5, 1]);
  });
});

describe('testing check array on contains all completed levels', () => {
  test('test return false', () => {
    state.completedLevels = [1, 2, 4];

    const result = checkWin();

    expect(result).toBe(false);
  });
  test('test return true', () => {
    state.completedLevels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14];

    const result = checkWin();

    expect(result).toBe(true);
  });
});
