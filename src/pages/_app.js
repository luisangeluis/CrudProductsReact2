// import { Provider } from 'react-redux';
// import store from '../store/';
import Providers from "../store/Providers";
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    // <Provider store={store}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    // </Provider>
  )
}
