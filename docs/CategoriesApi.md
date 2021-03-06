# Lettera.CategoriesApi

All URIs are relative to *http://http:/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categoriesGet**](CategoriesApi.md#categoriesGet) | **GET** /categories | Read categories



## categoriesGet

> [Category] categoriesGet(opts)

Read categories

### Example

```javascript
var Lettera = require('lettera');

var apiInstance = new Lettera.CategoriesApi();
var opts = {
  'paper': "paper_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.categoriesGet(opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paper** | **String**|  | [optional] 

### Return type

[**[Category]**](Category.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8

