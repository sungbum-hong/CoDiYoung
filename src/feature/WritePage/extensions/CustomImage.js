import { Node, mergeAttributes } from '@tiptap/core';

export default Node.create({
  name: 'image',

  addOptions() {
    return {
      inline: false,
      allowBase64: false,
      HTMLAttributes: {},
    };
  },

  inline() {
    return this.options.inline;
  },

  group() {
    return this.options.inline ? 'inline' : 'block';
  },

  draggable: true,

  addAttributes() {
    return {
      src: {
        default: null,
        parseHTML: element => element.getAttribute('src'),
        renderHTML: attributes => {
          if (!attributes.src) {
            return {};
          }

          return {
            src: attributes.src,
          };
        },
      },

      alt: {
        default: null,
        parseHTML: element => element.getAttribute('alt'),
        renderHTML: attributes => {
          if (!attributes.alt) {
            return {};
          }

          return {
            alt: attributes.alt,
          };
        },
      },

      title: {
        default: null,
        parseHTML: element => element.getAttribute('title'),
        renderHTML: attributes => {
          if (!attributes.title) {
            return {};
          }

          return {
            title: attributes.title,
          };
        },
      },

      width: {
        default: null,
        parseHTML: element => element.getAttribute('width'),
        renderHTML: attributes => {
          if (!attributes.width) {
            return {};
          }

          return {
            width: attributes.width,
          };
        },
      },

      height: {
        default: null,
        parseHTML: element => element.getAttribute('height'),
        renderHTML: attributes => {
          if (!attributes.height) {
            return {};
          }

          return {
            height: attributes.height,
          };
        },
      },

      'data-key': {
        default: null,
        parseHTML: element => element.getAttribute('data-key'),
        renderHTML: attributes => {
          if (!attributes['data-key']) {
            return {};
          }

          return {
            'data-key': attributes['data-key'],
          };
        },
      },

      'data-id': {
        default: null,
        parseHTML: element => element.getAttribute('data-id'),
        renderHTML: attributes => {
          if (!attributes['data-id']) {
            return {};
          }

          return {
            'data-id': attributes['data-id'],
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'img[src]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['img', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)];
  },

  addCommands() {
    return {
      setImage: options => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options,
        });
      },
    };
  },
});