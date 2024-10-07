/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';
import Header from '../header';
import Footer from '../footer';

export default function Proj3() {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        margin: '0',
        padding: '0',
        overflowX: 'hidden',
      }}
    >
      <div sx={{ display: 'flex', flex: '1', margin: '0', padding: '0' }}>
        <aside
          sx={{
            position: 'fixed',
            top: '0',
            left: '0',
            height: '100vh',
            width: '200px',
            backgroundColor: '#f7f7f7',
            padding: '20px',
            boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
            zIndex: '10',
          }}
        >
          <nav>
            <a href="#overview" sx={{ display: 'block', marginBottom: '20px', color: 'black', textDecoration: 'none' }}>Overview</a>
            <a href="#correspondences" sx={{ display: 'block', marginBottom: '20px', color: 'black', textDecoration: 'none' }}>Part 1: Correspondences</a>
            <a href="#midway" sx={{ display: 'block', marginBottom: '20px', color: 'black', textDecoration: 'none' }}>Part 2: Mid-way Face</a>
            <a href="#morph-sequence" sx={{ display: 'block', marginBottom: '20px', color: 'black', textDecoration: 'none' }}>Part 3: Morph Sequence</a>
            <a href="#mean-face" sx={{ display: 'block', marginBottom: '20px', color: 'black', textDecoration: 'none' }}>Part 4: Mean Face</a>
            <a href="#caricatures" sx={{ display: 'block', marginBottom: '20px', color: 'black', textDecoration: 'none' }}>Part 5: Caricatures</a>
            <a href="#bells-and-whistles" sx={{ display: 'block', marginBottom: '20px', color: 'black', textDecoration: 'none' }}>Bells and Whistles</a>
          </nav>
        </aside>

        <div
          sx={{
            flexGrow: '1',
            marginLeft: '220px',
            padding: '0',
            width: 'calc(100% - 220px)',
            boxSizing: 'border-box',
          }}
        >
          <Header />

          <div sx={{ textAlign: 'center', marginBottom: '20px', padding: '20px 0' }}>
            <h1 sx={{ margin: '20px 0', fontSize: '2.5rem' }}>
              Face Morphing: CS180 Project 3
            </h1>
            <h4>CS180: Intro to Computer Vision and Computational Photography</h4>
            <h4>Srinidhi Raghavendran</h4>
          </div>

          <section id="overview" sx={{ marginBottom: '40px', padding: '20px' }}>
            <h2>Overview</h2>
            <p>
              In this project, we explore face morphing by defining correspondences between facial features, computing the midway face, creating a morph sequence, and extrapolating from a population mean to create a caricature.
            </p>
          </section>

          <section id="correspondences" sx={{ marginBottom: '40px', padding: '20px' }}>
            <h2>Part 1: Defining Correspondences</h2>
            <p>
                The first step in the face morphing process is defining key points that correspond between the two faces. Basically, I had to manually select matching points on my face and Damaris's face (like eyes, nose, mouth, etc.) to ensure a smooth morph. Think of it like connecting the dots to make sure the features line up properly. I used the tool provided in the project specs to do this and then generated a Delaunay triangulation based on those points, which helps with the warping later. Check out the triangulations below!
            </p>
            <div sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div sx={{ textAlign: 'center' }}>
                <img src='/triangulation_pt1/delaunay_triangulation_sri.jpg' alt="Image A with Keypoints" />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Sri Triangulation</p>
                </div>
                <div sx={{ textAlign: 'center' }}>
                <img src='/triangulation_pt1/delaunay_triangulation_damaris.jpg' alt="Image B with Keypoints" />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Damaris Triangulation</p>
                </div>
            </div>
            </section>


            <section id="midway" sx={{ marginBottom: '40px', padding: '20px' }}>
                <h2>Part 2: Computing the Mid-way Face</h2>
                <p>
                    Once the correspondences are set, the next step is to compute the "mid-way" face. This is like creating a perfect blend of the two faces, halfway between both in terms of shape and appearance. To do this, I averaged the key points (the correspondences) between my face and Damaris's face, warped each face to this average shape, and then blended the colors together. The result is a face that looks like a smooth combination of both! Below are the individual faces and the mid-way face in between.
                </p>

                <div sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
                    <div>
                    <img src='/midway_face/sri.png' alt="Sri Face" sx={{ maxWidth: '100%', height: 'auto' }} />
                    <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Sri's Face</p>
                    </div>
                    <div>
                    <img src='/midway_face/midway_face.jpg' alt="Mid-way Face" sx={{ maxWidth: '100%', height: 'auto' }} />
                    <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Mid-way Face</p>
                    </div>
                    <div>
                    <img src='/midway_face/damaris.png' alt="Damaris Face" sx={{ maxWidth: '100%', height: 'auto' }} />
                    <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Damaris's Face</p>
                    </div>
                </div>
                </section>



                <section id="morph-sequence" sx={{ marginBottom: '40px', padding: '20px' }}>
                <h2>Part 3: The Morph Sequence</h2>
                <p>
                    Now comes the fun part, creating the morph! Using the correspondences from Part 1, I generated 45 frames that gradually morph my face into Damaris's. Each frame is a blend of the two faces, controlled by two parameters: one for the shape and one for the colors. The first frame is all me, and the last frame is fully Damaris. In between, you get a smooth transformation that takes us from one to the other. Check out the GIF below for the full sequence!
                </p>
                <div sx={{ textAlign: 'center' }}>
                    <img src='/morph_animation.gif' alt="Morph Sequence GIF" />
                </div>
                </section>


                <section id="mean-face" sx={{ marginBottom: '40px', padding: '20px' }}>
  <h2>Part 4: The Mean Face</h2>
  <p>
    For this part, I had to work with a dataset of annotated faces to compute the mean face shape of the population. The tricky part was resizing my image to ensure it had the same dimensions as the mean face. I needed to make sure that my face and the mean face were aligned, so I resized my Sri image to match the dimensions and positioned it so that my facial features lined up with the mean face shape.
  </p>
  <p>
    To make sure everything matched up correctly, I overlaid the mean face triangulations onto both my resized Sri image and the mean face. This allowed me to check if the features were well-aligned and "passed the eye test" before I started the actual warping process. You can see the triangulations on both the mean face and my resized Sri image below.
  </p>

  <div sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
    <div sx={{ textAlign: 'center' }}>
      <img src='/part4/delaunay_on_sri_resized.png' alt="Delaunay on Resized Sri" />
      <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Delaunay Triangulation on Resized Sri</p>
    </div>
    <div sx={{ textAlign: 'center' }}>
      <img src='/part4/delaunay_on_average_face.png' alt="Delaunay on Average Face" />
      <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Delaunay Triangulation on Average Face</p>
    </div>
  </div>

  <p>
    Once the alignment looked good, I went ahead and warped the images. Below, you can see how the mean face looks warped into my face's geometry and vice versa.
  </p>

  <div sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
    <div sx={{ textAlign: 'center' }}>
      <img src='/part4/sri_warped_into_avg_shape.png' alt="Sri Warped into Average Face Shape" />
      <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Sri Warped into Average Shape</p>
    </div>
    <div sx={{ textAlign: 'center' }}>
      <img src='/part4/avg_face_warped_into_sri_shape.png' alt="Average Face Warped into Sri's Shape" />
      <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Average Face Warped into Sri's Shape</p>
    </div>
  </div>

  <div sx={{ textAlign: 'center', marginTop: '40px' }}>
    <img src='/part4/delaunay_mean_points.png' alt="Delaunay Triangulation of Mean Points" />
    <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Delaunay Triangulation of Mean Shape Points</p>
  </div>
