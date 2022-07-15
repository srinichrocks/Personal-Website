import React from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head'
import Home from '../sections/banner';

export default function IndexPage() {
  return (
    <div>
        <Head>
          <meta name="google-site-verification" content="vEj-LXcJ5crzTnKy0Xmk0vKHqcBsjt_G3m4yU2qWflA" />
        </Head>
        <NextSeo 
            title="Srinidhi Raghavendran"
            description="Portfolio Website of Srinidhi Raghavendran"
            canonical="https://www.srinich.me"
            openGraph={{
              type: 'website',
              url: 'https://www.srinich.me/',
              site_name: 'Srinidhi Raghavendran',
              title: 'Srinidhi Raghavendran',
            }}
            />
        <div>
          <Home />
        </div>
    </div>
  );
}
