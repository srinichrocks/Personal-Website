/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import {CgWebsite} from 'react-icons/cg'
// import Alphabet from '../assets/key-feature/rsz_alphabet.jpg';
import { TiCalculator, TiSortAlphabeticallyOutline, TiDocumentText} from 'react-icons/ti';
import {FiGithub} from 'react-icons/fi';
import {BiFace} from 'react-icons/bi';
import {GiPistolGun, GiAnt} from 'react-icons/gi'
import {AiOutlineCodepenCircle, AiOutlineBlock, AiOutlineShoppingCart} from 'react-icons/ai'
import {RiParenthesesFill} from 'react-icons/ri'
import {FaCat, FaDiceSix} from 'react-icons/fa'
import {motion} from 'framer-motion'
const data = [
  {
    id: 1,
    imgSrc: <TiSortAlphabeticallyOutline size = {70} key = "alphabet"/>,
    altText: 'Alphabet Game',
    title: 'Alphabet Game',
    text:
      <section>
        <li key = "kaka1">Fun game for kids(and adults) where you identify letters in order to gain points and earn yourself a spot on the leaderboard</li>
        <li key = "kaka2">Employed Firebase to store game information for every unique user</li>
      </section>,
    link: "//github.com/srinichrocks/AlphabetGame",
    languages: "Java, JavaFX"
  
  },
  {
    id: 2,
    imgSrc: <TiCalculator size = {70} key = "calc"/>,
    altText: 'RPN Calculator',
    title: 'RPN Calculator',
    text:
    <section>
      <li>
      RPN calculator is a calculator which is capable of integer math that supports 4 operations:
    </li>
    <ul>
      <li>addition</li>
      <li>subtraction</li>
      <li>multiplication</li>
      <li>division</li>
    </ul>
    <li>Calculates using a postfix expression which is much easier for a computer to evaluate</li>
    </section>,
    link: "//github.com/srinichrocks/RPN-Assignment",
    languages: "Java"
  },
  {
    id: 3,
    imgSrc: <FiGithub size = {70} key = "git"/>,
    altText: 'Github Lite',
    title: 'Github Lite',
    text:
      <section>
        <li>Implemented a smaller version control system modeling that of Github</li>
        <li>Included many of the same functionalities:</li>
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
      </section>,
      link: "//github.com/srinichrocks/Gitlet",
      languages: "Java"
  },
  {
    id: 4,
    imgSrc: <CgWebsite size = {70} key = "website"/>,
    altText: 'Personal Website',
    title: 'Personal Website',
    text:
    <section>
      <li>Developed this website</li>
      <li>Used Next.js/React for front-end as well as HTML, CSS and Javascript</li>
      <li>Used Node.js and nodemailer for backend implementations</li>
    </section>,
    link: "//github.com/srinichrocks/FacialRecognitionSystem",
    languages: "HTML, CSS, Javascript, React, NextJS"
  },
  {
    id: 5,
    imgSrc: <AiOutlineCodepenCircle size = {70} key = "enigma"/>,
    altText: 'Enigma',
    title: 'Enigma',
    text:
    <section>
      <li>The Enigma machine that Germany used during World War II to encrypt its military communications</li>
      <li>Used encryption libraries and advanced algorithms</li>
    </section>,
    link: "//github.com/srinichrocks/Enigma",
    languages: "Java"
  },
  {
    id: 6,
    imgSrc: <RiParenthesesFill size = {70} key = "scheme"/>,
    altText: 'Scheme Interpreter',
    title: 'Scheme Interpreter',
    text:
    <section>
      <li>An interpreter identical in functionalities and design to that of the python programming language built using scheme</li>    
      </section>, 
    link: "//github.com/srinichrocks/SchemeInterpreter",
    languages: "Python, Scheme"
  },
  {
    id: 7,
    imgSrc: <AiOutlineBlock size = {70} key = "blocks"/>,
    altText: 'Blocks Game',
    title: 'Blocks Game',
    text:
    <section>
      <li>An interactive game where one is presented with a grid of square cells (initially empty) and a set of a number of pieces formed from configurations of blocks arranged to cover empty cells of the grid</li>
      <li>After each piece is placed, filled rows and columns are cleared and keep playing until no pieces can fit anywhere on board</li>
    </section>,
    link: "//github.com/srinichrocks/Blocks",
    languages: "Java, JavaFX"
  },
  {
    id: 8,
    imgSrc: <TiDocumentText size = {70} key = "text"/>,
    altText: 'NLP Summarization',
    title: 'NLP Summarization',
    text:
    <section>
      <li>Generated summaries of documents using BERT and tfidf vectors/transformers</li>
    </section>,
    link: "//github.com/srinichrocks/nlpwork",
    languages: "Python"
  },
  {
    id: 9,
    imgSrc: <FaCat size = {70} key = "cats"/>,
    altText: 'Cats Game',
    title: 'Cats Game',
    text:
    <section>
      <li>A game that measures typing speed and also has a typing autocorrect functionality to correct the spelling of a word after a user types it</li>
      <li>Inspired by Typeracer</li>
    </section>,
    link: "//github.com/srinichrocks/CatsGame",
    languages: "Python"
  },
  {
    id: 10,
    imgSrc: <GiAnt size = {70} key = "ants"/>,
    altText: 'Ants Game',
    title: 'Ants Game',
    text:
    <section>
      <li>A tower defense game where multiple variations of ants must be purchased and set up appropriately in order to defend the queen ant from the bees</li>
      <li>Inspired by Bloons Tower Defense</li>
    </section>,
    link: "//github.com/srinichrocks/AntsGame",
    languages: "Python"
  },
  {
    id: 11,
    imgSrc: <FaDiceSix size = {70} key = "hogs"/>,
    altText: 'Hog Game',
    title: 'Hog Game',
    text:
    <section>
      <li>An interactive game consisting of a simulator and multiple strategies for the dice game hog</li>
      <li>Inspired by the dice game pig</li>
    </section>,
    link: "//github.com/srinichrocks/hog",
    languages: "Python"
  },
  {
    id: 12,
    imgSrc: <AiOutlineShoppingCart size = {70} key = "shopping"/>,
    altText: 'Shopping Cart',
    title: 'Shopping Cart',
    text:
    <section>
      <li>Built a shopping cart web application using React front-end library</li>
    </section>,
    link: "//github.com/srinichrocks/BasicReactProject",
    languages: "JavaScript, HTML, CSS, React"
  },
  {
    id: 13,
    imgSrc: <GiPistolGun size = {70} key = "gun"/>,
    altText: 'Mass Shootings',
    title: 'Mass Shootings',
    text:
    <section>
      <li>In order to truly figure out the real misconceptions behind mass shootings and the perpetrators of them, I decided to dive hands-on into a kaggle dataset of mass shootings from 2016-2021</li>
      <li>I aimed to figure out trends amongst the presence of mental health issues, race as well as the number of people affected in each shooting</li>
      <li>Utilized John Denero's notorious "datascience" library(used officially in UC Berkeley's curriculum as well) in order to conduct classification, regression tests and prediction on the dataset</li>
    </section>,
    languages: "Python"
  },
  
  
];

export default function Projects() {
  return (
   <section sx = {{variant: "section.keyFeature"}}id = "projects">
     <Container>
       <SectionHeader  
       title = "Projects"
       slogan = "More to come!"
       />
       <Grid sx = {styles.grid}>
        {data.map((item) => (
          <center key = {item.id}>
            <section>
            <section sx = {styles.img}>
            {item.imgSrc}
            </section>
          <center>
          <FeatureCardColumn
          key = {item.id}
          alt = {item.altText}
          title = {item.title}
          text = {item.text}
          link = {item.link}
          languages = {item.languages}
          />
          </center>
          </section>
          </center>
        ))}
       </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
  img: {
    color: "purple"
  }
};
