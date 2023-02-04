// import '../styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import '../styles/globals.css';
// import { Provider } from 'react-redux';
// import store from '../store';

function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      offset: 50,
    });
  }, []);

  return <Component {...pageProps} />
  // <Provider store={store}>
   
  // </Provider>
}

export default App;
