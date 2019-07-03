/**
 * Lettera
 * KSF Media's articles service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Lettera);
  }
}(this, function(expect, Lettera) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Lettera.Block();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Block', function() {
    it('should create an instance of Block', function() {
      // uncomment below and update the code to test Block
      //var instane = new Lettera.Block();
      //expect(instance).to.be.a(Lettera.Block);
    });

    it('should have the property paragraph (base name: "paragraph")', function() {
      // uncomment below and update the code to test the property paragraph
      //var instane = new Lettera.Block();
      //expect(instance).to.be();
    });

    it('should have the property html (base name: "html")', function() {
      // uncomment below and update the code to test the property html
      //var instane = new Lettera.Block();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instane = new Lettera.Block();
      //expect(instance).to.be();
    });

    it('should have the property factBox (base name: "factBox")', function() {
      // uncomment below and update the code to test the property factBox
      //var instane = new Lettera.Block();
      //expect(instance).to.be();
    });

    it('should have the property headline (base name: "headline")', function() {
      // uncomment below and update the code to test the property headline
      //var instane = new Lettera.Block();
      //expect(instance).to.be();
    });

    it('should have the property quote (base name: "quote")', function() {
      // uncomment below and update the code to test the property quote
      //var instane = new Lettera.Block();
      //expect(instance).to.be();
    });

  });

}));
