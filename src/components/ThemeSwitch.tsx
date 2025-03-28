// "use client";

// import { FiSun, FiMoon } from "react-icons/fi";
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
// import Image from "next/image";

// export default function ThemeSwitch() {
//   const [mounted, setMounted] = useState(false);
//   const { setTheme, resolvedTheme } = useTheme();

//   useEffect(() => setMounted(true), []);

//   if (!mounted)
//     return (
//       <Image
//         src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
//         width={36}
//         height={36}
//         sizes="36x36"
//         alt="Loading Light/Dark Toggle"
//         priority={false}
//         title="Loading Light/Dark Toggle"
//       />
//     );

//   if (resolvedTheme === "dark") {
//     return <FiSun onClick={() => setTheme("light")} />;
//   }

//   if (resolvedTheme === "light") {
//     return <FiMoon onClick={() => setTheme("dark")} />;
//   }
// }
"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Dark Mode"
      className="p-2 rounded-full border border-border hover:bg-muted transition-all"
    >
      {isDark ? (
        <FiSun className="h-5 w-5 text-yellow-500" />
      ) : (
        <FiMoon className="h-5 w-5 text-gray-800" />
      )}
    </button>
  );
}
