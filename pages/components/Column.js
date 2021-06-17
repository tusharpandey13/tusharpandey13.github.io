const Column = props => {
  const colWidth = props.colWidth ?? 355;
  return (
    <div
      className={`flex flex-col flex-nowrap tracking-[1px] font-basefont
                  transform-gpu transition-all opacity-0 ${props.colId}`}
      style={{ width: `${props.width ?? 355}px` }}
    >
      {props.imgId && (
        <div className='overflow-hidden mb-contentgapby2'>
          <picture>
            {props.avif && <source srcSet={`/img/${props.imgId}.avif`} type='image/avif' />}
            {props.webp && <source srcSet={`/img/${props.imgId}.webp`} type='image/webp' />}
            <img
              className={`transition-all duration-500 ease-customtf transform bg-center bg-cover 
                          scale-105 hover:scale-100`}
              width={colWidth}
              height={(9 / 16) * colWidth}
              decoding='async'
              loading='lazy'
              src={`/img/${props.imgId}.jpg`}
              alt='Me'
            />
          </picture>
        </div>
      )}
      {props.title && (
        <div className='flex content-center items-center justify-between py-contentgapby2'>
          <span className='uppercase text-[14px] font-medium text-[#333] mt-[5px]'>{props.title}</span>
          <span className='text-gray'>
            {[' ', ' ', ...Array(42 - props.title.length)].map((e, i) => (
              <span key={`dash${i}`}>-</span>
            ))}
          </span>
        </div>
      )}
      {props.description && (
        <p
          className={`text-[12px] font-normal leading-[180%] select-text text-[rgba(0,0,0,0.85)] font-contentfont py-contentgapby2`}
        >
          {props.description}
        </p>
      )}
      <div className='flex flex-col select-text pt-contentgapby2 mb-[-7.5px]'>{props.elements}</div>
    </div>
  );
};
export default Column;
