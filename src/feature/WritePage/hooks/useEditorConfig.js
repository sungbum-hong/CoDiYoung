import { useRef } from 'react';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { createLowlight } from 'lowlight';

// Table 확장들
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableHeader } from '@tiptap/extension-table-header';
import { TableCell } from '@tiptap/extension-table-cell';

import YouTube from '../extensions/YouTube.js';

// 언어 imports
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import python from 'highlight.js/lib/languages/python';
import java from 'highlight.js/lib/languages/java';
import cpp from 'highlight.js/lib/languages/cpp';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';

const createLowlightInstance = () => {
  const lowlight = createLowlight();
  
  lowlight.register('javascript', javascript);
  lowlight.register('js', javascript);
  lowlight.register('typescript', typescript);
  lowlight.register('ts', typescript);
  lowlight.register('python', python);
  lowlight.register('py', python);
  lowlight.register('java', java);
  lowlight.register('cpp', cpp);
  lowlight.register('c++', cpp);
  lowlight.register('css', css);
  lowlight.register('html', xml);
  lowlight.register('xml', xml);
  lowlight.register('json', json);
  lowlight.register('bash', bash);
  lowlight.register('sh', bash);
  
  return lowlight;
};

export const useEditorConfig = (content, onChange) => {
  const isUpdatingFromProps = useRef(false);
  const lowlight = createLowlightInstance();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
        link: false,
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 underline hover:text-blue-800',
        },
      }),
      Image,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      YouTube,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: content && content.trim() !== '' ? content : '<p></p>',
    onUpdate: ({ editor }) => {
      if (isUpdatingFromProps.current) {
        return;
      }
      const html = editor.getHTML();
      onChange(html);
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[400px] p-4',
      },
    },
  });

  return {
    editor,
    isUpdatingFromProps
  };
};