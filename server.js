const URL = process.env.URL ? process.env.URL : 'https://www.charitychoice.co.uk/charities/human-rights/refugees/'
const NUMPAGES = process.env.NUMPAGES ? process.env.NUMPAGES : 14

const express = require('express')

const app = express()

app.get('/', async (_, res) => {
  console.info(new Date())
  page = Math.floor(Math.random() * NUMPAGES)
  res.redirect(URL+page)
})


// if (GLITCH) {
//   app.listen(process.env.PORT ? process.env.PORT : 3000)
// }

// if (ZEIT) {
      module.exports = app
// }
