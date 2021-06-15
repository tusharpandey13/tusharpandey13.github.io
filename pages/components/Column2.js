import Column from './Column';
import Project from './project';
import { projects } from './../../utils/getdata';

const Column2 = props => {
  return (
    <Column
      colId={'animate-fadeInLeft2'}
      imgId={'2'}
      webp
      title='projects'
      elements={projects.items.map((e, i) => {
        return (
          <Project
            key={i}
            title={e.title.content}
            url={e.title.url}
            description={e.content}
            tags={e.tags}
          ></Project>
        );
      })}
    ></Column>
  );
};
export default Column2;
