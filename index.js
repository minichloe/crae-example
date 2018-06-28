const express = require('express')
const http = require('http')
const giphyapi = require('giphy-api')
const base64 = require('base64-stream')

// Create the server
const app = express()

// Get a random cat gif url with Giphy API
const getCatGif = async () => {
  const item = await giphyapi().random('cat')
  // Download the gif
  const gif = await download(item.data.image_url)
  // Encode the gif then return it
  const encodedGif = await encodeGif(gif)
  return encodedGif
}

// Helper function to download
const download = async url => {
  return new Promise((resolve, reject) => {
    const gif = http.get(url.replace('https', 'http'))
    gif.on('response', res => {
      resolve(res)
    })
    gif.on('error', err => {
      reject(err)
    })
  })
}

// Helper function to encode the downloaded gif
const encodeGif = async gif => {
  let result = `data:image/gif;base64,`
  const code = gif.pipe(base64.encode())
  return new Promise((resolve, reject) => {
    code.on('readable', () => {
      const read = code.read()
      if (read) result += read.toString()
      else resolve(result)
    })
    code.on('error', err => {
      reject(err)
    })
  })
}

// Serve our single api route /cat that returns a base64 encoded gif
app.get('/api/cat', async (req, res, next) => {
  try {
    const gif = await getCatGif()
    res.json({ gif })
  } catch (err) {
    next(err)
  }
})

// Choose the port and start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})
