import { TreeNode } from "../model/TreeNode";

export function nodeToElement(root: TreeNode, level = 0): string {
  let tempalte = '';
  const space: string = '\t'.repeat(level);
  if (root) {
    let atr = '';
    if (root.isTarget) {
      if (root.attribute?.class) {
        atr = `class="${root.attribute.class} right"`;
        tempalte += `${space}<${root.tags} ${atr}>\n`;
      } else if (root.attribute?.id) {
        atr = `id="${root.attribute.id}" class="right"`
        tempalte += `${space}<${root.tags} ${atr}>\n`;
      } else if (root.attribute?.datatooltip) {
        atr = `data-tooltip="${root.attribute.datatooltip}" class="right"`
        tempalte += `${space}<${root.tags} ${atr}>\n`;
      } else {
        tempalte += `${space}<${root.tags} class="right">\n`;
      }
    } else if (!(root.isTarget)) {
      if (root.attribute?.class) {
        atr = `class=${root.attribute.class}`;
        tempalte += `${space}<${root.tags} ${atr}>\n`;
      } else if (root.attribute?.id) {
        atr = `id="${root.attribute.id}"`
        tempalte += `${space}<${root.tags} ${atr}>\n`;
      } else if (root.attribute?.datatooltip) {
        atr = `data-tooltip="${root.attribute.datatooltip}"`
        tempalte += `${space}<${root.tags} ${atr}>\n`;
      } else {
        tempalte += `${space}<${root.tags}>\n`;
      }
    }
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