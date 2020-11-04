# Lettera.ListsApi

All URIs are relative to *http://http:/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**frontpageGet**](ListsApi.md#frontpageGet) | **GET** /frontpage | Returns a list for a front page
[**latestGet**](ListsApi.md#latestGet) | **GET** /latest | Returns a list of latest articles
[**mostreadGet**](ListsApi.md#mostreadGet) | **GET** /mostread | Returns a list of most read articles
[**searchGet**](ListsApi.md#searchGet) | **GET** /search | Returns a list of search results



## frontpageGet

> [ListArticle] frontpageGet(opts)

Returns a list for a front page

### Example

```javascript
var Lettera = require('lettera');

var apiInstance = new Lettera.ListsApi();
var opts = {
  'start': 56, // Number | 
  'limit': 56, // Number | 
  'category': "category_example", // String | 
  'paper': "paper_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.frontpageGet(opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **category** | **String**|  | [optional] 
 **paper** | **String**|  | [optional] 

### Return type

[**[ListArticle]**](ListArticle.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## latestGet

> [ListArticle] latestGet(opts)

Returns a list of latest articles

### Example

```javascript
var Lettera = require('lettera');

var apiInstance = new Lettera.ListsApi();
var opts = {
  'start': 56, // Number | 
  'limit': 56, // Number | 
  'paper': "paper_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.latestGet(opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **paper** | **String**|  | [optional] 

### Return type

[**[ListArticle]**](ListArticle.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## mostreadGet

> [ListArticle] mostreadGet(opts)

Returns a list of most read articles

### Example

```javascript
var Lettera = require('lettera');

var apiInstance = new Lettera.ListsApi();
var opts = {
  'start': 56, // Number | 
  'limit': 56, // Number | 
  'category': "category_example", // String | 
  'paper': "paper_example", // String | 
  'onlySubscribers': true // Boolean | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mostreadGet(opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **category** | **String**|  | [optional] 
 **paper** | **String**|  | [optional] 
 **onlySubscribers** | **Boolean**|  | [optional] 

### Return type

[**[ListArticle]**](ListArticle.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## searchGet

> [ListArticle] searchGet(opts)

Returns a list of search results

### Example

```javascript
var Lettera = require('lettera');

var apiInstance = new Lettera.ListsApi();
var opts = {
  'start': 56, // Number | 
  'limit': 56, // Number | 
  'paper': "paper_example", // String | 
  'contentQuery': "contentQuery_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchGet(opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **paper** | **String**|  | [optional] 
 **contentQuery** | **String**|  | [optional] 

### Return type

[**[ListArticle]**](ListArticle.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8

