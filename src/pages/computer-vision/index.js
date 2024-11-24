/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';
import Header from '../header';
import Footer from '../footer';

export default function ComputerVision() {
  const projects = [
    {
      title: 'Programming Project #1 (proj1)',
      course: 'CS180: Intro to Computer Vision and Computational Photography',
      description: 'Colorizing the Prokudin-Gorskii photo collection',
      detailsPage: '/computer-vision/proj1'
    },
    {
      title: 'Programming Project #2 (proj2)',
      course: 'CS180: Intro to Computer Vision and Computational Photography',
      description: 'Fun with Filters and Frequencies!',
      detailsPage: '/computer-vision/proj2'
    },
    {
      title: 'Programming Project #3 (proj3)',
      course: 'CS180: Intro to Computer Vision and Computational Photography',
      description: 'Face Morphing',
      detailsPage: '/computer-vision/proj3'
    },
    {
      title: 'Programming Project #4 (proj4)',
      course: 'CS180: Intro to Computer Vision and Computational Photography',
      description: 'Image Warping and Mosaicing',
      detailsPage: '/computer-vision/proj4'
    },
    {
      title: 'Programming Project #5 (proj5)',
      course: 'CS180: Intro to Computer Vision and Computational Photography',
      description: 'Fun With Diffusion Models!',
      detailsPage: '/computer-vision/proj5'
    },
  ];

  return (
    <section id="computer-vision-projects">
      <Header />
      <div sx={{ padding: '20px', textAlign: 'center' }}>
        <h1>Computer Vision Projects</h1>
        <p>Explore my projects from CS180: Intro to Computer Vision and Computational Photography.</p>
      </div>
      <div className="projects-container" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-box"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.location.href = project.detailsPage}
            sx={{
              width: 'calc(100% - 40px)',
              maxWidth: '600px',
              padding: '20px',
              backgroundColor: '#333',
              borderRadius: '5px',
              cursor: 'pointer',
              textAlign: 'left',
              margin: '20px auto',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              color: 'white',
              transition: 'all 0.3s ease'
            }}
          >
            <h3>{project.title}</h3>
            <h5>{project.course}</h5>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
      <Footer />
    </section>
  );
}
