import React from 'react';

import Lists from './list';

import pic from './../../media/1.jpeg';
import './content.scss';

import data from '../../data/data.json';

const Content = props => {
  return (
    <div className='C'>
      {card}
      <Lists data={data.proj} />
      <Lists data={data.exp} />
      <Lists data={data.talks} />
    </div>
  );
};

const card = (
  <div className='Card'>
    <div className='cimg'>
      <img src={pic} alt='' width='200' height='200' className={`img`} />
    </div>
    <div className='c-sep'></div>
    <div className='ct'>
      <div className='ctheader'>
        <span className='h2'>Tushar Pandey</span>
        <code>Software Developer</code>
      </div>
      <p>
        I am a CSE undergrad at BMSIT&M, Bangalore, batch of 2022. <br />I live in Bangalore, India.{' '}
        <br />
        {/* <br /> */}I like to work with <code>TS</code>, <code>JS</code> and it's various frameworks.{' '}
        <code>Python</code> is my 2nd language of choice. <br />
        {/* <br /> */}
        This website shows my contact details, past experience and education along with some of the
        projects that I have worked on.
      </p>
    </div>
  </div>
);

export default Content;
