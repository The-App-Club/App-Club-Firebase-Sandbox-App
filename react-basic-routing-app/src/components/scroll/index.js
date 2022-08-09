import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

// https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
// html の scroll-behavior smoothと一緒に使わない framerと被る
function ScrollToTop() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export {ScrollToTop};
