import Column from './Column';
import { aboutme } from './../../utils/getdata';

const Column1 = props => {
  return (
    <Column
      colId={'animate-fadeInLeft1'}
      imgId={'face'}
      avif
      webp
      title={aboutme.title}
      description={aboutme.content}
    ></Column>
  );
};
export default Column1;
