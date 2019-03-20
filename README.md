# lettera

Lettera - JavaScript client for lettera
KSF Media's articles service
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install lettera --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your lettera from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('lettera')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/KSF-Media/lettera-javascript-client
then install it via:

```shell
    npm install KSF-Media/lettera-javascript-client --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Lettera = require('lettera');

var api = new Lettera.ArticlesApi()
var uuid = null; // {String} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.articleUuidGet(uuid, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://http:/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Lettera.ArticlesApi* | [**articleUuidGet**](docs/ArticlesApi.md#articleUuidGet) | **GET** /article/{uuid} | 
*Lettera.ListsApi* | [**listGet**](docs/ListsApi.md#listGet) | **GET** /list | 


## Documentation for Models

 - [Lettera.Alignment](docs/Alignment.md)
 - [Lettera.Article](docs/Article.md)
 - [Lettera.Author](docs/Author.md)
 - [Lettera.Block](docs/Block.md)
 - [Lettera.BlockShortcodeError](docs/BlockShortcodeError.md)
 - [Lettera.FactInfo](docs/FactInfo.md)
 - [Lettera.ImageInfo](docs/ImageInfo.md)


## Documentation for Authorization

 All endpoints do not require authorization.

