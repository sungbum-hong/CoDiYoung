import { useState } from "react";

export function useTextareaResize() {
  const [isFocused, setIsFocused] = useState(false);

  const handleTextareaChange = (e, onChange) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    onChange(e.target.value);
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    setTimeout(() => {
      const textarea = e.target;
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }, 0);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setTimeout(() => {
      const textarea = document.querySelector('.question-textarea');
      if (textarea) {
        textarea.style.height = '44px';
      }
    }, 0);
  };

  return {
    isFocused,
    handleTextareaChange,
    handleFocus,
    handleBlur
  };
}