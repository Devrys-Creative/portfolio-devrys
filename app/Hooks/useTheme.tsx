'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

// Création du contexte
const ThemeContext = createContext({theme:'dark',toggleTheme:()=>{}});

// Hook personnalisé pour utiliser facilement le contexte
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider
interface themeProviderProps {
    children:ReactNode,
};
export const ThemeProvider:React.FC<themeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Le thème par défaut est "light"

  // Fonction pour basculer entre les thèmes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log("new theme : ",theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};