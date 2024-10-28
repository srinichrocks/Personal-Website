/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';
import Header from '../header';
import Footer from '../footer';
import MathJax from 'react-mathjax';

export default function Proj4() {
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
            <a href="#overview-part-a" sx={{ display: 'block', marginBottom: '20px', color: 'black', textDecoration: 'none' }}>Overview - Part A</a>
            <a href="#shoot-pictures" sx={{ display: 'block', marginBottom: '20px', color: 'black', textDecoration: 'none' }}>Part 1: Shoot the Pictures</a>
            <a href="#recover-homographies" sx={{ display: 'block', marginBottom: '20px', color: 'black', textDecoration: 'none' }}>Part 2: Recover Homographies</a>
            <a href="#warp-images" sx={{ display: 'block', marginBottom: '20px', color: 'black', textDecoration: 'none' }}>Part 3: Warp the Images</a>
            <a href="#rectification" sx={{ display: 'block', marginBottom: '20px', color: 'black', textDecoration: 'none' }}>Part 4: Rectification</a>
            <a href="#final-mosaics" sx={{ display: 'block', marginBottom: '20px', color: 'black', textDecoration: 'none' }}>Final Mosaics</a>
            <a href="#overview-part-b" sx={{ display: 'block', marginBottom: '20px', color: 'black', textDecoration: 'none' }}>Overview - Part B</a>
            <a href="#detect-features" sx={{ display: 'block', marginBottom: '20px', color: 'black', textDecoration: 'none' }}>Part 5: Feature Detection</a>
            <a href="#feature-matching" sx={{ display: 'block', marginBottom: '20px', color: 'black', textDecoration: 'none' }}>Part 6: Feature Matching</a>
            <a href="#ransac" sx={{ display: 'block', marginBottom: '20px', color: 'black', textDecoration: 'none' }}>Part 7: RANSAC</a>
            <a href="#auto-mosaic" sx={{ display: 'block', marginBottom: '20px', color: 'black', textDecoration: 'none' }}>Part 8: Automatic Mosaic</a>

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
              Image Warping and Mosaicing: CS180 Project 4
            </h1>
            <h4>CS180: Intro to Computer Vision and Computational Photography</h4>
            <h4>Srinidhi Raghavendran</h4>
          </div>

          <section id="overview-part-a" sx={{ marginBottom: '40px', padding: '20px' }}>
  <h2>Overview - Part A</h2>
  <p>
    In this project, I explored various image warping techniques to create mosaics using multiple photographs. The project involved key steps: shooting images, recovering homographies, warping images, and blending them into mosaics. Below, I present the original images for three different scenes: the library, a tile area, and a window.
  </p>
</section>

          <section id="shoot-pictures" sx={{ marginBottom: '40px', padding: '20px' }}>
            <h2>Part 1: Shoot the Pictures</h2>
            <p>
              For each mosaic (library, tile, and window), I shot multiple pictures ensuring significant overlap between the images. This overlap was critical for accurately aligning the images later during homography recovery. I used a fixed center of projection and rotated the camera slightly to capture different views of each scene.
            </p>
            <div sx={{ textAlign: 'center', marginBottom: '20px' }}>
    <h3>Original Images Used</h3>

    <div sx={{ marginBottom: '40px' }}>
      <h4>Library Images</h4>
      <div sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        <img
          src='/original_images_cv_4/Library_Images/IMG_1494.jpeg'
          alt="Library Image 1"
          sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }}
        />
        <img
          src='/original_images_cv_4/Library_Images/IMG_1496.jpeg'
          alt="Library Image 2"
          sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }}
        />
      </div>
    </div>

    <div sx={{ marginBottom: '40px' }}>
      <h4>Tile Area Images</h4>
      <div sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        <img
          src='/original_images_cv_4/IMG_1506.jpg'
          alt="Tile Area Image 1"
          sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }}
        />
        <img
          src='/original_images_cv_4/IMG_1507.jpg'
          alt="Tile Area Image 2"
          sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }}
        />
      </div>
    </div>

    <div sx={{ marginBottom: '40px' }}>
      <h4>Window Images</h4>
      <div sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        <img
          src='/original_images_cv_4/IMG_1510.jpg'
          alt="Window Image 1"
          sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }}
        />
        <img
          src='/original_images_cv_4/IMG_1511.jpg'
          alt="Window Image 2"
          sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }}
        />
      </div>
    </div>
  </div>
          </section>

          <section id="recover-homographies" sx={{ marginBottom: '40px', padding: '20px' }}>
            <h2>Part 2: Recover Homographies</h2>
            <p>
              To align the images for each mosaic, I computed the homographies between pairs of images. A homography is a transformation between two planes that preserves straight lines. To recover the homography matrix, I selected several corresponding points from each image and used a least-squares method to solve for the 3x3 homography matrix.
            </p>

            <MathJax.Provider>
              <div sx={{ textAlign: 'center', marginBottom: '20px' }}>
                <h3>Homography Transformation</h3>
                <MathJax.Node formula={`
                \\begin{bmatrix}
                x' \\\\
                y' \\\\
                1
                \\end{bmatrix} =
                H \\cdot
                \\begin{bmatrix}
                x \\\\
                y \\\\
                1
                \\end{bmatrix}
                `} />

                <p>
                  The homography matrix <em>H</em> is a 3x3 matrix that transforms the coordinates from one image to another. The system of linear equations used to solve for <em>H</em> based on corresponding points is derived from the following relationships:
                </p>

                <MathJax.Node formula={`
                \\begin{aligned}
                x' &= \\frac{ax + by + c}{gx + hy + 1} \\\\
                y' &= \\frac{dx + ey + f}{gx + hy + 1}
                \\end{aligned}
                `} />

                <p>
                  These relationships are linearized into the following form:
                </p>

                <MathJax.Node formula={`
                \\begin{aligned}
                ax + by + c - x'gx - x'hy - x' &= 0 \\\\
                dx + ey + f - y'gx - y'hy - y' &= 0
                \\end{aligned}
                `} />

                <p>
                  We then stack these equations for all points, resulting in the matrix equation <em>A · h = 0</em>, where <em>A</em> is the matrix containing the known terms and <em>h</em> is the vector containing the unknown homography parameters.
                </p>
              </div>
            </MathJax.Provider>

            <div sx={{ textAlign: 'center', marginBottom: '20px' }}>
                <h3>Library Mosaic - Point Correspondences</h3>
                <div sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <img
                    src='/original_images_cv_4/library/library_img1_points.png'
                    alt="Library Image 1 Point Correspondences"
                    sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }}
                />
                <img
                    src='/original_images_cv_4/library/library_img2_points.png'
                    alt="Library Image 2 Point Correspondences"
                    sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }}
                />
                </div>
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>
                Point Correspondences for the Library Mosaic
                </p>
            </div>

            <div sx={{ textAlign: 'center', marginBottom: '20px' }}>
                <h3>Tile Mosaic - Point Correspondences</h3>
                <div sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <img
                    src='/original_images_cv_4/tile_results/tile_img1_points.png'
                    alt="Tile Image 1 Point Correspondences"
                    sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }}
                />
                <img
                    src='/original_images_cv_4/tile_results/tile_img2_points.png'
                    alt="Tile Image 2 Point Correspondences"
                    sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }}
                />
                </div>
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>
                Point Correspondences for the Tile Mosaic
                </p>
            </div>

            <div sx={{ textAlign: 'center', marginBottom: '20px' }}>
                <h3>Window Mosaic - Point Correspondences</h3>
                <div sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <img
                    src='/original_images_cv_4/window_results/window_img1_points.png'
                    alt="Window Image 1 Point Correspondences"
                    sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }}
                />
                <img
                    src='/original_images_cv_4/window_results/window_img2_points.png'
                    alt="Window Image 2 Point Correspondences"
                    sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }}
                />
                </div>
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>
                Point Correspondences for the Window Mosaic
                </p>
            </div>
          </section>
          <section id="warp-images" sx={{ marginBottom: '40px', padding: '20px' }}>
            <h2>Part 3: Warp the Images</h2>
            <p>
              After calculating the homographies, I applied the transformations to warp the images. I implemented a function <code>warpImage(im, H)</code> that takes an image and a homography matrix and outputs the warped image. The transformation aligns the image based on the homography to match the perspective of another image. The resulting warped images for the mosaics are displayed below.
            </p>
            <div sx={{ textAlign: 'center' }}>
              <h3>Warped Images</h3>
              <div sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                <img src='/original_images_cv_4/library/library_warped.png' alt="Warped Library Image" sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }} />
                <img src='/original_images_cv_4/tile_results/tile_warped.png' alt="Warped Tile Image" sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }} />
                <img src='/original_images_cv_4/window_results/window_warped.png' alt="Warped Window Image" sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }} />
              </div>
            </div>
          </section>

          <section id="rectification" sx={{ marginBottom: '40px', padding: '20px' }}>
  <h2>Part 4: Rectification</h2>
  <p>
    Rectification was used to correct the perspective of objects within the images, making them appear frontal. This was achieved by selecting four corner points of a known rectangle and computing a homography matrix that mapped those points to a rectangular shape. Below are the selected points and the rectified results. Check the right part of the image, which has the four rectified points selected as well as the correspondence points.
  </p>

  <div sx={{ textAlign: 'center', marginBottom: '20px' }}>
    <h3>Rectification Points</h3>
    <div sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
      <img src='/original_images_cv_4/library/library_rectification_points.png' alt="Library Rectification Points" sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }} />
      <img src='/original_images_cv_4/tile_results/tile_rectification_points.png' alt="Tile Rectification Points" sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }} />
      <img src='/original_images_cv_4/window_results/window_rectification_points.png' alt="Window Rectification Points" sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }} />
    </div>
    <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Selected Rectification Points for Each Mosaic</p>
  </div>

  <div sx={{ textAlign: 'center' }}>
    <h3>Rectified Images</h3>
    <div sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
      <img src='/original_images_cv_4/library/library_rectified.png' alt="Rectified Library Image" sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }} />
      <img src='/original_images_cv_4/tile_results/tile_rectified.png' alt="Rectified Tile Image" sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }} />
      <img src='/original_images_cv_4/window_results/window_rectified.png' alt="Rectified Window Image" sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }} />
    </div>
    <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Rectified Results for Each Mosaic</p>
  </div>
