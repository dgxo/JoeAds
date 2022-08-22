const path = require('path')
app.use('/www', express.static(path.join(__dirname, 'public')))