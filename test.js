var createValidator = require('./')
  , validity = require('validity')
  , assert = require('assert')

/* global describe, it */

describe('Validity validate if set', function () {

  it('should throw if no validity function passed', function () {
    assert.throws(function () {
      createValidator()
    }, /No validate function provided/)

    assert.throws(function () {
      createValidator('not a function')
    }, /No validate function provided/)
  })

  it('should validate if set', function (done) {
    createValidator(validity.url)('link', 'Link', { link: 'not-a-link' }, function (err, message) {
      assert.equal('Link must be a valid URL', message)
      done()
    })
  })

  it('should not validate if not set', function (done) {
    createValidator(validity.url)('link', 'link', { link: '' }, function (err, message) {
      assert.equal(undefined, message)
      done()
    })
  })

  it('should be able to pass validation', function (done) {
    createValidator(validity.url)('link', 'Link', { link: 'http://test.com/' }, function (err, message) {
      assert.equal(undefined, message)
      done()
    })
  })

})
