import React from 'react';
import Header from '../header'; // Update with correct import path
import Footer from '../footer'; // Update with correct import path

const ExamplePost = () => {
  return (
    <>
      <Header />
      <div className="container mt-5 mb-5">
        <article>
          <header className="mb-4">
            <h1 className="fw-bold mb-3">UFC 295 Predictions</h1>
            <p className="text-muted">
              Posted on <time dateTime="2023-11-08">November 8, 2023</time>
            </p>
          </header>
          <figure className="mb-4">
            <img src="/ufc-295-main-event.jpg" alt="UFC 295 Main Event" className="img-fluid rounded" />
            <figcaption className="text-muted">Main event fighters facing off.</figcaption>
          </figure>
          <section className="blog-content">
            <p className="lead">
              With UFC 295 approaching, the anticipation for the matchups is building up. Here's a breakdown of the potential outcomes for the main card fights.
            </p>

            <h2 className="h4 mt-4 mb-3">Aspinall vs Pavlovich</h2>
            <p>
              The heavyweight clash between Tom Aspinall and Sergey Pavlovich promises to be a thrilling encounter. Both fighters have shown remarkable striking power, but Aspinall's agility might give him the edge.
            </p>
            <figure className="mb-4">
              <img src="/aspinall-vs-pavlovich.jpg" alt="Aspinall vs Pavlovich" className="img-fluid rounded" />
              <figcaption className="text-muted">Aspinall and Pavlovich in the Octagon.</figcaption>
            </figure>

            <h2 className="h4 mt-4 mb-3">Pereira vs Jiri</h2>
            <p>
              The fight between Alex Pereira and Jiri Prochazka is highly anticipated due to their unique fighting styles. Pereira's precision striking meets Jiri's unpredictable movements, making this a must-watch for MMA fans.
            </p>
            <figure className="mb-4">
              <img src="/pereira-vs-jiri.jpg" alt="Pereira vs Jiri" className="img-fluid rounded" />
              <figcaption className="text-muted">Pereira and Jiri during the pre-fight press conference.</figcaption>
            </figure>

            {/* Add more content, analysis, or predictions as needed */}
          </section>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default ExamplePost;
