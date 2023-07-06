import { Tags } from "../../types/types";

type Attribute = {
  class?: string;
  id?: string,
  datatooltip?: string,
  dataid?: string,
}

export class TreeNode {
  constructor(
    public readonly tags: Tags,
    public readonly attribute?: Attribute,
    public readonly isTarget: boolean = false,
    public readonly childTree?: TreeNode[],
  ) {
    this.tags = tags;
    this.attribute = attribute;
    this.isTarget = isTarget;
    this.childTree = childTree;
  }
}