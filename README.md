# CORS Sandbox

### Installation (requires [node](https://nodejs.org))

```bash
git clone https://github.com/jordanpatton/cors-sandbox.git
cd cors-sandbox
npm install
node app.js
```

### Usage

Go to [example.com](http://www.example.com), open your browser console, and enter this:

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

In the same console, enter this:

```javascript
requestWithCors('GET', 'http://localhost:3000?username=john&password=madden');
```

If you inspect your network traffic, you should see a response with the following headers:

```
Access-Control-Allow-Credentials: true
Access-Control-Allow-Origin: http://www.example.com
```

As you can see, [CORS can be enabled per-origin](http://www.html5rocks.com/en/tutorials/cors/#toc-adding-cors-support-to-the-server) at the point where the request is parsed.

### Questions

**Q:** What do I do if I get `500 Internal Server Error`?
**A:** Stop the server (Ctrl + C). Start the server (`node app.js`). In your browser, [hard reload](https://en.wikipedia.org/wiki/Wikipedia:Bypass_your_cache).
