import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { Header } from './Header';
import { Footer } from './Footer';
import Tracker from './Tracker';
import { Main, Wrapper, GlobalStyle, H2, CenteredParagraph } from './styles';

const NotFoundPage = () => (
  <>
    <H2>404 Not Found</H2>
    <CenteredParagraph>
      Sorry, we can’t find the page you were looking for.
    </CenteredParagraph>
  </>
);

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Tracker />
    <Wrapper>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>
      <Footer />
    </Wrapper>
  </BrowserRouter>
);

export default App;
