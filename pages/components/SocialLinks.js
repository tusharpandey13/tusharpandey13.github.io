import Icon from '@mdi/react';
import { mdiEmail, mdiLinkedin, mdiGithub, mdiTwitter } from '@mdi/js';
import { links } from './../../utils/getdata';

const SocialLinks = props => {
  return (
    <div className={`flex justify-end text`}>
      <a href={links.linkedin} target='blank'>
        <span className='flex hover:text-blue-900 items-center pr-2'>
          <Icon path={mdiLinkedin} title='Linkedin' size={1.5} />
        </span>
      </a>
      <a href={links.github} target='blank'>
        <span className='flex hover:text-blue-900 items-center px-2'>
          <Icon path={mdiGithub} title='Github' size={1.5} />
        </span>
      </a>
      <a href={links.email} target='blank'>
        <span className='flex hover:text-blue-900 items-center px-2'>
          <Icon path={mdiEmail} title='Email' size={1.5} />
        </span>
      </a>
      <a href={links.twitter} target='blank'>
        <span className='flex hover:text-blue-900 items-center pl-2'>
          <Icon path={mdiTwitter} title='Twitter' size={1.5} />
        </span>
      </a>
    </div>
  );
};
export default SocialLinks;
