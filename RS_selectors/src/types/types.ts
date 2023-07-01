export enum Marks {
  LA = '&lt;',
  RA = '&gt;',
}

export enum Tags {
  PLATE = 'plate',//
  COFFEE = 'coffee',//
  EGGS = 'eggs',// boiled, fired
  TOAST = 'toast',//
  COOKIE = 'cookie',//
  ORANGE = 'orange',//
  APPLE = 'apple',//
  CROISSANT = 'croissant',//
  REDHOT = 'redhot',
  TABLE = 'tablecloth',//
}

export enum Levels {
  LEVEL1 = '1',
  LEVEL2 = '2',
  LEVEL3 = '3',
  LEVEL4 = '4',
  LEVEL5 = '5',
  LEVEL6 = '6',
  LEVEL7 = '7',
  LEVEL8 = '8',
  LEVEL9 = '9',
  LEVEL10 = '10',
  LEVEL11 = '11',
  LEVEL12 = '12',
  LEVEL13 = '13',
  LEVEL14 = '14',
  LEVEL15 = '15',
}

// export enum DescriptionLevel {
//   LEVEL1 = 'Select elements by their type A',
//   LEVEL2 = LEVEL1,
//   LEVEL3 = 'Select elements with an ID #id',
//   LEVEL4 = 'Select an element inside another element A B',
//   LEVEL5 = 'Combine the Descendant & ID Selectors #id A',
//   LEVEL6 = 'Select elements by their class .classname',
//   LEVEL7 = 'Combine the Class Selector A.className',
//   LEVEL8 = 'Combine, selectors, with... commas! A, B',
//   LEVEL9 = 'You can select everything! *',
//   LEVEL10 = 'Combine the Universal Selector A *',
//   LEVEL11 = 'Select an element that directly follows another element A + B',
//   LEVEL12 = 'Select elements that follows another element A ~ B',
//   LEVEL13 = 'Select direct children of an element A > B',
//   LEVEL14 = 'Select a first child element inside of another element :first-child',
//   LEVEL15 = 'Select the last element inside of another element :last-child',
// }

export enum TitleTask {
  TITLE1 = 'Type Selector',
  TITLE2 = TITLE1,
  TITLE3 = 'ID Selector',
  TITLE4 = 'Descendant Selector',
  TITLE5 = 'Combine # and Selector',
  TITLE6 = 'Class Selector',
  TITLE7 = 'Combine Class and Selector',
  TITLE8 = 'Comma Combinator',
  TITLE9 = 'The Universal Selector',
  TITLE10 = 'Combine * and Selector',
  TITLE11 = 'Adjacent Sibling Selector',
  TITLE12 = 'General Sibling Selector',
  TITLE13 = 'Child Selector',
  TITLE14 = 'First Child Pseudo-selector',
  TITLE15 = 'Last Child Pseudo-selector',
}

export enum TaskLevel {
  TASK1 = 'Select elements by their type',
  TASK2 = TASK1,
  TASK3 = 'Select elements with an ID',
  TASK4 = 'Select an element inside another element',
  TASK5 = 'Combine the Descendant & ID Selectors',
  TASK6 = 'Select elements by their class',
  TASK7 = 'Combine the Class Selector',
  TASK8 = 'Combine, selectors, with... commas!',
  TASK9 = 'You can select everything!',
  TASK10 = 'Combine the Universal Selector',
  TASK11 = 'Select an element that directly follows another element',
  TASK12 = 'Select elements that follows another element',
  TASK13 = 'Select direct children of an element',
  TASK14 = 'Select a first child element inside of another element',
  TASK15 = 'Select the last element inside of another element',
}

export enum Selector {
  SELECTOR1 = 'A',
  SELECTOR2 = SELECTOR1,
  SELECTOR3 = '#id',
  SELECTOR4 = 'A B',
  SELECTOR5 = '#id  A',
  SELECTOR6 = '.classname',
  SELECTOR7 = 'A.className',
  SELECTOR8 = 'A, B',
  SELECTOR9 = '*',
  SELECTOR10 = 'A  *',
  SELECTOR11 = 'A + B',
  SELECTOR12 = 'A ~ B',
  SELECTOR13 = 'A > B ',
  SELECTOR14 = ':first-child',
  SELECTOR15 = ':last-child',
}

export enum DescriptionTask {
  DESCRIPTION1 = `Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so ${Marks.LA}div${Marks.RA}, ${Marks.LA}p${Marks.RA} and ${Marks.LA}ul${Marks.RA} are all different element types.`,
  DESCRIPTION2 = DESCRIPTION1,
  DESCRIPTION3 = 'Selects the element with a specific id. You can also combine the ID selector with the type selector.',
  DESCRIPTION4 = 'Selects all B inside of A. B is called a descendant because it is inside of another element.',
  DESCRIPTION5 = 'You can combine any selector with the descendent selector.',
  DESCRIPTION6 = 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
  DESCRIPTION7 = 'You can combine the class selector with other selectors, like the type selector.',
  DESCRIPTION8 = 'Thanks to Shatner technology, this selects all A and B elements. You can combine any selectors this way, and you can specify more than two.',
  DESCRIPTION9 = 'You can select all elements with the universal selector!',
  DESCRIPTION10 = 'This selects all elements inside of A.',
  DESCRIPTION11 = 'This selects all B elements that directly follow A. Elements that follow one another are called siblings. They are on the same level, or depth. In the HTML markup for this level, elements that have the same indentation are siblings.',
  DESCRIPTION12 = 'You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one.',
  DESCRIPTION13 = 'You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element. Elements that are nested deeper than that are called descendant elements.',
  DESCRIPTION14 = 'You can select the first child element. A child element is any element that is directly nested in another element. You can combine this pseudo-selector with other selectors.',
  DESCRIPTION15 = 'You can use this selector to select an element that is the last child element inside of another element. Pro Tip → In cases where there is only one element, that element counts as the first-child, only-child and last-child!',
}

export enum Examples {
  EXAMPLES1 = '<strong>div</strong> selects all &lt;div&gt; elements.',
  EXAMPLES2 = EXAMPLES1,
  EXAMPLES3 = '#cool selects any element with id="cool"',
  EXAMPLES4 = 'p  strong selects all strong elements that are inside of any p',
  EXAMPLES5 = '#cool span selects all span elements that are inside of elements with id="cool"',
  EXAMPLES6 = '.neato selects all elements with class="neato"',
  EXAMPLES7 = 'ul.important selects all ul elements that have class="important"',
  EXAMPLES8 = 'p, .fun selects all p elements as well as all elements with class="fun"',
  EXAMPLES9 = 'p * selects any element inside all p elements.',
  EXAMPLES10 = 'p * selects every element inside all p elements.',
  EXAMPLES11 = 'p + .intro selects every element with class="intro" that directly follows a p',
  EXAMPLES12 = 'A ~ B selects all B that follow a A',
  EXAMPLES13 = 'A > B selects all B that are a direct children A',
  EXAMPLES14 = ':first-child selects all first child elements.',
  EXAMPLES15 = ':last-child selects all last-child elements.',
}