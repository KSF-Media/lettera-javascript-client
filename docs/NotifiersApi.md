# Lettera.NotifiersApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**notifyPost**](NotifiersApi.md#notifyPost) | **POST** /notify | Listens to OC Notifier



## notifyPost

> notifyPost(body)

Listens to OC Notifier

### Example

```javascript
import Lettera from 'lettera';

let apiInstance = new Lettera.NotifiersApi();
let body = "body_example"; // String | 
apiInstance.notifyPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: Not defined

