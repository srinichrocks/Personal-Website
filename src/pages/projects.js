/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';
import Header from './header';
import Footer from './footer';

export default function Projects() {
  return (
   <section id = "projects">
     <Header/>
     <p className='h2 text-center mt-2'>Featured Projects</p>
     <hr/>
     <div className='row mt-4 mx-2 text-center'>
       <div className='col-sm-3'>
      <a href = "//github.com/srinichrocks/Gitlet" target = "_blank" rel = "noreferrer">
              <motion.div className="card text-center shadow rounded h-100" whileHover={{
                scale: [1,1.1,1.05],
                position: 'relative',
                rotate: [0,10,-10,0,],
                filter: [
                  'hue-rotate(0)',
                  'hue-rotate(360deg)',
                  'hue-rotate(45deg)',
                  'hue-rotate(0)',
                ],
                background: 'white',
                zIndex: 1,
                transition: {
                  duration: 1
                }
              }}>
                <div className="card-content">
                  <div className="card-body">
                    <h4 className="card-title">Github Lite</h4>
                    <h6 className='card-subtitle text-primary'>Java</h6>
                    <section className='card-text text-left text-dark'>
        <p>Implemented a smaller version control system modeling that of Github</p>
        <p>Included many of the same functionalities:</p>
        <ul>
        <li>init</li>
        <li>add</li>
        <li>commit</li>
        <li>rm</li>
        <li>log</li>
        <li>global-log</li>
        <li>find</li>
        <li>status</li>
        <li>checkout</li>
        <li>branch</li>
        <li>rm-branch</li>
        <li>reset</li>
        <li>merge</li>
        <li>diff</li>
          </ul>
      </section>
                  </div>
                </div>
              </motion.div>
              </a>
       </div>
       <div className='col-sm-3'>
       <a href = "https://nlpanalysis.vercel.app/" target = "_blank" rel = "noreferrer">
              <motion.div className="card text-center shadow rounded h-100" whileHover={{
                scale: [1,1.1,1.05],
                position: 'relative',
                rotate: [0,10,-10,0,],
                filter: [
                  'hue-rotate(0)',
                  'hue-rotate(360deg)',
                  'hue-rotate(45deg)',
                  'hue-rotate(0)',
                ],
                background: 'white',
                zIndex: 1,
                transition: {
                  duration: 1
                }}}>
                <div className="card-content">
                  <div className="card-body">
                    <h4 className="card-title">NLP Analysis</h4>
                    <h6 className='card-subtitle text-primary'>HTML, CSS, Javascript, Python</h6>
                    <section className='card-text text-left text-dark'>
                    <p>Supports:</p>
                    <ul>
                      <li>Text Translation</li>
                      <li>Text Summarization</li>
                      <li>Sentiment Analysis</li>
                      <li>Named-entity Recognition</li>
                      <li>Language Detection</li>
                      <li>Generating random funny jokes🙂</li>
                    </ul>
                  </section>
                  </div>
                </div>
              </motion.div>
              </a>
       </div>
       <div className='col-sm-3'>
       <a href = "//github.com/srinichrocks/AlphabetGame" target = "_blank" rel = "noreferrer">
              <motion.div className="card text-center shadow rounded h-100" whileHover={{
                scale: [1,1.1,1.05],
                position: 'relative',
                rotate: [0,10,-10,0,],
                filter: [
                  'hue-rotate(0)',
                  'hue-rotate(360deg)',
                  'hue-rotate(45deg)',
                  'hue-rotate(0)',
                ],
                background: 'white',
                zIndex: 1,
                transition: {
                  duration: 1
                }}}>
                <div className="card-content">
                  <div className="card-body">
                    <h4 className="card-title">Alphabet Game</h4>
                    <h6 className='card-subtitle text-primary'>Java, JavaFX</h6>
                    <section className='card-text text-left text-dark'>
        <li key = "kaka1">Fun game for kids(and adults) where you identify letters in order to gain points and earn yourself a spot on the leaderboard</li>
        <li key = "kaka2">Employed Firebase to store game information for every unique user</li>
      </section>
                  </div>
                </div>
              </motion.div>
              </a>
       </div>
       <div className='col-sm-3'>
       <a href = "https://github.com/srinichrocks/Mass-Shootings/blob/master/MassShootings.ipynb" target = "_blank" rel = "noreferrer">
              <motion.div className="card text-center shadow rounded h-100" whileHover={{
                scale: [1,1.1,1.05],
                position: 'relative',
                rotate: [0,10,-10,0,],
                filter: [
                  'hue-rotate(0)',
                  'hue-rotate(360deg)',
                  'hue-rotate(45deg)',
                  'hue-rotate(0)',
                ],
                background: 'white',
                zIndex: 1,
                transition: {
                  duration: 1
                }}}>
                <div className="card-content">
                  <div className="card-body">
                    <h4 className="card-title">Analysis of Mass Shootings in the USA</h4>
                    <h6 className='card-subtitle text-primary'>Python(Jupyter Notebook)</h6>
                    <section className='card-text text-left text-dark'>
                    <li>Analyzed the kaggle mass shooting dataset consisting of all the mass shootings from 2016-2021 in the USA.</li> 
                    <li>Determined outliers, made interesting statistical observations, predicted the rate of growth in casualties in mass shootings and classified shootings based on injuries and deaths.</li> 
                    <li>Double checked analysis to determine whether these statistical findings are made by chance.</li>
                    <ul>
                      <p>Key Findings:</p>
                      <li>Through linear regression modeling, the number of casualties, death and injuries, in each individual mass shooting have shown a gradual increase as time has progressed from 2016 to 2021.</li>
                      <li>Through the K-Nearest Neighbors algorithm, there is now a classifier which categorizes mass shootings at 98.99% or more accuracy into three different levels: Low, Moderate and High</li>
                    </ul>
                  </section>
                  </div>
                </div>
              </motion.div>
              </a>
       </div>
     </div>
     <p className='h2 text-center mt-5 pt-2'>Side Projects</p>
     <hr/>
     <div className="row mt-3 mx-2 container-fluid">
            <div className="col-md-3"> 
            <a href = "//github.com/srinichrocks/RPN-Assignment" target = "_blank" rel = "noreferrer">
              <motion.div className="card text-center shadow rounded h-100" whileHover={{
                scale: [1,1.1,1.05],
                position: 'relative',
                rotate: [0,10,-10,0,],
                filter: [
                  'hue-rotate(0)',
                  'hue-rotate(360deg)',
                  'hue-rotate(45deg)',
                  'hue-rotate(0)',
                ],
                background: 'white',
                zIndex: 1,
                transition: {
                  duration: 0.5
                }}}>
                <div className="card-content">
                  <div className="card-body">
                    <h4 className="card-title">RPN Calculator</h4>
                    <h6 className='card-subtitle text-primary'>Java</h6>
                    <section className='card-text text-left text-dark'>
                    <p>RPN calculator is a calculator which is capable of integer math that supports 4 operations:</p>
                  <ul>
                    <li>addition</li>
                    <li>subtraction</li>
                    <li>multiplication</li>
                    <li>division</li>
                  </ul>
                  </section>
                  </div>
                </div>
              </motion.div>
              </a>
            </div>
            <div className="col-md-3"> 
            <a href = '//github.com/srinichrocks/Enigma' target = "_blank" rel = "noreferrer">
              <motion.div className="card text-center h-100 shadow rounded" whileHover={{
                scale: [1,1.1,1.05],
                position: 'relative',
                rotate: [0,10,-10,0,],
                filter: [
                  'hue-rotate(0)',
                  'hue-rotate(360deg)',
                  'hue-rotate(45deg)',
                  'hue-rotate(0)',
                ],
                background: 'white',
                zIndex: 1,
                transition: {
                  duration: 0.5
                }}}>
                <div className="card-content">
                  <div className="card-body">
                    <h4 className="card-title">Enigma</h4>
                    <h6 className='card-subtitle text-primary'>Java</h6>
                    <section className = "card-text text-dark text-left">
                      <p>The Enigma machine that Germany used during World War II to encrypt its military communications</p>
                      <li>Used encryption libraries and advanced algorithms</li>
                    </section>
                  </div>
                </div>
              </motion.div>
              </a>
            </div>
            <div className="col-md-3"> 
            <a href = "//github.com/srinichrocks/SchemeInterpreter" target = "_blank" rel = "noreferrer">
              <motion.div className="card text-center shadow rounded h-100" whileHover={{
                scale: [1,1.1,1.05],
                position: 'relative',
                rotate: [0,10,-10,0,],
                filter: [
                  'hue-rotate(0)',
                  'hue-rotate(360deg)',
                  'hue-rotate(45deg)',
                  'hue-rotate(0)',
                ],
                background: 'white',
                zIndex: 1,
                transition: {
                  duration: 0.5
                }}}>
                <div className="card-content">
                  <div className="card-body">
                    <h4 className="card-title">Scheme Interpreter</h4>
                    <h6 className='card-subtitle text-primary'>Python, Scheme</h6>
                    <section className = "card-text text-dark text-left">
                    <p>An interpreter identical in functionalities and design to that of the python programming language built using scheme</p>    
                    </section>
                  </div>
                </div>
              </motion.div>
              </a>
            </div>
            <div className="col-md-3"> 
            <a href = "//github.com/srinichrocks/Blocks" target = "_blank" rel = "noreferrer">
              <motion.div className="card text-center shadow rounded h-100" whileHover={{
                scale: [1,1.1,1.05],
                position: 'relative',
                rotate: [0,10,-10,0,],
                filter: [
                  'hue-rotate(0)',
                  'hue-rotate(360deg)',
                  'hue-rotate(45deg)',
                  'hue-rotate(0)',
                ],
                background: 'white',
                zIndex: 1,
                transition: {
                  duration: 0.5
                }}}>
                <div className="card-content">
                  <div className="card-body">
                    <h4 className="card-title">Blocks Game</h4>
                    <h6 className='card-subtitle text-primary'>Java, Swing</h6>
                    <section className = "card-text text-left text-dark">
                    <li>An interactive game where one is presented with a grid of square cells (initially empty) and a set of a number of pieces formed from configurations of blocks arranged to cover empty cells of the grid</li>
      <li>After each piece is placed, filled rows and columns are cleared and keep playing until no pieces can fit anywhere on board</li>
                    </section>
                  </div>
                </div>
              </motion.div>
              </a>
            </div>
            </div>
            <div className="row mt-3 mx-2 container-fluid">
            <div className="col-xl-3 col-sm-6 col-12"> 
            <a href = "//github.com/srinichrocks/nlpwork" target = "_blank" rel = "noreferrer">
              <motion.div className="card text-center shadow rounded h-100" whileHover={{
                scale: [1,1.1,1.05],
                position: 'relative',
                rotate: [0,10,-10,0,],
                filter: [
                  'hue-rotate(0)',
                  'hue-rotate(360deg)',
                  'hue-rotate(45deg)',
                  'hue-rotate(0)',
                ],
                background: 'white',
                zIndex: 1,
                transition: {
                  duration: 0.5
                }}}>
                <div className="card-content">
                  <div className="card-body">
                    <h4 className="card-title">NLP Summarization</h4>
                    <h6 className='card-subtitle text-primary'>Python</h6>
                    <section className='card-text text-dark text-left'>
                    <p>Generated summaries of documents using BERT and tfidf vectors/transformers</p>
                  </section>
                  </div>
                </div>
              </motion.div>
              </a>
            </div>
            <div className="col-xl-3 col-sm-6 col-12"> 
            <a href = "//github.com/srinichrocks/CatsGame" target = "_blank" rel = "noreferrer">
              <motion.div className="card text-center shadow rounded h-100" whileHover={{
                scale: [1,1.1,1.05],
                position: 'relative',
                rotate: [0,10,-10,0,],
                filter: [
                  'hue-rotate(0)',
                  'hue-rotate(360deg)',
                  'hue-rotate(45deg)',
                  'hue-rotate(0)',
                ],
                background: 'white',
                zIndex: 1,
                transition: {
                  duration: 0.5
                }}}>
                <div className="card-content">
                  <div className="card-body">
                    <h4 className="card-title">Cats Game</h4>
                    <h6 className='card-subtitle text-primary'>Python</h6>
                    <section className = "card-text text-dark text-left">
                    <p>A game that measures typing speed and also has a typing autocorrect functionality to correct the spelling of a word after a user types it</p>
                    <li>Inspired by Typeracer</li>
                    </section>
                  </div>
                </div>
              </motion.div>
              </a>
            </div>
            <div className="col-xl-3 col-sm-6 col-12"> 
            <a href ="//github.com/srinichrocks/hog" target = "_blank" rel = "noreferrer">
              <motion.div className="card text-center shadow rounded h-100" whileHover={{
                scale: [1,1.1,1.05],
                position: 'relative',
                rotate: [0,10,-10,0,],
                filter: [
                  'hue-rotate(0)',
                  'hue-rotate(360deg)',
                  'hue-rotate(45deg)',
                  'hue-rotate(0)',
                ],
                background: 'white',
                zIndex: 1,
                transition: {
                  duration: 0.5
                }}}>
                <div className="card-content">
                  <div className="card-body">
                    <h4 className="card-title">Hog Game</h4>
                    <h6 className='card-subtitle text-primary'>Python</h6>
                    <section className = "card-text text-left text-dark">
                    <p>An interactive game consisting of a simulator and multiple strategies for the dice game hog</p>
      <li>Inspired by the dice game pig</li>
                    </section>
                  </div>
                </div>
              </motion.div>
              </a>
            </div>
            <div className="col-xl-3 col-sm-6 col-12"> 
            <a href = "//github.com/srinichrocks/AntsGame" target = "_blank" rel = "noreferrer">
              <motion.div className="card text-center shadow rounded h-100" whileHover={{
                scale: [1,1.1,1.05],
                position: 'relative',
                rotate: [0,10,-10,0,],
                filter: [
                  'hue-rotate(0)',
                  'hue-rotate(360deg)',
                  'hue-rotate(45deg)',
                  'hue-rotate(0)',
                ],
                background: 'white',
                zIndex: 1,
                transition: {
                  duration: 0.5
                }}}>
                <div className="card-content">
                  <div className="card-body">
                    <h4 className="card-title">Ant Game</h4>
                    <h6 className='card-subtitle text-primary'>Python</h6>
                    <section classNamae = "card-text text-dark text-left">
                    <p>A tower defense game where multiple variations of ants must be purchased and set up appropriately in order to defend the queen ant from the bees</p>
                    <li>Inspired by Bloons Tower Defense</li>
                    </section>
                  </div>
                </div>
              </motion.div>
              </a>
            </div>
            </div>
            <div className="row mt-3 mx-2 text-center container-fluid">
            <div className="col-xl-3 col-sm-6 col-12"> 
            <a href = "//github.com/srinichrocks/BasicReactProject" target = "_blank" rel = "noreferrer">
            <motion.div className="card text-center shadow rounded h-100" whileHover={{
                scale: [1,1.1,1.05],
                position: 'relative',
                rotate: [0,10,-10,0,],
                filter: [
                  'hue-rotate(0)',
                  'hue-rotate(360deg)',
                  'hue-rotate(45deg)',
                  'hue-rotate(0)',
                ],
                background: 'white',
                zIndex: 1,
                transition: {
                  duration: 0.5
                }}}>
                <div className="card-content">
                  <div className="card-body text-black">
                    <h4 className="card-title">Shopping Cart</h4>
                    <h6 className='card-subtitle text-primary'>JavaScript, HTML, CSS, React</h6>
                    <section className='card-text text-dark text-left'>
                    <p>Built a shopping cart web application using React front-end library</p>
                  </section>
                  </div>
                </div>
              </motion.div>
            </a>
            </div>
            <div className="col-xl-3 col-sm-6 col-12"> 
            <a href = "https://github.com/srinichrocks/data8-projects" target = "_blank" rel = "noreferrer">
            <motion.div className="card text-center shadow rounded h-100" whileHover={{
                scale: [1,1.1,1.05],
                position: 'relative',
                rotate: [0,10,-10,0,],
                filter: [
                  'hue-rotate(0)',
                  'hue-rotate(360deg)',
                  'hue-rotate(45deg)',
                  'hue-rotate(0)',
                ],
                background: 'white',
                zIndex: 1,
                transition: {
                  duration: 0.5
                }}}>
                <div className="card-content">
                  <div className="card-body text-black">
                    <h4 className="card-title">Classification/Pattern Matching/Data Analysis</h4>
                    <h6 className='card-subtitle text-primary'>Python(Jupyter Notebook)</h6>
                    <section className='card-text text-dark text-left'>
                    <p>First project is focused on analyzing data from gapminder and examining some of the factors influencing population growth and their change over the years</p>
                    <p>Analysis primarily revolves around Bangladesh but also checked to see whether trends are specific to the countery or is a general pattern worldwide</p>
                    <p>Second project is centered around investigating trends in different cities' temperature and precipitation over time in order to address potential issues surrounding climate change</p>
                    <p>Third project involves building a classification model which guesses whether a movie is comedy or thriller and has a practical implementation of a k-nearest-neighbors classifier which is then tested on the data </p>
                  </section>
                  </div>
                </div>
              </motion.div>
            </a>
            </div>
            
          </div>
          <Footer/>
   </section>
  );
}

