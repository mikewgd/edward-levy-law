import Content from '../../../content/contact.md';
import mdComponents from '../../mdComponents';
import { Text, MapContainer, MapCanvas, MapFrame } from './ContactPage.css';

export const ContactPage = () => (
  <>
    <Text>
      <Content components={mdComponents} />
    </Text>

    <MapContainer>
      <MapCanvas>
        <MapFrame
          title="Map showing the Law Office of Levy & Guagliardi"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.559024873927!2d-74.28822618484875!3d40.85960457931617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c300ebc890c33d%3A0x10c4f53c5ea43f08!2sEdward+S.+Levy!5e0!3m2!1sen!2sus!4v1556107894288!5m2!1sen!2sus"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </MapCanvas>
    </MapContainer>
  </>
);
