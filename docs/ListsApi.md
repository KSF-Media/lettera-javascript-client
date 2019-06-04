# Lettera.ListsApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**frontpageGet**](ListsApi.md#frontpageGet) | **GET** /frontpage | Returns a list for a front page
[**latestGet**](ListsApi.md#latestGet) | **GET** /latest | Returns a list of latest articles
[**mostreadGet**](ListsApi.md#mostreadGet) | **GET** /mostread | Returns a list of most read articles



## frontpageGet

> [Article] frontpageGet(opts)

Returns a list for a front page

### Example

```javascript
import Lettera from 'lettera';

let apiInstance = new Lettera.ListsApi();
let opts = {
  'start': 56, // Number | 
  'limit': 56, // Number | 
  'category': "category_example" // String | 
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

### Return type

[**[Article]**](Article.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## latestGet

> [Article] latestGet(opts)

Returns a list of latest articles

### Example

```javascript
import Lettera from 'lettera';

let apiInstance = new Lettera.ListsApi();
let opts = {
  'start': 56, // Number | 
  'limit': 56 // Number | 
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

### Return type

[**[Article]**](Article.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## mostreadGet

> [Article] mostreadGet(opts)

Returns a list of most read articles

### Example

```javascript
import Lettera from 'lettera';

let apiInstance = new Lettera.ListsApi();
let opts = {
  'start': 56, // Number | 
  'limit': 56 // Number | 
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

### Return type

[**[Article]**](Article.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8

