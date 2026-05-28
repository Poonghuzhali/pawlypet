import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcDir = path.join(__dirname, '..', 'src')

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(fullPath, files)
    else if (/\.(jsx?|tsx?)$/.test(entry.name)) files.push(fullPath)
  }
  return files
}

for (const file of walk(srcDir)) {
  if (file.includes(`${path.sep}utils${path.sep}assetUrl.js`)) continue

  let content = fs.readFileSync(file, 'utf8')
  if (!content.includes('/images/')) continue

  const updated = content.replace(
    /(['"])\/images\/([^'"]+)\1/g,
    "assetUrl('$1/images/$2'.replace(/^'\\//, '/'))"
  )

  // Fix the botched replace - use cleaner approach
  let next = content.replace(
    /(['"])\/images\/([^'"]+)\1/g,
    (_, quote, imagePath) => `assetUrl(${quote}/images/${imagePath}${quote})`
  )

  if (next === content) continue

  if (!next.includes("from '@/utils/assetUrl'")) {
    next = `import { assetUrl } from '@/utils/assetUrl'\n${next}`
  }

  fs.writeFileSync(file, next)
  console.log('Updated', path.relative(srcDir, file))
}
