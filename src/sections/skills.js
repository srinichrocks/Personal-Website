/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Rating from 'components/rating';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';

const data = [
  {
    id: 1,
    title: 'Java',
    review: 5,
  },
  {
    id: 2,
    title: 'Python',
    review: 5,
  },
  {
    id: 3,
    title: 'Scheme',
    review: 5,
  },
  {
    id: 4,
    title: 'HTML',
    review: 4,
  },
  {
    id: 5,
    title: 'CSS',
    review: 4,
  },
  {
    id: 6,
    title: 'JavaScript',
    review: 4,
  },
  {
    id: 7,
    title: 'Linux',
    review: 4,
  },
  {
    id: 8,
    title: 'DOS Batch Language',
    review: 4,
  },
];
const dataTwo = [
  {
    id: 1,
    title: 'Next.js(React)',
    review: 5,
  },
  {
    id: 2,
    title: 'OpenCV',
    review: 5,
  },
  {
    id: 3,
    title: 'BERT',
    review: 5,
  },
  {
    id: 4,
    title: 'Sentiment Analysis',
    review: 5,
  },
  {
    id: 5,
    title: 'POS Tagging',
    review: 5,
  },
  {
    id: 6,
    title: 'NER',
    review: 3,
  },
  {
    id: 7,
    title: 'AWS',
    review: 3,
  },
]
const dataThree = [
  {
    id: 1,
    title: 'Microsoft Word',
    review: 5,
  },
  {
    id: 2,
    title: 'Microsoft PowerPoint',
    review: 5,
  },
  {
    id: 3,
    title: 'Google Docs',
    review: 5,
  },
  {
    id: 4,
    title: 'Google Slides',
    review: 5,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const carouselParams = {
  additionalTransfrom:0,
  arrows:false,
  autoPlaySpeed:3000,
  centerMode:false,
  className:"",
  containerClass:"carousel-container",
  customButtonGroup:<ButtonGroup />,
  dotListClass:"",
  draggable: true,
  focusOnSelect:false,
  infinite:true,
  itemClass:"",
  keyBoardControl: true,
  minimumTouchDrag:80,
  renderButtonGroupOutside: true,
  renderDotsOutside:false,
  responsive:responsive,
  showDots:false,
  sliderClass:"",
  slidesToSlide:1,
}

export default function Skills() {
  return (
   <section id = "skills" sx = {{variant: 'section.testimonial'}}>
     <Container css = {{textAlign: 'center'}}>
      <SectionHeader 
      slogan = "What I can do for you"
      title = "Skills"
      />
     </Container>
     <Container css = {{textAlign: 'center'}}>
     <Box sx = {styles.carouselWrapper} css = {{textAlign: 'center'}}>
     <Container css = {{textAlign: 'center'}}>
       <Text as = "h1">
         Languages
       </Text>
     </Container>
       <Carousel {... carouselParams}>
        {data.map((item) => (
          <Box sx = {styles.reviewCard} key = {item.sliderClass}>
            <Rating rating = {item.review}/>
            <Heading as = "h3" sx = {styles.title}>
              {item.title}
            </Heading>
          </Box>
        ))}
       </Carousel>
       <br/>
       <Container css = {{textAlign: 'center'}}>
       <Text as = "h1">
         Libraries/Techniques
       </Text>
     </Container>
       {/* <Text as = "h1">Libraries/Techniques</Text> */}
       <Carousel {... carouselParams}>
        {dataTwo.map((item) => (
          <Box sx = {styles.reviewCard} key = {item.sliderClass}>
            <Rating rating = {item.review}/>
            <Heading as = "h3" sx = {styles.title}>
              {item.title}
            </Heading>
          </Box>
        ))}
       </Carousel>
       <br/>
       <Container css = {{textAlign: 'center'}}>
       <Text as = "h1">
         Presentation
       </Text>
     </Container>
       <Carousel {... carouselParams}>
        {dataThree.map((item) => (
          <Box sx = {styles.reviewCard} key = {item.sliderClass}>
            <Rating rating = {item.review}/>
            <Heading as = "h3" sx = {styles.title}>
              {item.title}
            </Heading>
          </Box>
        ))}
       </Carousel>
     </Box>
     </Container>

   </section>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'primary',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
};
