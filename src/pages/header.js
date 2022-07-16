import styles from '../../styles/header.module.css'
export default function Header() {
  return (
    <div className={styles.grad}>
    <div class = "sticky-top">
        <ul className="nav navbar-expand-lg navbar-dark py-1 py-lg-3 justify-content-center">
        <li className="nav-item">
          <a className="nav-link text-white px-2" href="/" rel = "noreferrer">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white px-2" href="/projects" rel = "noreferrer">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white px-2" href="/education" rel = "noreferrer">Education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white px-2" href="/work" rel = "noreferrer">Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white px-2" href="/contact-me" rel = "noreferrer">Contact Me</a>
        </li>
      </ul>
    </div>
    </div>
  )
};
