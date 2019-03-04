# Lettera.ListsApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listGet**](ListsApi.md#listGet) | **GET** /list | 


<a name="listGet"></a>
# **listGet**
> [Article] listGet()



### Example
```javascript
var Lettera = require('lettera');

var apiInstance = new Lettera.ListsApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Article]**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=utf-8

