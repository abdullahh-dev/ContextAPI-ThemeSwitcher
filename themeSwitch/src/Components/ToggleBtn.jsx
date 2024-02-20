import React from 'react';
import useTheme from '../Contexts/ThemeContext';
import { MdOutlineDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';
function ToggleBtn() {
  const { themeMode, darkMode, lightMode } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    darkModeStatus ? darkMode() : lightMode();
  };
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={themeMode === 'dark'}
        onChange={onChangeBtn}
      />
      <div className="w-11 h-6 bg-gray-200 shadow-sm shadow-[#2d2d2d43] rounded-full peer peer-checked:after:translate-x-full  after:absolute dark:border dark:border-[hsla(0,0%,100%,.15)] after:top-[2px] after:left-[2px] after:bg-[white]  after:border after:rounded-full after:h-5 after:w-5 after:transition-all duration-500  peer-checked:bg-[#212121] "></div>
      <span className="ml-3 text-sm font-medium text-[#212121] dark:text-[white]/70">
        {themeMode === 'dark' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </span>
    </label>
  );
}

export default ToggleBtn;
