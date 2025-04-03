import { useEffect, useRef } from 'react';
import {
  $getSelection,
  $isRangeSelection,
  $createParagraphNode,
  type LexicalEditor,
} from 'lexical';
import { $wrapNodes } from '@lexical/selection';
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
} from '@lexical/list';
import { $createHeadingNode, $createQuoteNode } from '@lexical/rich-text';
import { $createCodeNode } from '@lexical/code';

import {
  Code,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Pilcrow,
  Quote,
} from 'lucide-react';
import { blockTypeToBlockName } from '@/utils/editor/utils';

import './styles/index.css';

interface BlockOptionsDropdownListProps {
  editor: LexicalEditor;
  blockType: keyof typeof blockTypeToBlockName;
  toolbarRef: React.RefObject<HTMLDivElement | null>;
  setShowBlockOptionsDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BlockOptionsDropdownList = ({
  editor,
  blockType,
  toolbarRef,
  setShowBlockOptionsDropDown,
}: BlockOptionsDropdownListProps) => {
  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const toolbar = toolbarRef.current;
    const dropDown = dropDownRef.current;

    if (toolbar !== null && dropDown !== null) {
      const { top, left } = toolbar.getBoundingClientRect();
      dropDown.style.top = `${top + 40}px`;
      dropDown.style.left = `${left}px`;
    }
  }, [dropDownRef, toolbarRef]);

  useEffect(() => {
    const dropDown = dropDownRef.current;
    const toolbar = toolbarRef.current;

    if (dropDown !== null && toolbar !== null) {
      const handle = (event: MouseEvent) => {
        const target = event.target;

        if (target instanceof Node && !dropDown.contains(target) && !toolbar.contains(target)) {
          setShowBlockOptionsDropDown(false);
        }
      };
      document.addEventListener('click', handle);

      return () => {
        document.removeEventListener('click', handle);
      };
    }
  }, [dropDownRef, setShowBlockOptionsDropDown, toolbarRef]);

  const formatParagraph = () => {
    if (blockType !== 'paragraph') {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createParagraphNode());
        }
      });
    }
    setShowBlockOptionsDropDown(false);
  };

  const formatLargeHeading = () => {
    if (blockType !== 'h1') {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createHeadingNode('h1'));
        }
      });
    }
    setShowBlockOptionsDropDown(false);
  };

  const formatHeading2 = () => {
    if (blockType !== 'h2') {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createHeadingNode('h2'));
        }
      });
    }
    setShowBlockOptionsDropDown(false);
  };

  const formatHeading3 = () => {
    if (blockType !== 'h3') {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createHeadingNode('h2'));
        }
      });
    }
    setShowBlockOptionsDropDown(false);
  };

  const formatBulletList = () => {
    if (blockType !== 'ul') {
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
    }
    setShowBlockOptionsDropDown(false);
  };

  const formatNumberedList = () => {
    if (blockType !== 'ol') {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
    }
    setShowBlockOptionsDropDown(false);
  };

  const formatQuote = () => {
    if (blockType !== 'quote') {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createQuoteNode());
        }
      });
    }
    setShowBlockOptionsDropDown(false);
  };

  const formatCode = () => {
    if (blockType !== 'code') {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createCodeNode());
        }
      });
    }
    setShowBlockOptionsDropDown(false);
  };

  return (
    <div className="dropdown" ref={dropDownRef}>
      <button className="item justify-center items-center gap-2" onClick={formatParagraph}>
        <Pilcrow className="w-4 h-4" />
        <span className="text">{blockTypeToBlockName.paragraph}</span>
        {blockType === 'paragraph' && <span className="active" />}
      </button>
      <button className="item justify-center items-center gap-2" onClick={formatLargeHeading}>
        <Heading1 className="w-4 h-4" />
        <span className="text">{blockTypeToBlockName.h1}</span>
        {blockType === 'h1' && <span className="active" />}
      </button>
      <button className="item justify-center items-center gap-2" onClick={formatHeading2}>
        <Heading2 className="w-4 h-4" />
        <span className="text">{blockTypeToBlockName.h2}</span>
        {blockType === 'h2' && <span className="active" />}
      </button>

      <button className="item justify-center items-center gap-2" onClick={formatHeading3}>
        <Heading3 className="w-4 h-4" />
        <span className="text">{blockTypeToBlockName.h3}</span>
        {blockType === 'h3' && <span className="active" />}
      </button>

      <button className="item justify-center items-center gap-2" onClick={formatBulletList}>
        <List className="w-4 h-4" />
        <span className="text">{blockTypeToBlockName.ul}</span>
        {blockType === 'ul' && <span className="active" />}
      </button>
      <button className="item justify-center items-center gap-2" onClick={formatNumberedList}>
        <ListOrdered className="w-4 h-4" />
        <span className="text">{blockTypeToBlockName.ol}</span>
        {blockType === 'ol' && <span className="active" />}
      </button>
      <button className="item justify-center items-center gap-2" onClick={formatQuote}>
        <Quote className="w-4 h-4" />
        <span className="text">{blockTypeToBlockName.quote}</span>
        {blockType === 'quote' && <span className="active" />}
      </button>
      <button className="item justify-center items-center gap-2" onClick={formatCode}>
        <Code className="w-4 h-4" />
        <span className="text">{blockTypeToBlockName.code}</span>
        {blockType === 'code' && <span className="active" />}
      </button>
    </div>
  );
};
