"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=s(function(d,i){
var t=require('@stdlib/fs-read-file/dist').sync,o=require('@stdlib/assert-contains/dist'),c=require('@stdlib/fs-exists/dist').sync,u={encoding:"utf8"};function a(){var r;return c("/.dockerenv")?!0:(r=t("/proc/self/cgroup",u),r instanceof Error?!1:o(r,"docker"))}i.exports=a
});var f=n(),v=f();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
