const path = require('path');
const fs = require('fs');
const handlerPath = path.join(__dirname, 'dist', 'server', 'assets', 'worker-entry-CMa38TVC.js');
const assetsDir = path.join(__dirname, 'dist', 'client', 'assets');

async function toWebRequest(req) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const init = {
    method: req.method,
    headers: req.headers,
    body: req.method === 'GET' || req.method === 'HEAD' ? undefined : req,
  };
  return new Request(url, init);
}

function toWebResponse(nodeRes, webRes) {
  nodeRes.statusCode = webRes.status;
  const contentType = webRes.headers.get('content-type');
  if (contentType) nodeRes.setHeader('content-type', contentType);
  return webRes.arrayBuffer().then(buf => {
    nodeRes.end(Buffer.from(buf));
  });
}

module.exports = async function (req, res) {
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

  const webReq = await toWebRequest(req);
  const mod = require(handlerPath);
  const handler = mod?.w ?? mod?.default ?? mod;
  const fetchFn = handler?.fetch ?? handler;
  const webRes = await fetchFn(webReq, {}, {});
  await toWebResponse(res, webRes);
};
