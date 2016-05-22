var expect = require('chai').expect;
var lodash = require("lodash");
var Register = require('../register');

describe("Register", function() {
  describe("initialize", function() {
    it("can set default value", function() {
      var reg = new Register(2);
      expect(reg.getDefault()).to.equal(2);

      var func = function() { console.log("Hi"); }
      reg = new Register(func);
      expect(reg.getDefault()).to.equal(func);
    })

    it("has undefined as default value if one not specified", function() {
      var reg = new Register();
      expect(reg.getDefault()).to.equal(undefined);
    })

    it('can pass in the setters', function() {
      var reg = new Register({
        name: "Adam",
        zodiac: 'Sagitarius'
      });

      expect(reg.get('name')).to.eq('Adam');
      expect(reg.get('zodiac')).to.eq('Sagitarius');
    })

    it('can pass the setters and default value', function() {
      var reg = new Register({
        adam: new Register({name: 'Adam'})
      }, {name: undefined});

      expect(typeof reg.get('adam')).to.eq('object');
      expect(reg.get('steve')).to.eql({name: undefined});
    })
  })

  describe("#set", function() {
    it("can associate key to value", function() {
      var reg = new Register();
      expect(reg.set("name", "Adam")).to.eq("name");
    })
  })

  describe("#get", function() {
    it("can retrieve value", function() {
      var reg = new Register();
      reg.set("name", "Adam");
      expect(reg.get("name")).to.eq("Adam");

      var func = function() { console.log("Hi"); }
      reg.set("greeter", func);
      expect(reg.get("greeter")).to.equal(func);
    })

    it("retrieves default value if key not associated", function() {
      var reg = new Register();
      expect(reg.get("name")).to.equal(undefined);

      var reg = new Register(1);
      expect(reg.get("number")).to.equal(1);
      expect(reg.hasKey("number")).to.equal(false);
    })
  })

  describe("#setDefault", function() {
    it("can set the default value", function() {
      var reg = new Register(0);
      expect(reg.setDefault(1)).to.equal(1);
      expect(reg.setDefault(2)).to.equal(2);
    })
  })

  describe("#getDefault", function() {
    it("can get the default value", function() {
      var reg = new Register(0);
      expect(reg.getDefault()).to.equal(0);

      reg.setDefault(2);
      expect(reg.getDefault()).to.equal(2);
    })
  })

  describe("#keys", function() {
    it('can return all set of keys', function() {
      var reg = new Register({
        name: 'Adam',
        age: 21,
        zodiac: 'Sagitarius'
      });

      expect(reg.keys()).to.eql(['name', 'age', 'zodiac']);
    })
  })

  describe('#values', function() {
    it('can return all set of values', function() {
      var reg = new Register({
        name: 'Adam',
        age: 21,
        zodiac: 'Sagitarius'
      });

      expect(reg.values()).to.eql(['Adam', 21, 'Sagitarius']);
    })
  })

  describe('#toObject', function() {
    it('has all the values', function() {
      var biodata = {
        name: 'Adam',
        age: 21,
        zodiac: 'Sagitarius'
      };

      var reg = new Register(biodata);
      var regObj = reg.toObject();

      expect(lodash.isEqual(regObj, biodata)).to.be.ok;
    })
  })
})
