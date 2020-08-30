import React from 'react';

import HomeHeader from './components/homeheader';
import Content from './components/content';
import Footer from './components/footer';

import './custom.scss';

function App() {
  return (
    <div className='App'>
      <HomeHeader />
      <Content />
      <Footer />

      <div className={`S-border`}></div>
    </div>
  );
}

export default App;
