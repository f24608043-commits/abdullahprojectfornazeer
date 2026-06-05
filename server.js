// Vercel entrypoint for TanStack Start SSR output.
// Maps all requests to the built SSR bundle.

const path = require('path');

const handlerPath = path.join(__dirname, 'dist', 'server', 'index.js');

module.exports = async function (req, res) {
  // eslint-disable-next-line import/no-dynamic-require
  const handler = require(handlerPath);

  // TanStack Start server bundle usually exports a fetch() handler.
  const fetchFn = handler && handler.fetch ? handler.fetch : handler;

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

