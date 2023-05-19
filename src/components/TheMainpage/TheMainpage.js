import React from 'react';
import Sidebar from '../TheSidebar/TheSidebar';
import TheContent from '../TheContent/TheContent';
import './styles.css';

const MainPage = () => {
  return (
    <div className="containerMainPage">
      <Sidebar className="containerSidebar" />
      <TheContent className="containerTheContent" />
    </div>
  );
};

export default MainPage;