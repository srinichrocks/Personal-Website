/** @jsx jsx */
import { jsx } from 'theme-ui';
import Header from 'pages/header';
import Sri from 'assets/sri.jpg';
import Footer from 'pages/footer';
import { motion } from 'framer-motion';

export default function Banner() {
  const line1 = "'Hello! I'm Sri, a second-year Computer Science & Data Science undergraduate at the University of California, Berkeley.'";
  const line2 = "'Currently, I am interested in generating advanced statistical models to address societal issues through the use of my cs/ds skills. I am also interested in developing full-stack applications through the use of modern front-end libraries like react and next and databases like MongoDB.'"
  const line3 = "'In my free time, I play the guitar, basketball, videogames (and sleep). I also played in the USA minor league for Cricket and was in the top 50 for the USA u19 squad.'";
  const sentence = {
    hidden: {opacity: 1},
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.01
      }
    }
  }
  const letter = {
    hidden: {opacity: 0, y: 50},
    visible: {
      opacity: 1,
      y:0
    }
  }
  return (
    <section id = "home">
      <Header/>
      <div className='row mt-4 mb-4'>
        <div className='col-1'/>
        <div className='col-4'>
            <motion.div initial = "hidden" animate = "visible" variants = {{
              hidden: {
                scale: 0.8,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.3
                }
              }
            }}>
            <img src = {Sri} width = {400} height = {600} className="rounded-circle mx-auto img-fluid align-items-center"/>
            </motion.div>
        </div>
        <div className='col-6 text-center'>
            <p className='h2 text-center mb-3'>About Me</p>
            <motion.h5 className='load-screen-message' variants={sentence} initial = "hidden" animate = "visible">
              {line1.split("").map((char, index)=> {
                return (
                  <motion.span key = {char + "-" + index} variants = {letter}>
                    {char}
                  </motion.span>
                )
              })}
              <br/>
              <br/>
              {line2.split("").map((char, index)=> {
                return (
                  <motion.span key = {char + "-" + index} variants = {letter}>
                    {char}
                  </motion.span>
                )
              })}
              <br/>
              <br/>
              {line3.split("").map((char, index)=> {
                return (
                  <motion.span key = {char + "-" + index} variants = {letter}>
                    {char}
                  </motion.span>
                )
              })}
            </motion.h5>
            </div>
        <div className='col-1'/>
      </div>
      <Footer/>
    </section>
  );
}