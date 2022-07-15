/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import Header from './header';
import Footer from './footer';

export default function Projects() {
  return (
   <section id = "projects">
     <Header/>
     <p className='h1 text-center mt-2'>Featured Projects</p>
     <hr/>
     <div className='row mt-3 mx-2 text-center'>
       <div className='col-sm-4'>
       <a href = "//github.com/srinichrocks/Gitlet" target = "_blank">
              <div class="card text-center shadow rounded h-100">
                <div class="card-content">
                  <div class="card-body">
                    <h4 class="card-title">Github Lite</h4>
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
              </div>
              </a>
       </div>
       <div className='col-sm-4'>
       {/* <a href = "//github.com/srinichrocks/RPN-Assignment" target = "_blank"> */}
              <div class="card text-center shadow rounded h-100">
                <div class="card-content">
                  <div class="card-body">
                    <h4 class="card-title">Utility App</h4>
                    <h6 className='card-subtitle text-primary'>Java</h6>
                    <section className='card-text text-left text-dark'>
                    <p>Supports text translation, text summarization, sentiment analysis, NER, language detection and even dad jokes</p>
                  </section>
                  <button type = "button" className = "btn btn-dark mt-2" disabledtarget = "_blank">In progress</button>
                  </div>
                </div>
              </div>
              {/* </a> */}
          
       </div>
       <div className='col-sm-4'>
       <a href = "//github.com/srinichrocks/AlphabetGame" target = "_blank">
              <div class="card text-center shadow rounded h-100">
                <div class="card-content">
                  <div class="card-body">
                    <h4 class="card-title">Alphabet Game</h4>
                    <h6 className='card-subtitle text-primary'>Java, JavaFX</h6>
                    <section className='card-text text-left text-dark'>
        <li key = "kaka1">Fun game for kids(and adults) where you identify letters in order to gain points and earn yourself a spot on the leaderboard</li>
        <li key = "kaka2">Employed Firebase to store game information for every unique user</li>
      </section>
                  </div>
                </div>
              </div>
              </a>
       </div>
     </div>
     <p className='h1 text-center mt-5 pt-2'>Side Projects</p>
     <hr/>
     <div class="row mt-3 mx-2 container-fluid">
            <div class="col-md-3"> 
            <a href = "//github.com/srinichrocks/RPN-Assignment" target = "_blank">
              <div class="card text-center shadow rounded h-100">
                <div class="card-content">
                  <div class="card-body">
                    <h4 class="card-title">RPN Calculator</h4>
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
              </div>
              </a>
            </div>
            <div class="col-md-3"> 
            <a href = '//github.com/srinichrocks/Enigma' target = "_blank">
              <div class="card text-center h-100 shadow rounded">
                <div class="card-content">
                  <div class="card-body">
                    <h4 class="card-title">Enigma</h4>
                    <h6 className='card-subtitle text-primary'>Java</h6>
                    <section className = "card-text text-dark text-left">
                      <p>The Enigma machine that Germany used during World War II to encrypt its military communications</p>
                      <li>Used encryption libraries and advanced algorithms</li>
                    </section>
                  </div>
                </div>
              </div>
              </a>
            </div>
            <div class="col-md-3"> 
            <a href = "//github.com/srinichrocks/SchemeInterpreter" target = "_blank">
              <div class="card text-center shadow rounded h-100">
                <div class="card-content">
                  <div class="card-body">
                    <h4 class="card-title">Scheme Interpreter</h4>
                    <h6 className='card-subtitle text-primary'>Python, Scheme</h6>
                    <section className = "card-text text-dark text-left">
                    <p>An interpreter identical in functionalities and design to that of the python programming language built using scheme</p>    
                    </section>
                  </div>
                </div>
              </div>
              </a>
            </div>
            <div class="col-md-3"> 
            <a href = "//github.com/srinichrocks/Blocks" target = "_blank">
              <div class="card text-center shadow rounded h-100">
                <div class="card-content">
                  <div class="card-body">
                    <h4 class="card-title">Blocks Game</h4>
                    <h6 className='card-subtitle text-primary'>Java, Swing</h6>
                    <section className = "card-text text-left text-dark">
                    <li>An interactive game where one is presented with a grid of square cells (initially empty) and a set of a number of pieces formed from configurations of blocks arranged to cover empty cells of the grid</li>
      <li>After each piece is placed, filled rows and columns are cleared and keep playing until no pieces can fit anywhere on board</li>
                    </section>
                  </div>
                </div>
              </div>
              </a>
            </div>
            </div>
            <div class="row mt-3 mx-2 container-fluid">
            <div class="col-xl-3 col-sm-6 col-12"> 
            <a href = "//github.com/srinichrocks/nlpwork" target = "_blank">
              <div class="card text-center shadow rounded h-100">
                <div class="card-content">
                  <div class="card-body">
                    <h4 class="card-title">NLP Summarization</h4>
                    <h6 className='card-subtitle text-primary'>Python</h6>
                    <section className='card-text text-dark text-left'>
                    <p>Generated summaries of documents using BERT and tfidf vectors/transformers</p>
                  </section>
                  </div>
                </div>
              </div>
              </a>
            </div>
            <div class="col-xl-3 col-sm-6 col-12"> 
            <a href = "//github.com/srinichrocks/CatsGame" target = "_blank">
              <div class="card text-center shadow rounded h-100">
                <div class="card-content">
                  <div class="card-body">
                    <h4 class="card-title">Cats Game</h4>
                    <h6 className='card-subtitle text-primary'>Python</h6>
                    <section className = "card-text text-dark text-left">
                    <p>A game that measures typing speed and also has a typing autocorrect functionality to correct the spelling of a word after a user types it</p>
                    <li>Inspired by Typeracer</li>
                    </section>
                  </div>
                </div>
              </div>
              </a>
            </div>
            <div class="col-xl-3 col-sm-6 col-12"> 
            <a href ="//github.com/srinichrocks/hog" target = "_blank">
              <div class="card text-center shadow rounded h-100">
                <div class="card-content">
                  <div class="card-body">
                    <h4 class="card-title">Hog Game</h4>
                    <h6 className='card-subtitle text-primary'>Python</h6>
                    <section className = "card-text text-left text-dark">
                    <p>An interactive game consisting of a simulator and multiple strategies for the dice game hog</p>
      <li>Inspired by the dice game pig</li>
                    </section>
                  </div>
                </div>
              </div>
              </a>
            </div>
            <div class="col-xl-3 col-sm-6 col-12"> 
            <a href = "//github.com/srinichrocks/AntsGame" target = "_blank">
              <div class="card text-center shadow rounded h-100">
                <div class="card-content">
                  <div class="card-body">
                    <h4 class="card-title">Ant Game</h4>
                    <h6 className='card-subtitle text-primary'>Python</h6>
                    <section classNamae = "card-text text-dark text-left">
                    <p>A tower defense game where multiple variations of ants must be purchased and set up appropriately in order to defend the queen ant from the bees</p>
                    <li>Inspired by Bloons Tower Defense</li>
                    </section>
                  </div>
                </div>
              </div>
              </a>
            </div>
            </div>
            <div class="row mt-3 mx-2 text-center container-fluid">
            <div class="col-xl-3 col-sm-6 col-12"> 
            <a href = "//github.com/srinichrocks/BasicReactProject" target = "_blank">
            <div class="card text-center shadow rounded h-100">
                <div class="card-content">
                  <div class="card-body text-black">
                    <h4 class="card-title">Shopping Cart</h4>
                    <h6 className='card-subtitle text-primary'>JavaScript, HTML, CSS, React</h6>
                    <section className='card-text text-dark text-left'>
                    <p>Built a shopping cart web application using React front-end library</p>
                  </section>
                  </div>
                </div>
              </div>
            </a>
            </div>
            <div class="col-xl-3 col-sm-6 col-12"> 
              <div class="card h-100 shadow rounded">
                <div class="card-content">
                  <div class="card-body">
                    <h4 class="card-title text-center">Mass Shooting</h4>
                    <h6 className='card-subtitle text-center text-primary'>Python</h6>
                    <section className = "card-text text-left text-dark">
                    <li>In order to truly figure out the real misconceptions behind mass shootings and the perpetrators of them, I decided to dive hands-on into a kaggle dataset of mass shootings from 2016-2021</li>
                    <li>I aimed to figure out trends amongst the presence of mental health issues, race as well as the number of people affected in each shooting</li>
                    <li>Utilized John Denero's notorious "datascience" library(used officially in UC Berkeley's curriculum as well) in order to conduct classification, regression tests and prediction on the dataset</li>
                    </section>
                    <button type = "button" className = "btn btn-dark mt-2" disabledtarget = "_blank">In progress</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
   </section>
  );
}

