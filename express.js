const express = require('express')
var reload = require('reload')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.use('/www', express.static('www'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

reload(app);