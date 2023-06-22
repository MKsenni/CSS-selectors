import { Tags } from "../../types/types";

export class TreeNode {
  constructor(
    public readonly tags: Tags,
    public readonly isTarget: boolean = false,
    public readonly childTree?: TreeNode[],
  ) {
    this.tags = tags;
    this.isTarget = isTarget;
    this.childTree = childTree;
  }
}