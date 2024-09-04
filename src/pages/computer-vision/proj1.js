/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';
import Header from '../header';
import Footer from '../footer';

export default function Proj1() {
  return (
    <section
      id="proj1"
      sx={{
        width: '100%',
        margin: '0 auto',
        lineHeight: '1.6',
        padding: '20px',
        maxWidth: '1200px',
      }}
    >
      <Header />
      <div sx={{ textAlign: 'center', marginBottom: '20px' }}>
        <motion.div
          sx={{
            fontSize: '3rem',
            padding: '10px',
            borderRadius: '50%',
            color: 'white',
            display: 'inline-block',
            width: '60px',
            height: '60px',
            lineHeight: '60px',
          }}
        >
        </motion.div>
        <h1 sx={{ margin: '20px 0', fontSize: '2.5rem' }}>
          Colorizing the Prokudin-Gorskii Photo Collection
        </h1>
        <h4>Srinidhi Raghavendran</h4>
      </div>
      <div sx={{ textAlign: 'center', marginTop: '20px' }}>
      <img 
    src='/aligned_church_ssd_pyramid.jpg' 
    alt="Aligned Church Image (SSD Pyramid)" 
    sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px', height: 'auto' }} 
  />
</div>

      <section sx={{ marginBottom: '40px' }}>
        <h2>Overview</h2>
        <p>
          This project focuses on colorizing the digitized Prokudin-Gorskii glass plate images, a collection that captures the last years of the Russian Empire. 
          Each image consists of three color channels (Red, Green, and Blue) taken using different filters, which need to be aligned to produce a cohesive RGB image. 
          My goal was to align the three color channels (BGR in this case) automatically using image processing techniques and output a colorized image with minimal visual artifacts.
        </p>
      </section>

      <section sx={{ marginBottom: '40px' }}>
        <h2>Task Description</h2>
        <p> I created an algorithm to extract and align the three sections of the glass plate images, which represent the blue, green, and red color channels. To align them accurately, I tried several different methods: Sum of Squared Differences (SSD), Normalized Cross-Correlation (NCC), and Euclidean Distance. SSD was straightforward and worked well for finding pixel-level differences, while NCC helped account for brightness variations across the channels by normalizing the values. Euclidean Distance, which measures the square root of squared differences, gave a different perspective on how precisely the images aligned. Aligning the channels wasn't easy due to potential shifts in the camera or exposure differences when the photos were originally taken. Handling large, high-resolution images like the .tif files added another layer of difficulty, requiring more efficient approaches like pyramid-based alignment to speed things up. </p> <p> I started with an exhaustive search for the smaller images but switched to the pyramid method for the larger, high-res images to make the alignment process faster and more efficient. </p>
      </section>

      <section sx={{ marginBottom: '40px' }}>
        <h2>Methodology</h2>

        <div sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <div sx={{ flex: '1', paddingRight: '20px' }}>
            <h3>1. Sum of Squared Differences (SSD)</h3>
            <p> SSD works by comparing the pixel intensities in the reference (blue) channel with those in the target (green or red) channel. It calculates the difference for each pixel, squares those differences, and then sums them up to get a score. A lower SSD score means the images are better aligned. This method is great for picking up small differences between images, especially when they have similar brightness levels. However, it's also sensitive to noise or changes in lighting, which can sometimes affect its accuracy. </p>
          </div>
          <div>
            <img
              src="/aligned_cathedral_ssd_only.jpg"
              alt="Aligned using SSD"
              sx={{ maxWidth: '400px', height: 'auto' }}
            />
            <p sx={{ fontSize: '1rem', fontStyle: 'italic', color: 'gray', textAlign: 'center' }}>
              Alignment shifts: Green {'->'} Blue: (1, -1), Red {'->'} Blue: (7, -1)
            </p>
          </div>
        </div>

        <div sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <div sx={{ flex: '1', paddingRight: '20px' }}>
            <h3>2. Normalized Cross-Correlation (NCC)</h3>
            <p> NCC normalizes the images first, then calculates the dot product between the reference and target channels. This helps cancel out differences in brightness or contrast, making sure those factors don't interfere with the alignment. By focusing on the structural similarities instead of brightness, NCC often gives better results when there are big differences in lighting between exposures. It’s especially helpful for aligning images with noticeable brightness variations, though it tends to be more computationally demanding compared to SSD. </p>
          </div>
          <div>
            <img
              src="/aligned_cathedral_ncc_only.jpg"
              alt="Aligned using NCC"
              sx={{ maxWidth: '400px', height: 'auto' }}
            />
            <p sx={{ fontSize: '1rem', fontStyle: 'italic', color: 'gray', textAlign: 'center' }}>
              Alignment shifts: Green {'->'} Blue: (1, -1), Red {'->'} Blue: (7, -1)
            </p>
          </div>
        </div>

        <div sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <div sx={{ flex: '1', paddingRight: '20px' }}>
            <h3>3. Euclidean Distance</h3>
            <p> The Euclidean Distance measures the geometric distance between the pixel values in the reference and target channels. It's similar to SSD, but instead of just looking at intensity differences, it calculates the overall distance between pixels. This gives a more intuitive sense of how far apart the images are and can be a reliable way to gauge alignment. However, like SSD, it can be sensitive to noise and changes in lighting. </p>
          </div>
          <div>
            <img
              src="/aligned_cathedral_euclidean_only.jpg"
              alt="Aligned using Euclidean Distance"
              sx={{ maxWidth: '400px', height: 'auto' }}
            />
            <p sx={{ fontSize: '1rem', fontStyle: 'italic', color: 'gray', textAlign: 'center' }}>
              Alignment shifts: Green {'->'} Blue: (1, -1), Red {'->'} Blue: (7, -1)
            </p>
          </div>
        </div>
      </section>

      <section sx={{ marginBottom: '40px' }}>
        <h2>Pyramid Speedup</h2>
        <div sx={{ display: 'flex', alignItems: 'center' }}>
          <div sx={{ flex: '1', paddingRight: '20px' }}>
          <p> For larger images, I used a pyramid speedup technique to make the alignment process more efficient. The pyramid method creates smaller, downscaled versions of the image at different levels, with each level being a lower-resolution version of the original. This allows the alignment to happen faster at the coarser levels, and then it's refined as the algorithm works its way up to the finer, higher-resolution levels. </p> <p> In my implementation, I downscaled the image by averaging neighboring pixels to create half-size versions at each level, continuing this process until the image was small enough to align quickly. I started the alignment with the smallest image and then doubled the shifts found at each level when moving to the next, allowing for faster alignment as I worked up to the original size. </p> <p> I chose SSD (Sum of Squared Differences) as the metric for this pyramid-based alignment. After testing SSD, NCC, and Euclidean distance on a few images, SSD gave the most reliable visual results with the least amount of artifacts. The pyramid speedup made a big difference in reducing alignment time for high-resolution images, while still maintaining the accuracy and quality that the single-scale SSD method provided. This way, I avoided the slow process of pixel-by-pixel searching in large images without sacrificing precision. </p>
          </div>
          <div>
            <img
              src="/aligned_cathedral_ssd_pyramid.jpg"
              alt="Aligned using Pyramid SSD"
              sx={{ maxWidth: '400px', height: 'auto' }}
            />
            <p sx={{ fontSize: '1rem', fontStyle: 'italic', color: 'gray', textAlign: 'center' }}>
              Alignment shifts: Green {'->'} Blue: (0, 0), Red {'->'} Blue: (8, 0)
            </p>
          </div>

        </div>
      </section>
      <section sx={{ marginBottom: '40px' }}>
  <h2>Pyramid Speedup Proof</h2>
  <p> To check how effective the pyramid speedup was, I compared the runtimes of the regular SSD alignment and the pyramid speedup SSD alignment on two of the biggest images in the Prokudin-Gorskii collection: <em>sculpture.tif</em> and <em>self_portrait.tif</em>, both of which are 74.3 MB. As a side note, running the coarse-to-fine pyramid speedup on all the images took only 24.1 seconds, which easily meets the requirement of averaging less than 1 minute per image. </p>
  <p>
    Below are the results of the comparison. 
  </p>

  <h3>1. <em>sculpture.tif</em></h3>
  <p><strong>Normal SSD Runtime:</strong> <span>56.6</span> seconds</p>
  <p><strong>Pyramid SSD Runtime:</strong> <span>3.7</span> seconds</p>

  <div sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
    <div sx={{ textAlign: 'center', marginRight: '20px' }}>
      <h4>Normal SSD Result</h4>
      <img
        src="/aligned_sculpture.tif_ssd_only.jpg"
        alt="Sculpture Aligned using Normal SSD"
        sx={{ maxWidth: '400px', height: 'auto' }}
      />
      <p sx={{ fontSize: '1rem', fontStyle: 'italic', color: 'gray' }}>
        Displacement: Green {'->'} Blue: (15, -10), Red {'->'} Blue: (15, -2)
      </p>
    </div>
    <div sx={{ textAlign: 'center' }}>
      <h4>Pyramid SSD Result</h4>
      <img
        src="/aligned_sculpture.tif_ssd_pyramid.jpg"
        alt="Sculpture Aligned using Pyramid SSD"
        sx={{ maxWidth: '400px', height: 'auto' }}
      />
      <p sx={{ fontSize: '1rem', fontStyle: 'italic', color: 'gray' }}>
        Displacement: Green {'->'} Blue: (8, -8), Red {'->'} Blue: (-8, 0)
      </p>
    </div>
  </div>

  <h3>2. <em>self_portrait.tif</em></h3>
  <p><strong>Normal SSD Runtime:</strong> <span>37.6</span> seconds</p>
  <p><strong>Pyramid SSD Runtime:</strong> <span>2.4</span> seconds</p>

  <div sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
    <div sx={{ textAlign: 'center', marginRight: '20px' }}>
      <h4>Normal SSD Result</h4>
      <img
        src="/aligned_self_portrait.tif_ssd_only.jpg"
        alt="Self-Portrait Aligned using Normal SSD"
        sx={{ maxWidth: '400px', height: 'auto' }}
      />
      <p sx={{ fontSize: '1rem', fontStyle: 'italic', color: 'gray' }}>
        Displacement: Green {'->'} Blue: (15, -3), Red {'->'} Blue: (15, -6)
      </p>
    </div>
    <div sx={{ textAlign: 'center' }}>
      <h4>Pyramid SSD Result</h4>
      <img
        src="/aligned_self_portrait.tif_ssd_pyramid.jpg"
        alt="Self-Portrait Aligned using Pyramid SSD"
        sx={{ maxWidth: '400px', height: 'auto' }}
      />
      <p sx={{ fontSize: '1rem', fontStyle: 'italic', color: 'gray' }}>
        Displacement: Green {'->'} Blue: (8, 0), Red {'->'} Blue: (0, 0)
      </p>
    </div>
  </div>
</section>


      <Footer />
    </section>
  );
}
