import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import MainLayout from '../src/components/main_layout';
import { AuthProvider } from '../src/scripts/auth';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <></>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AuthProvider>
  )
}

export default MyApp;
