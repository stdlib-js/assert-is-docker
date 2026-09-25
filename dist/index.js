"use strict";var u=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var s=u(function(p,i){
var n=require('@stdlib/fs-read-file/dist').sync,o=require('@stdlib/assert-contains/dist'),a=require('@stdlib/assert-is-error/dist'),c=require('@stdlib/fs-exists/dist').sync,v={encoding:"utf8"};function f(){var r;return c("/.dockerenv")?!0:(r=n("/proc/self/cgroup",v),a(r)?!1:o(r,"docker"))}i.exports=f
});var l=s(),q=l();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
