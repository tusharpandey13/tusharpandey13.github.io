import React from 'react';
import { Jumbotron, Button, Row, Col, Container } from 'react-bootstrap';

import pic from './../../media/1.png';
import './homejumbotron.scss';

const HomeJumbotron = props => {
  const headpic = (
    <div className='hcol'>
      <img src={pic} alt='' width='200' height='200' className={`img-thumbnail`} />
    </div>
  );
  const headtext = (
    <div className='hcol'>
      <h1>Hello, world!</h1>
      <p>
        I'm a Computer Science Undergraduate Student at BMS Institute of Technology, Bangalore. I have
        experience building many small and medium-scale applications both by myself and as a part of a
        development team. This website is a showcase of my most recent work and provides some background
        on me as-well. Enjoy!
      </p>
      <p>
        <Button variant='primary'>Learn more</Button>
      </p>
    </div>
  );
  return (
    <div className='pt-3'>
      <Jumbotron className='bg-light head-C pl-4'>
        {/* {headpic} */}
        {headtext}
      </Jumbotron>
    </div>
  );
};

export default HomeJumbotron;
