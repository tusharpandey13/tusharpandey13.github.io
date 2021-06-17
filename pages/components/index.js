import Logo from './Logo';
import Title from './Title';
import Column1 from './Column1';
import Column2 from './Column2';
import Column3 from './Column3';
import Column4 from './Column4';
import ResumeLink from './ResumeLink';
import SocialLinks from './SocialLinks';

const Main = props => {
  return (
    <main
      className={`flex flex-row flex-nowrap w-full min-h-full select-none widephone:px-gridgap 
                      med:px-0 justify-start tablet:justify-center med:justify-start`}
    >
      <div className={`w-sidebarWidth h-screen fixed hidden widephone:block tablet:hidden med:block`}>
        {Sticky_sidebar}
      </div>
      <div
        className={`widephone:ml-leftspace tablet:ml-0 med:ml-leftspace flex flex-col 
                    flex-nowrap pb-headerht w-full widephone:w-auto`}
      >
        <div
          className={`flex flex-col h-auto widephone:h-headerht items-start justify-between
                         widephone:justify-end`}
        >
          <div
            className={`flex widephone:hidden items-center w-full widephone:w-auto
                            justify-center widephone:justify-end pt-5 pb-gridgapby2`}
          >
            <div className='pr-gridgapby2'>
              <ResumeLink />
            </div>
            <div className='pl-gridgapby2'>
              <SocialLinks />
            </div>
          </div>
          <div className={`flex justify-between w-full pt-gridgapby2`}>
            <div className={`w-full justify-center widephone:justify-start flex`}>
              <Title text='tushar pandey' subtext='portfolio'></Title>
            </div>
            <div className={`justify-end hidden tablet:flex med:hidden items-center`}>
              <div className='pr-gridgapby2'>
                <ResumeLink />
              </div>
              <div className='pl-gridgapby2'>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
        <div className={`flex justify-center widephone:justify-start mt-[40px]`}>
          <div className={`block tablet:hidden`}>{Cols_small}</div>
          <div className={`hidden tablet:block large:hidden`}>{Cols_med}</div>
          <div className={`hidden large:block`}>{Cols_large}</div>
        </div>
      </div>
    </main>
  );
};
export default Main;

const Sticky_sidebar = (
  <div className={`flex flex-col items-end w-full h-full justify-start`}>
    <div className={`flex flex-row justify-end items-end h-headerht w-full pt-crossgap`}>
      <Logo></Logo>
    </div>
    <div className={`flex flex-col justify-between flex-grow mt-crossgap mb-crossgap`}>
      <div className='pr-contentgapby2 pb-contentgap'>
        <ResumeLink />
      </div>
      <div className='pl-contentgapby2'>
        <SocialLinks />
      </div>
    </div>
  </div>
);

const Cols_small = (
  <div className={`flex flex-col`}>
    <div className='py-gridgapvby2 pt-0'>{<Column1 />}</div>
    <div className='py-gridgapvby2'>{<Column2 />}</div>
    <div className='py-gridgapvby2'>{<Column3 />}</div>
    <div className='py-gridgapvby2 pb-0'>{<Column4 />}</div>
  </div>
);
const Cols_med = (
  <div className={`flex flex-wrap`}>
    <div className={`flex flex-col pr-gridgapby2`}>
      <div className='pb-gridgapvby2'>{<Column1 />}</div>
      <div className='pt-gridgapvby2'> {<Column3 />}</div>
    </div>
    <div className={`flex flex-col pl-gridgapby2`}>
      <div className='pb-gridgapvby2'>{<Column2 />}</div>
      <div className='pt-gridgapvby2'> {<Column4 />}</div>
    </div>
  </div>
);
const Cols_large = (
  <div className={`flex flex-nowrap`}>
    <div className={`flex flex-col pr-gridgapby2`}>
      <div className='pb-gridgapvby2'>{<Column1 />}</div>
      <div className='pt-gridgapvby2'>{<Column4 />}</div>
    </div>
    <div className='px-gridgapby2'>{<Column2 />}</div>
    <div className='pl-gridgapby2'>{<Column3 />}</div>
  </div>
);
