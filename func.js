const fdk = require('@fnproject/fdk');
const cache = require('./live-cache')

// from: https://davidwalsh.name/query-string-javascript
const getUrlParameter = (url, name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(url);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

fdk.handle( function (input,ctx) {
    let result = {}
    const httpMethod = ctx._headers["Fn-Http-Method"]; 
    const requestURL = ctx._headers["Fn-Http-Request-Url"]
    // GET (retrieve session context), PUT (update session context), POST (create new session context)
    const sessionKey = getUrlParameter(requestURL, "key") // not meaningful for POST call
    
    if ("GET" == httpMethod) {
          result = cache.readFromCache(sessionKey)
      }
      else if ("PUT" == httpMethod) {
          result = cache.writeToCache(sessionKey, input.value)
      }
      else if ("POST" == httpMethod) {
          result = cache.startNewSession()
      }

    return result

})

