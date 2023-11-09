import Header from "./header"
import Footer from "./footer"

export default function work() {
    return(
        <section id="work">
            <Header/>
            <p className='h2 text-center mt-2'>Work</p>
            <hr/>
            <div className='row mt-4 mx-2'>
            <div className='col-6 text-center d-flex align-items-center justify-content-center'>
                    <img src = "https://computationalhealth.ucsf.edu/wp-content/uploads/2022/08/cropped-CPH-logo.png" alt = "bair" width="300" height="100"/>
                </div>
                <div className='col-6 text-center'>
                <a href = "https://computationalhealth.berkeley.edu/" target = "_blank" rel = "noreferrer">
              <div className="card text-center shadow rounded">
                <div className="card-content">
                  <div className="card-body">
                    <h4 className="card-title">Machine Learning Research Intern</h4>
                    <h6 className='card-subtitle text-primary'>Computational Precision Health</h6>
                    <p className='card-date text-muted'>Jan 2023 - Present</p>
                    <section className='card-text text-left text-dark'>
                      <li>Enhanced data imputation strategies using advanced NLP models, improving accuracy metrics.</li>
                      <li>Integrated cutting-edge AI tools for predictive analytics, boosting performance by significant margins.</li>
                      <li>Conducted innovative research, contributing to the field of computational precision health.</li>
                      <li>Faculty Advisor: Ahmed Alaa | PhD Mentor: Nikita Mehandru</li>
                    </section>
                  </div>
                </div>
              </div>
              </a>
                </div>
            </div>
            <div className='row mt-4 mx-2'>
                <div className='col-6 text-center'>
                <a href = "https://www.sandc.com/" target = "_blank" rel = "noreferrer">
              <div className="card text-center shadow rounded">
                <div className="card-content">
                  <div className="card-body">
                    <h4 className="card-title">SWE Intern</h4>
                    <h6 className='card-subtitle text-primary'>S&C Electric Company</h6>
                    <p className='card-date text-muted'>May 2023 - Aug 2023</p>
                    <section className='card-text text-left text-dark'>
                    <li>Improved software security and quality by integrating analysis tools in the development pipeline.</li>
              <li>Automated critical backup processes, ensuring data integrity across multiple virtual environments.</li>
              <li>Contributed to a large-scale enterprise application, gaining hands-on experience with industry practices.</li>
                    </section>
                  </div>
                </div>
              </div>
              </a>
                </div>
                <div className='col-6 text-center d-flex align-items-center justify-content-center'>
                    <img src = "https://www.sandc.com/globalassets/sac-electric/site-header/sc_color_logo_co_tagline.png" alt = "s&c" width="500" height="100"/>
                </div>
            </div>
            <div className='row mt-4 mx-2'>
            <div className='col-6 text-center d-flex align-items-center justify-content-center'>
                    <img src = "https://student-postings.eecs.berkeley.edu/wp-content/uploads/2018/07/ms-icon-310x310.png" alt = "eecs" width="200" height="200"/>
                </div>
                <div className='col-6 text-center'>
                <a href = "https://sp23.datastructur.es/" target = "_blank" rel = "noreferrer">
              <div className="card text-center shadow rounded">
                <div className="card-content">
                  <div className="card-body">
                    <h4 className="card-title">Academic Intern</h4>
                    <h6 className='card-subtitle text-primary'>UC Berkeley EECS Department</h6>
                    <section className='card-text text-left text-dark'>
                    <li>Facilitated academic support for a core Computer Science course, enhancing student learning outcomes.</li>
              <li>Engaged in curriculum development and delivery, enriching the educational experience for students.</li>
              <li>Supported and mentored students through personalized assistance and lecturing on key CS concepts.</li>
                    </section>
                  </div>
                </div>
              </div>
              </a>
                </div>
            </div>
            <div className='row mt-4 mx-2'>
                <div className='col-6 text-center'>
                <a href = "https://www.peritus.ai" target = "_blank" rel = "noreferrer">
              <div className="card text-center shadow rounded">
                <div className="card-content">
                  <div className="card-body">
                    <h4 className="card-title">SWE Intern</h4>
                    <h6 className='card-subtitle text-primary'>Peritus.ai</h6>
                    <section className='card-text text-left text-dark'>
                    <li>Developed a user experience-focused recommendation widget, enhancing efficiency and engagement.</li>
              <li>Implemented NLP techniques to streamline content processing, improving summarization workflows.</li>
              <li>Collaborated with domain experts to drive product innovation and technical development.</li>
                    </section>
                  </div>
                </div>
              </div>
              </a>
                </div>
                <div className='col-6 text-center d-flex align-items-center justify-content-center'>
                    <img src = "https://media.glassdoor.com/sqll/2446898/peritus-ai-squarelogo-1630001415029.png" alt = "peritus"/>
                </div>
            </div>
            <div className='row mt-4 mx-2'>
                <div className='col-6 text-center d-flex align-items-center justify-content-center'>
                    <img src = "data:image/png;base64,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" width={300} height={130} alt = "aopsacademy"/>
                </div>
                <div className='col-6 text-center'>
                <a href = "https://aopsacademy.org/" target = "_blank" rel = "noreferrer">
              <div className="card text-center shadow rounded">
                <div className="card-content">
                  <div className="card-body">
                    <h4 className="card-title">Outreach Staff Member</h4>
                    <h6 className='card-subtitle text-primary'>AoPS Academy</h6>
                    <section className='card-text text-left text-dark'>
                    <p>Attended multiple outreach events where I:</p>
            <li>Interacted with kids to spark their math interest</li>
            <li>Described my experience with the company's educational material in the past and how it enabled me to win multiple math competitions</li>
            <li>Enhanced my social and sales skills by convincing parents to invest in a service</li>
                    </section>
                  </div>
                </div>
              </div>
              </a>
                </div>
            </div>
            <div className='row mt-4 mx-2'>
                <div className='col-6 text-center'>
                <a href = "https://hackathon4kids.org/home.html" target = "_blank" rel = "noreferrer">
              <div className="card text-center shadow rounded">
                <div className="card-content">
                  <div className="card-body">
                    <h4 className="card-title">CEO/Co-Founder</h4>
                    <h6 className='card-subtitle text-primary'>Hackathon4Kids</h6>
                    <section className='card-text text-left text-dark'>
                        <li>CEO/Founder of Hackathon4Kids, a 501c3 non-profit organization composed of high school students(with a strong knowledge in programming) teaching middle school kids essential programming skills</li>
                        <li>Recently started a new initiative which focuses on teaching foster care kids specifically while providing with the means of learning(laptop)</li>
                    </section>
                  </div>
                </div>
              </div>
              </a>
                </div>
                <div className='col-6 text-center d-flex justify-content-center align-items-center'>
                    <img src = "https://www.hackathon4kids.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ce2c6d2f.png&w=640&q=75&dpl=dpl_92JiSxuM4ZiNFiyMw921FMjSgq4e" width={200} height={200} alt = "hackathon4kids"/>
                </div>
            </div>
            <div className='row mt-4 mx-2'>
                <div className='col-6 text-center d-flex align-items-center justify-content-center'>
                    <img src = "data:image/png;base64,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" width={200} height={200} alt = "prathammath"/>
                </div>
                <div className='col-6 text-center'>
                <a href = "https://prathammath.weebly.com/" target = "_blank" rel = "noreferrer">
              <div className="card text-center shadow rounded">
                <div className="card-content">
                  <div className="card-body">
                    <h4 className="card-title">President</h4>
                    <h6 className='card-subtitle text-primary'>Pratham Education Foundation Math Competition</h6>
                    <section className='card-text text-left text-dark'>
                        <li>President of Pratham Math Competition, an annual competition held for 4th-8th graders with a focus middle school math competition problems</li>
                        <li>Over 100 attendees and $10,000 raised and donated to Pratham, a non-profit dedicated to giving impoverished kids in India materials to enhance their learning experience(global impact)</li>
                        <li>I also personally attended a school in India by the name of GGMS in order to witness the daily challenges that occur in impoverished societies as well as understand where exactly the money we raise from the math competition would be donated to</li>
                    </section>
                  </div>
                </div>
              </div>
              </a>
                </div>
            </div>
            <div className='row mt-4 mx-2'>
                <div className='col-6 text-center'>
                <a href = "https://hackathon4kids.org/home.html" target = "_blank" rel = "noreferrer">
              <div className="card text-center shadow rounded">
                <div className="card-content">
                  <div className="card-body">
                    <h4 className="card-title">Vice President</h4>
                    <h6 className='card-subtitle text-primary'>Irvington High School Programming Club</h6>
                    <section className='card-text text-left text-dark'>
                        <li>Started a new initiative focused on helping students prepare for the AP exam</li>
                        <li>Introduced a new program to have veterans in the tech industry to come and give talks similar in model to a "Ted Talk"</li>
                    </section>
                  </div>
                </div>
              </div>
              </a>
                </div>
                <div className='col-6 text-center d-flex justify-content-center align-items-center'>
                    <img src = "https://upload.wikimedia.org/wikipedia/en/a/aa/Irvington_High_School_Vikings_logo.png" width={200} height={200} alt = "Irvington Programming"/>
                </div>
            </div>
            <Footer/>
        </section>
    )
}