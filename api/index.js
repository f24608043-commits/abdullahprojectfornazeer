// Vercel serverless function for TanStack Start SSR
import { createServer } from '@tanstack/start/server'

// Import the TanStack Start server entry
const serverEntry = await import('../dist/server/index.js')

export default async function handler(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`)
  
  try {
    const response = await serverEntry.default.fetch(
      new Request(url, {
        method: req.method,
        headers: req.headers,
        body: req.body,
      }),
      {},
      {}
    )
    
    // Set response headers
    response.headers.forEach((value, key) => {
      res.setHeader(key, value)
    })
    
    // Set status code
    res.statusCode = response.status
    
    // Send response body
    const body = await response.text()
    res.send(body)
  } catch (error) {
    console.error('SSR Error:', error)
    res.statusCode = 500
    res.send('Internal Server Error')
  }
}
