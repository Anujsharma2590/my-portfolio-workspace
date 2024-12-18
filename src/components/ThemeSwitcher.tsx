"use client";

import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { setTheme } = useTheme();
  return (
    <button
      type="button"
      className="hs-dark-mode-active:hidden hs-dark-mode group mr-[1em] flex items-center font-medium text-gray-600 hover:text-gray-500 dark:text-white dark:hover:text-neutral-500"
      data-hs-theme-click-value="dark"
      onClick={() => setTheme("light")}
    >
      theme
    </button>
  );
};
export default ThemeSwitcher;
