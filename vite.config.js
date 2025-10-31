import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
    tailwindcss(),
  ],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 벤더 라이브러리들을 별도 청크로 분리
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          query: ['@tanstack/react-query'],
          ui: ['@heroicons/react', 'lucide-react', 'react-icons'],
          editor: ['@tiptap/react', '@tiptap/starter-kit', '@tiptap/extension-link', '@tiptap/extension-text-align'],
          highlighting: ['highlight.js', 'lowlight'],
          utils: ['date-fns', 'dompurify', 'zustand'],
          charts: ['recharts'],
        },
      },
    },
    chunkSizeWarningLimit: 600, // 600KB로 경고 임계값 증가
  },

  server: {
    port: 3000,
    historyApiFallback: true, // SPA 라우팅을 위한 설정
    proxy: {
      '/api': {
        target: 'https://52.78.192.195:8080',
        changeOrigin: true,
        secure: false,
      },
    },
  },

  preview: {
    port: 3000,
    historyApiFallback: true, // 프로덕션 미리보기에서도 SPA 라우팅 지원
  },
});
