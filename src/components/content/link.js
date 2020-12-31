const Link = (src, label) => {
  if (src)
    return (
      <a className={`link`} href={`${src}`} target={'_blank'} rel={'noopener noreferrer'}>
        <span>{`${label}`}</span>
      </a>
    );
  else return <span>{`${label}`}</span>;
};

export default Link;
