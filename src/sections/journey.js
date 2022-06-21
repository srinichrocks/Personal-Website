/** @jsx jsx */
import { jsx, Heading } from 'theme-ui';
import { Container} from 'theme-ui';
import { Chrono } from 'react-chrono';
import SectionHeader from 'components/section-header'
// import BannerImg from 'assets/sripic.png';

const items = [
    {
        title: "Pratham Education Foundation Math Competition",
        cardTitle: "Pratham Education Foundation Math Competition",
        url: "https://ihs-fusd-ca.schoolloop.com/",
        cardSubtitle:"President",
        cardDetailedText: <Container>
            <li>President of Pratham Math Competition, an annual competition held for 4th-8th graders with a focus middle school math competition problems</li>
            <li>Over 100 attendees and $10,000 raised and donated to Pratham, a non-profit dedicated to giving impoverished kids in India materials to enhance their learning experience(global impact)</li>
            <li>I also personally attended a school in India by the name of GGMS in order to witness the daily challenges that occur in impoverished societies as well as understand where exactly the money we raise from the math competition would be donated to</li>
        </Container>,
        media: {
            type: "IMAGE",
            source: {
            url: "https://upload.wikimedia.org/wikipedia/en/a/aa/Irvington_High_School_Vikings_logo.png"
            }
        }
    },
    {
        title: "Cupertino High School",
        cardTitle: "Cupertino High School",
        url: "https://chs.fuhsd.org/",
        cardSubtitle:"High School Student",
        cardDetailedText: <Container>
            <p>Coursework:</p>
            <ul>
            <u>Freshman:</u>
            <li>Principles of Business</li>
            <li>Literature and Writing</li>
            <li>AP Calculus AB</li>
            <li>Biology</li>
            <li>Spanish 3</li>
            </ul>
        </Container>,
        media: {
            type: "IMAGE",
            source: {
            url: "https://www.princetonreview.com/cms-content/cupertino-logo-2019.png"
            }
        }
    },
    {
        title: "Foothill College",
        cardTitle: "Foothill College",
        url: "https://foothill.edu/",
        cardSubtitle:"Community College Courses",
        cardDetailedText: <Container>
            <p>Coursework:</p>
            <ul>
                <u>Freshman</u>
                <li>CS 1A Object-Oriented Programming Methodologies in JAVA</li>
            </ul>
        </Container>,
        media: {
            type: "IMAGE",
            source: {
            url: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ako6mtcdkftdjgkpvcq6"
            }
        }
    },
    {
        title: "Ohlone College",
        cardTitle: "Ohlone College",
        url: "https://www.ohlone.edu/",
        cardSubtitle:"Community College Courses",
        cardDetailedText: <Container>
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
        </Container>,
        media: {
            type: "IMAGE",
            source: {
            url: "https://upload.wikimedia.org/wikipedia/en/f/f9/Ohlone_college_logo.jpg"
            }
        }
    },
    {
        title: "Irvington High School",
        cardTitle: "Irvington High School",
        url: "https://ihs-fusd-ca.schoolloop.com/",
        cardSubtitle:"High School Student",
        cardDetailedText: <Container>
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
    </Container>,
        media: {
            type: "IMAGE",
            source: {
            url: "https://upload.wikimedia.org/wikipedia/en/a/aa/Irvington_High_School_Vikings_logo.png"
            }
        }
    },
    {
        title: "Irvington High School Programming Club",
        cardTitle: "Irvington High School Programming Club",
        url: "https://ihs-fusd-ca.schoolloop.com/",
        cardSubtitle:"Vice President",
        cardDetailedText: <Container>
            <li>Started a new initiative focused on helping students prepare for the AP exam</li>
            <li>Introduced a new program to have veterans in the tech industry to come and give talks similar in model to a "Ted Talk"</li>
        </Container>,
        media: {
            type: "IMAGE",
            source: {
            url: "https://upload.wikimedia.org/wikipedia/en/a/aa/Irvington_High_School_Vikings_logo.png"
            }
        }
    },
    {
        title: "Hackathon4Kids",
        cardTitle: "Hackathon4Kids",
        url: "https://hackathon4kids.org/home.html",
        cardSubtitle:"CEO/Co-Founder",
        cardDetailedText: <Container>
            <li>CEO/Founder of Hackathon4Kids, a 501c3 non-profit organization composed of high school students(with a strong knowledge in programming) teaching middle school kids essential programming skills</li>
            <li>Recently started a new initiative which focuses on teaching foster care kids specifically while providing with the means of learning(laptop)</li>
        </Container>,
        media: {
            type: "IMAGE",
            source: {
            url: "https://hackathon4kids.org/assets/logo.png"
            }
        }
    },
    {
        title: "AoPS Academy",
        cardTitle: "Outreach Staff Member",
        url: "https://aopsacademy.org/",
        cardSubtitle:"Outreach Staff Member",
        cardDetailedText: <Container>
            <p>Attended multiple outreach events where I:</p>
            <li>Interacted with kids to spark their math interest</li>
            <li>Described my experience with the company's educational material in the past and how it enabled me to win multiple math competitions</li>
            <li>Enhanced my social and sales skills by convincing parents to invest in a service</li>
            </Container>,
        media: {
            type: "IMAGE",
            source: {
            url: "https://avatars.githubusercontent.com/u/40152760?v=4"
            }
        }
    },
    {
        title: "John F. Kennedy High School",
        cardTitle: "John F. Kennedy High School",
        url: "https://kennedy-fusd-ca.schoolloop.com/",
        cardSubtitle:"High School Student",
        cardDetailedText: <Container>
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
    </Container>,
        media: {
            type: "IMAGE",
            source: {
            url: "https://cdn.businessyab.com/assets/uploads/91e386c1515b3930de70af3bcf0e88be_-united-states-california-alameda-county-fremont-28-palms-blacow-road-39999-john-f-kennedy-high-school.jpg"
            }
        }
    },
    {
        title: "Peritus.ai",
        cardTitle: "Peritus.ai",
        url: "https://peritus.ai/",
        cardSubtitle:"Full-time Software Engineering Intern",
        cardDetailedText: <Container>
            <p>Coded and implemented advanced NLP(a subfield of Machine Learning) models and techniques:</p>
            <li>BERT,tfidf, NER, etc</li>
            <p>Helped integrate code into the pipeline and worked with Enterprise Github for version control</p>
            <p>Collaborated with others in my team to accomplish the customer's goals and meet deadlines</p>
            <p>I plan to continue this internship in the future</p>
        </Container>,
        media: {
            type: "IMAGE",
            source: {
            url: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/jxmshipnw0na77cfnolc"
            }
        }
    },
    {
        title: "UC Berkeley",
        cardTitle: "UC Berkeley",
        url: "https://www.berkeley.edu/",
        cardSubtitle:"Computer Science/Data Science Student",
        cardDetailedText: <Container>
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
        </Container>,
        media: {
            type: "IMAGE",
            source: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png"
            }
        }
    },
    // {
    //     title: "Unemployed",
    //     cardTitle: "Unemployed",
    //     url: "https://srinich.vercel.app/",
    //     cardSubtitle:"Freelance Developer",
    //     cardDetailedText: "...",
    //     media: {
    //         type: "IMAGE",
    //         source: {
    //         url: BannerImg
    //         }
    //     }
    // }
]





export default function Journey() {
    return(
        <section id = "journey">
            <SectionHeader 
      slogan = "My path through time"
      title = "Journey"/>
            <Chrono items={items}  slideShow mode="VERTICAL_ALTERNATING"/>
        </section>
    );
}
