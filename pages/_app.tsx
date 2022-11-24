import { Layout } from '../components/Layout';
import '../styles/globals.css';
import '@etchteam/next-pagination/dist/index.css';
import localFont from '@next/font/local';
import type { AppProps } from 'next/app';

const myFont = localFont({ src: '../styles/fonts/ProximaNova-Regular.woff' })

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <main className={myFont.className}>
      <Component {...pageProps} />
      </main>
    </Layout>
  )
}

export default App;
