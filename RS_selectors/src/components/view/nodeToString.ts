import { TreeNode } from "../model/TreeNode";

export function nodeToElement(root: TreeNode, level = 0): string {
  let tempalte = '';
  const space: string = '\t'.repeat(level);

  if (root) {
    tempalte += `${space}<${root.tags}>\n`;
    if (root.childTree) {
      level += 1;
      tempalte += root.childTree.map(child => nodeToElement(child, level)).join('');
    }
    tempalte += `${space}</${root.tags}>\n`;
    
    }
  return tempalte;
}

export function nodeToString(root: TreeNode, level = 0): string {
  let tempalte = '';
  const space: string = '\t'.repeat(level);

  if (root) {
    tempalte += `${space}<${root.tags}>\n`;
    if (root.childTree) {
      level += 1;
      tempalte += root.childTree.map(child => nodeToString(child, level)).join('');
      tempalte += `${space}</${root.tags}>\n`;
    }
    if (!root.childTree) {
      tempalte = `${space}<${root.tags} />\n`;
    }
  }
  return tempalte;
}