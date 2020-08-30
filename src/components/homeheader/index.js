import React, { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import './homeheader.scss';

const HomeHeader = props => {
  const [headerStyle, setHeaderStyle] = useState({
    transition: 'all 500ms cubic-bezier(0.44, 0.85, 0.42, 1)',
  });

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y > prevPos.y;
      const shouldBeStyle = {
        visibility: isVisible ? 'visible' : 'hidden',
        transition: `all 500ms ${
          isVisible ? 'cubic-bezier(0.44, 0.85, 0.42, 1)' : 'cubic-bezier(0.44, 0.85, 0.42, 1)'
        }`,
        transform: isVisible ? 'none' : 'translate(0, -100%)',
      };
      if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return;
      setHeaderStyle(shouldBeStyle);
    },
    [headerStyle]
  );

  const navlink = (src, label) => (
    <a className={`h-b`} href={`${src}`} target={'_blank'} rel={'noopener noreferrer'}>
      <span>{`${label}`}</span>
    </a>
  );

  return (
    <div className={`hh-C`} style={{ ...headerStyle }}>
      <div className={`h-C`}>
        <div className={`h-b hometext`}>
          <i>Tushar Pandey</i>
        </div>
      </div>
      <div className={`h-C`}>
        {navlink(`https://twitter.com/_tusharpandey13/`, `TW`)}
        {navlink(`https://www.instagram.com/tusharpandey13/`, `IG`)}
        {navlink(`https://www.linkedin.com/in/tushar-pandey-376a51134/`, `IN`)}
        {navlink(`https://github.com/tusharpandey13/`, `GH`)}
      </div>
    </div>
  );
};

export default HomeHeader;
