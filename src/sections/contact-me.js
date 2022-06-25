/** @jsx jsx */
import {Input, Textarea, jsx, Container, Button} from 'theme-ui';
import emailjs from 'emailjs-com'
import SectionHeader from 'components/section-header';

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('gmail', 'template_598xkj2', e.target, 'wJLT3aZiLwNqV5MMq')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
}

export default function ContactMe() {
  return (
    <section id = 'contact-me'>
      <br/>
      <Container css = {{textAlign: 'center'}}>
       <SectionHeader
       title = "Contact Me"
       information= "You may also request my resume here."
       />
       <form onSubmit={sendEmail}>
       <Input type = "text" placeholder='Name' name = "name"/>
       <Input type = "text" placeholder='Email' name = "email"/>
       <Input type = "text" placeholder='Subject' name = "subject"/>
       <Textarea  cols = "30" rows = "8" placeholder='Message' name = "message"/>
       <Button variant = "primary">Submit</Button>
       </form>
     </Container>
    </section>
  );
}