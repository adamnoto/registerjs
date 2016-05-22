# register.js

An implementation of Register Pattern with small set of API that allows you to:

- `set` a value to a key.
- `get` a value associated to a key, if none, return the default value (by default set to `undefined`).
- `setDefault` value.
- `getDefault` value.
- `hasKey` to check if a key is defined.
- `keys` return a set of all defined keys.
- `values` return a set of all defined values.
- `toObject` to convert the register into an object.

## Install

For UMD (universal, including Browser), download the `register_umd.js`. `Register`
will be globally available. See implementation on `tests/test.html`.

For node:

```
npm i @saveav/register
```

And require the package this way:

```javascript
var Register = require('@saveav/register');
```

## Initialize

```javascript
var reg = new Register();
```

With default value:

```javascript
var reg = new Register({name: undefined, locale: "en"});
reg.get("adam"); // => {name: undefined, locale: "en"}
```

With default value and initial values:

```javascript
var reg = new Register({name: undefined, locale: "en"}, {
  adam: {name: "Adam", locale: "id"}
})

reg.get("adam"); // => {name: "Adam", locale: "id"}
```

## Use-case

Other than as an object; as a replacement of switch (who likes switch here?).
For implementation of switch replacement using the registry pattern, head to
the test folder and open `switch_test`.

# License

Open source. MIT. 2016.
