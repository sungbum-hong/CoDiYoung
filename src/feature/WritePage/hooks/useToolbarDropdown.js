import { useState } from 'react';

export const useToolbarDropdown = () => {
  const [isAlignDropdownOpen, setIsAlignDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const toggleAlignDropdown = () => {
    setIsAlignDropdownOpen(!isAlignDropdownOpen);
    setIsLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
    setIsAlignDropdownOpen(false);
  };

  const closeDropdowns = () => {
    setIsAlignDropdownOpen(false);
    setIsLanguageDropdownOpen(false);
  };

  return {
    isAlignDropdownOpen,
    isLanguageDropdownOpen,
    toggleAlignDropdown,
    toggleLanguageDropdown,
    closeDropdowns,
    setIsAlignDropdownOpen,
    setIsLanguageDropdownOpen
  };
};