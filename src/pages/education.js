/** @jsx jsx */
import { jsx, Heading } from 'theme-ui';
import Footer from './footer';
import Header from './header';
// import BannerImg from 'assets/sripic.png';

const items = [

    {
        title: "Irvington High School Programming Club",
        cardTitle: "Irvington High School Programming Club",
        url: "https://ihs-fusd-ca.schoolloop.com/",
        cardSubtitle:"Vice President",
        cardDetailedText: <span>
            <li>Started a new initiative focused on helping students prepare for the AP exam</li>
            <li>Introduced a new program to have veterans in the tech industry to come and give talks similar in model to a "Ted Talk"</li>
        </span>,
        media: {
            type: "IMAGE",
            source: {
            url: "https://upload.wikimedia.org/wikipedia/en/a/aa/Irvington_High_School_Vikings_logo.png"
            }
        }
    },
    
]





export default function Education() {
    return(
        <section id = "education">
            <Header/>
            <p className='display-4 text-center mt-2'>Education</p>
            <hr/>
            <div className='row mt-4 mx-2'>
                <div className='col-6 text-center'>
                <a href = "https://www.berkeley.edu/" target = "_blank">
              <div class="card text-center shadow rounded">
                <div class="card-content">
                  <div class="card-body">
                    <h4 class="card-title">Computer Science & Data Science Student</h4>
                    <h6 className='card-subtitle text-primary'>UC Berkeley</h6>
                    <section className='card-text text-left text-secondary'>
                    <p>Coursework:</p>
                    <ul>
                        <u>Freshman</u>
                        <li>CS 61A</li>
                        <li>LS C5</li>
                        <li>EECS 16A</li>
                        <li>MUSIC R1B</li>
                        <li>CS 61B</li>
                        <li>EECS 16B</li>
                        <li>DATA 8</li>
                    </ul>
                    </section>
                  </div>
                </div>
              </div>
              </a>
                </div>
                <div className='col-6 text-center d-flex align-items-center justify-content-center'>
                    <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png" width={200} height = {200}/>
                </div>
            </div>
            <div className='row mt-4 mx-2'>
                <div className='col-6 text-center d-flex align-items-center justify-content-center'>
                    <img src = "https://upload.wikimedia.org/wikipedia/en/f/f9/Ohlone_college_logo.jpg" width={200} height = {200}/>
                </div>
                <div className='col-6 text-center'>
                <a href = "https://www.ohlone.edu/" target = "_blank">
              <div class="card text-center shadow rounded">
                <div class="card-content">
                  <div class="card-body">
                    <h4 class="card-title">Dual Enrollment Community College Course</h4>
                    <h6 className='card-subtitle text-primary'>Ohlone College</h6>
                    <section className='card-text text-left text-secondary'>
                    <p>Coursework:</p>
                    <ul>
                        <u>Sophomore</u>
                        <li>SPAN 102A Intermediate Spanish</li>
                        <li>CS 101 Introduction to Computers and Information Technology</li>
                        <u>Junior</u>
                        <li>CS 170 Intermediate Java Programming</li>
                        <li>MATH 101C Calculus with Analytic Geometry</li>
                        <u>Senior</u>
                        <li>CS 146 Introduction to UNIX/Linux</li>
                        <li>SOC 101 Introduction to Sociology</li>
                    </ul>
                    </section>
                  </div>
                </div>
              </div>
              </a>
                </div>
            </div>
            <div className='row mt-4 mx-2'>
                <div className='col-6 text-center'>
                <a href = "https://foothill.edu/" target = "_blank">
              <div class="card text-center shadow rounded">
                <div class="card-content">
                  <div class="card-body">
                    <h4 class="card-title">Dual Enrollment Community College Course</h4>
                    <h6 className='card-subtitle text-primary'>Foothill College</h6>
                    <section className='card-text text-left text-secondary'>
                    <p>Coursework:</p>
                    <ul>
                        <u>Freshman</u>
                        <li>CS 1A Object-Oriented Programming Methodologies in JAVA</li>
                    </ul>
                    </section>
                  </div>
                </div>
              </div>
              </a>
                </div>
                <div className='col-6 text-center d-flex align-items-center justify-content-center'>
                    <img src = "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ako6mtcdkftdjgkpvcq6" width={200} height = {200}/>
                </div>
            </div>
            <div className='row mt-4 mx-2'>
                <div className='col-6 text-center d-flex align-items-center justify-content-center'>
                    <img src = "https://cdn.businessyab.com/assets/uploads/91e386c1515b3930de70af3bcf0e88be_-united-states-california-alameda-county-fremont-28-palms-blacow-road-39999-john-f-kennedy-high-school.jpg" width={200} height = {200}/>
                </div>
                <div className='col-6 text-center'>
                <a href = "https://kennedy-fusd-ca.schoolloop.com/" target = "_blank">
              <div class="card text-center shadow rounded">
                <div class="card-content">
                  <div class="card-body">
                    <h4 class="card-title">High School Student(12)</h4>
                    <h6 className='card-subtitle text-primary'>John F. Kennedy High School</h6>
                    <section className='card-text text-left text-secondary'>
                    <p>Coursework:</p>
                    <ul>
                        <u>Senior</u>
                        <li>AP Government and Politics United States</li>
                    <li>CSU Expository Reading and Writing</li>
                    <li>AP Statistics</li>
                    <li>AP Physics 1</li>
                    <li>AP Spanish Language and Culture</li>
                    <li>Sculpture and Ceramics</li>
                    <li>AP Macroeconomics</li>
                    <li>Sociology(Dual Enrollment)</li>
                    </ul>
                    </section>
                  </div>
                </div>
              </div>
              </a>
                </div>
            </div>
            <div className='row mt-4 mx-2'>
                <div className='col-6 text-center'>
                <a href = "https://ihs-fusd-ca.schoolloop.com/" target = "_blank">
              <div class="card text-center shadow rounded">
                <div class="card-content">
                  <div class="card-body">
                    <h4 class="card-title">High School Student(10/11)</h4>
                    <h6 className='card-subtitle text-primary'>Irvington High School</h6>
                    <section className='card-text text-left text-secondary'>
                    <p>Coursework:</p>
                    <ul>
                    <u>Sophomore:</u>
                    <li>World History Honors</li>
                    <li>English 10 Honors</li>
                    <li>AP Calculus BC</li>
                    <li>AP Biology</li>
                    <li>Spanish 4(CC Dual Enrollment)</li>
                    <u>Sophomore:</u>
                    <li>Principles of Business</li>
                    <li>Literature and Writing</li>
                    <li>AP Calculus AB</li>
                    <li>Biology</li>
                    <li>Spanish 3</li>
                    </ul>
                    <ul>
                    <u>Junior:</u>
                    <li>US History</li>
                    <li>AP English Language and Composition</li>
                    <li>AP Chemistry</li>
                    <li>Digital Imaging</li>
                    <li>Guitar</li>
                    </ul>
                    </section>
                  </div>
                </div>
              </div>
              </a>
                </div>
                <div className='col-6 text-center d-flex align-items-center justify-content-center'>
                    <img src = "https://upload.wikimedia.org/wikipedia/en/a/aa/Irvington_High_School_Vikings_logo.png" width={200} height = {200}/>
                </div>
            </div>
            <div className='row mt-4 mx-2'>
                <div className='col-6 text-center d-flex align-items-center justify-content-center'>
                    <img src = "https://www.princetonreview.com/cms-content/cupertino-logo-2019.png" width={200} height = {200}/>
                </div>
                <div className='col-6 text-center'>
                <a href = "https://chs.fuhsd.org/" target = "_blank">
              <div class="card text-center shadow rounded">
                <div class="card-content">
                  <div class="card-body">
                    <h4 class="card-title">High School Student(9)</h4>
                    <h6 className='card-subtitle text-primary'>Cupertino High School</h6>
                    <section className='card-text text-left text-secondary'>
                    <p>Coursework:</p>
                    <ul>
                    <u>Freshman:</u>
                    <li>Principles of Business</li>
                    <li>Literature and Writing</li>
                    <li>AP Calculus AB</li>
                    <li>Biology</li>
                    <li>Spanish 3</li>
                    </ul>
                    </section>
                  </div>
                </div>
              </div>
              </a>
                </div>
            </div>
            <Footer/>
        </section>
    );
}



