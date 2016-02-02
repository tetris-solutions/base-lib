var areIntlLocalesSupported = require('intl-locales-supported')
var supportedLocales = [
  'en',
  'pt-BR'
]

if (global.Intl) {
  if (!areIntlLocalesSupported(supportedLocales)) {
    require('intl')
    global.Intl.NumberFormat = global.IntlPolyfill.NumberFormat
    global.Intl.DateTimeFormat = global.IntlPolyfill.DateTimeFormat
  }
} else {
  global.Intl = require('intl')
}

module.exports = global.Intl