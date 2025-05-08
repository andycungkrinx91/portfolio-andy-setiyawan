// scripts/compress-images.js
const imagemin = require('imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const webp = require('imagemin-webp');

(async () => {
  await imagemin(['public/images/*.{jpg,jpeg,png}'], {
    destination: 'public/images',
    plugins: [
      mozjpeg({ quality: 75 }),
      pngquant({ quality: [0.6, 0.8] }),
      webp({ quality: 75 })
    ]
  });

  console.log('✅ Images compressed successfully');
})();