</section>


<section id="caricatures" sx={{ marginBottom: '40px', padding: '20px' }}>
  <h2>Part 5: Caricatures</h2>
  <p>
    In this part of the project, I created caricatures of my face by exaggerating the difference between my face and the average face. The idea is to "extrapolate" from the mean face, which essentially stretches or shrinks the unique features of my face based on how different they are from the average face.
  </p>
  <p>
    To do this, I used a parameter called "alpha" to control the level of exaggeration. A positive alpha (2 or 3) makes the differences between my face and the average face more extreme, while a negative alpha (-1 or -2) minimizes those differences, making my face look more like the average.
  </p>
  <p>
    First, I extracted the key points from both my face and the average face and added corner points to ensure the whole image was covered. Then, I computed a new "caricature shape" by using the formula: <code>caricature_shape = average_shape + alpha * (my_shape - average_shape)</code>. After that, I warped my face into this caricature shape. Below, you can see the caricatures I generated with different alpha values.
  </p>

  <div sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
    <div sx={{ textAlign: 'center' }}>
      <img src='/part5_caricatures/sri_caricature_alpha_2.jpg' alt="Sri's Caricature with Alpha 2" />
      <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Caricature with Alpha = 2</p>
    </div>
    <div sx={{ textAlign: 'center' }}>
      <img src='/part5_caricatures/sri_caricature_alpha_3.jpg' alt="Sri's Caricature with Alpha 3" />
      <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Caricature with Alpha = 3</p>
    </div>
    <div sx={{ textAlign: 'center' }}>
      <img src='/part5_caricatures/sri_caricature_alpha_-1.jpg' alt="Sri's Caricature with Alpha -1" />
      <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Caricature with Alpha = -1</p>
    </div>
    <div sx={{ textAlign: 'center' }}>
      <img src='/part5_caricatures/sri_caricature_alpha_-2.jpg' alt="Sri's Caricature with Alpha -2" />
      <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Caricature with Alpha = -2</p>
    </div>
  </div>

  <p>
    As you can see, the caricatures with positive alpha values (like 2 and 3) exaggerate the features that make my face different from the average face, whereas the negative alpha values (like -1 and -2) make my face look more like the average. This was a fun way to explore how much my facial features deviate from the population mean!
  </p>
