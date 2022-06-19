import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Home from '../sections/banner';
import AboutMe from '../sections/about-me'
import CourseWork from '../sections/projects';
import Skills from '../sections/skills';
import Resume from '../sections/resume'

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Sri Personal Website" />
          <Home />
          <AboutMe />
          <CourseWork />
          <Skills />
          <Resume/>
        </Layout>
    </ThemeProvider>
  );
}
