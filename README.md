# CORS Sandbox

```javascript
function requestWithCors(method, url, successCallback, failureCallback) {
  successCallback = successCallback || console.log;
  failureCallback = failureCallback || console.error || console.warn || console.log;
  var xhr = (typeof XDomainRequest !== 'undefined') ?
    (new XDomainRequest()) :
    (new XMLHttpRequest());
  xhr.onreadystatechange = function (event) {
    if (event.target.readyState === 4) {
      /* perform callback according to HTTP status code */
      return (xhr.status > 0 && xhr.status < 400) ?
        successCallback(event.target.response) :
        failureCallback(event.target.response);
    }
  };
  xhr.open(method, url, true);
  xhr.send();
}
```

```javascript
requestWithCors('GET', 'http://localhost:3000');
```
