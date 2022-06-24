import React, { useState } from 'react';
import { Box, Button } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'components/drawer';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link } from 'react-scroll';
import { FaLinkedinIn, FaGithub, FaRocket} from 'react-icons/fa';
import menuItems from './header.data';

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

export default function MobileDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
   <Drawer
   width="320px"
   drawerHandler = {
     <Box sx =  {styles.handler}>
       <IoMdMenu size = "26px"/>
     </Box>
   }
   open = {isDrawerOpen}
   toggleHandler = {() => setIsDrawerOpen((prevState) => !prevState)}
   closeButton = {<IoMdClose size = "24px" color = "#00000"/>}
   drawerStyle = {styles.drawer}
   closeBtnStyle = {styles.close}
   >
     <FaRocket size = "2em" color = "purple"/>
     <Scrollbars autoHide>
        <Box sx = {styles.content}>
          <Box sx = {styles.menu}>
            {menuItems.map((menuItem, i) => (
              <Link
                activeClass='active'
                to={menuItem.path}
                spy={true}
                smooth = {true}
                offset = {-70}
                duration = {500}
                key = {i}
              >
                {menuItem.label}
              </Link>
            ))}
            <Link to='resume' spy={true}
                smooth = {true}
                offset = {-70}
                duration = {500}>
          Resume
          </Link>
          </Box>
          <Box sx = {styles.menuFooter}>
              <Box sx = {styles.social}>
                {social.map((socialItem,i) => (
                  <Box as = "span" key = {i} sx = {styles.social.icon}>
                    <a href={socialItem.path} rel={"noreferrer"} target={"_blank"}>{socialItem.icon}</a>
                    </Box>
                ))}
              </Box>
          </Box>
        </Box>
     </Scrollbars>
   </Drawer>
  );
};

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',

    '@media screen and (min-width: 1024px)': {
      display: 'none',
    },
  },

  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dark',
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'text_white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary',
      },
      '&.active': {
        color: 'secondary',
      },
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
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
      // fontSize: 14,
      mr: '20px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
      '&:hover': {
        color: 'secondary',
      },
      size: "6em"
    },
  },

  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
  },
};