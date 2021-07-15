import { useEffect } from 'react';
import Main from './components';
import Head from 'next/head';
import { data } from './../utils/getdata';

export default function Home() {
  useEffect(() => {}, [data]);
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
