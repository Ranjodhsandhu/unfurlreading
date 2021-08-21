'use strict'

exports.URL = process.env.DB_URI || 'mongodb://localhost:27017/unfurlReading'
exports.PORT = process.env.PORT || 4000
exports.SECRET = process.env.SECRET || 'super-secret-passphrase'
