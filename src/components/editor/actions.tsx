import { $createCodeNode, $isCodeNode } from '@lexical/code';
import { $convertFromMarkdownString, $convertToMarkdownString } from '@lexical/markdown';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $createTextNode, $getRoot } from 'lexical';
import { useCallback } from 'react';
import { Pencil } from 'lucide-react';

import { EDITOR_TRANSFORMERS } from '@/utils/editor/plugins';
import './styles/index.css';

export default function ActionsPlugin(): React.ReactElement {
  const [editor] = useLexicalComposerContext();

  const handleMarkdownToggle = useCallback(() => {
    editor.update(() => {
      const root = $getRoot();
      const firstChild = root.getFirstChild();
      if ($isCodeNode(firstChild) && firstChild.getLanguage() === 'markdown') {
        $convertFromMarkdownString(firstChild.getTextContent(), EDITOR_TRANSFORMERS);
      } else {
        const markdown = $convertToMarkdownString(EDITOR_TRANSFORMERS);
        root.clear().append($createCodeNode('markdown').append($createTextNode(markdown)));
      }
      root.selectEnd();
    });
  }, [editor]);

  return (
    <div className="actions">
      <button
        className="action-button"
        onClick={handleMarkdownToggle}
        title="Convert From Markdown"
        aria-label="Convert from markdown"
      >
        <Pencil className="w-4 h-4" />
      </button>
    </div>
  );
}
