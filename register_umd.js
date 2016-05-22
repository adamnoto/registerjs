/* BEGIN node2umd PREFIX */
;(function(define) { define(function(require, exports, module) {
/* END node2umd PREFIX */
function Register(setters, defaultValue) {
  this._values = Object.create(null);
  this._defaultValue = undefined;

  if(setters === Object(setters) &&
     Object.prototype.toString.call(setters) !== '[object Array]' &&
     Object.prototype.toString.call(setters) !== '[object Function]') {
    for(var key in setters) {
      if(setters.hasOwnProperty(key)) {
        this.set(key, setters[key]);
      }
    }
  } else {
    // user intend to set the default value
    this._defaultValue = setters;
  }

  // if defaultValue is not undefined, set to defaultValue
  if(typeof defaultValue !== 'undefined') {
    this._defaultValue = defaultValue;
  }
}

Register.globalName = 'Register'; // for UMD

Register.prototype.toString = function() {
  return "[object Register]";
}

Register.prototype.set = function(key, value) {
  this._values[key] = value;
  return key;
}

Register.prototype.get = function(key, value) {
  if (Object.hasOwnProperty.call(this._values, key)) {
    return this._values[key];
  } else {
    return this._defaultValue;
  }
}

Register.prototype.setDefault = function(value) {
  this._defaultValue = value;
  return this._defaultValue;
}

Register.prototype.getDefault = function() {
  return this._defaultValue;
}

Register.prototype.hasKey = function(key) {
  return Object.hasOwnProperty.call(this._values, key);
}

Register.prototype.keys = function() {
  var keys = []
  for(var key in this._values) {
    if (Object.hasOwnProperty.call(this._values, key)) {
      keys.push(key);
    }
  }

  return keys;
}

Register.prototype.values = function() {
  var values = [];
  this.keys().forEach(function(key) {
    values.push(this.get(key));
  }.bind(this))

  return values;
}

Register.prototype.toObject = function() {
  return Object.assign({}, this._values);
}

module.exports = Register;
/* BEGIN node2umd POSTFIX */
}); })(typeof define === 'function' && define.amd ? define : function(factory) {
  var isNode,
      exportsObj = (isNode = typeof exports === 'object') ? exports : {},
      moduleObj = isNode ? module : { exports: exportsObj };

  var requireFn = isNode ? require : function(dependency) {
    return this[dependency];
  };

  var def = factory(requireFn, exportsObj, moduleObj) || moduleObj.exports;

  if (!isNode) {
    this[def.globalName] = def;
  }
});
/* END node2umd POSTFIX */
