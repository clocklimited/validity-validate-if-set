# validity-validate-if-set

[![Build Status](https://travis-ci.org/domharrington/validity-validate-if-set.png?branch=master)](https://travis-ci.org/domharrington/validity-validate-if-set)

Validity validator which calls a subsequent validator if a value is truthy.
E.g you have a URL property of a schema, which is not a required field.
You only want to apply validation to that field if there is a value to validate.

## Installation

    npm install validity-validate-if-set --save

## Usage

Below is a simple example for usage with schemata and save:

``` js
var validity = require('validity')
  , schemata = require('schemata')
  , save = require('save')
  , collection = save('author')
  , validateIfSet = require('validity-validate-if-set')

var schema = schemata(
    { url:
      { type: String
      , validators: { all: [ validateIfSet(validity.url) ] }
      }
    })

```

## API

### var validate = createValidator(Function: validityFunction)

Create a validate function by passing in the subsequent validator to be called if the value is set.

### validate(String:key, String:keyDisplayName, Object:object, Function:cb)

This is a validity compatible function, which in turn is used by schemata for schema validation.

The callback signature cb(err, errorMessage).

err is an Error object if something bad happened and null otherwise.
errorMessage is a String if a validation error happened and undefined otherwise.

## Licence
Licensed under the [New BSD License](http://opensource.org/licenses/bsd-license.php)
