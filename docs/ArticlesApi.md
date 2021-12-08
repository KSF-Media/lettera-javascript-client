# Lettera.ArticlesApi

All URIs are relative to *http://http:/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**articleUuidGet**](ArticlesApi.md#articleUuidGet) | **GET** /article/{uuid} | 
[**articleUuidStubGet**](ArticlesApi.md#articleUuidStubGet) | **GET** /article/{uuid}/stub | 



## articleUuidGet

> Article articleUuidGet(uuid, opts)



Fetch article by UUID.   Notes about the images:   The image URLs point to our image scaler, and are returned without scaling parameters.  However, if wanted, &#x60;width&#x60; and &#x60;height&#x60; parameters can be added to the querystring of the URL.  Also in list views, to ensure same size, it might be useful to crop the images by using the parameter &#x60;function&#x3D;hardcrop&#x60;

### Example

```javascript
var Lettera = require('lettera');

var apiInstance = new Lettera.ArticlesApi();
var uuid = null; // String | 
var opts = {
  'authUser': null, // String | 
  'authorization': "authorization_example", // String | 
  'xRealIp': "xRealIp_example", // String | 
  'textonly': false // Boolean | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.articleUuidGet(uuid, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 
 **xRealIp** | **String**|  | [optional] 
 **textonly** | **Boolean**|  | [optional] [default to false]

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## articleUuidStubGet

> ArticleStub articleUuidStubGet(uuid)



Fetch an article stub by UUID

### Example

```javascript
var Lettera = require('lettera');

var apiInstance = new Lettera.ArticlesApi();
var uuid = null; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.articleUuidStubGet(uuid, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 

### Return type

[**ArticleStub**](ArticleStub.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8

