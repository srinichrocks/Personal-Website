import styles from '../../styles/skills.module.css'
import {Button} from 'theme-ui'
import SectionHeader from 'components/section-header';

const skills = [
  {
    id: 1,
    title: 'Java',
  },
  {
    id: 2,
    title: 'Python',
  },
  {
    id: 3,
    title: 'Scheme',
  },
  {
    id: 4,
    title: 'HTML',
  },
  {
    id: 5,
    title: 'CSS',
  },
  {
    id: 6,
    title: 'JavaScript',
  },
  {
    id: 7,
    title: 'Linux',
  },
  {
    id: 8,
    title: 'DOS Batch Language',
  },
  {
    id: 9,
    title: 'Next.js',
  },
  {
    id: 10,
    title: 'OpenCV',
  },
  {
    id: 11,
    title: 'BERT',
  },
  {
    id: 12,
    title: 'Sentiment Analysis',
  },
  {
    id: 13,
    title: 'POS Tagging',
  },
  {
    id: 14,
    title: 'NER',
  },
  {
    id: 15,
    title: 'AWS',
  },
  {
    id: 16,
    title: 'React'
  },
  {
    id: 17,
    title: 'Node.js'
  },
  {
    id: 18,
    title: 'Mongo DB'
  },
  {
    id: 19,
    title: 'Postman'
  }

];



export default function Skills(){
  if (!skills.length) return null

  return (
    <section id='skills'>
        <SectionHeader 
        slogan = "What can I do for you" 
        title = "Skills"
        />
      <div className={styles.itemsCentered}>
        <ul className={styles.skills_list}>
          {skills.map((skill) => (
            <Button key={skill.id} className={styles.skills_list_item} bg = "black">
              {skill.title}
              <div></div>
            </Button>
          ))}
        </ul>
      </div>
      <br/>
      <br/>
    </section>
  )
}
