var expect = require("chai").expect;
var Register = require('../index');

describe("Switch replacer", function() {
  var sayEn, sayId, greeterSwitch, greeterRegister;
  before(function() {
    sayEn = function() { console.log("Hello, World!"); }
    sayId = function() { console.log("Hi, semua!"); }

    greeterSwitch = function(lang) {
      switch(lang) {
        case "en":
          return sayEn; break;
        case "id":
          return sayId; break;
        default:
          return sayEn; break;
      }
    }

    greeterRegister = new Register(sayEn);
    greeterRegister.set("en", sayEn);
    greeterRegister.set("id", sayId);
  });

  describe("when using id locale", function() {
    it("returns the correct greeter", function() {
      var fromSwitch = greeterSwitch("id");
      var fromRegister = greeterRegister.get("id");

      expect(sayId).to.eq.ok;
      expect(fromSwitch).to.equal(fromRegister);
      expect(fromRegister).to.eq(sayId);
    })
  })

  describe("when using en locale", function() {
    it("returns the correct greeter", function() {
      var fromSwitch = greeterSwitch("en");
      var fromRegister = greeterRegister.get("en");

      expect(sayId).to.eq.ok;
      expect(fromSwitch).to.equal(fromRegister);
      expect(fromRegister).to.eq(sayEn);
    })
  })

  describe("when using unknown locale", function() {
    it("returns the default value", function() {
      var fromSwitch = greeterSwitch("jp");
      var fromRegister = greeterRegister.get("jp");

      expect(sayEn).to.eq.ok;
      expect(fromSwitch).to.eq(sayEn);
      expect(fromRegister).to.eq(sayEn);
    })
  })
})
