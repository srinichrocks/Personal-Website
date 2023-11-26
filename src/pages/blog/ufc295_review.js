import React from 'react';
import Header from '../header'; 
import Footer from '../footer'; 

const ExamplePost = () => {
    return (
      <>
        <Header />
        <div className="container mt-5 mb-5">
          <article>
            <header className="text-center mb-4">
              <h1 className="fw-bold mb-3">UFC 295 Review</h1>
              <p className="text-muted">
                Posted on <time dateTime="2023-11-08">November 15, 2023</time>
              </p>
            </header>
            <figure className="text-center mb-4">
              <img src="https://iconicreleasing.com/wp-content/uploads/2023/01/UFC-295B_1080x1600_K1.jpg" alt="UFC 295 Main Event" className="img-fluid rounded" width={400}/>
              <figcaption className="text-muted">Main event fighters facing off.</figcaption>
            </figure>
            <section className="blog-content">
              <p className="lead">
                With UFC 295 completed, let's take a look at the main event fights along with a shoutout to a breakout fighter.
              </p>
  
              <h2 className="h4 mt-4 mb-3">Aspinall vs Pavlovich</h2>
              <p>
                Wow... I mean just wow. Top Aspinall shut a lot of us up. At the end of the day, technique beat strength and brute force and it makes sense. 
              </p>
              <p>
              Throughout the pre-fight conferences, Tom Aspinall made it clear he was scared. However, like Jon Jones ones said, fear can either overwhelm a person or a person can use it to their advantage. It gives you the ability to maximize your potential if you understand how to handle your fear. 
              </p>
              <p>
                  Early on in the fight, Aspinall ate a nasty shot on his chin but demonstrated he has a chin. If one wants to be heavyweight champion or in this case interim heavyweight champion, they need to demonstrate that they do. However, right after he ate it, he immediately created distance and put out two jabs at welterweight like speed. Aspinall's speed was also clear on his switch body kick. 
              </p>
              <p>What we saw was just a more well-rounded fighter beating a brawler. To be fair though, Sergei is not just an ordinary brawler, he is a brawler who takes out other brawler-type fighters. I think Aspinall discarded any potential doubts regarding his ability to be a champion in this fight and demonstrated he is at his prime and ready to take over the heavyweight division. I believe Aspinall vs Jones will be the next fight for the belt because nobody wants to see grandpa Miocic fight but at the same time, it could be argued that Jones wants an easier fight to solidify his legacy before he vacates the belt. All in all, I was wrong that Aspinall would get knocked out and I stand corrected that we may be looking at the future heavyweight champion with multiple title defenses... a legend in the making.</p>
              <h2 className="h4 mt-4 mb-3">Pereira vs Jiri</h2>
              <p>
                Alex Pereira is now a two division champion in both Glory(former) and the UFC!
            </p>
              <p>
                Going into the fight, there were a lot of worries whether Pereira could handle his own on the ground. After a few nasty kicks at Jiri's legs, Jiri suddenly became a grappler in the first round.
              </p>
              <p>
                Alex held his own though and kept tight to Jiri rather than letting him get free ground and pound hits with his hands and elbows. At the end of round 1, it was clear... if Jiri wanted to win, he had to take the game to the ground and if Pereira wanted to win, he had to keep the game to striking(his strength).
              </p>
              <p>All in all, I think Pereira did well in his fight and won it regardless of any controversy around the early stoppage because he had full mount but at the same time it's hard to count Jiri out at that point especially after seeing his endurance during the Texeira and Reyes fights. I think Pereira's leg kick strategy along with the unorthodox striking and knockout left hook is a limited strategy that will eventually get exposed. There's a reason he called out Izzy of all fighters because Izzy would play to his game of kickboxing. I think he'll maybe win 1 or 2 title defense but will eventually lose it to a more well-rounded fighter who knows how to check kicks well.</p>
              <h2 className="h4 mt-4 mb-3">Breakout Fighter: Diego Lopes</h2>
              <p>To be continued...</p>
            </section>
          </article>
        </div>
        <Footer />
      </>
    );
  };
  
  export default ExamplePost;
  