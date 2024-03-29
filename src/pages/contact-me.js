import Footer from './footer';
import { useState } from 'react'
import Header from './header';
import styles from '../../styles/header.module.css'


export default function ContactMe() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Sending');
    let data = {
      name,
      email,
      subject,
      message
    };

    try {
      const res = await fetch('/api/contact', { // Ensure this points to your API route.
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      console.log('Response received');
      if (res.status === 200) {
        console.log('Response succeeded!');
        setSubmitted(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        document.getElementById("kaka").reset();
      }
    } catch (error) {
      console.error('Error during submission:', error);
    }
  };

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')
  const [submitted, setSubmitted] = useState(false)
  return (
    <section id='contact-me'>
      <Header />
      <center>
        <p className='h2 text-center mt-2'>Contact Me</p>
        <hr />
        <div className='row mt-4 mb-2'>
          <div className='col-1'/>
          <div className='col-10'>
            <div className="shadow-lg rounded">
              <div className='card'>
                <div className={styles.grad}>
                  <form className="contact-form" id="kaka" onSubmit={handleSubmit}>
                    <div className='form-group row'>
                      <div className='col-1'/>
                      <div className='col-lg-10'>
                        <label className='h5 mt-4 text-white'>Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />
                      </div>
                      <div className='col-1'/>
                    </div>
                    <div className='form-group row'>
                      <div className='col-1'/>
                      <div className='col-lg-10'>
                        <label className='h5 mt-2 text-white'>Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                      </div>
                      <div className='col-1'/>
                    </div>
                    <div className='form-group row'>
                      <div className='col-1'/>
                      <div className='col-lg-10'>
                        <label className='h5 mt-2 text-white'>Subject</label>
                        <input type="text" className="form-control" id="subject" placeholder="Subject" onChange={(e) => { setSubject(e.target.value) }} />
                      </div>
                      <div className='col-1'/>
                    </div>
                    <div className='form-group row'>
                      <div className='col-1'/>
                      <div className='col-lg-10'>
                        <label className='h5 mt-2 text-white'>Message</label>
                        <textarea className="form-control" id="message" placeholder="Message" rows="10" onChange={(e) => { setMessage(e.target.value) }} />
                      </div>
                      <div className='col-1'/>
                    </div>
                    <div className='row'>
                      <div className='col-lg-1'/>
                      <div className='col-lg-10'>
                        <button type="submit" className="btn btn-light mb-3 btn-lg">Submit</button>
                        {submitted && <div className='h1 mt-3 text-danger'>Message sent successfully!</div>}
                      </div>
                      <div className='col-lg-1'/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='col-1'/>
        </div>
      </center>
      <Footer />
    </section>
  );}
