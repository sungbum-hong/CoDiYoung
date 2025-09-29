import { useRef, useState, useEffect } from 'react';
import { useEditor } from '@tiptap/react';
import { AllSelection, NodeSelection } from '@tiptap/pm/state';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { createLowlight } from 'lowlight';

import { sanitizeHtml } from '../utils/sanitizer.js';

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

// 언어별 동적 import (향후 성능 최적화용)
const loadLanguage = async (langName) => {
  const languageMap = {
    javascript: () => import('highlight.js/lib/languages/javascript'),
    typescript: () => import('highlight.js/lib/languages/typescript'),
    python: () => import('highlight.js/lib/languages/python'),
    java: () => import('highlight.js/lib/languages/java'),
    cpp: () => import('highlight.js/lib/languages/cpp'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml'),
    json: () => import('highlight.js/lib/languages/json'),
    bash: () => import('highlight.js/lib/languages/bash')
  };

  if (languageMap[langName]) {
    const module = await languageMap[langName]();
    return module.default;
  }
  return null;
};

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

// 언어별 지연 로딩
const registerLanguageOnDemand = async (lowlight, langName) => {
  const aliases = {
    js: 'javascript',
    ts: 'typescript',
    py: 'python',
    'c++': 'cpp',
    html: 'xml',
    sh: 'bash'
  };
  
  const actualLang = aliases[langName] || langName;
  
  if (!lowlight.registered(actualLang)) {
    const langDef = await loadLanguage(actualLang);
    if (langDef) {
      lowlight.register(actualLang, langDef);
      if (langName !== actualLang) {
        lowlight.register(langName, langDef);
      }
    }
  }
};

export const useEditorConfig = (content, onChange) => {
  const isUpdatingFromProps = useRef(false);
  const lowlightRef = useRef(null);

  // Lowlight 인스턴스 초기화
  useEffect(() => {
    if (!lowlightRef.current) {
      lowlightRef.current = createLowlightInstance();
    }
  }, []);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
        link: false,
        gapcursor: true,
        dropcursor: true,
      }),
      CodeBlockLowlight.configure({
        lowlight: lowlightRef.current || createLowlight(),
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
        HTMLAttributes: {
          class: 'editor-table',
        },
        allowTableNodeSelection: true,
      }),
      TableRow,
      TableHeader.configure({
        HTMLAttributes: {
          class: 'editor-table-header',
        },
      }),
      TableCell.configure({
        HTMLAttributes: {
          class: 'editor-table-cell',
        },
      }),
    ],
    content: content && content.trim() !== '' ? sanitizeHtml(content) : '<p></p>',
    onUpdate: ({ editor }) => {
      if (isUpdatingFromProps.current) {
        return;
      }
      const html = editor.getHTML();
      const sanitizedHtml = sanitizeHtml(html);
      onChange(sanitizedHtml);
    },
    onSelectionUpdate: ({ editor }) => {
      // 언어별 지연 로딩
      const { from } = editor.state.selection;
      const selectedNode = editor.state.doc.nodeAt(from);
      
      if (selectedNode && selectedNode.type.name === 'codeBlock') {
        const language = selectedNode.attrs.language;
        if (language && lowlightRef.current) {
          registerLanguageOnDemand(lowlightRef.current, language);
        }
      }
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[400px] p-4',
        role: 'textbox',
        'aria-multiline': 'true',
        'aria-label': '텍스트 에디터',
        'data-testid': 'editor-content'
      },
      handleKeyDown: (view, event) => {
        // Cmd+A (Mac) 또는 Ctrl+A (Windows/Linux) 전체 선택
        if ((event.metaKey || event.ctrlKey) && event.key === 'a') {
          // 전체 문서 선택 (표 포함)
          const allSelection = new AllSelection(view.state.doc);
          view.dispatch(view.state.tr.setSelection(allSelection));
          return true; // 기본 동작 방지
        }
        return false; // 다른 키는 기본 동작 허용
      },
      transformPastedHTML: (html) => {
        return sanitizeHtml(html);
      },
      transformPastedText: (text) => {
        return text;
      },
    },
  });

  return {
    editor,
    isUpdatingFromProps
  };
};