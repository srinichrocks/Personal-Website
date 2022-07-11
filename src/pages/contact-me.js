/** @jsx jsx */
import {Input, Textarea, jsx, Container, Button} from 'theme-ui';
import SectionHeader from 'components/section-header';
import { useState } from 'react'

export default function ContactMe() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending')
    let data = {
      name,
      email,
      subject,
      message
    }
    fetch('../api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
      }
    })
    document.getElementById("kaka").reset();
  }
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')
  const [submitted, setSubmitted] = useState(false)
  return (
    <section id = 'contact-me'>
      <br/>
      <Container css = {{textAlign: 'center'}}>
       <SectionHeader
       title = "Contact Me"
       information= "You may also request my resume here."
       />
       <form className = "contact-form" id = "kaka">
       <Input type = "text" placeholder='Name' id = "name" onChange={(e)=>{setName(e.target.value)}}/>
       <Input type = "text" placeholder='Email' id = "email" onChange={(e)=>{setEmail(e.target.value)}}/>
       <Input type = "text" placeholder='Subject' id = "subject" onChange={(e)=>{setSubject(e.target.value)}}/>
       <Textarea cols = "30" rows = "10" placeholder='Message' id = "message" onChange={(e)=>{setMessage(e.target.value)}}/>
       <br/>
       <Button variant = "secondary" sx = {styles.button} className = "submit" onClick={(e)=>{handleSubmit(e)}}>Submit</Button>
       </form>
     </Container>
     <br/>
    </section>
  );
}

const styles = {
  button: {
    color: "red",
    fontSize: '25px',
    fw: '700',
    height: '60px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0'
  },
}