import styled from 'styled-components';

// Centers the markdown content (src/content/contact.md): an intro paragraph
// followed by the phone/fax/email lines.
export const Text = styled.div`
  text-align: center;

  p:first-of-type {
    margin: 0 auto;
    max-width: 350px;
  }

  p:last-of-type {
    margin: 20px 0 0 0;
  }
`;

export const MapContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
  margin: 40px auto;
`;

export const MapCanvas = styled.div`
  overflow: hidden;
  background: none !important;
  position: relative;
  padding-bottom: 56.25%;
`;

export const MapFrame = styled.iframe`
  border: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
