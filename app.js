"use strict";
var RequestType;
(function (RequestType) {
    RequestType["GET"] = "get";
    RequestType["POST"] = "post";
})(RequestType || (RequestType = {}));
function fetchWithAuth(url, method) {
    return 1;
}
fetchWithAuth('s', 'post');
let method = 'post';
fetchWithAuth('s', method);
