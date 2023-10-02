import React, {createContext, useContext,useState, useEffect} from 'react';
import {useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type themeType = 'dark' | 'light'
type contextType = {
    theme:string,
    toggleTheme:()=>void,
    useSystemTheme:()=>void
}
const ThemeContext = createContext<contextType>({theme:'light',toggleTheme:()=>{},useSystemTheme:()=>{}});

interface Props {
    children: React.ReactNode;
  }
export const ThemeProvider = ({children}:Props) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<string>(colorScheme || 'light');

  useEffect(() => {
    // Load saved theme from storage
    const getTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        if(!savedTheme) return
        setTheme(savedTheme);
        console.log(savedTheme,"get");
        
      } catch (error) {
        console.log('Error loading theme:', error);
      }
    };
    getTheme();
  }, []);

  useEffect(() => {
    // set theme to system selected theme
    if (colorScheme) {
      setTheme(colorScheme);
    }
  }, [colorScheme]);

  const toggleTheme = () => {
    const newTheme = theme == "dark"?"light":"dark"
    setTheme(newTheme);
    console.log(newTheme);
    
    // Save selected theme to storage
    AsyncStorage.setItem('theme', newTheme);
  };
  const useSystemTheme = () => {
    if(!colorScheme)return
    setTheme(colorScheme);
    AsyncStorage.setItem('theme', colorScheme);
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme,useSystemTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = ()=>useContext(ThemeContext)