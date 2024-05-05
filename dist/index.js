"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=t(function(d,i){
var u=require('@stdlib/fs-read-file/dist').sync,n=require('@stdlib/assert-contains/dist'),o=require('@stdlib/assert-is-error/dist'),a=require('@stdlib/fs-exists/dist').sync,c={encoding:"utf8"};function v(){var r;return a("/.dockerenv")?!0:(r=u("/proc/self/cgroup",c),o(r)?!1:n(r,"docker"))}i.exports=v
});var f=s(),l=f();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
