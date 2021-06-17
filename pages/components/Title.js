const Title = props => {
  return (
    <div
      className={`flex flex-col justify-between font-basefont font-medium 
                    tracking-[5px] items-center widephone:items-start`}
    >
      <span className='uppercase text-[10px] text-[#333] italic pb-contentgapby2'>{props.subtext}</span>
      <h2 className='uppercase text-[18px] leading-[180%] pt-contentgapby2'>{props.text}</h2>
    </div>
  );
};
export default Title;
