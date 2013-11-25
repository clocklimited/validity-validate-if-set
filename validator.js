module.exports = createValidator

function createValidator(validateFn) {
  if (!validateFn || typeof validateFn !== 'function') {
    throw new Error('No validate function provided')
  }

  function validate(key, keyDisplayName, object, cb) {
    if (object[key]) {
      return validateFn(key, keyDisplayName, object, cb)
    }

    return cb(null, undefined)
  }

  return validate
}
