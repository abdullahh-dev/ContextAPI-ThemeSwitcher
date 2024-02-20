import './App.css';
import ToggleBtn from './Components/ToggleBtn';
import Card from './Components/Card';
import { ThemeProvider } from './Contexts/ThemeContext';
import { useEffect, useState } from 'react';
function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightMode = () => {
    setThemeMode('light');
  };
  const darkMode = () => {
    setThemeMode('dark');
  };

  useEffect(() => {
    if (document) {
      document.querySelector('html').classList.remove('dark', 'light');
      document.querySelector('html').classList.add(themeMode);
    }
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
        <div className="flex dark:bg-[#212121] flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-center mb-4">
              <ToggleBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
