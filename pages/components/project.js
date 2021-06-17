import Icon from '@mdi/react';
import { mdiArrowTopRight } from '@mdi/js';

const Project = props => {
  return (
    <a href={props.url} target='blank'>
      <div
        className={`flex flex-col p-contentgap pb-contentgapby2 min-h-[200px] tracking-[1px] text-[14px] 
                text-000 border border-cardborder pr-contentgap bg-fff
                hover:border-[#aaa] hover:cursor-pointer group med:bg-opacity-50 med:hover:bg-opacity-100
                 transition-all transform-gpu hover:shadow-2xl justify-between hover:scale-105
                 mb-contentgap`}
      >
        <div className='flex flex-col mb-contentgapby2'>
          <div className='flex justify-between mb-contentgapby2'>
            <span className={`uppercase leading-[180%] pr-contentgap `}>{props.title}</span>
            <span className='hidden group-hover:block'>
              <Icon path={mdiArrowTopRight} title='User Profile' size={1} />
            </span>
          </div>
          <p
            className={`text-[12px] leading-[100%] pr-contentgap font-light 
                      text-[rgba(0,0,0,0.85)] font-contentfont mt-contentgapby2`}
          >
            {(props.description ?? '').slice(0, 250)}
            {(props.description ?? '').length > 250 && '...'}
          </p>
        </div>

        <div className={`flex flex-wrap ml-[-7.5px]`}>
          {(props.tags ?? []).sort().map((e, i) => (
            <span
              key={i}
              className={`bg-bodytext uppercase text-fff text-[9px] leading-[180%] flex 
                        justify-center content-center py-[2px] px-[10px] mx-contentgapby2 my-contentgapby2`}
            >
              {e}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};
export default Project;
