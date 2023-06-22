export enum Tags {
  PLATE = 'plate',
  COFFEE = 'coffee',
  EGGS = 'eggs',
  TOAST = 'toast',
  COOKIE = 'cookie',
  ORANGE = 'orange',
  APPLE = 'apple',
  CROISSANT = 'croissant',
  REDHOT = 'redhot'
}

export enum DescriptionLevel {
  LEVEL1 = 'Select elements by their type A',
  LEVEL2 = 'Select elements by their type A',
  LEVEL3 = 'Select elements with an ID #id',
  LEVEL4 = 'Select an element inside another element A B',
  LEVEL5 = 'Combine the Descendant & ID Selectors #id A',
  LEVEL6 = 'Select elements by their class .classname',
  LEVEL7 = 'Combine the Class Selector A.className',
  LEVEL8 = 'Combine, selectors, with... commas! A, B',
  LEVEL9 = 'You can select everything! *',
  LEVEL10 = 'Combine the Universal Selector A *',
  LEVEL11 = 'Select an element that directly follows another element A + B',
  LEVEL12 = 'Select elements that follows another element A ~ B',
  LEVEL13 = 'Select direct children of an element A > B',
  LEVEL14 = 'Select a first child element inside of another element :first-child',
  LEVEL15 = 'Select the last element inside of another element :last-child',
}
