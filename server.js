const GLITCHON = process.env.GLITCHON ? 1 : 0
const ZEITOFF = process.env.ZEITOFF ? 1 : 0
const PORT = process.env.PORT ? process.env.PORT : 3000

const URL = process.env.URL ? process.env.URL : 'https://www.charitychoice.co.uk/charities/human-rights/refugees?pid='
const NUMPAGES = process.env.NUMPAGES ? process.env.NUMPAGES : 14

const express = require('express')

const app = express()

app.get('/', async (_, res) => {
  console.info(new Date())
  page = Math.floor(Math.random() * NUMPAGES)
  res.redirect(URL+page)
})

// are we running on GLITCH or ZEIT

if (GLITCHON) {
  app.listen(PORT)
}

if (!ZEITOFF) {
  module.exports = app
}
