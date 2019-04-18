# Lettera.ListsApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listGet**](ListsApi.md#listGet) | **GET** /list | 



## listGet

> [Article] listGet()



### Example

```javascript
import Lettera from 'lettera';

let apiInstance = new Lettera.ListsApi();
apiInstance.listGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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

