import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import MainLayout from '../src/components/main_layout';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp;
