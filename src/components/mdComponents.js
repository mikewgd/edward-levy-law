import { H2, Paragraph } from './styles';

// Maps the HTML elements produced by the markdown pages (src/content/*.md) onto
// the site's styled components. Pass as `<Page components={mdComponents} />`.
const mdComponents = {
  h2: H2,
  p: Paragraph,
};

export default mdComponents;
