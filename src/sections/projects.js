/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
// import Alphabet from '../assets/key-feature/rsz_alphabet.jpg';
import { TiCalculator, TiSortAlphabeticallyOutline} from 'react-icons/ti';
import {FiGithub} from 'react-icons/fi';
import {BiFace} from 'react-icons/bi';
const data = [
  {
    id: 1,
    imgSrc: <TiSortAlphabeticallyOutline size = {70} key = "alphabet"/>,
    altText: 'Alphabet Game',
    title: 'Alphabet Game',
    text:
      <li>Fun game for kids(and adults) where you identify letters in order to gain points and earn yourself a spot on the leaderboard.</li>
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
    </section>
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
      </section>
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
    </section>
  },
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
            <section sx>
            {item.imgSrc}
          <center>
          <FeatureCardColumn
          key = {item.id}
          alt = {item.altText}
          title = {item.title}
          text = {item.text}
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
};
