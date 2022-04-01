// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/fs-read-file@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-contains@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/fs-exists@esm/index.mjs";var t=s.sync,n=e,i=r.sync,d={encoding:"utf8"};var o=function(){var s;return!!i("/.dockerenv")||!((s=t("/proc/self/cgroup",d))instanceof Error)&&n(s,"docker")}();export{o as default};
//# sourceMappingURL=index.mjs.map
