import { HeadingNode } from "@lexical/rich-text";
import type { ElementTransformer, Transformer } from "@lexical/markdown";
import type { LexicalNode } from "lexical";

import {
  ELEMENT_TRANSFORMERS,
  TEXT_FORMAT_TRANSFORMERS,
  TEXT_MATCH_TRANSFORMERS,
} from "@lexical/markdown";
import {
  $createHorizontalRuleNode,
  $isHorizontalRuleNode,
  HorizontalRuleNode,
} from "@lexical/react/LexicalHorizontalRuleNode";

export const HR: ElementTransformer = {
  dependencies: [HorizontalRuleNode],
  export: (node: LexicalNode) => {
    return $isHorizontalRuleNode(node) ? "***" : null;
  },
  regExp: /^(---|\*\*\*|___)\s?$/,
  replace: (parentNode, _1, _2, isImport) => {
    const line = $createHorizontalRuleNode();

    // TODO: Get rid of isImport flag
    if (isImport || parentNode.getNextSibling() != null) {
      parentNode.replace(line);
    } else {
      parentNode.insertBefore(line);
    }

    line.selectNext();
  },
  type: "element",
};

const HEADING_TRANSFORMER = { ...ELEMENT_TRANSFORMERS[0], regExp: /^(#{1,3})\s/ };

const FILTERED_ELEMENT_TRANSFORMERS = ELEMENT_TRANSFORMERS.filter((transformer) => {
  return !transformer.dependencies.some((dependency) => {
    return dependency === HeadingNode;
  });
});

export const EDITOR_TRANSFORMERS: Array<Transformer> = [
  HR,
  HEADING_TRANSFORMER,
  ...FILTERED_ELEMENT_TRANSFORMERS,
  ...TEXT_FORMAT_TRANSFORMERS,
  ...TEXT_MATCH_TRANSFORMERS,
];
