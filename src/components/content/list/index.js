import Link from '../link';

import './list.scss';

const ListItem = props => {
  return (
    <li>
      <header>
        <h5>{Link(props.title.url, props.title.content)}</h5>
        {props.role && <role>{props.role}</role>}
        {props.time && <time>{props.time}</time>}
      </header>
      <div className='itemC'>
        <content>
          {props.tags && (
            <div className='tagC'>
              {props.tags.map((tag, i2) => (
                <span className='abcd'>{tag}</span>
              ))}
            </div>
          )}
          {props.content}
          {props.items && (
            <ul>
              {props.items.map((item1, i2) => {
                return <li>{item1}</li>;
              })}
            </ul>
          )}
        </content>
        {/* {props.img && <img src={props.img} alt={props.title.content} />} */}
      </div>
    </li>
  );
};

const List = props => {
  return (
    <article>
      <header>
        <div className='articletitle'>{props.title}</div>
      </header>
      <section>
        <ul>{props.children}</ul>
      </section>
    </article>
  );
};

const Lists = props => {
  return (
    <div className='article-C'>
      {props.data.map((e0, i0) => {
        if (e0.seperator) {
          return <div className='exp-sep'></div>;
        } else {
          return (
            <List title={e0.title} key={i0}>
              {e0.items.map((item, i1) => (
                <ListItem {...item} key={i1} />
              ))}
            </List>
          );
        }
      })}
    </div>
  );
};

export default Lists;
