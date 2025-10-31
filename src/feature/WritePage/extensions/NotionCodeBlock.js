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
            'data-copy-target': 'code-content'
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

  addNodeView() {
    return ({ node, HTMLAttributes }) => {
      const language = node.attrs.language || 'javascript';
      
      const container = document.createElement('pre');
      container.setAttribute('data-type', 'notion-code-block');
      container.setAttribute('data-language', language);
      
      const header = document.createElement('div');
      header.className = 'code-block-header';
      
      const languageSpan = document.createElement('span');
      languageSpan.className = 'language-selector';
      languageSpan.setAttribute('data-language', language);
      languageSpan.textContent = language.charAt(0).toUpperCase() + language.slice(1);
      
      const copyButton = document.createElement('button');
      copyButton.className = 'copy-button';
      copyButton.type = 'button';
      copyButton.textContent = 'Copy';
      
      const contentDiv = document.createElement('div');
      contentDiv.className = 'code-block-content';
      
      const codeElement = document.createElement('code');
      contentDiv.appendChild(codeElement);
      
      header.appendChild(languageSpan);
      header.appendChild(copyButton);
      container.appendChild(header);
      container.appendChild(contentDiv);
      
      copyButton.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        try {
          const codeText = codeElement.textContent || '';
          await navigator.clipboard.writeText(codeText);
          
          const originalText = copyButton.textContent;
          copyButton.textContent = 'Copied!';
          copyButton.disabled = true;
          
          setTimeout(() => {
            copyButton.textContent = originalText;
            copyButton.disabled = false;
          }, 2000);
        } catch (error) {
          // Silent error handling
          
          const textArea = document.createElement('textarea');
          textArea.value = codeElement.textContent || '';
          document.body.appendChild(textArea);
          textArea.select();
          
          try {
            document.execCommand('copy');
            copyButton.textContent = 'Copied!';
            setTimeout(() => copyButton.textContent = 'Copy', 2000);
          } catch (fallbackError) {
            copyButton.textContent = 'Copy Failed';
            setTimeout(() => copyButton.textContent = 'Copy', 2000);
          }
          
          document.body.removeChild(textArea);
        }
      });
      
      return {
        dom: container,
        contentDOM: codeElement,
      };
    };
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