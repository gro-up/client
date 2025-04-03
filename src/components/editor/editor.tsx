import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';

import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';

import { CodeHighlightPlugin, EDITOR_TRANSFORMERS } from '@/utils/editor/plugins';
import { editorConfig } from '@/utils/editor/utils';

import ToolbarPlugin from './toolbar';
import ActionsPlugin from './actions';

import './styles/index.css';

function Placeholder() {
  return <div className="editor-placeholder">Play around with the Markdown plugin...</div>;
}

export default function Editor() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin />
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <AutoFocusPlugin />
          <ListPlugin />
          <LinkPlugin />
          <MarkdownShortcutPlugin transformers={EDITOR_TRANSFORMERS} />
          <CodeHighlightPlugin />
        </div>
        <ActionsPlugin />
      </div>
    </LexicalComposer>
  );
}
