/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';
import Header from '../header';
import Footer from '../footer';

export default function Proj5() {
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
            <a href="#part-1" sx={{ display: 'block', marginBottom: '20px', color: 'black', textDecoration: 'none' }}>Part 1</a>
            <a href="#part-2" sx={{ display: 'block', marginBottom: '20px', color: 'black', textDecoration: 'none' }}>Part 2</a>
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
              Programming Project #5: Diffusion Models
            </h1>
            <h4>CS180: Intro to Computer Vision and Computational Photography</h4>
          </div>

          <section id="overview" sx={{ marginBottom: '40px', padding: '20px' }}>
            <h2>Overview</h2>
            <p>
              Implement and deploy diffusion models for image generation
            </p>
          </section>

          <section id="part-1" sx={{ marginBottom: '40px', padding: '20px' }}>
            <h2>Part 1: Sampling Loops</h2>
            <p>
            For Part 1.1, I successfully implemented the forward process to add progressively increasing levels of noise to a clean image using a Gaussian distribution. This involved scaling the original image based on noise coefficients and adding noise sampled from a normal distribution, showcasing how the image degrades at specific timesteps (t=250, 500, 750).
            </p>
            <section id="part-1-1" sx={{ marginBottom: '40px' }}>
              <h3>1.1 Implementing the Forward Process</h3>
              <div sx={{ textAlign: 'center', marginBottom: '20px' }}>
                <h4>Noisy Image at t = 250</h4>
                <img src="/proj5/campanile_1.1_250.jpg" alt="Noisy Campanile at t=250" />
              </div>
              <div sx={{ textAlign: 'center', marginBottom: '20px' }}>
                <h4>Noisy Image at t = 500</h4>
                <img src="/proj5/campanile_1.1_250.jpg" alt="Noisy Campanile at t=500" />
              </div>
              <div sx={{ textAlign: 'center', marginBottom: '20px' }}>
                <h4>Noisy Image at t = 750</h4>
                <img src="/proj5/campanile_1.1_250.jpg" alt="Noisy Campanile at t=750" />
              </div>
            </section>

            <section id="part-1-2" sx={{ marginBottom: '40px' }}>
    <h3>1.2 Classical Denoising</h3>
    <p>
For Part 1.2, I applied Gaussian blur filtering to attempt denoising the noisy images created in Part 1.1. Although Gaussian blur smoothens some noise, it struggles to restore fine details, highlighting the limitations of classical denoising techniques compared to diffusion models.
</p>
    <div sx={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '20px' }}>
        <div>
            <h4>Noisy Image at t = 250</h4>
            <img src="/proj5/noisy_image_t250.png" alt="Noisy Image at t=250" />
        </div>
        <div>
            <h4>Denoised Image at t = 250</h4>
            <img src="/proj5/denoised_image_t250.png" alt="Denoised Image at t=250" />
        </div>
    </div>

    <div sx={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '20px' }}>
        <div>
            <h4>Noisy Image at t = 500</h4>
            <img src="/proj5/noisy_image_t500.png" alt="Noisy Image at t=500" />
        </div>
        <div>
            <h4>Denoised Image at t = 500</h4>
            <img src="/proj5/denoised_image_t500.png" alt="Denoised Image at t=500" />
        </div>
    </div>

    <div sx={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '20px' }}>
        <div>
            <h4>Noisy Image at t = 750</h4>
            <img src="/proj5/noisy_image_t750.png" alt="Noisy Image at t=750" />
        </div>
        <div>
            <h4>Denoised Image at t = 750</h4>
            <img src="/proj5/denoised_image_t750.png" alt="Denoised Image at t=750" />
        </div>
    </div>
</section>


<section id="part-1-3" sx={{ marginBottom: '40px' }}>
<p>
In Part 1.3, I cleaned up noisy images from Part 1.2 at timesteps t = [250, 500, 750]. Using the UNet model, I estimated the noise in each noisy image and removed it by scaling the noise properly. This gave me a cleaner version of the original image. I visualized the results, showing the original image, the noisy version, and the cleaned-up estimate to see how well the model performed.
</p>

  <h3>1.3 One-Step Denoising</h3>
  <div
    sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
      textAlign: 'center',
    }}
  >
    {/* Row 1: Original Images */}
    <div>
      <h4>Original Image (t=250)</h4>
      <img src="/proj5/original_image_1.3_t250.png" alt="Original Image t=250" />
    </div>
    <div>
      <h4>Original Image (t=500)</h4>
      <img src="/proj5/original_image_1.3_t500.png" alt="Original Image t=500" />
    </div>
    <div>
      <h4>Original Image (t=750)</h4>
      <img src="/proj5/original_image_1.3_t750.png" alt="Original Image t=750" />
    </div>

    {/* Row 2: Noisy Images */}
    <div>
      <h4>Noisy Image (t=250)</h4>
      <img src="/proj5/noisy_image_1.3_t250.png" alt="Noisy Image t=250" />
    </div>
    <div>
      <h4>Noisy Image (t=500)</h4>
      <img src="/proj5/noisy_image_1.3_t500.png" alt="Noisy Image t=500" />
    </div>
    <div>
      <h4>Noisy Image (t=750)</h4>
      <img src="/proj5/noisy_image_1.3_t750.png" alt="Noisy Image t=750" />
    </div>

    {/* Row 3: Denoised Images */}
    <div>
      <h4>Denoised Image (t=250)</h4>
      <img src="/proj5/unnoised_image_1.3_t250.png" alt="Denoised Image t=250" />
    </div>
    <div>
      <h4>Denoised Image (t=500)</h4>
      <img src="/proj5/unnoised_image_1.3_t500.png" alt="Denoised Image t=500" />
    </div>
    <div>
      <h4>Denoised Image (t=750)</h4>
      <img src="/proj5/unnoised_image_1.3_t750.png" alt="Denoised Image t=750" />
    </div>
  </div>
