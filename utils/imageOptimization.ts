import sharp from "sharp"
import fs from "fs"
import path from "path"

export async function optimizeImage(inputPath: string, outputPath: string, quality = 80) {
  try {
    await sharp(inputPath)
      .webp({ quality }) // Convert to WebP format
      .toFile(outputPath)

    console.log(`Image optimized: ${outputPath}`)
  } catch (error) {
    console.error(`Error optimizing image: ${inputPath}`, error)
  }
}

export async function optimizeAllImages(directory: string) {
  const files = fs.readdirSync(directory)

  for (const file of files) {
    const filePath = path.join(directory, file)
    const stats = fs.statSync(filePath)

    if (stats.isDirectory()) {
      await optimizeAllImages(filePath)
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const outputPath = path.join(directory, `${path.parse(file).name}.webp`)
      await optimizeImage(filePath, outputPath)
    }
  }
}

// Usage example:
// optimizeAllImages('./public/images')

