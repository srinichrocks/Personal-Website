import React from 'react';
import { ThemeProvider} from 'theme-ui';
import theme from 'theme';
import { NextSeo } from 'next-seo';
import Head from 'next/head'
import Layout from 'components/layout';
import Home from '../sections/banner';
import AboutMe from '../sections/about-me';
import CourseWork from '../sections/projects';
import Skills from '../sections/skills';
import Journey from '../sections/journey';
import ContactMe from '../sections/contact-me';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Head>
          <meta name="google-site-verification" content="vEj-LXcJ5crzTnKy0Xmk0vKHqcBsjt_G3m4yU2qWflA" />
        </Head>
        <Layout>
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
          <Home />
          <AboutMe />
          <CourseWork />
          <Skills />
          <Journey />
          <ContactMe />
        </Layout>
    </ThemeProvider>
  );
}
