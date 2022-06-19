/** @jsx jsx */
import { jsx, Container} from 'theme-ui';
import SectionHeader from 'components/section-header';

export default function Resume() {
  return (
    <section id='resume'>
      <Container>
       <SectionHeader 
       slogan = "Document" 
       title = "My Resume"
       information = "Resume only provided upon special request through email."
       />
     </Container>
    </section>
  
  
  );
}
