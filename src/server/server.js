const express = require ('express')
const fallback = require ('express-history-api-fallback')
const PORT = process.env.PORT

const app = express ()

app.use (express.json ())
app.use ('/', express.static ('dist'))
app.use (fallback ('index.html', { root: 'dist' }))

app.listen (PORT, () => {
    console.log ('should work')
})