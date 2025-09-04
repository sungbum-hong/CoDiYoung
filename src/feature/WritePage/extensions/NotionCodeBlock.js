import { Node, mergeAttributes } from '@tiptap/core';

const NotionCodeBlock = Node.create({
  name: 'notionCodeBlock',

  group: 'block',

  content: 'text*',

  marks: '',

  defining: true,

  code: true,

  addAttributes() {
    return {
      language: {
        default: 'javascript',
        parseHTML: element => element.getAttribute('data-language') || 'javascript',
        renderHTML: attributes => ({
          'data-language': attributes.language,
        }),
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'pre[data-type="notion-code-block"]',
        preserveWhitespace: 'full',
      },
    ];
  },

  renderHTML({ HTMLAttributes, node }) {
    const language = node.attrs.language || 'javascript';
    return [
      'pre',
      mergeAttributes(HTMLAttributes, { 
        'data-type': 'notion-code-block',
        'data-language': language
      }),
      [
        'div',
        { class: 'code-block-header' },
        [
          'span',
          { 
            class: 'language-selector',
            'data-language': language
          },
          language.charAt(0).toUpperCase() + language.slice(1)
        ],
        [
          'button',
          {
            class: 'copy-button',
            type: 'button',
            onclick: 'navigator.clipboard.writeText(this.closest("pre").querySelector("code").textContent); this.textContent = "Copied!"; setTimeout(() => this.textContent = "Copy", 2000);',
          },
          'Copy'
        ],
      ],
      [
        'div',
        { class: 'code-block-content' },
        [
          'code',
          {},
          0
        ]
      ]
    ];
  },

  addCommands() {
    return {
      setNotionCodeBlock: (attributes) => ({ commands }) => {
        return commands.setNode(this.name, attributes);
      },
      toggleNotionCodeBlock: (attributes) => ({ commands }) => {
        return commands.toggleNode(this.name, 'paragraph', attributes);
      },
    };
  },

  addKeyboardShortcuts() {
    return {
      'Mod-Alt-c': () => this.editor.commands.toggleNotionCodeBlock(),
      'Mod-Shift-c': () => this.editor.commands.toggleNotionCodeBlock(),
    };
  },
});

export default NotionCodeBlock;