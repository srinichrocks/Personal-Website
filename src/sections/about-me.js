/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Button, Box} from 'theme-ui';
import {Link} from 'react-scroll'
import SectionHeader from '../components/section-header';
import {FaBasketballBall, FaGuitar, FaGamepad, FaBed} from 'react-icons/fa';
import {motion} from "framer-motion"


const social = [
  {
    icon: <FaBasketballBall />,
  },
  {
    icon: <FaGuitar />,
  },
  {
    icon: <FaGamepad/>
  },
  {
    icon: <FaBed/>
  }
];

export default function AboutMe() {
  return (
   <div sx = {{variant: "section.keyFeature"}}id = "about-me" >
     <Container css = {{justifyContent: 'center'}}>
     {social.map((socialItem,i) => (
                  <Box as = "span" key = {i} sx = {styles.icon}>
                    {socialItem.icon}
                    </Box>
                ))}
       <SectionHeader 
       slogan = "Who am I" 
       title = "Background"
       />
       <text fontSize={"14px"}>Hello! I'm Sri, a second-year Computer Science & Data Science undergraduate at the University of California, Berkeley. My interests are centered mainly around mathematics and computer science. I competed in many math competitions throughout middle and high school and also started my own non-profit in high school in order to teach computer science fundamentals to kids.</text>
       <br/>
       <br/>
       <text>Currently, I am interested in generating advanced statistical models to address societal issues through the use of my cs/ds skills. I am also interested in developing full-stack applications through the use of modern front-end libraries like react and next and databases like MongoDB.</text>
       <br/>
       <br/>
       <text>In my free time, I play the guitar, basketball, videogames (and sleep). I also played in the USA minor league for Cricket and was in the top 50 for the USA u19 squad. If my interests align with yours, feel free to contact me at sraghavendran17@berkeley.edu. </text>
     <text>Below you can find some of the projects I have worked on as well as some of my skills and teaching resources. </text>
     </Container>
     <Container css = {{textAlign: 'center'}}>
     <Link
              activeClass='active'
              to='projects'
              spy={true}
              smooth = {true}
              offset = {-70}
              duration = {500}
            >
              <Button variant = "secondary">See my work!</Button>
          </Link>
     </Container>
   </div>
  );
}

const styles = {
  icon: {
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'text',
    fontSize: "40px",
    mr: '20px',
    transition: 'all 0.25s',
    cursor: 'pointer',
    ':last-child': {
      mr: '0',
    },
    '&:hover': {
      color: 'secondary',
    },
    size: "6em",
    margin: "10%"
  },
}