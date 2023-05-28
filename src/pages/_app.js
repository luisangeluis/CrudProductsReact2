// import { Provider } from 'react-redux';
// import store from '../store/';
import Providers from "../store/Providers";
import '@/styles/globals.css';

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "500"]
})

export default function App({ Component, pageProps }) {
  return (
    // <Provider store={store}>
    <Providers>
      <section className={roboto.className}>
        <Component {...pageProps} />
      </section>
    </Providers>
    // </Provider>
  )
}
