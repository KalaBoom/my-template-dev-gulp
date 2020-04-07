const 
    {series, parallel} = require('gulp')
    clean = require('./tasks/del'),
    styles = require('./tasks/styles')
    scripts = require('./tasks/scripts')
    pages = require('./tasks/pages')
    browser = require('./tasks/browser')

const dev = parallel(pages, styles, scripts)
const build = series(clean, dev)

module.exports.dev = series(build, browser)
module.exports.build = build
module.exports.pages = pages