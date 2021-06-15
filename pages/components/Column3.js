import Column from './Column';
import Job from './Job';
import { experience } from './../../utils/getdata';

const Column3 = props => {
  return (
    <Column
      colId={'animate-fadeInLeft3'}
      imgId={'5'}
      webp
      title={experience.title}
      elements={experience.items.map((e, i) => {
        return (
          <Job
            key={i}
            index={i + 1}
            employer={e.title.content}
            role={e.role}
            time={e.time}
            items={e.items}
          ></Job>
        );
      })}
    ></Column>
  );
};
export default Column3;
