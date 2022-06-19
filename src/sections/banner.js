/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'react-scroll';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import BannerImg from 'assets/sripic.png';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';
import { FaLinkedinIn, FaGithub} from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const social = [
  {
    path: '//www.linkedin.com/in/srinidhi-raghavendran-a94834164/',
    icon: <FaLinkedinIn />,
  },
  {
    path: '//www.github.com/srinichrocks/',
    icon: <FaGithub />,
  },
];

export default function Banner() {
  return (
    <section sx = {styles.banner} id = "home">
      <Container sx = {styles.banner.container}>
        <Box sx = {styles.banner.contentBox}>
          <Typewriter variant = "heroPrimary"
          onInit={(typewriter) => {
            typewriter
            .typeString("welcome")
            .pauseFor(500).start()
            .deleteAll()
            .typeString("to my personal website")
            .deleteAll()
            .pauseFor(500)
            .start()
            .typeString("welcome")
            ;
          }}/>
          <Heading as = "h1" variant = "heroPrimary">
            srinidhi raghavendran
          </Heading>
          <Text as= "p" variant = "heroSecondary">
          A UC Berkeley Student pursing a double major in Computer Science and Data Science
          </Text>
          <Box sx = {styles.social}>
          {social.map((socialItem,i) => (
                  <Box as = "span" key = {i} sx = {styles.social.icon}>
                    <a href={socialItem.path} rel={"noreferrer"} target={"_blank"}>{socialItem.icon}</a>
                    </Box>
                ))}  
              </Box>
          <Link to='about-me'>
          <Button variant = "primary" path = "about-me" smooth = {true} duration = {500} spy={true}>About Me</Button>
          </Link>
        </Box>
        <Box sx = {styles.banner.imageBox}>
            <Image src={BannerImg} alt = 'banner'/>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 24,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
      '&:hover': {
        color: 'secondary',
      },
      size: "3em"
    },
  },
};