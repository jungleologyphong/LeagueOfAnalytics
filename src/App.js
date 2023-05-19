import React from 'react';
import Header from './components/TheHeader/TheHeader';
import MainPage from './components/TheMainpage/TheMainpage';
import './stylesApp.css'
const App = () => {
  return (
    <div className="container">
      <Header/>
      
      <MainPage className="mainpage"/>
    </div>
  );
};

export default App;