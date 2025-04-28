import {
  Code,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Pilcrow,
  Quote,
} from "lucide-react";

export const LOW_PRIORITY = 1;

export const supportedBlockTypes = new Set([
  "paragraph",
  "quote",
  "code",
  "h1",
  "h2",
  "h3",
  "ul",
  "ol",
]);

export const blockTypeToBlockName = {
  code: "코드",
  h1: "제목 1",
  h2: "제목 2",
  h3: "제목 3",
  ol: "번호 목록",
  paragraph: "텍스트",
  quote: "인용",
  ul: "불릿 목록",
};

export const blockTypeToBlockIcon = {
  code: Code,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  ol: ListOrdered,
  paragraph: Pilcrow,
  quote: Quote,
  ul: List,
};
