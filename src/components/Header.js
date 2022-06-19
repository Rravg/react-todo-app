import { useState } from 'react';
import iconSun from '../icons/icon-sun.svg';
import iconMoon from '../icons/icon-moon.svg';

export function Header() {
  const [icon, setIcon] = useState(iconMoon);

  function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }

  const handleClick = () => {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
      setIcon(iconMoon);
    } else {
      setTheme('theme-dark');
      setIcon(iconSun);
    }
  }

  return (
    <div className="header">
      <h1>TODO</h1>
      <input type="image" src={icon} alt="Change Theme" onClick={handleClick} />
    </div>
  );
}
