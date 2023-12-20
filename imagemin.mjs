import imagemin from 'imagemin';

// Input and output directories
const inputDir = './src/img';
const outputDir = './src/optimg';

// Run Imagemin
async function compressImages() {
  try {
    const files = await imagemin([`${inputDir}/*.{jpg,png}`], {
      destination: outputDir,
      plugins: [],
    });

    console.log('Images optimized:', files);
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

// Run the compression function
compressImages();
