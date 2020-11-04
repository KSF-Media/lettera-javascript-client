# Lettera.NotifiersApi

All URIs are relative to *http://http:/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**notifyPost**](NotifiersApi.md#notifyPost) | **POST** /notify | Listens to OC Notifier



## notifyPost

> notifyPost(body, opts)

Listens to OC Notifier

### Example

```javascript
var Lettera = require('lettera');

var apiInstance = new Lettera.NotifiersApi();
var body = new Lettera.Notification(); // Notification | 
var opts = {
  'token': "token_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.notifyPost(body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Notification**](Notification.md)|  | 
 **token** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: Not defined

