const path = require('path');

const handlerPath = path.join(__dirname, 'dist', 'server', 'assets', 'worker-entry-CMa38TVC.js');

module.exports = async function (req, res) {
  // eslint-disable-next-line import/no-dynamic-require
  const mod = require(handlerPath);

  const handler = mod?.w ?? mod?.default ?? mod;

  const fetchFn = handler?.fetch ?? handler;

  const response = await fetchFn(
    new Request(`${req.protocol}://${req.headers.host}${req.url}`, {
      method: req.method,
      headers: req.headers,
      body: req.method === 'GET' || req.method === 'HEAD' ? undefined : req,
    }),
    {},
    {}
  );

  res.statusCode = response.status;

  const contentType = response.headers.get('content-type');
  if (contentType) res.setHeader('content-type', contentType);

  const buf = Buffer.from(await response.arrayBuffer());
  res.end(buf);
};
