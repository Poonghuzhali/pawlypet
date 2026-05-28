import fs from 'fs'
import path from 'path'

const srcDir = path.join(process.cwd(), 'src')
const colors = new Set()

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(fullPath)
    else if (/\.(jsx?|css)$/.test(entry.name)) {
      const content = fs.readFileSync(fullPath, 'utf8')
      for (const match of content.matchAll(/#[0-9A-Fa-f]{6}/g)) colors.add(match[0].toUpperCase())
    }
  }
}

walk(srcDir)
console.log([...colors].sort().join('\n'))
