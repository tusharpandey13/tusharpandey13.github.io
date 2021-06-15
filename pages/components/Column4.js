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
          className={`flex flex-col p-contentgap min-h-[200px] gap-contentgap tracking-[1px]
                      text-[14px] bg-[#533573] border-[rgba(255,255,255,0.5)] border-2
                      text-fff justify-evenly`}
        >
          <span>These are the places which I regularly check for messages:</span>
          <div className='flex flex-col gap-contentgap font-medium'>
            <a href={links.email}>
              <span className='flex gap-contentgap hover:text-yellow-400 items-center'>
                <Icon path={mdiEmail} title='Mail' size={1} />
                Write to me at tusharpandey13@gmail.com
              </span>
            </a>
            <a href={links.linkedin}>
              <span className='flex gap-contentgap hover:text-yellow-400 items-center'>
                <Icon path={mdiLinkedin} title='Linkedin' size={1} />
                Send me a message on LinkedIn
              </span>
            </a>
          </div>
        </div>,
      ]}
    ></Column>
  );
};
export default Column4;