</section>


<section id="final-mosaics" sx={{ marginBottom: '40px', padding: '20px' }}>
  <h2>Final Mosaics</h2>
  <p>
    Below are the final mosaics for the three scenes: Tile, Window, and Library. Each mosaic was created by aligning the images using the computed homographies and blending them smoothly with Gaussian-blurred alpha masks.
  </p>
  
  <div sx={{ textAlign: 'center' }}>
    <div sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
      <div>
        <img src='/original_images_cv_4/tile_results/tile_mosaic.png' alt="Tile Mosaic" sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }} />
        <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Tile Mosaic</p>
      </div>
      
      <div>
        <img src='/original_images_cv_4/window_results/window_mosaic.png' alt="Window Mosaic" sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }} />
        <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Window Mosaic</p>
      </div>
      
      <div>
        <img src='/original_images_cv_4/library/library_mosaic.png' alt="Library Mosaic" sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }} />
        <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Library Mosaic</p>
      </div>
    </div>
  </div>
</section>
<section id="overview-part-b" sx={{ marginBottom: '40px', padding: '20px' }}>
            <h2>Overview - Part B</h2>
            <p>
              In Part B, I automated the process using feature detection and matching, robust homography estimation with RANSAC, and generated final mosaics without manual intervention. This approach enhanced accuracy and consistency in creating the mosaics.
            </p>
          </section>

          <section id="detect-features" sx={{ marginBottom: '40px', padding: '20px' }}>
  <h2>Part 5: Feature Detection</h2>
  <p>
    Harris Corner Detection was used to identify points of interest in each image. These feature points were then used in subsequent steps to match corresponding regions between images.
  </p>
  <div sx={{ textAlign: 'center', marginBottom: '20px' }}>
    <h3>Detected Corners</h3>
    <div sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
      <div>
        <h4>Tile Area</h4>
        <div sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <img
            src='/tile_results/tile_1_corners.png'
            alt="Tile Image 1 Corners"
            sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }}
          />
          <img
            src='/tile_results/tile_2_corners.png'
            alt="Tile Image 2 Corners"
            sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }}
          />
        </div>
      </div>

      <div>
        <h4>Window</h4>
        <div sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <img
            src='/window_results/window_1_corners.png'
            alt="Window Image 1 Corners"
            sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }}
          />
          <img
            src='/window_results/window_2_corners.png'
            alt="Window Image 2 Corners"
            sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }}
          />
        </div>
      </div>

      <div>
        <h4>Library</h4>
        <div sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <img
            src='/library_results/library_1_corners.png'
            alt="Library Image 1 Corners"
            sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }}
          />
          <img
            src='/library_results/library_2_corners.png'
            alt="Library Image 2 Corners"
            sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  </div>
