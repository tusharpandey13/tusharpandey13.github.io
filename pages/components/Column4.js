import Icon from '@mdi/react';
import { mdiEmail, mdiLinkedin } from '@mdi/js';
import Column from './Column';
import { links } from './../../utils/getdata';

const Column4 = props => {
  return (
    <Column
      colId={'animate-fadeInLeft4'}
      imgId={'6'}
      title='contact'
      elements={[
        <div
          className={`flex flex-col p-contentgap min-h-[200px] tracking-[1px]
                      text-[14px] bg-[#533573] border-[rgba(255,255,255,0.5)] border-2
                      text-fff justify-evenly`}
        >
          <span>These are the places which I regularly check for messages:</span>
          <div className='flex flex-col font-medium'>
            <a href={links.email}>
              <span className='flex hover:text-yellow-400 items-center mb-contentgapby2'>
                <Icon path={mdiEmail} title='Mail' size={1} />
                <span className='pl-contentgap'>Write to me at tusharpandey13@gmail.com</span>
              </span>
            </a>
            <a href={links.linkedin}>
              <span className='flex hover:text-yellow-400 items-center mt-contentgapby2'>
                <Icon path={mdiLinkedin} title='Linkedin' size={1} />
                <span className='pl-contentgap'>Send me a message on LinkedIn</span>
              </span>
            </a>
          </div>
        </div>,
      ]}
    ></Column>
  );
};
export default Column4;
