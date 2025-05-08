const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

(async () => {
    const inputDirs = [
        'public/projects/', 
        'public/readme-images/', 
        'public/images/'
    ];
    const outputDir = 'public/compressed/';

    // Ensure the output directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    for (const inputDir of inputDirs) {
        const files = fs.readdirSync(inputDir).filter(file => /\.(jpe?g|png)$/i.test(file));

        for (const file of files) {
        const inputPath = path.join(inputDir, file);
        const outputFileName = file.replace(/\.(jpe?g|png)$/i, '.webp');
        const outputPath = path.join(outputDir, outputFileName);

        await sharp(inputPath)
            .webp({ quality: 40 })
            .toFile(outputPath);

        // console.log(`✅ Converted ${file} from ${inputDir}`);
        }
    }

    console.log('✅ All images processed successfully');
})();