</section>

          <section id="feature-matching" sx={{ marginBottom: '40px', padding: '20px' }}>
            <h2>Part 6: Feature Matching</h2>
            <p>
              After detecting features, I extracted descriptors and matched them between image pairs. The matches were filtered using a ratio test to retain reliable matches.
            </p>
            <div sx={{ textAlign: 'center', marginBottom: '20px' }}>
              <h3>Feature Matches</h3>
              <div sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                <img src='/tile_results/tile_matches.png' alt="Tile Matches" sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }} />
                <img src='/window_results/window_matches.png' alt="Window Matches" sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }} />
                <img src='/library_results/library_matches.png' alt="Library Matches" sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }} />
              </div>
            </div>
          </section>

          <section id="ransac" sx={{ marginBottom: '40px', padding: '20px' }}>
            <h2>Part 7: RANSAC</h2>
            <p>
              RANSAC was applied to estimate the homography between images while rejecting outliers. This method ensures that only the most consistent feature matches are used to compute the transformation. I made sure to follow the exact steps stated in the lecture slides.
            </p>
            <div sx={{ textAlign: 'center', marginBottom: '20px' }}>
              <h3>Inliers from RANSAC</h3>
              <div sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                <img src='/tile_results/tile_ransac_inliers.png' alt="Tile RANSAC Inliers" sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }} />
                <img src='/window_results/window_ransac_inliers.png' alt="Window RANSAC Inliers" sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }} />
                <img src='/library_results/library_ransac_inliers.png' alt="Library RANSAC Inliers" sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }} />
              </div>
            </div>
          </section>

          <section id="auto-mosaic" sx={{ marginBottom: '40px', padding: '20px' }}>
            <h2>Part 8: Automatic Mosaic</h2>
            <p>
              Using the homographies estimated through RANSAC, I automatically aligned the images to create seamless mosaics. These results demonstrate the effectiveness of feature-based alignment.
            </p>
            <div sx={{ textAlign: 'center', marginBottom: '20px' }}>
              <h3>Automatically Generated Mosaics</h3>
              <div sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                <img src='/tile_results/tile_mosaic.png' alt="Tile Automatic Mosaic" sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }} />
                <img src='/window_results/window_mosaic.png' alt="Window Automatic Mosaic" sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }} />
                <img src='/library_results/library_mosaic.png' alt="Library Automatic Mosaic" sx={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }} />
              </div>
            </div>
          </section>
          <section id="coolest-thing" sx={{ marginBottom: '40px', padding: '20px' }}>
            <h2>Conclusion: Coolest Thing I Learned</h2>
            <p>
            One of the most fascinating aspects of this project was understanding how homography transformations work and how they enable us to map one plane to another, essentially aligning images captured from different perspectives. It felt like magic to see how a few carefully selected correspondences between images could allow us to compute a transformation matrix that seamlessly aligns and stitches those images together into a panoramic type photo.
            </p>
            <p>
            Also, implementing the RANSAC algorithm taught me how to make these transformations more robust. RANSAC's ability to automatically identify and exclude outliers from the feature matches,to make sure that only consistent points contribute to the homography estimation, was impressive. It made me appreciate how much of computer vision relies on both precise math and careful handling of imperfect real-world data. 
            </p>
          </section>




          <Footer />
        </div>
      </div>
    </div>
  );
}
