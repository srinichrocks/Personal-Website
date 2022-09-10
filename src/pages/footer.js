import styles from '../../styles/header.module.css'
export default function Footer() {
    return(
        <section id = "footer" className={styles.grad}>
<footer className="page-footer font-small blue pt-4 mt-3">

  <div className="container-fluid text-center text-md-left">

    <div className="row">

      <div className="col-md-6 mt-md-0 mt-3">

        <h1 className="text-uppercase text-center text-light">Srinidhi Raghavendran</h1>
        <p className="text-center text-light mt-3">Please contact me if you have any questions or concerns</p>

      </div>


      <div className="col-md-3 mb-md-0 mb-3 text-center">

        <h5 className="text-uppercase text-white">Menu</h5>

        <ul className="list-unstyled text-white">
          <li>
            <a href="/projects" rel = "noreferrer">Projects</a>
          </li>
          <li>
            <a href="/education" rel = "noreferrer">Education</a>
          </li>
          <li>
            <a href="/work" rel = "noreferrer">Work</a>
          </li>
          <li>
            <a href="/blog" rel = "noreferrer">Blog</a>
          </li>
          <li>
            <a href="/contact-me" rel = "noreferrer">Contact Me</a>
          </li>
        </ul>

      </div>
      <div className="col-md-3 mb-md-0 mb-3 text-center">

        <h5 className="text-uppercase text-white">Socials</h5>

        <ul className="list-unstyled text-white">
          <li>
            <a href="https://www.linkedin.com/in/srinidhi-raghavendran-a94834164/" target="_blank" rel = "noreferrer">Linkedin</a>
          </li>
          <li>
            <a href="https://github.com/srinichrocks" target="_blank" rel = "noreferrer">Github</a>
          </li>
          <li>
            <a href="https://medium.com/@sraghavendran17" target="_blank" rel = "noreferrer">Medium</a>
          </li>
        </ul>

      </div>

    </div>
    

  </div>
  

  <div className="footer-copyright text-center py-3 text-white">© 2022 Srinidhi Raghavendran. Created using NextJS.
  </div>

</footer>

        </section>
    )
}