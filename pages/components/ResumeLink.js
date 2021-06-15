import { links } from './../../utils/getdata';

const ResumeLink = props => {
  return (
    <a href={links.resume} target='blank'>
      <div className='flex justify-end'>
        <div
          className={`flex justify-end items-center px-0 py-2 uppercase text-000 font-basefont
                     font-medium text-[14px] border-b-1 hover:border-b-4 border-000 cursor-pointer
                     hover:text-blue-900 hover:border-blue-900 max-w-min`}
        >
          <span className='tracking-[5px]'>resum</span>
          <span>e</span>
        </div>
      </div>
    </a>
  );
};
export default ResumeLink;
