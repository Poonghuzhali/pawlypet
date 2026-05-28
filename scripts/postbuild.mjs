import fs from 'fs'
import path from 'path'

const outDir = 'docs'
const repoBase = '/pawlypet'

const spaRecoveryScript = `<script type="text/javascript">
  (function(l) {
    if (l.search[1] === '/') {
      var decoded = l.search.slice(1).split('&').map(function(s) {
        return s.replace(/~and~/g, '&')
      }).join('?')
      window.history.replaceState(null, null, l.pathname.slice(0, -1) + decoded + l.hash)
    }
  }(window.location))
</script>`

const spa404Html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Pawly — Everything Your Pet Needs</title>
    <script type="text/javascript">
      var pathSegmentsToKeep = 2;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body></body>
</html>
`

const root404Html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Pawly — Everything Your Pet Needs</title>
    <script type="text/javascript">
      var l = window.location;
      var path = l.pathname.replace('${repoBase}', '').replace(/^\\/+/, '');
      if (path && path !== 'docs' && !path.startsWith('docs/')) {
        l.replace('${repoBase}/docs/#/' + path + l.search + l.hash);
      } else {
        l.replace('${repoBase}/docs/');
      }
    </script>
  </head>
  <body></body>
</html>
`

fs.writeFileSync(path.join(outDir, '.nojekyll'), '')
fs.writeFileSync(path.join(outDir, '404.html'), spa404Html)
fs.writeFileSync('404.html', root404Html)

const indexPath = path.join(outDir, 'index.html')
let indexHtml = fs.readFileSync(indexPath, 'utf8')

if (!indexHtml.includes('l.search[1]')) {
  indexHtml = indexHtml.replace('<head>', `<head>\n    ${spaRecoveryScript}`)
  fs.writeFileSync(indexPath, indexHtml)
}

console.log('GitHub Pages files ready in docs/')
