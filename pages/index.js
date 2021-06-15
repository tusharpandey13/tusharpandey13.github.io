import Main from './components';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tushar Pandey</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Main />
    </div>
  );
}
