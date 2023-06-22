import { TreeNode } from "../model/TreeNode";

export function nodeToText(root: TreeNode, level = 0): string {
  let tempalte = '';
  const space: string = '\t'.repeat(level);

  if (root) {
    tempalte += `${space}<${root.tags}>\n`

    if (root.childTree) {
      level += 1;
      tempalte += root.childTree.map(child => nodeToText(child, level)).join('');
    } else if (typeof root.childTree === 'undefined') {
      level += 1;
      return tempalte = `${space}<${root.tags} />\n`;
    }
    tempalte += `${space}</${root.tags}>\n`;
  }

  return tempalte;

  // const str = `<${root.tags}>\n`;
  // const space2 = ' ';
  // let childTemplate = '';

  // if (root.childTree) {
  //   level += 1;
  //   childTemplate += root.childTree.map(child => nodeToText(child, level)).join('');
  // }
  // return `${template}${childTemplate}</${root.tags}>`

}