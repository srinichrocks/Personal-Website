/** @jsx jsx */
import { jsx } from 'theme-ui';
import Header from 'pages/header';
import Sri from 'assets/sri.jpg';
import Footer from 'pages/footer';

export default function Banner() {
  return (
    <section id = "home">
      <Header/>
      <div className='row mt-4 mb-4'>
        <div className='col-1'/>
        <div className='col-4'>
            <img src = {Sri} width = {400} height = {600} className="rounded-circle mx-auto img-fluid align-items-center"/>
        </div>
        <div className='col-6 text-center'>
            <p className='h1 text-center mb-3'>About Me</p>
            <p className='h3'>Hello! I'm Sri, a second-year Computer Science & Data Science undergraduate at the University of California, Berkeley.</p>
            <p className='h4 mt-4'>Currently, I am interested in generating advanced statistical models to address societal issues through the use of my cs/ds skills. I am also interested in developing full-stack applications through the use of modern front-end libraries like react and next and databases like MongoDB.</p>
            <p className='h5 mt-5'>In my free time, I play the guitar, basketball, videogames (and sleep). I also played in the USA minor league for Cricket and was in the top 50 for the USA u19 squad.</p>
            </div>
        <div className='col-1'/>
      </div>
      <Footer/>
    </section>
  );
}