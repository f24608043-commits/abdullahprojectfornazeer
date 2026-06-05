import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const handlerPath = path.join(__dirname, 'dist', 'server', 'assets', 'worker-entry-CMa38TVC.js');
const assetsDir = path.join(__dirname, 'dist', 'client', 'assets');

export default async function (req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === '/' || url.pathname.endsWith('.html')) {
    let indexJs = 'index-Bz3EdAMz.js';
    try {
      const files = fs.readdirSync(assetsDir).filter(f => f.startsWith('index-') && f.endsWith('.js'));
      if (files.length > 0) indexJs = files[0];
    } catch (e) {}

    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dentalfolioall</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/dist/client/assets/${indexJs}"></script>
</body>
</html>`;

    res.setHeader('content-type', 'text/html');
    res.end(html);
    return;
  }

  const mod = await import(handlerPath);
  const handler = mod?.w ?? mod?.default ?? mod;
  const fetchFn = handler?.fetch ?? handler;

  const response = await fetchFn(req, {}, {});
  res.statusCode = response.status;
  const contentType = response.headers.get('content-type');
  if (contentType) res.setHeader('content-type', contentType);
  const buf = Buffer.from(await response.arrayBuffer());
  res.end(buf);
}