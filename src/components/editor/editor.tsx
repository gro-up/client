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
import { cn } from '@/utils/shadcn';

import ToolbarPlugin from './toolbar';

import './styles/index.css';

function Placeholder() {
  return <div className="editor-placeholder">Play around with the Markdown plugin...</div>;
}

interface EditorProps {
  containerClassName?: string;
  innerClassName?: string;
  inputClassName?: string;
}

export default function Editor({
  containerClassName,
  innerClassName,
  inputClassName,
}: EditorProps) {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className={cn('editor-container', containerClassName)}>
        <ToolbarPlugin />
        <div className={cn('editor-inner', innerClassName)}>
          <RichTextPlugin
            contentEditable={<ContentEditable className={cn('editor-input', inputClassName)} />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <AutoFocusPlugin />
          <ListPlugin />
          <LinkPlugin />
          <MarkdownShortcutPlugin transformers={EDITOR_TRANSFORMERS} />
          <CodeHighlightPlugin />
        </div>
      </div>
    </LexicalComposer>
  );
}
