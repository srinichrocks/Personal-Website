import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
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