</section>
<section id="part-1-4" sx={{ marginBottom: '40px' }}>
    <h3>1.4 Iterative Denoising</h3>
    <p>
    Instead of removing noise in one step, I removed it gradually over several steps. This allowed the image to get cleaner little by little. By skipping some steps, I sped up the process while still getting good results. This method worked much better than doing everything in one go or using basic methods like blurring.    </p>
    <div sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
      <img src="/proj5/denoised_image_1.4_t0.png" alt="Denoising at t=0" />
      <img src="/proj5/denoised_image_1.4_t60.png" alt="Denoising at t=60" />
      <img src="/proj5/denoised_image_1.4_t210.png" alt="Denoising at t=210" />
      <img src="/proj5/denoised_image_1.4_t360.png" alt="Denoising at t=360" />
      <img src="/proj5/denoised_image_1.4_t510.png" alt="Denoising at t=510" />
      <img src="/proj5/denoised_image_1.4_t660.png" alt="Denoising at t=660" />
    </div>
  </section>
  <section id="part-1-5" sx={{ marginBottom: '40px' }}>
            <h3>1.5 Image Generation</h3>
            <p>
            I started with complete noise (just random pixels) and used the denoising steps to create entirely new images. The model turned the noise into clear and realistic pictures. This showed how the model can generate something from nothing.
            </p>
            <div
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                marginBottom: '20px',
              }}
            >
              <img src="/proj5/generated_image_1.5_0.png" alt="Generated Image at t=0" />
              <img src="/proj5/generated_image_1.5_1.png" alt="Generated Image at t=1" />
              <img src="/proj5/generated_image_1.5_4.png" alt="Generated Image at t=4" />
            </div>
          </section>

          {/* Part 1.7 */}
          <section id="part-1-7" sx={{ marginBottom: '40px' }}>
            <h3>1.7 Noise Levels</h3>
            <p>
            I took an existing image, added some noise, and then removed it. This made the model "rethink" the image and change it slightly. Adding only a little noise kept the edits small, while more noise created bigger changes. I tried this with regular pictures and hand-drawn ones.


            </p>
            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '20px',
                textAlign: 'center',
              }}
            >
              {[
                "1",
                "3",
                "5",
                "7",
                "10",
                "20",
              ].map((t) => (
                <div key={t}>
                  <h4>Noise Level: {t}</h4>
                  <img
                    src={`/proj5/clean_image_noise_level_1.7_${t}.png`}
                    alt={`Cleaned Image Noise Level ${t}`}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Part 1.7.1 */}
          <section id="part-1-7-1" sx={{ marginBottom: '40px' }}>
            <h3>1.7.1 Timesteps</h3>
            <p>
              Visualizing cleaned images at different timesteps.
            </p>
            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                gap: '20px',
                textAlign: 'center',
              }}
            >
              {["1", "3", "5", "7", "10", "20"].map((t) => (
                <div key={t}>
                  <h4>Timestep: {t}</h4>
                  <img
                    src={`/proj5/clean_image_timestep_1.7.1_${t}.png`}
                    alt={`Cleaned Image Timestep ${t}`}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Part 1.7.3 */}
          <section id="part-1-7-3" sx={{ marginBottom: '40px' }}>
            <h3>1.7.3 Custom Images</h3>
            <p>
            This was similar to the last part, but I added text instructions to guide the changes. For example, I could make an image look like "a rocket ship" by giving the model that instruction. The model followed the text prompt while fixing the noise.
            </p>
            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                gap: '20px',
                textAlign: 'center',
              }}
            >
              {["1", "3", "5", "7", "10", "20"].map((t) => (
                <div key={t}>
                  <h4>Custom Timestep: {t}</h4>
                  <img
                    src={`/proj5/generated_image_1.7.3_${t}.png`}
                    alt={`Generated Custom Timestep ${t}`}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Part 1.8 */}
          <section id="part-1-8" sx={{ marginBottom: '40px' }}>
            <h3>1.8 Diffusion Outcomes</h3>
            <p>
              Compared outcomes across different parameters to evaluate the final model's efficiency(had a bug I couldn't fix)
            </p>
            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                textAlign: 'center',
              }}
            >
              {["1", "2", "3"].map((t) => (
                <div key={t}>
                  <h4>Outcome {t}</h4>
                  <img
                    src={`/proj5/generated_image_1.8.3_${t}.png`}
                    alt={`Diffusion Outcome ${t}`}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Part 1.10 */}
          <section id="part-1-10" sx={{ marginBottom: '40px' }}>
            <h3>1.10 Additional Results</h3>
            <p>
              Additional generated images at varying timesteps(had a bug I couldn't fix)
            </p>
            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px',
                textAlign: 'center',
              }}
            >
              {["1", "2", "3"].map((t) => (
                <div key={t}>
                  <h4>Result {t}</h4>
                  <img
                    src={`/proj5/generated_image_1.10_${t}.png`}
                    alt={`Generated Image ${t}`}
                  />
                </div>
              ))}
            </div>
          </section>


            {/* Repeat similar sections for all parts of Part 1 */}
          </section>

          <section id="part-2" sx={{ marginBottom: '40px', padding: '20px' }}>
  <h2>Part 2: Training</h2>

  <section id="part-2-1" sx={{ marginBottom: '40px' }}>
    <h3>2.1 Adding Time Conditioning to UNet</h3>
    <p>
      I trained a time-conditioned UNet model. This training process enabled the model to predict noise at different timesteps. The loss curve and generated outputs after specific epochs illustrate the model's progress.
    </p>
    <div sx={{ textAlign: 'center', marginBottom: '20px' }}>
      <h4>Training Loss Curve</h4>
      <img
        src="/proj5/training_loss_curve.png"
        alt="Time-Conditioned UNet Training Loss Curve"
        sx={{ maxWidth: '100%', height: 'auto', margin: '0 auto' }}
      />
    </div>
    <div sx={{ textAlign: 'center', marginBottom: '20px' }}>
      <h4>Generated Samples After 5 Epochs</h4>
      <img
        src="/proj5/time_conditional_unet_gen_5_epochs_part2_2.3.png"
        alt="Generated Samples After 5 Epochs"
        sx={{ maxWidth: '100%', height: 'auto', margin: '0 auto' }}
      />
    </div>
    <div sx={{ textAlign: 'center', marginBottom: '20px' }}>
      <h4>Generated Samples After 20 Epochs</h4>
      <img
        src="/proj5/time_conditional_unet_gen_20_epochs_part2_2.3.png"
        alt="Generated Samples After 20 Epochs"
        sx={{ maxWidth: '100%', height: 'auto', margin: '0 auto' }}
      />
    </div>
  </section>

  <section id="part-2-2" sx={{ marginBottom: '40px' }}>
    <h3>2.2 Iterative Noise Reduction</h3>
    <p>
      I experimented with the gradual reduction of noise over multiple timesteps. Below are the results showing how the model progressively refines the images.
    </p>
    <div
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '20px',
        textAlign: 'center',
      }}
    >
      {[0, 60, 210, 360, 510, 660].map((step) => (
        <div key={step}>
          <h4>Step {step}</h4>
          <img
            src={`/proj5/denoised_image_1.4_t${step}.png`}
            alt={`Denoising at Step ${step}`}
            sx={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      ))}
    </div>
  </section>

  <section id="part-2-3" sx={{ marginBottom: '40px' }}>
    <h3>2.3 Comparing Outputs Across Epochs</h3>
    <p>
      By visualizing outputs after training for different numbers of epochs, we can see the model's improvements in generating realistic outputs from noisy inputs.
    </p>
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        textAlign: 'center',
      }}
    >
      <div>
        <h4>Output After 5 Epochs</h4>
        <img
          src="/proj5/time_conditional_unet_gen_5_epochs_part2_2.3.png"
          alt="Generated Samples After 5 Epochs"
          sx={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      <div>
        <h4>Output After 20 Epochs</h4>
        <img
          src="/proj5/time_conditional_unet_gen_20_epochs_part2_2.3.png"
          alt="Generated Samples After 20 Epochs"
          sx={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </div>
  </section>

  <section id="part-2-5" sx={{ marginBottom: '40px' }}>
  <h3>2.5 Class-Conditional Sample Generation</h3>
  <p>
    I generated samples for each digit class using a class-conditional UNet after training for 5 and 20 epochs. The generated images demonstrate how the model improves its ability to generate realistic outputs with more training.
  </p>
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      textAlign: 'center',
    }}
  >
    <div>
      <h4>Generated Samples After 5 Epochs</h4>
      <img
        src="/proj5/generated_samples_2.5_epoch_5.png"
        alt="Generated Samples After 5 Epochs"
        sx={{ maxWidth: '100%', height: 'auto', margin: '0 auto' }}
      />
    </div>
    <div>
      <h4>Generated Samples After 20 Epochs</h4>
      <img
        src="/proj5/generated_samples_2.5_epoch_20.png"
        alt="Generated Samples After 20 Epochs"
        sx={{ maxWidth: '100%', height: 'auto', margin: '0 auto' }}
      />
    </div>
  </div>
</section>

</section>



          <Footer />
        </div>
      </div>
    </div>
  );
}
