import React, { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import './homeheader.scss';

import { ReactComponent as Tw } from './../../media/twitter.svg';
import { ReactComponent as Ig } from './../../media/instagram.svg';
import { ReactComponent as Lin } from './../../media/linkedin.svg';
import { ReactComponent as Gh } from './../../media/github.svg';
import { ReactComponent as Resume } from './../../media/resume.svg';

const HomeHeader = props => {
  const [headerStyle, setHeaderStyle] = useState({
    transition: 'all 500ms cubic-bezier(0.44, 0.85, 0.42, 1)',
  });
  const [currentIsVisible, setCurrentIsVisible] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      console.log(currPos);
      const isVisible = currPos.y > prevPos.y;
      // const shouldBeStyle = ;
      // if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return;

      if (currentIsVisible === isVisible) return;

      setHeaderStyle({
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'all 500ms cubic-bezier(0.44, 0.85, 0.42, 1)',
        transform: isVisible ? 'none' : 'translate(0, -100%)',
      });
      setCurrentIsVisible(isVisible);
    },
    [currentIsVisible]
  );

  const navlink = (src, pic, label, disableOnMobile) => (
    <a
      className={`h-b ${disableOnMobile && 'notOnMobile'}`}
      href={`${src}`}
      target={'_blank'}
      rel={'noopener noreferrer'}
    >
      {pic}
      {label && <span>{`${label}`}</span>}
      {/* <svg src={pic} alt='' width='24' height='24' className={`header-img`} /> */}
    </a>
  );

  return (
    <div className={`hh-C`} style={{ ...headerStyle }}>
      <div className={`rowC notOnMobile`}>
        <div className={`h-C`}>
          <div className={`h-b hometext`}>
            <i>Tushar Pandey</i>
          </div>
        </div>
      </div>
      <div className='rowC'>
        <div className={`h-C`}>
          {navlink(
            `https://drive.google.com/file/d/1jcnvArDj_HvUY6hJtH6Zq7AeicBQIRJ8/view?usp=sharing`,
            <Resume title='Resume' />,
            'Resume'
          )}
        </div>
        <div className={`h-C`}>
          {navlink(`https://twitter.com/_tusharpandey13/`, <Tw title='Twitter' />)}
          {navlink(
            `https://www.instagram.com/tusharpandey13/`,
            <Ig title='Instagram' />,
            undefined,
            true
          )}
          {navlink(`https://www.linkedin.com/in/tushar-pandey-376a51134/`, <Lin title='LinkedIn' />)}
          {navlink(`https://github.com/tusharpandey13/`, <Gh title='Github' />)}
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
