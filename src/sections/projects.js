/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
// import Alphabet from '../assets/key-feature/rsz_alphabet.jpg';
import { TiCalculator, TiSortAlphabeticallyOutline} from 'react-icons/ti';
import {FiGithub} from 'react-icons/fi';
import {BiFace} from 'react-icons/bi';
import {GiPistolGun} from 'react-icons/gi'
import {AiOutlineCodepenCircle, AiOutlineBlock} from 'react-icons/ai'
import {RiParenthesesFill} from 'react-icons/ri'
const data = [
  {
    id: 1,
    imgSrc: <TiSortAlphabeticallyOutline size = {70} key = "alphabet"/>,
    altText: 'Alphabet Game',
    title: 'Alphabet Game',
    text:
      <section>
        <li>Fun game for kids(and adults) where you identify letters in order to gain points and earn yourself a spot on the leaderboard.</li>,
        <li>Employed Firebase to store game information for every unique user.</li>
      </section>,
    link: "//github.com/srinichrocks/AlphabetGame"
  
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
    <li>Calculates using a postfix expression which is much easier for a computer to evaluate.</li>
    </section>,
    link: "//github.com/srinichrocks/RPN-Assignment"
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
      link: "//github.com/srinichrocks/Gitlet"
  },
  {
    id: 4,
    imgSrc: <BiFace size = {70} key = "face"/>,
    altText: 'Facial Recognition System',
    title: 'Facial Recognition System',
    text:
    <section>
      <li>Identifies every human face in the image and draws boxes around them</li>
      <li>Developed in Python using OpenCV library; Utilized Sobel and Laplace edge detection</li>
      <li>Created virtual environments and handled version issues through the use of Miniconda</li>
    </section>,
    link: "//github.com/srinichrocks/FacialRecognitionSystem"
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
    link: "//github.com/srinichrocks/Enigma"
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
    link: "//github.com/srinichrocks/SchemeInterpreter"
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
    link: "//github.com/srinichrocks/Blocks"
  },
  {
    id: 8,
    imgSrc: <GiPistolGun size = {70} key = "gun"/>,
    altText: 'Mass Shootings',
    title: 'Mass Shootings',
    text:
    <section>
      <li>In order to truly figure out the real misconceptions behind mass shootings and the perpetrators of them, I decided to dive hands-on into a kaggle dataset of mass shootings from 2016-2021</li>
      <li>I aimed to figure out trends amongst the presence of mental health issues, race as well as the number of people affected in each shooting</li>
      <li>Utilized John Denero's notorious "datascience" library(used officially in UC Berkeley's curriculum as well) in order to conduct classification, regression tests and prediction on the dataset</li>
    </section>
  }
];

export default function Projects() {
  return (
   <section sx = {{variant: "section.keyFeature"}}id = "projects">
     <Container>
       <SectionHeader  
       title = "Projects"
       />
       <Grid sx = {styles.grid}>
        {data.map((item) => (
          <center>
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
