# Lettera.ListsApi

All URIs are relative to *http://http:/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**frontpageGet**](ListsApi.md#frontpageGet) | **GET** /frontpage | Returns a list for a front page
[**latestGet**](ListsApi.md#latestGet) | **GET** /latest | Returns a list of latest articles
[**mostreadGet**](ListsApi.md#mostreadGet) | **GET** /mostread | Returns a list of most read articles
[**presetPresetCategoryGet**](ListsApi.md#presetPresetCategoryGet) | **GET** /preset/{preset}/{category} | Load a preset model
[**presetPresetCategoryPost**](ListsApi.md#presetPresetCategoryPost) | **POST** /preset/{preset}/{category} | Update a preset model
[**searchGet**](ListsApi.md#searchGet) | **GET** /search | Returns a list of search results
[**tagTagGet**](ListsApi.md#tagTagGet) | **GET** /tag/{tag} | Returns a list of latest articles by tag



## frontpageGet

> Object frontpageGet(opts)

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

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8, application/rss+xml


## latestGet

> Object latestGet(opts)

Returns a list of latest articles

### Example

```javascript
var Lettera = require('lettera');

var apiInstance = new Lettera.ListsApi();
var opts = {
  'start': 56, // Number | 
  'limit': 56, // Number | 
  'from': "from_example", // String | 
  'to': "to_example", // String | 
  'paper': "paper_example", // String | 
  'category': "category_example" // String | 
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
 **from** | **String**|  | [optional] 
 **to** | **String**|  | [optional] 
 **paper** | **String**|  | [optional] 
 **category** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8, application/rss+xml


## mostreadGet

> Object mostreadGet(opts)

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

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8, application/rss+xml


## presetPresetCategoryGet

> Scoring presetPresetCategoryGet(authUser, authorization, preset, category)

Load a preset model

### Example

```javascript
var Lettera = require('lettera');

var apiInstance = new Lettera.ListsApi();
var authUser = null; // String | 
var authorization = "authorization_example"; // String | 
var preset = 56; // Number | 
var category = "category_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.presetPresetCategoryGet(authUser, authorization, preset, category, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authUser** | [**String**](.md)|  | 
 **authorization** | **String**|  | 
 **preset** | **Number**|  | 
 **category** | **String**|  | 

### Return type

[**Scoring**](Scoring.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## presetPresetCategoryPost

> presetPresetCategoryPost(authUser, authorization, preset, category, body)

Update a preset model

### Example

```javascript
var Lettera = require('lettera');

var apiInstance = new Lettera.ListsApi();
var authUser = null; // String | 
var authorization = "authorization_example"; // String | 
var preset = 56; // Number | 
var category = "category_example"; // String | 
var body = new Lettera.Scoring(); // Scoring | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.presetPresetCategoryPost(authUser, authorization, preset, category, body, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authUser** | [**String**](.md)|  | 
 **authorization** | **String**|  | 
 **preset** | **Number**|  | 
 **category** | **String**|  | 
 **body** | [**Scoring**](Scoring.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: Not defined


## searchGet

> [ArticleStub] searchGet(contentQuery, opts)

Returns a list of search results

### Example

```javascript
var Lettera = require('lettera');

var apiInstance = new Lettera.ListsApi();
var contentQuery = "contentQuery_example"; // String | 
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
apiInstance.searchGet(contentQuery, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentQuery** | **String**|  | 
 **start** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **paper** | **String**|  | [optional] 

### Return type

[**[ArticleStub]**](ArticleStub.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## tagTagGet

> Object tagTagGet(tag, opts)

Returns a list of latest articles by tag

### Example

```javascript
var Lettera = require('lettera');

var apiInstance = new Lettera.ListsApi();
var tag = "tag_example"; // String | 
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
apiInstance.tagTagGet(tag, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **String**|  | 
 **start** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **paper** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8, application/rss+xml

