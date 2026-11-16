import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// Set VITE_GA_MEASUREMENT_ID (a GA4 "G-XXXXXXXXXX" id) at build time to enable
// analytics. With it unset (local dev, or no id configured) this renders nothing
// and loads no third-party scripts.
const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

if (measurementId) {
  // Pageviews are sent manually below so client-side navigation is tracked too.
  ReactGA.initialize(measurementId, { gtagOptions: { send_page_view: false } });
}

const Tracker = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (measurementId) {
      ReactGA.send({ hitType: 'pageview', page: pathname });
    }
  }, [pathname]);

  return null;
};

export default Tracker;
