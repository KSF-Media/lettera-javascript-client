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
import Lettera from 'lettera';

let apiInstance = new Lettera.ListsApi();
let opts = {
  'start': 56, // Number | 
  'limit': 56, // Number | 
  'category': "category_example", // String | 
  'paper': "paper_example" // String | 
};
apiInstance.frontpageGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
import Lettera from 'lettera';

let apiInstance = new Lettera.ListsApi();
let opts = {
  'start': 56, // Number | 
  'limit': 56, // Number | 
  'paper': "paper_example" // String | 
};
apiInstance.latestGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
import Lettera from 'lettera';

let apiInstance = new Lettera.ListsApi();
let opts = {
  'start': 56, // Number | 
  'limit': 56, // Number | 
  'category': "category_example", // String | 
  'paper': "paper_example" // String | 
};
apiInstance.mostreadGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## searchGet

> [ListArticle] searchGet(opts)

Returns a list of search results

### Example

```javascript
import Lettera from 'lettera';

let apiInstance = new Lettera.ListsApi();
let opts = {
  'start': 56, // Number | 
  'limit': 56, // Number | 
  'paper': "paper_example", // String | 
  'contentQuery': "contentQuery_example" // String | 
};
apiInstance.searchGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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

