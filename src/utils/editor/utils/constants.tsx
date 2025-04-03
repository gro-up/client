import {
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  List,
  ListOrdered,
  Pilcrow,
  Quote,
} from 'lucide-react';

export const LOW_PRIORITY = 1;

export const supportedBlockTypes = new Set([
  'paragraph',
  'quote',
  'code',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'ul',
  'ol',
]);

export const blockTypeToBlockName = {
  code: '코드',
  h1: '제목 1',
  h2: '제목 2',
  h3: '제목 3',
  h4: '제목 4',
  h5: '제목 5',
  h6: '제목 6',
  ol: '번호 목록',
  paragraph: '텍스트',
  quote: '인용',
  ul: '불릿 목록',
};

export const blockTypeToBlockIcon = {
  code: Code,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  ol: ListOrdered,
  paragraph: Pilcrow,
  quote: Quote,
  ul: List,
};
