import fs from 'fs'
import path from 'path'

const root = process.cwd()
const targets = [
  path.join(root, 'src'),
  path.join(root, 'src/index.css'),
]

const replacements = [
  // Cream backgrounds
  ['#FEF9F5', '#E1D8D2'],
  ['#FDF8F3', '#E1D8D2'],
  ['#FAF6F0', '#E1D8D2'],
  ['#FCF8F4', '#E1D8D2'],
  ['#FFFBF5', '#E1D8D2'],
  ['#FFF9F5', '#E1D8D2'],
  ['#FFF8F1', '#E1D8D2'],
  ['#F5F0EB', '#E1D8D2'],
  ['#F7F1EB', '#E1D8D2'],
  ['#EFEBE6', '#E1D8D2'],
  ['#FAFAFA', '#E1D8D2'],
  ['#F0F0F0', '#E5E5E5'],
  ['#F5F5F5', '#E5E5E5'],

  // Beige surfaces
  ['#F5EDE4', '#D9D6CE'],
  ['#F0E6DC', '#D9D6CE'],
  ['#E8DCD0', '#D9D6CE'],
  ['#E8DDD0', '#D9D6CE'],
  ['#EDE6DC', '#D9D6CE'],
  ['#EBE4DC', '#D9D6CE'],
  ['#EFE8E0', '#D9D6CE'],
  ['#F0EBE4', '#D9D6CE'],
  ['#E5E0DA', '#D9D6CE'],
  ['#E5DDD4', '#D9D6CE'],
  ['#E8D5C4', '#D9D6CE'],
  ['#E8E8E8', '#E5E5E5'],

  // Pale teal highlights
  ['#E0F2F1', '#CFE1E0'],
  ['#E8F5F3', '#CFE1E0'],
  ['#D4F5EF', '#CFE1E0'],
  ['#E0F5F3', '#CFE1E0'],
  ['#C0EBE5', '#CFE1E0'],
  ['#A7F3E8', '#CFE1E0'],
  ['#E8F4F8', '#CFE1E0'],
  ['#FDE8E8', '#CFE1E0'],
  ['#FDEFEF', '#CFE1E0'],
  ['#E8C4C4', '#CFE1E0'],
  ['#E8D5F5', '#CFE1E0'],
  ['#FFF8E1', '#CFE1E0'],
  ['#FFF6E5', '#CFE1E0'],
  ['#FFF0E5', '#CFE1E0'],
  ['#FFF0E8', '#CFE1E0'],
  ['#FFF3CD', '#CFE1E0'],
  ['#E8F0FA', '#CFE1E0'],
  ['#F9E870', '#CFE1E0'],
  ['#F0D860', '#CFE1E0'],
  ['#F2E27E', '#CFE1E0'],
  ['#F2C94C', '#CFE1E0'],
  ['#E6C547', '#CFE1E0'],
  ['#E6B800', '#CFE1E0'],
  ['#B8860B', '#CFE1E0'],

  // Neutral gray
  ['#E5E7EB', '#E5E5E5'],

  // Primary accent (teals + legacy reds)
  ['#1B6B6B', '#64E0D2'],
  ['#2D6A64', '#64E0D2'],
  ['#2D7A7A', '#64E0D2'],
  ['#236060', '#52CFC2'],
  ['#2A9D9D', '#64E0D2'],
  ['#0F4F4F', '#52CFC2'],
  ['#0A3D3D', '#52CFC2'],
  ['#005F54', '#52CFC2'],
  ['#004A42', '#52CFC2'],
  ['#004A44', '#52CFC2'],
  ['#245550', '#52CFC2'],
  ['#36C9BA', '#64E0D2'],
  ['#40E0D0', '#64E0D2'],
  ['#48CFCB', '#64E0D2'],
  ['#4FD1C5', '#64E0D2'],
  ['#8B2E2E', '#4AB8AC'],
  ['#D14D4D', '#64E0D2'],
  ['#D15151', '#64E0D2'],
  ['#A33B3B', '#64E0D2'],
  ['#B03A3E', '#64E0D2'],
  ['#B84242', '#52CFC2'],
  ['#9A3236', '#52CFC2'],
  ['#8F3232', '#52CFC2'],
  ['#D14F4F', '#64E0D2'],
  ['#D55A5A', '#64E0D2'],
  ['#E56B6B', '#64E0D2'],
  ['#E85D5D', '#64E0D2'],
  ['#F88E86', '#64E0D2'],

  // Misc decorative
  ['#8B7E9B', '#D9D6CE'],
  ['#8B9A46', '#CFE1E0'],
  ['#3D1F1A', '#374151'],
  ['#3D2C2C', '#374151'],
  ['#3D5A4A', '#374151'],
  ['#5C4033', '#374151'],
  ['#1A2744', '#374151'],
  ['#2D4A4A', '#374151'],
]

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files
  if (fs.statSync(dir).isFile()) {
    if (/\.(jsx?|css)$/.test(dir)) files.push(dir)
    return files
  }
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    walk(path.join(dir, entry.name), files)
  }
  return files
}

const files = []

for (const target of targets) walk(target, files)

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8')
  let changed = false

  for (const [from, to] of replacements) {
    const next = content.replaceAll(from, to).replaceAll(from.toLowerCase(), to)
    if (next !== content) {
      content = next
      changed = true
    }
  }

  content = content.replaceAll('font-serif', 'font-sans')

  if (content !== fs.readFileSync(file, 'utf8')) {
    fs.writeFileSync(file, content)
    console.log('Updated', path.relative(root, file))
  }
}
