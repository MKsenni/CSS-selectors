import { TreeNode } from "../model/TreeNode";

export function nodeToElement(root: TreeNode, parentElement: HTMLElement): void {
  const tag = document.createElement(root.tags);
  if (root) {
    if (root.attribute?.class) {
      tag.classList.add(`${root.attribute.class}`);
    }
    if (root.attribute?.id) {
      tag.setAttribute('id', `${root.attribute.id}`);
    }
    if (root.attribute?.datatooltip) {
      tag.setAttribute('data-tooltip', `${root.attribute.datatooltip}`)
    }
    if (root.isTarget) {
      tag.classList.add('right');
    }
    parentElement.append(tag);
    if (root.childTree) {
      root.childTree.forEach((child) => nodeToElement(child, tag))
    }
  }
}

export function nodeToString(root: TreeNode, level = 0): string {
  let tempalte = '';
  const space: string = '\t'.repeat(level);
  if (root) {
    let atr = '';
    if (root.attribute?.class) {
      atr = `class="${root.attribute.class}"`;
      tempalte += `${space}<${root.tags} ${atr}>\n`;
    } else if (root.attribute?.id) {
      atr = `id="${root.attribute.id}"`
      tempalte += `${space}<${root.tags} ${atr}>\n`;
    } else {
      tempalte += `${space}<${root.tags}>\n`;
    }
    // tempalte += `${space}<${root.tags}>\n`;
    if (root.childTree) {
      level += 1;
      tempalte += root.childTree.map(child => nodeToString(child, level)).join('');
      tempalte += `${space}</${root.tags}>\n`;
    }
    if (!root.childTree) {
      // let atr = '';
      if (root.attribute?.class) {
        atr = `class="${root.attribute.class}"`;
        tempalte = `${space}<${root.tags} ${atr} />\n`;
      } else if (root.attribute?.id) {
        atr = `id="${root.attribute.id}"`
        tempalte = `${space}<${root.tags} ${atr} />\n`;
      } else {
        tempalte = `${space}<${root.tags} />\n`;
      }
      // tempalte = `${space}<${root.tags} />\n`;
    }
  }
  return tempalte;
}