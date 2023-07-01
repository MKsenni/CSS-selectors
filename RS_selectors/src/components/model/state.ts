export type IState = {
  currentLevel: number,
  completedLevels: number[],
}

export const state: IState = {
  currentLevel: 0,
  completedLevels: [],
}