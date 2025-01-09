import React from "react";
import { Sun, Moon } from "lucide-react";

//passing isdark, ontoggle as prop 
function ThemeToggler({isDark , onToggle}) {

  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:scale-105 focus:outline-none   transition-transform"
    >
      {isDark ? ( //agr dark ha toh usme icon sun hoga
        <Sun className="w-6 h-6 text-yellow-500" />
      ) : (
        <Moon className="w-6 h-6 text-gray-700" /> //agr light ha toh usme icon moon hoga 
      )}
    </button>
  );
}

export default ThemeToggler;
