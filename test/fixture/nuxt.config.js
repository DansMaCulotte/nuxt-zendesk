const { resolve } = require('path')
require('dotenv').config({
  path: resolve(__dirname, '.env')
})

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    { handler: require('../..') }
  ]
}
