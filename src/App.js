import React from 'react';

import HomeHeader from './components/homeheader';
import Content from './components/content';

import './custom.scss';

function App() {
  return (
    <div className='App'>
      <HomeHeader />
      <Content />
      <div className={`S-border`}></div>
    </div>
  );
}

export default App;
