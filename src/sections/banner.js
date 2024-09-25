/** @jsx jsx */
import { jsx } from 'theme-ui';
import Header from 'pages/header';
import Sri from 'assets/sri.jpg';
import Footer from 'pages/footer';
import { motion } from 'framer-motion';

export default function Banner() {
  const line1 = `"Hey! I'm Srinidhi, a senior at UC Berkeley studying Computer Science, graduating in December 2024."`;
  const line2 = `"I've had the opportunity to intern at a startup, a mid-sized company, and a big tech firm, and also conduct Clinical NLP research for 1.5 years at UC Berkeley which has given me a broad perspective on the tech world. I'm looking forward to joining a company where I can have real ownership and trust in my work."`;
  const line3 = `"Outside of tech, I'm a big sports enthusiast—I can talk football and UFC all day, and I'm a die-hard Carolina Panthers fan(Keep Pounding)! I also love training in Taekwondo, Muay Thai, and Jiu-Jitsu, and you might catch me playing guitar or shooting hoops when I'm not coding."`;
  const line4 = `"Feel free to check out my website or drop me a line at sraghavendran17@berkeley.edu. I'm always up for a chat!"`;
  


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
              <br/>
            </motion.h5>
            
            </div>
            
        <div className='col-1'/>
      </div>
      <Footer/>
    </section>
  );
}