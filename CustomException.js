function CustomException (message) {
  this.message = message
  this.stack = (new Error()).stack
}

CustomException.prototype = new Error()

module.exports = CustomException
