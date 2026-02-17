'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { 
  Bold, 
  Italic, 
  Strikethrough, 
  Code, 
  List, 
  ListOrdered, 
  Quote, 
  Undo, 
  Redo 
} from 'lucide-react';

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 p-2 border-b border-gray-200 bg-gray-50">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`p-1.5 rounded hover:bg-gray-200 ${editor.isActive('bold') ? 'bg-gray-200 text-purple-600' : 'text-gray-600'}`}
        type="button"
      >
        <Bold size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`p-1.5 rounded hover:bg-gray-200 ${editor.isActive('italic') ? 'bg-gray-200 text-purple-600' : 'text-gray-600'}`}
        type="button"
      >
        <Italic size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`p-1.5 rounded hover:bg-gray-200 ${editor.isActive('strike') ? 'bg-gray-200 text-purple-600' : 'text-gray-600'}`}
        type="button"
      >
        <Strikethrough size={18} />
      </button>
      <div className="w-px h-6 bg-gray-300 mx-1 self-center"></div>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`p-1.5 rounded hover:bg-gray-200 ${editor.isActive('code') ? 'bg-gray-200 text-purple-600' : 'text-gray-600'}`}
        type="button"
      >
        <Code size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-1.5 rounded hover:bg-gray-200 ${editor.isActive('bulletList') ? 'bg-gray-200 text-purple-600' : 'text-gray-600'}`}
        type="button"
      >
        <List size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-1.5 rounded hover:bg-gray-200 ${editor.isActive('orderedList') ? 'bg-gray-200 text-purple-600' : 'text-gray-600'}`}
        type="button"
      >
        <ListOrdered size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`p-1.5 rounded hover:bg-gray-200 ${editor.isActive('blockquote') ? 'bg-gray-200 text-purple-600' : 'text-gray-600'}`}
        type="button"
      >
        <Quote size={18} />
      </button>
      <div className="w-px h-6 bg-gray-300 mx-1 self-center"></div>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="p-1.5 rounded hover:bg-gray-200 text-gray-600 disabled:opacity-50"
        type="button"
      >
        <Undo size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className="p-1.5 rounded hover:bg-gray-200 text-gray-600 disabled:opacity-50"
        type="button"
      >
        <Redo size={18} />
      </button>
    </div>
  );
};

const TiptapEditor = ({ content, onChange, placeholder = '내용을 입력하세요...', readOnly = false, showToolbar = true }: { content: string; onChange: (value: string) => void; placeholder?: string; readOnly?: boolean; showToolbar?: boolean }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder,
      }),
    ],
    content,
    editable: !readOnly,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none min-h-[150px]',
      },
    },
    immediatelyRender: false // Fix hydration mismatch
  });

  return (
    <div className="w-full h-full flex flex-col">
      {showToolbar && !readOnly && <MenuBar editor={editor} />}
      <div className="flex-1 overflow-y-auto cursor-text">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TiptapEditor;
