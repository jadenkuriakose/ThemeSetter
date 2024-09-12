import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

    useEffect(() => {
      document.body.className = theme;
      localStorage.setItem('theme', theme);
    }, [theme])
    
    const ToggleTheme = () => {
      setTheme(theme ==='dark' ? 'light' : 'dark');
    };

    return (
      <div class='container'>
        <input type='checkbox' id='check' onClick={ToggleTheme}></input>
          <label for =  '' class = 'button'></label>
      </div>
    )
  
    
  }

export default App;
