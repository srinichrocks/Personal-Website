/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';
import Header from '../header';
import Footer from '../footer';

export default function Proj2() {
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
            <a href="#filters" sx={{ display: 'block', marginBottom: '20px', color: 'black', textDecoration: 'none' }}>Part 1: Filters</a>
            <a href="#frequencies" sx={{ display: 'block', marginBottom: '20px', color: 'black', textDecoration: 'none' }}>Part 2: Frequencies</a>
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
              Fun with Filters and Frequencies!
            </h1>
            <h4>CS180: Intro to Computer Vision and Computational Photography</h4>
            <h4>Srinidhi Raghavendran</h4>
          </div>

          <section id="overview" sx={{ marginBottom: '40px', padding: '20px' }}>
            <h2>Overview</h2>
            <p>
              In this project, we explore the world of image filtering and frequency analysis to gain insight into image manipulation and transformations. The goal is to understand how convolution filters work and how different frequency manipulations affect images.
            </p>
          </section>

          <section id="filters" sx={{ marginBottom: '40px', padding: '20px' }}>
            <h2>Part 1: Fun with Filters</h2>

            <section id="finite-difference" sx={{ marginBottom: '40px', padding: '20px' }}>
              <h3>1.1: Finite Difference Operator</h3>
              <p>
                Using finite difference operators to compute the image gradients in the x and y directions helps identify the edges in an image.
              </p>

              <div
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gridTemplateRows: 'auto auto',
                  gap: '20px',
                  backgroundColor: '#e0f7e0',
                  padding: '20px',
                  borderRadius: '8px',
                  maxWidth: '800px',
                  margin: '0 auto',
                }}
              >
                <div sx={{ textAlign: 'center' }}>
                  <img
                    src='/finite_difference_operator/gradient_x.png'
                    alt="Gradient dx"
                    sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                  />
                  <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Gradient dx</p>
                </div>

                <div sx={{ textAlign: 'center' }}>
                  <img
                    src='/finite_difference_operator/gradient_y.png'
                    alt="Gradient dy"
                    sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                  />
                  <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Gradient dy</p>
                </div>

                <div sx={{ textAlign: 'center' }}>
                  <img
                    src='/finite_difference_operator/gradient_magnitude.png'
                    alt="Gradient Magnitude"
                    sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                  />
                  <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Gradient Magnitude Image</p>
                </div>

                <div sx={{ textAlign: 'center' }}>
                  <img
                    src='/finite_difference_operator/edge_image.png'
                    alt="Binarized Gradient Magnitude Image"
                    sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                  />
                  <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Binarized Edge Image</p>
                </div>
              </div>
            </section>

            <h3>1.2: Derivative of Gaussian (DoG) Filter</h3>
            <p>
              We noted that the results with just the difference operator were rather noisy. Luckily, we have a smoothing operator handy: the Gaussian filter.
            </p>
            <p>
              First, we create a blurred version of the original image by convolving it with a Gaussian filter (G) and repeat the procedure in the previous part.
              To create a 2D Gaussian filter, we use the <code>cv2.getGaussianKernel()</code> function to generate a 1D Gaussian, and then take the outer product with its transpose to form a 2D Gaussian kernel.
            </p>
            <p>
              By comparing the results, we notice a significant reduction in noise. This is because the Gaussian filter smooths out high-frequency variations.
            </p>

            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridTemplateRows: 'auto auto',
                gap: '20px',
                backgroundColor: '#f0f8ff',
                padding: '20px',
                borderRadius: '8px',
                maxWidth: '1000px',
                margin: '0 auto',
              }}
            >
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/derivative_of_gaussian_2d/original_image.png'
                  alt="Original Image"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Original Image</p>
              </div>

              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/derivative_of_gaussian_2d/blurred_image_gaussian.png'
                  alt="Blurred Image (Gaussian)"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Blurred Image (Gaussian)</p>
              </div>

              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/derivative_of_gaussian_2d/gradient_magnitude_gaussian.png'
                  alt="Gradient Magnitude with Gaussian"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Gradient Magnitude (Gaussian)</p>
              </div>

              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/derivative_of_gaussian_2d/gradient_x_gaussian.png'
                  alt="DoG Filter (X-Direction)"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>DoG Filter (X-Direction)</p>
              </div>

              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/derivative_of_gaussian_2d/gradient_y_gaussian.png'
                  alt="DoG Filter (Y-Direction)"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>DoG Filter (Y-Direction)</p>
              </div>

              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/derivative_of_gaussian_2d/edge_image_gaussian.png'
                  alt="Binarized Edge Image"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Binarized Edge Image</p>
              </div>
            </div>

            <p>
              By using the Derivative of Gaussian (DoG) filters in both x and y directions, we can effectively highlight the edges and reduce noise. This results in a much cleaner edge detection compared to using just the finite difference operator.
            </p>

            <p>
              Next, we want to demonstrate the commutative property of convolution. Instead of blurring the image first, we convolve the Gaussian filter (G) with the derivative operators (D<sub>x</sub> and D<sub>y</sub>) to create the Derivative of Gaussian (DoG) filters.
              We then apply these DoG filters directly to the original image. This should yield the same result as the previous method.
            </p>

            <p>
              Unfortunately, even though I followed the expected steps for this part, the results did not align with those from the previous method. This discrepancy might be due to the effect of boundary conditions and padding, which can disrupt the commutative property in a finite image. In theory, applying the DoG filters to the original image should have yielded the same edge detection as applying the Gaussian followed by the derivatives. However, due to the padding artifacts introduced at the image boundaries, the results were not as expected.
            </p>

            <p>
              This highlights an important consideration when dealing with discrete convolutions: while the commutative property holds true in continuous domains, finite images and padding can introduce variations that disrupt this behavior. This is a good lesson for the future that rather than just blindly assuming it doesn't work, we understand and account for these factors in the future.
            </p>

            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridTemplateRows: 'auto auto',
                gap: '20px',
                backgroundColor: '#f0f8ff',
                padding: '20px',
                borderRadius: '8px',
                maxWidth: '1000px',
                margin: '0 auto',
              }}
            >
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/derivative_of_gaussian_1convolution/original_image.png'
                  alt="Original Image"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Original Image</p>
              </div>

              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/derivative_of_gaussian_1convolution/gradient_x_dog.png'
                  alt="DoG Filter (X-Direction)"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>DoG Filter (X-Direction)</p>
              </div>

              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/derivative_of_gaussian_1convolution/gradient_y_dog.png'
                  alt="DoG Filter (Y-Direction)"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>DoG Filter (Y-Direction)</p>
              </div>

              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/derivative_of_gaussian_1convolution/gradient_magnitude_dog.png'
                  alt="Gradient Magnitude (DoG)"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Gradient Magnitude (DoG)</p>
              </div>

              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/derivative_of_gaussian_1convolution/edge_image_dog.png'
                  alt="Binarized Edge Image (DoG)"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Binarized Edge Image (DoG)</p>
              </div>
            </div>

            <p>
              Despite following the expected steps, the results obtained from applying the DoG filters directly to the original image did not perfectly match those from the previous method of blurring first and then applying the finite difference operators. This discrepancy can be attributed to the effects of padding and boundary conditions, which can disrupt the commutative property of convolution in finite images. While the theoretical commutative property of convolution suggests the results should be identical, practical issues like padding artifacts introduced at the image boundaries can cause variations in the output. This highlights the importance of carefully considering boundary effects when applying convolutions in image processing tasks.
            </p>
          </section>

          <section id="frequencies" sx={{ marginBottom: '40px', padding: '20px' }}>
            <h2>Part 2: Fun with Frequencies!</h2>

            <h3>2.1: Image Sharpening</h3>
            <p>
              The unsharp mask filter enhances the high-frequency details of the image, making it appear sharper. Here, we apply it to a blurry image and compare it with the original sharp image.
            </p>

            <div
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '40px',
              }}
            >
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/taj/taj_original.png'
                  alt="Original Taj Image"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Original Taj Image</p>
              </div>

              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/taj/taj_sharpened.png'
                  alt="Sharpened Taj Image"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Sharpened Taj Image</p>
              </div>
            </div>

            <div
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
              }}
            >
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/taj/spongebob_original.png'
                  alt="Original Spongebob Image"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Original Spongebob Image</p>
              </div>

              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/taj/spongebob_blurred.png'
                  alt="Blurred Spongebob Image"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Blurred Spongebob Image</p>
              </div>

              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/taj/spongebob_sharpened.png'
                  alt="Sharpened Spongebob Image"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Sharpened Spongebob Image</p>
              </div>
            </div>

            <h3>2.2: Hybrid Images</h3>
            <p>
              By combining the high-frequency content of one image and the low-frequency content of another, we create a hybrid image that changes in interpretation based on viewing distance. Below, we showcase three examples of hybrid images: Derek and the Cat, Batman and Joker, and Sri and the Dog.
            </p>

            <h4>Derek and the Cat</h4>
            <p>
              In this example, we blend the high-frequency content of Derek's face with the low-frequency content of a cat's face. You may need to zoom in to see the whiskers popping out in the hybrid image.
            </p>

            <h5>Fourier Analysis of Original Images - Derek and Cat</h5>
            <p>
              The Fourier transform of the original images helps visualize the frequency content of each image before any filtering or blending. Below are the Fourier transforms of the original Derek and Cat images.
            </p>
            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '40px',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/fourier_DerekPicture.jpg'
                  alt="Fourier Transform of Original Derek"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Fourier Transform of Original Derek</p>
              </div>
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/fourier_nutmeg.jpg'
                  alt="Fourier Transform of Original Cat"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Fourier Transform of Original Cat</p>
              </div>
            </div>

            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '20px',
                marginBottom: '40px',
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/low_pass_derek.png'
                  alt="Low-Pass Image of Derek"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Low-Pass Image of Derek</p>
              </div>
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/high_pass_cat.png'
                  alt="High-Pass Image of Cat"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>High-Pass Image of Cat</p>
              </div>
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/hybrid_image.png'
                  alt="Hybrid Image of Derek and Cat"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Hybrid Image of Derek and Cat</p>
              </div>
            </div>

            <h5>Fourier Analysis - Derek and Cat</h5>
            <p>
              Below, we display the log magnitude of the Fourier transform for the low-pass and high-pass filtered images, as well as the hybrid image.
              The Fourier transform helps visualize the frequency content of each image, highlighting the distinct high and low frequencies.
            </p>
            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '20px',
                marginBottom: '40px',
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/fourier_low_pass_derek.png'
                  alt="Fourier Transform of Low-Pass Derek"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Fourier Transform of Low-Pass Derek</p>
              </div>
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/fourier_high_pass_cat.png'
                  alt="Fourier Transform of High-Pass Cat"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Fourier Transform of High-Pass Cat</p>
              </div>
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/fourier_hybrid_image_derek_cat.png'
                  alt="Fourier Transform of Hybrid Derek and Cat"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Fourier Transform of Hybrid Derek and Cat</p>
              </div>
            </div>

            <h4>Batman and Joker</h4>
            <p>
              In this example, we blend the high-frequency content of Joker's face with the low-frequency content of Batman's face. Up close, you can see the details of Joker's face, while from a distance, the blended image takes on the appearance of Batman.
            </p>

            <h5>Fourier Analysis of Original Images - Batman and Joker</h5>
            <p>
              The Fourier transform of the original images helps visualize the frequency content of each image before any filtering or blending. Below are the Fourier transforms of the original Batman and Joker images.
            </p>
            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '40px',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/fourier_batman.jpg'
                  alt="Fourier Transform of Original Batman"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Fourier Transform of Original Batman</p>
              </div>
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/fourier_joker.png'
                  alt="Fourier Transform of Original Joker"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Fourier Transform of Original Joker</p>
              </div>
            </div>

            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '20px',
                marginBottom: '40px',
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/low_pass_batman.png'
                  alt="Low-Pass Image of Batman"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Low-Pass Image of Batman</p>
              </div>
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/high_pass_joker.png'
                  alt="High-Pass Image of Joker"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>High-Pass Image of Joker</p>
              </div>
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/hybrid_image_batman_joker.png'
                  alt="Hybrid Image of Batman and Joker"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Hybrid Image of Batman and Joker</p>
              </div>
            </div>

            <h5>Fourier Analysis - Batman and Joker</h5>
            <p>
              Below, we display the log magnitude of the Fourier transform for the low-pass and high-pass filtered images, as well as the hybrid image.
              The Fourier transform helps visualize the frequency content of each image, highlighting the distinct high and low frequencies.
            </p>
            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '20px',
                marginBottom: '40px',
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/fourier_low_pass_batman.png'
                  alt="Fourier Transform of Low-Pass Batman"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Fourier Transform of Low-Pass Batman</p>
              </div>
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/fourier_high_pass_joker.png'
                  alt="Fourier Transform of High-Pass Joker"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Fourier Transform of High-Pass Joker</p>
              </div>
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/fourier_hybrid_image_batman_joker.png'
                  alt="Fourier Transform of Hybrid Batman and Joker"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Fourier Transform of Hybrid Batman and Joker</p>
              </div>
            </div>

            <h4>Sri and the Dog (Failed Example)</h4>
            <p>
              For this hybrid image, we attempted to blend the high-frequency content of Sri's face with the low-frequency content of a dog's face using a high pass and low pass filter. The goal was to create a seamless transition between the two images. However, due to poor alignment and contrasting features, the resulting image did not blend well. Up close, the details of Sri's face are apparent, but the overall hybrid image appears distorted and fails to capture the desired effect. The dog essentially got nullified so the merged image does not look right.
            </p>

            <h5>Fourier Analysis of Original Images - Sri and Dog</h5>
            <p>
              The Fourier transform of the original images helps visualize the frequency content of each image before any filtering or blending. Below are the Fourier transforms of the original Sri and Dog images.
            </p>
            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '40px',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/fourier_Raghavendran_Srinidhi_photo.jpeg'
                  alt="Fourier Transform of Original Sri"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Fourier Transform of Original Sri</p>
              </div>
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/fourier_dog.jpg'
                  alt="Fourier Transform of Original Dog"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Fourier Transform of Original Dog</p>
              </div>
            </div>

            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '20px',
                marginBottom: '40px',
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/low_pass_sri.png'
                  alt="Low-Pass Image of Sri"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Low-Pass Image of Sri</p>
              </div>
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/high_pass_dog.png'
                  alt="High-Pass Image of Dog"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>High-Pass Image of Dog</p>
              </div>
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/hybrid_image_sri_dog.png'
                  alt="Hybrid Image of Sri and Dog (Failed)"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Hybrid Image of Sri and Dog (Failed)</p>
              </div>
            </div>

            <h5>Fourier Analysis - Sri and Dog</h5>
            <p>
              Below, we display the log magnitude of the Fourier transform for the low-pass and high-pass filtered images, as well as the hybrid image.
              The Fourier transform helps visualize the frequency content of each image, highlighting the distinct high and low frequencies.
            </p>
            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '20px',
                marginBottom: '40px',
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/fourier_low_pass_sri.png'
                  alt="Fourier Transform of Low-Pass Sri"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Fourier Transform of Low-Pass Sri</p>
              </div>
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/fourier_high_pass_dog.png'
                  alt="Fourier Transform of High-Pass Dog"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Fourier Transform of High-Pass Dog</p>
              </div>
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/hybrid_images/fourier_hybrid_image_sri_dog.png'
                  alt="Fourier Transform of Hybrid Sri and Dog"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Fourier Transform of Hybrid Sri and Dog</p>
              </div>
            </div>

            <h3>2.3: Gaussian and Laplacian Stacks</h3>
            <p>
              We created Gaussian and Laplacian stacks at different levels (0, 2, and 4) for both the apple and orange images,
              which allowed us to capture high, medium, and low-frequency details without downsampling. Below, we display a
              visualization of the Laplacian blending process for these levels.
            </p>
            <div sx={{ textAlign: 'center', marginBottom: '20px' }}>
              <img
                src='/oraple/laplacian_blending_levels_0_2_4.png'
                alt='Laplacian Blending at Levels 0, 2, and 4'
                sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '700px', height: 'auto' }}
              />
              <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>
                Laplacian Blending at Levels 0, 2, and 4
              </p>
            </div>

            <h3>Part 2.4: Multiresolution Blending</h3>
            <p>
              By implementing Gaussian and Laplacian stacks, we blend two images seamlessly with smooth transitions, as described in Burt and Adelson's paper.
              For this blending experiment, we used an image of a goblin and a photo of Sri. An intermediate step involved aligning the two images since their original sizes were different.
              We used an alignment function from section 2.2 to adjust the images to the same size and orientation before blending.
            </p>
            <p>
              We used an irregular mask in the shape of a circle to blend the two images. The circular mask ensures a smooth transition between the goblin and Sri, where the blending happens predominantly in the center of the image.
              The edges of the mask were blurred to achieve a seamless blend across different levels of the Gaussian and Laplacian stacks.
            </p>

            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '20px',
                marginBottom: '40px',
                maxWidth: '1200px',
                margin: '0 auto',
              }}
            >
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/oraple/goblin.webp'
                  alt="Goblin Image"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Original Goblin Image</p>
              </div>

              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/oraple/Raghavendran_Srinidhi_photo.jpeg'
                  alt="Sri Image"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Original Sri Image</p>
              </div>

              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/oraple/circular_mask.png'
                  alt="Circular Mask"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Circular Mask</p>
              </div>
            </div>

            <h4>Laplacian Blending at Different Levels</h4>
            <p>
              Below is the Laplacian blended image at different levels (0, 2, and 4) using the circular mask. The images of the goblin and Sri are blended smoothly at each level using the Gaussian and Laplacian pyramids, creating a single visualization.
            </p>
            <div
              sx={{
                textAlign: 'center',
                marginBottom: '40px',
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              <img
                src='/oraple/laplacian_blending_goblin_sri_levels_0_2_4_irregular_mask.png'
                alt="Laplacian Blending - Levels 0, 2, and 4"
                sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '700px', height: 'auto' }}
              />
              <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Blending at Levels 0, 2, and 4</p>
            </div>

            <div
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '40px',
                maxWidth: '1200px',
                margin: '0 auto',
              }}
            >
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/oraple/final_blended_goblin_sri_irregular_mask.png'
                  alt="Final Blended Image"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '600px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Final Blended Image (Goblin + Sri) with Circular Mask</p>
              </div>
            </div>

            <h3>Part 2.4: Multiresolution Blending (Batman + Joker)</h3>
            <p>
              In this blending experiment, we combined images of Batman and Joker. Similar to the previous example, an intermediate step involved aligning the two images since they had different sizes and orientations. The alignment function used in section 2.2 was applied to resize and adjust the images before creating Gaussian and Laplacian stacks for multi-resolution blending.
            </p>

            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '20px',
                marginBottom: '40px',
                maxWidth: '1200px',
                margin: '0 auto',
              }}
            >
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/oraple/batman.jpg'
                  alt="Batman Image"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Batman Image</p>
              </div>

              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/oraple/joker.png'
                  alt="Joker Image"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Joker Image</p>
              </div>

              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/oraple/laplacian_blending_batman_joker_levels_0_2_4.png'
                  alt="Laplacian Blended Levels"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '300px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Laplacian Blended Levels</p>
              </div>
            </div>

            <div
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '40px',
                maxWidth: '1200px',
                margin: '0 auto',
              }}
            >
              <div sx={{ textAlign: 'center' }}>
                <img
                  src='/oraple/final_blended_batman_joker.png'
                  alt="Final Blended Image"
                  sx={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '600px', height: 'auto' }}
                />
                <p sx={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '10px' }}>Final Blended Image (Batman + Joker)</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
