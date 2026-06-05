import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.join(__dirname, 'dist', 'client');

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const map = {
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.html': 'text/html',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
  };
  return map[ext] || 'application/octet-stream';
}

export default async function (req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let filePath = path.join(clientDir, url.pathname);

  // Default to index.html for root or .html files
  if (url.pathname === '/' || url.pathname.endsWith('.html')) {
    filePath = path.join(clientDir, 'index.html');
    // If no index.html in clientDir, try root index.html
    if (!fs.existsSync(filePath)) {
      filePath = path.join(__dirname, 'index.html');
    }
  }

  // If file doesn't exist, try assets subdir
  if (!fs.existsSync(filePath) && !url.pathname.startsWith('/dist/client/')) {
    const assetPath = path.join(clientDir, 'assets', url.pathname.replace(/^\//, ''));
    if (fs.existsSync(assetPath)) {
      filePath = assetPath;
    }
  }

  if (!fs.existsSync(filePath)) {
    res.statusCode = 404;
    res.end('Not Found');
    return;
  }

  const content = fs.readFileSync(filePath);
  res.setHeader('content-type', getContentType(filePath));
  res.end(content);
}