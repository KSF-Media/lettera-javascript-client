/**
 * Lettera
 * KSF Media's articles service
 *
 * The version of the OpenAPI document: 2.0.0
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
    instance = new Lettera.RelatedArticle();
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

  describe('RelatedArticle', function() {
    it('should create an instance of RelatedArticle', function() {
      // uncomment below and update the code to test RelatedArticle
      //var instane = new Lettera.RelatedArticle();
      //expect(instance).to.be.a(Lettera.RelatedArticle);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instane = new Lettera.RelatedArticle();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new Lettera.RelatedArticle();
      //expect(instance).to.be();
    });

    it('should have the property preamble (base name: "preamble")', function() {
      // uncomment below and update the code to test the property preamble
      //var instane = new Lettera.RelatedArticle();
      //expect(instance).to.be();
    });

    it('should have the property listImage (base name: "listImage")', function() {
      // uncomment below and update the code to test the property listImage
      //var instane = new Lettera.RelatedArticle();
      //expect(instance).to.be();
    });

    it('should have the property publishingTime (base name: "publishingTime")', function() {
      // uncomment below and update the code to test the property publishingTime
      //var instane = new Lettera.RelatedArticle();
      //expect(instance).to.be();
    });

    it('should have the property premium (base name: "premium")', function() {
      // uncomment below and update the code to test the property premium
      //var instane = new Lettera.RelatedArticle();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new Lettera.RelatedArticle();
      //expect(instance).to.be();
    });

  });

}));
