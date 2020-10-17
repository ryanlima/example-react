import React from 'react';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './routes'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