</section>


<section id="bells-and-whistles" sx={{ marginBottom: '40px', padding: '20px' }}>
  <h2>Bells and Whistles</h2>
  <p>
    For a fun twist, I decided to morph my face into an average smiling face. First, I created an "average smiling face" using a dataset of smiling faces. I manually labeled corresponding points on my face and the average smiling face so that the transformation would be as smooth as possible.
  </p>
  <p>
    Following the project spec, I performed three types of morphs: just the shape, just the appearance, and a blend of both. The results show how my face would look with the smiling shape, with the smiling texture, and with both shape and texture combined.
  </p>
  <div sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
    <div sx={{ textAlign: 'center' }}>
      <img src='/bells_and_whistles_smiling/sri_texture_with_smiling_shape.png' alt="Smiling Shape Only" />
      <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Smiling Shape Only</p>
    </div>
    <div sx={{ textAlign: 'center' }}>
      <img src='/bells_and_whistles_smiling/sri_shape_with_smiling_texture.png' alt="Smiling Texture Only" />
      <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Smiling Texture Only</p>
    </div>
  </div>

  <p>
    Lastly, I combined both the smiling shape and texture to create a hybrid morph. This shows what my face would look like with both the structure and appearance of a smiling face.
  </p>

  <div sx={{ textAlign: 'center' }}>
    <img src='/bells_and_whistles_smiling/sri_both_shape_and_blended_texture.png' alt="Blended Shape and Texture" />
    <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Blended Shape and Texture</p>
  </div>
</section>

<section id="conclusion" sx={{ marginBottom: '40px', padding: '20px' }}>
  <h2>Conclusion</h2>
  <p>
    This project was a rewarding experience that allowed me to dive deep into the fascinating world of face morphing. I enjoyed experimenting with the different aspects of morphing and exploring the effects of transformations on facial features. However, I did find the process of manually annotating points quite tedious at times. Despite that, the hands-on nature of the project really helped me understand the intricacies of computer vision and image warping. Overall, it was a valuable learning experience, and I’m pleased with the results!
  </p>
</section>

          <Footer />
        </div>
      </div>
    </div>
  );
}
