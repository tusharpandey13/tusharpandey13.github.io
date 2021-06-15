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
                      med:px-0`}
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
                         widephone:justify-end gap-gridgap`}
        >
          <div
            className={`gap-gridgap flex widephone:hidden items-center w-full widephone:w-auto
                            justify-center widephone:justify-end pt-5`}
          >
            <ResumeLink />
            <SocialLinks />
          </div>
          <div className={`flex justify-between w-full`}>
            <div className={`w-full justify-center widephone:justify-start flex`}>
              <Title text='tushar pandey' subtext='portfolio'></Title>
            </div>
            <div className={`justify-end gap-gridgap hidden tablet:flex med:hidden items-center`}>
              <ResumeLink />
              <SocialLinks />
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
    <div className={`flex flex-col justify-between flex-grow pt-crossgap pb-crossgap gap-contentgap`}>
      <ResumeLink />
      <SocialLinks />
    </div>
  </div>
);

const Cols_small = (
  <div className={`flex flex-col gap-gridgapv `}>
    {<Column1 />}
    {<Column2 />}
    {<Column3 />}
    {<Column4 />}
  </div>
);
const Cols_med = (
  <div className={`flex flex-wrap gap-gridgap `}>
    <div className={`flex flex-col gap-gridgapv`}>
      {<Column1 />}
      {<Column3 />}
    </div>
    <div className={`flex flex-col gap-gridgapv`}>
      {<Column2 />}
      {<Column4 />}
    </div>
  </div>
);
const Cols_large = (
  <div className={`flex flex-nowrap gap-gridgap `}>
    <div className={`flex flex-col gap-gridgapv`}>
      {<Column1 />}
      {<Column4 />}
    </div>
    {<Column2 />}
    {<Column3 />}
  </div>
);
