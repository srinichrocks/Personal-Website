/** @jsx jsx */
import { jsx } from 'theme-ui';
import Header from 'pages/header';
import Sri from 'assets/sri.jpg';
import Footer from 'pages/footer';
import { motion } from 'framer-motion';

export default function Banner() {
  const line1 = "\"Hello there! My name is Srinidhi, a third-year Computer Science undergraduate at the University of California, Berkeley.\"";
  const line2 = "\"I am deeply engrossed in the realms of Machine Learning, Cybersecurity, and Data Science, constantly exploring how these pivotal technologies can be employed to unravel and address complex, real-world challenges. Natural Language Processing (NLP) captivates me the most, with its profound potential to decipher and synthesize human language.\"";
  const line3 = "\"Professionally, I've sharpened my acumen in machine learning algorithms, fortified code security, and have improved user experiences. I'm on the lookout for internships and roles that will further my prowess in software engineering, cybersecurity, and data analysis, aiming to deliver substantial contributions to future employers and the technology sector at large.\"";
  const line4 = "\"Beyond the screen, I am a black belt in Taekwondo and actively practice Boxing and Muay Thai at Berkeley Muay Thai and Fitness. My dedication extends to music and sports; I enjoy strumming the guitar, was a minor league player in cricket, and I frequently play basketball. I'm also a fan of the UFC and NFL, enjoying the thrill and strategy of the games in my leisure time.\"";


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
            <img src = {Sri} alt = "sri" width = {400} height = {600} className="rounded-circle mx-auto img-fluid align-items-center"/>
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
              <br/>
              <br/>
              {line4.split("").map((char, index)=> {
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