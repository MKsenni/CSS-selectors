import { TreeNode } from "../model/TreeNode";
import { createElement } from "../utills/createElement";

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

export function nodeToString(root: TreeNode, level = 0, parentElement: HTMLElement): void {
  const pre = createElement('pre', 'layout-code');
  const code = createElement('code', 'layout-code');
  if (root) {
    const space: string = ' '.repeat(level);
    let atr = '';
    if (root.attribute?.class) {
      atr += `class="${root.attribute.class}"`;
    }
    if (root.attribute?.id) {
      atr += `id="${root.attribute.id}"`
    }
    if (!root.childTree) {
      level += 1;
      code.textContent = `${space}<${root.tags} ${atr} />\n`;
      level -= 1;
    } else {
      level += 1;
      code.textContent += `${space}<${root.tags} ${atr}>\n`;
    }
    parentElement.append(code);
    if (root.childTree) {
      const code = createElement('code', 'layout-code');
      
      root.childTree.forEach(child => nodeToString(child, level, pre));
      code.textContent = `${space}</${root.tags}>\n`;
      parentElement.append(pre, code);
    }
  }
}