const envPath = __dirname + `/.env`
require('dotenv').config({ path: envPath })
module.exports = process.env