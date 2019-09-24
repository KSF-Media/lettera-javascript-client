# Lettera.ArticlesApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**articleSearchGet**](ArticlesApi.md#articleSearchGet) | **GET** /article/search | 
[**articleUuidGet**](ArticlesApi.md#articleUuidGet) | **GET** /article/{uuid} | 



## articleSearchGet

> [Article] articleSearchGet(opts)



Search article by content. It&#39;s a freetext search, so the &#x60;contentQuery&#x60; may be whatever string or sentence to search for.

### Example

```javascript
import Lettera from 'lettera';

let apiInstance = new Lettera.ArticlesApi();
let opts = {
  'start': 56, // Number | 
  'limit': 56, // Number | 
  'contentQuery': "contentQuery_example" // String | 
};
apiInstance.articleSearchGet(opts, (error, data, response) => {
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
 **contentQuery** | **String**|  | [optional] 

### Return type

[**[Article]**](Article.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## articleUuidGet

> Article articleUuidGet(uuid, opts)



Fetch article by UUID.   Notes about the images:   The image URLs point to our image scaler, and are returned without no scaling parameters.  However, if wanted, &#x60;width&#x60; and &#x60;height&#x60; parameters can be added to the querystring of the URL.  Also in list views, to ensure same size, it might be useful to crop the images by using the parameter &#x60;function&#x3D;hardcrop&#x60;

### Example

```javascript
import Lettera from 'lettera';

let apiInstance = new Lettera.ArticlesApi();
let uuid = null; // String | 
let opts = {
  'authUser': null, // String | 
  'authorization': "authorization_example", // String | 
  'textonly': false // Boolean | 
};
apiInstance.articleUuidGet(uuid, opts, (error, data, response) => {
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
 **uuid** | [**String**](.md)|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 
 **textonly** | **Boolean**|  | [optional] [default to false]

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8

