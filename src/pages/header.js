import styles from '../../styles/header.module.css'
export default function Header() {
  return (
    <div className={styles.grad}>
    <div class = "sticky-top">
        <ul class="nav navbar-expand-lg navbar-dark py-1 py-lg-3 justify-content-center">
        <li class="nav-item">
          <a class="nav-link text-white px-2" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white px-2" href="/projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white px-2" href="/education">Education</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white px-2" href="/work">Work</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white px-2" href="/contact-me">Contact Me</a>
        </li>
      </ul>
    </div>
    </div>
  )
};
