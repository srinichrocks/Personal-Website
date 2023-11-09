import React from 'react';
import Header from '../header'; // Update with correct import path
import Footer from '../footer'; // Update with correct import path

const ExamplePost = () => {
  return (
    <>
      <Header />
      <div className="container mt-5 mb-5">
        <article>
          <header className="text-center mb-4">
            <h1 className="fw-bold mb-3">UFC 295 Predictions</h1>
            <p className="text-muted">
              Posted on <time dateTime="2023-11-08">November 8, 2023</time>
            </p>
          </header>
          <figure className="text-center mb-4">
            <img src="https://iconicreleasing.com/wp-content/uploads/2023/01/UFC-295B_1080x1600_K1.jpg" alt="UFC 295 Main Event" className="img-fluid rounded" width={400}/>
            <figcaption className="text-muted">Main event fighters facing off.</figcaption>
          </figure>
          <section className="blog-content">
            <p className="lead">
              With UFC 295 approaching, the anticipation for the matchups is building up. Here's a breakdown of the potential outcomes for the main card fights.
            </p>

            <h2 className="h4 mt-4 mb-3">Aspinall vs Pavlovich</h2>
            <p>
              The heavyweight clash between Tom Aspinall and Sergey Pavlovich promises to be a thrilling encounter. Both fighters have shown remarkable striking power, KO/TKO their opponents consistently and do it fast.
            </p>
            <p>
            If we look at Pavlovich, we'll see that he has 1 early loss against Alistair Overeem where I agree with the general opinion that this man was done dirty. I mean who in their right mind thought it was good to match him up with "The Demolition Man" in his first UFC fight. Ever since then, he's been a knockout machine. In his 7 UFC fights, every single one has ended up in a knockout in the first round including his loss. Pavlovich has a background in Greco-Roman wrestling which he developed from the age of 5 along with Combat Sambo which he learned after joining the military and Combat Kung Fu. He lives and breathes martial arts but unfortunately for him, so does his opponent(see later). Pavlovich has a height of 6 feet 3 inches and a crazy reach of 84 inches. He's 31 years old and still in the prime of his UFC career. Weight-wise, it's likely he'll be somewhere in the range of 260-265 pounds.
            </p>
            <p>
                Now let's take a look at Aspinall. He has 7 UFC fights as well and in those has only lost to Curtis Blaydes, an opponent who Pavlovich knocked out in the first round. So why exactly is Aspinall slightly favored over Pavlovich to win? First off, Aspinall tore his medial collateral ligament 15 seconds into the fight so technically it's not a "loss". Regardless, Aspinall has also been living and breathing martial arts since a young age. His father used to be in an IT role but decided to shift to teaching Jiu Jitsu. Aspinall joined in on the sessions at the age of 7 and also trained in wrestling and boxing making him the standard MMA fighter with a background in the tri-fecta(boxing, wrestling, jiu-jitsu). He's also just FAST in his movements. If you've ever done some sort of boxing/muay thai/kickboxing and you watch his training, you'll realize this guy is no joke. To be moving with the pads and bags at that speed and precision and a weight of 265 is just different. His technique is also quite traditional and he utilizes the tri-fecta well along with good high kicks to get the job done. He's slightly taller than Pavlovich at a height of 6 feet 5 inches but has much smaller reach at 78 inches. The thing is I doubt that will make a huge difference since Pavlovich is a power hitter anyways and he'll likely be coming in close to brawl. At the same time, perhaps Pavlovich might tweak his game to use more touch jabs and teep-like kicks to maintain distance. Aspinall will definitely use his head kicks every now and then and Pavlovich needs to keep his guard up at all time. This fight will not be a first round knockout like all of their past fights. 
            </p>
            <b>I believe that Pavlovich will win even though Aspinall is the slight favorite. It will likely go to the 4th or 5th round but I do think it will be a knockout.</b>
            <h2 className="h4 mt-4 mb-3">Pereira vs Jiri</h2>
            <p>
            The upcoming UFC 295 showdown between Alex Pereira and Jiří Procházka is shaping up to be an electrifying light heavyweight bout. Both fighters are known for their exceptional skills and fierce competitiveness in the octagon.
            </p>
            <p>
            Alex Pereira, often hailed for his striking prowess, has a decorated career in kickboxing, which he seamlessly transitioned into mixed martial arts. His ability to deliver powerful, precise strikes is unparalleled, making him a formidable opponent in the stand-up game. Pereira's record in the UFC is impressive, with most of his victories coming via knockout, showcasing his lethal striking ability. At 6 feet 4 inches, his height and reach advantage often play a crucial role in his fights, allowing him to land strikes from a distance. His age, 35, suggests he's in the prime of his career, bringing a blend of experience and athleticism into the cage. Pereira's weight, around 205 pounds, is typical for light heavyweights, but keep in mind he's no longer cutting to 185 for middleweight so he'll be much more replenished and less drained. This will make a HUGE difference in the fight and we'll see an even better Pereira than what we've seen before. Additionally, under the training of Texeira his submission game will definitely be improved but we must keep in mind that Jiri doesn't even like taking the fight to the ground. I mean if we take a look at the Texeira fight with Jiri, it was Texeira jumping at his legs every minute not the other way around.
            </p>
            <p>
            On the other hand, Jiří Procházka, known for his unorthodox fighting style and aggressive approach, has quickly risen through the ranks in the UFC. His background in various martial arts, including Muay Thai and Judo, contributes to his well-rounded skill set. Procházka's record is equally impressive, with a majority of his wins coming by way of knockout, often in the early rounds. Standing at 6 feet 4 inches, he matches Pereira in height, but his unorthodox movement and unpredictability make him a unique challenge. At 30 years old, Procházka is in his athletic prime, combining speed, agility, and raw power in his performances. His weight, similar to Pereira's, is around 205 pounds, but it's his relentless pace and cardio that often overwhelm his opponents. For example, the only reason he beat Texeira was because of cardio. Texeira had the fight in the bag and then messed up a submission and that resulted in him getting rear-naked choked.
            </p>
            <b>All in all, I think this fight will likely go the full 5 rounds and end up in Pereira's hands in the end but it will be a tough bout. Neither will want to take the game to the ground and will rather stick to their striking strengths of Kickboxing and Muay Thai. I think there will be some clinch fighting and low kicks used along with a few elbows here and there. It won't be an easy fight with either and I don't think there will be a knockout. Pereira's iffy fight with Jan also lowered my expectations for him but regardless I have this one going Pereira's direction.</b>
          </section>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default ExamplePost;
