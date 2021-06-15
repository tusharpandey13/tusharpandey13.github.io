const Job = props => {
  return (
    <div
      className={`flex tracking-[1px] text-[14px] text-000  border-cardborder
                  py-contentgap px-0 gap-contentgap`}
    >
      <div className='flex flex-col'>
        <span className='text-4xl text-blue-900'>{props.index}</span>
      </div>
      <div className='flex flex-col gap-contentgap justify-between'>
        <div className='flex flex-col gap-contentgap'>
          <div className='flex justify-between items-center border-t-1 border-b-1 border-[#aaa]'>
            <div className='flex flex-col'>
              <span className={`uppercase font-medium`}>{props.employer}</span>
              <span className={`capitalize text-[12px] font-semibold text-blue-900 font-contentfont`}>
                {props.role}
              </span>
            </div>
            <span
              className={` uppercase text-000 text-[10px] flex leading-[180%]
                        justify-center content-center py-[2px] px-[20px]`}
            >
              {props.time}
            </span>
          </div>
          <p
            className={`text-[12px] pr-contentgap text-[rgba(0,0,0,0.75)] list-disc leading-[140%] font-contentfont`}
          >
            {(props.items ?? []).map((e, i) => (
              <li key={i} style={{ listStylePosition: `outside`, textIndent: `-17px` }}>
                {e}
              </li>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Job;
