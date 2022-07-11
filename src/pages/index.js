import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Home from './banner';
import AboutMe from './about-me';
import CourseWork from './projects';
import Skills from './skills';
import Journey from './journey';
import ContactMe from './contact-me';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Srinidhi Raghavendran" />
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
