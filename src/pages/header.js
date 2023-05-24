import styles from '../../styles/header.module.css'
export default function Header() {
  return (
    <div className={styles.grad}>
    <div class = "sticky-top">
        <ul className="nav navbar-expand-lg navbar-dark py-1 py-lg-3 justify-content-center">
        <li className="nav-item">
          <a className="nav-link text-white" href="/" rel = "noreferrer">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/projects" rel = "noreferrer">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/education" rel = "noreferrer">Education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/work" rel = "noreferrer">Work</a>
        </li>
        {/* <li className='nav-item'>
          <a className="nav-link text-white" href="/course-reviews" rel = "noreferrer">Course Reviews</a>
        </li>
        <li className='nav-item'>
          <a className="nav-link text-white" href="https://drive.google.com/file/d/1AM0b53GSwDzT2mG9B3t4ELrqs0EA9H8X/view?usp=sharing" target = "_blank" rel = "noreferrer">Resume</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link text-white" href="/contact-me" rel = "noreferrer">Contact Me</a>
        </li>
      </ul>
    </div>
    </div>
  )
};
