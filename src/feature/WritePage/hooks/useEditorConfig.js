import { useRef, useState, useEffect } from 'react';
import { useEditor } from '@tiptap/react';
import { AllSelection, NodeSelection } from '@tiptap/pm/state';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
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
import CustomImage from '../extensions/CustomImage.js';

// 언어별 동적 import로 통일
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

const createLowlightInstance = async () => {
  const lowlight = createLowlight();

  // 기본 언어들을 동적으로 로드
  const languages = ['javascript', 'typescript', 'python', 'java', 'cpp', 'css', 'xml', 'json', 'bash'];

  await Promise.all(languages.map(async (lang) => {
    const langDef = await loadLanguage(lang);
    if (langDef) {
      lowlight.register(lang, langDef);

      // 별칭 등록
      if (lang === 'javascript') lowlight.register('js', langDef);
      if (lang === 'typescript') lowlight.register('ts', langDef);
      if (lang === 'python') lowlight.register('py', langDef);
      if (lang === 'cpp') {
        lowlight.register('c++', langDef);
      }
      if (lang === 'xml') lowlight.register('html', langDef);
      if (lang === 'bash') lowlight.register('sh', langDef);
    }
  }));

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
  const [isLowlightReady, setIsLowlightReady] = useState(false);

  // Lowlight 인스턴스 비동기 초기화
  useEffect(() => {
    const initializeLowlight = async () => {
      if (!lowlightRef.current) {
        lowlightRef.current = await createLowlightInstance();
        setIsLowlightReady(true);
      }
    };
    initializeLowlight();
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
      CustomImage.configure({
        HTMLAttributes: {
          class: 'editor-image',
        },
        allowBase64: false,
        inline: false,
      }),
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
    isUpdatingFromProps,
    isLowlightReady
  };
};