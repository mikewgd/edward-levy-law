import Content from '../../../content/home.md';
import mdComponents from '../../mdComponents';
import { Image } from './HomePage.css';

import EdwardSLevy from '../../../assets/images/IMG_2324.jpg';

export const HomePage = () => (
  <>
    <Image src={EdwardSLevy} alt="Edward S Levy & Frank Guagliardi" />
    <Content components={mdComponents} />
  </>
);
