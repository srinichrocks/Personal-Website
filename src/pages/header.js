export default function Header() {
  return (
    <div class = "sticky-top">
        {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient py-1 py-lg-3">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav justify-content-center">
                <a class="nav-item nav-link px-3 text-white" href="/">Home</a>
                <a class="nav-item nav-link px-3 text-white" href="/projects">Projects</a>
                <a class="nav-item nav-link px-3 text-white" href="/education">Education</a>
                <a class="nav-item nav-link px-3 text-white" href="/work">Work</a>
                <a class="nav-item nav-link px-3 text-white" href="/contact-me">Contact Me</a>
                </div>
            </div>
        </nav> */}
        <ul class="nav navbar-expand-lg navbar-dark bg-dark bg-gradient py-1 py-lg-3 justify-content-center">
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
  )
};
