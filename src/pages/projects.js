/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';
import Header from './header';
import Footer from './footer';

export default function Projects() {
  const projectsByLanguage = {
    'Java': [
      {
        title: 'Github Lite',
        description: 'Implemented a smaller version control system modeling that of Github with functionalities like init, add, commit, and more.',
        link: '//github.com/srinichrocks/Gitlet'
      },
      {
        title: 'Alphabet Game',
        description: 'A fun game for kids and adults alike, identifying letters to gain points and earn a spot on the leaderboard.',
        link: '//github.com/srinichrocks/AlphabetGame'
      },
      {
        title: 'RPN Calculator',
        description: 'An RPN calculator capable of basic arithmetic operations such as addition, subtraction, multiplication, and division.',
        link: '//github.com/srinichrocks/RPN-Assignment'
      },
      {
        title: 'Enigma',
        description: 'A simulation of the Enigma machine used during WWII, featuring encryption libraries and algorithms.',
        link: '//github.com/srinichrocks/Enigma'
      },
      {
        title: 'Blocks Game',
        description: 'A puzzle game where players fill a grid with different shaped blocks, clearing rows and columns to score.',
        link: '//github.com/srinichrocks/Blocks'
      }
    ],
    'Python': [
      {
        title: 'Mass Shootings Analysis',
        description: 'Statistical analysis of mass shootings in the USA with data visualization and predictive modeling.',
        link: '//github.com/srinichrocks/Mass-Shootings/blob/master/MassShootings.ipynb'
      },
      {
        title: 'NLP Summarization',
        description: 'Used BERT and tf-idf vectors/transformers to generate document summaries.',
        link: '//github.com/srinichrocks/nlpwork'
      },
      {
        title: 'Cats Game',
        description: 'A typing game measuring speed and accuracy, with an autocorrect feature for misspelled words.',
        link: '//github.com/srinichrocks/CatsGame'
      },
      {
        title: 'Hog Game',
        description: 'An interactive game involving strategies and dice rolls, based on the classic game Pig.',
        link: '//github.com/srinichrocks/hog'
      },
      {
        title: 'Ant Game',
        description: 'A tower defense game where players use ants with various abilities to protect their queen from bees.',
        link: '//github.com/srinichrocks/AntsGame'
      },
      {
        title: 'Unethical House Pricing Analysis',
        description: 'Investigated unfair house pricing practices using data analysis and machine learning techniques.',
        link: 'https://drive.google.com/drive/folders/1LEassgLHcbQIbhMjpa5xoHlvirfbCn7-?usp=sharing'
      }
    ],
    'GoLang': [
      {
        title: 'Encrypted File Sharing System',
        description: 'Developed a secure file-sharing platform capable of handling over 1 million files for persistent data storage and cryptographic operations.',
        link: '//github.com/srinichrocks/EncryptedFileSharingSystem' // Update with the correct link
      },
    ],
    'HTML/CSS/JavaScript': [
      {
        title: 'NLP Analysis',
        description: 'A full-stack application supporting various NLP features like sentiment analysis, entity recognition, and language detection.',
        link: 'https://nlpanalysis.vercel.app/'
      },
      {
        title: 'Shopping Cart',
        description: 'Developed a shopping cart feature using React.',
        link: '//github.com/srinichrocks/BasicReactProject'
      },
      {
        title: 'SriEcommerce - Clothing E-commerce Website(In Progress)',
        description: 'Developing a full-featured e-commerce website for clothing, featuring user authentication, product listings, shopping cart functionality, and payment processing.',
        link: 'https://github.com/srinichrocks/SriEcommerce'
      },
    ],
    'C': [
      {
        title: 'Snake Game',
        description: 'Implemented the classic Snake game in C with keyboard controls and score tracking.',
        link: 'https://github.com/61c-student/fa23-proj1-srinichrocks'
      },
      {
        title: 'Exploiting Memory Safety Vulnerabilities',
        description: 'Hacked into multiple C programs with memory vulnerabilities using buffer overflows, format string manipulations and ret2ret(using nop sleds).'
      },
    ],
    'SQL': [
      {
        title: 'Data Analysis Projects(3)',
        description: 'Performed various data analysis tasks and visualizations using SQL queries.',
        link: 'https://github.com/srinichrocks/data8-projects'
      }
    ],
    'Logism/RISC-V': [
      {
        title: 'Handwritten Digit Classifier',
        description: 'Wrote RISC-V assembly code to classify handwritten digits using machine learning algorithms. The project focused on RISC-V assembly conventions, function calls, heap memory usage, file interactions, and testing.',
        link: 'https://github.com/61c-student/fa23-proj1-srinichrocks'
      },
      {
        title: 'CPU Design',
        description: 'Created a modular CPU in Logism that interprets and executes 15 RISC-V instructions.',
        link: '//github.com/srinichrocks/CPUDesign' // Update with the correct link
      },
    ],
  };
  

  return (
    <section id="projects">
      <Header />
      <p className='h2 text-center mt-2'>Featured Projects</p>
      {/* Clickable box for Computer Vision Projects with dark background and white text */}
      <motion.div
        className="cv-projects-box"
        whileHover={{ scale: 1.05 }}
        onClick={() => window.location.href = '/computer-vision'}
        sx={{
          width: 'calc(100% - 40px)',  // Adjust width with space on left and right
          padding: '20px',
          backgroundColor: '#333',  // Dark background color
          borderRadius: '5px',
          cursor: 'pointer',
          textAlign: 'center',
          margin: '20px auto',  // Center the box and add top/bottom margin
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          color: 'white',  // White text color
          transition: 'all 0.3s ease'
        }}
      >
        <h3>Computer Vision Projects</h3>
      </motion.div>
      <hr />

      {Object.entries(projectsByLanguage).map(([language, projects]) => (
        <div key={language}>
          <h3 className='h4 text-center mt-4'>{language}</h3>
          <div className='row mt-3 mx-2 text-center'>
            {projects.map((project, index) => (
              <div className='col-sm-6 col-md-4 col-lg-3' key={index}>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <motion.div className="card text-center shadow rounded h-100" whileHover={{
                    scale: [1, 1.1, 1.05],
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}>
                    <div className="card-content">
                      <div className="card-body">
                        <h4 className="card-title">{project.title}</h4>
                        <h6 className='card-subtitle text-primary'>{language}</h6>
                        <p className='card-text text-dark'>{project.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}

      <Footer />
    </section>
  );
}
