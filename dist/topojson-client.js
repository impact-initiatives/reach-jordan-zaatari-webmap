webpackJsonp([4],{110:function(r,t,n){"use strict";function e(r,t){var n=t.id,e=t.bbox,a=null==t.properties?{}:t.properties,i=o(r,t);return null==n&&null==e?{type:"Feature",properties:a,geometry:i}:null==e?{type:"Feature",id:n,properties:a,geometry:i}:{type:"Feature",id:n,bbox:e,properties:a,geometry:i}}function o(r,t){function e(r,t){t.length&&t.pop();for(var e=h[r<0?~r:r],o=0,i=e.length;o<i;++o)t.push(l(e[o],o));r<0&&n.i(a.a)(t,i)}function o(r){return l(r)}function c(r){for(var t=[],n=0,o=r.length;n<o;++n)e(r[n],t);return t.length<2&&t.push(t[0]),t}function u(r){for(var t=c(r);t.length<4;)t.push(t[0]);return t}function s(r){return r.map(u)}function f(r){var t,n=r.type;switch(n){case"GeometryCollection":return{type:n,geometries:r.geometries.map(f)};case"Point":t=o(r.coordinates);break;case"MultiPoint":t=r.coordinates.map(o);break;case"LineString":t=c(r.arcs);break;case"MultiLineString":t=r.arcs.map(c);break;case"Polygon":t=s(r.arcs);break;case"MultiPolygon":t=r.arcs.map(s);break;default:return null}return{type:n,coordinates:t}}var l=n.i(i.a)(r.transform),h=r.arcs;return f(t)}var a=n(443),i=n(111);t.b=o,t.a=function(r,t){return"GeometryCollection"===t.type?{type:"FeatureCollection",features:t.geometries.map(function(t){return e(r,t)})}:e(r,t)}},111:function(r,t,n){"use strict";var e=n(215);t.a=function(r){if(null==r)return e.a;var t,n,o=r.scale[0],a=r.scale[1],i=r.translate[0],c=r.translate[1];return function(r,e){e||(t=n=0);var u=2,s=r.length,f=new Array(s);for(f[0]=(t+=r[0])*o+i,f[1]=(n+=r[1])*a+c;u<s;)f[u]=r[u],++u;return f}}},162:function(r,t,n){"use strict";var e=n(111);t.a=function(r){function t(r){r=i(r),r[0]<c&&(c=r[0]),r[0]>s&&(s=r[0]),r[1]<u&&(u=r[1]),r[1]>f&&(f=r[1])}function o(r){switch(r.type){case"GeometryCollection":r.geometries.forEach(o);break;case"Point":t(r.coordinates);break;case"MultiPoint":r.coordinates.forEach(t)}}var a,i=n.i(e.a)(r.transform),c=1/0,u=c,s=-c,f=-c;r.arcs.forEach(function(r){for(var t,n=-1,e=r.length;++n<e;)t=i(r[n],n),t[0]<c&&(c=t[0]),t[0]>s&&(s=t[0]),t[1]<u&&(u=t[1]),t[1]>f&&(f=t[1])});for(a in r.objects)o(r.objects[a]);return[c,u,s,f]}},163:function(r,t,n){"use strict";var e=n(215);t.a=function(r){if(null==r)return e.a;var t,n,o=r.scale[0],a=r.scale[1],i=r.translate[0],c=r.translate[1];return function(r,e){e||(t=n=0);var u=2,s=r.length,f=new Array(s),l=Math.round((r[0]-i)/o),h=Math.round((r[1]-c)/a);for(f[0]=l-t,t=l,f[1]=h-n,n=h;u<s;)f[u]=r[u],++u;return f}}},215:function(r,t,n){"use strict";t.a=function(r){return r}},216:function(r,t,n){"use strict";t.a=function(r,t){function n(t){var n,e=r.arcs[t<0?~t:t],o=e[0];return r.transform?(n=[0,0],e.forEach(function(r){n[0]+=r[0],n[1]+=r[1]})):n=e[e.length-1],t<0?[n,o]:[o,n]}function e(r,t){for(var n in r){var e=r[n];delete t[e.start],delete e.start,delete e.end,e.forEach(function(r){o[r<0?~r:r]=1}),c.push(e)}}var o={},a={},i={},c=[],u=-1;return t.forEach(function(n,e){var o,a=r.arcs[n<0?~n:n];a.length<3&&!a[1][0]&&!a[1][1]&&(o=t[++u],t[u]=n,t[e]=o)}),t.forEach(function(r){var t,e,o=n(r),c=o[0],u=o[1];if(t=i[c])if(delete i[t.end],t.push(r),t.end=u,e=a[u]){delete a[e.start];var s=e===t?t:t.concat(e);a[s.start=t.start]=i[s.end=e.end]=s}else a[t.start]=i[t.end]=t;else if(t=a[u])if(delete a[t.start],t.unshift(r),t.start=c,e=i[c]){delete i[e.end];var f=e===t?t:e.concat(t);a[f.start=e.start]=i[f.end=t.end]=f}else a[t.start]=i[t.end]=t;else t=[r],a[t.start=c]=i[t.end=u]=t}),e(i,a),e(a,i),t.forEach(function(r){o[r<0?~r:r]||c.push([r])}),c}},320:function(r,t,n){"use strict";function e(r){for(var t,n=-1,e=r.length,o=r[e-1],a=0;++n<e;)t=o,o=r[n],a+=t[0]*o[1]-t[1]*o[0];return Math.abs(a)}function o(r,t){function o(r){switch(r.type){case"GeometryCollection":r.geometries.forEach(o);break;case"Polygon":c(r.arcs);break;case"MultiPolygon":r.arcs.forEach(c)}}function c(r){r.forEach(function(t){t.forEach(function(t){(s[t=t<0?~t:t]||(s[t]=[])).push(r)})}),f.push(r)}function u(t){return e(n.i(a.b)(r,{type:"Polygon",arcs:[t]}).coordinates[0])}var s={},f=[],l=[];return t.forEach(o),f.forEach(function(r){if(!r._){var t=[],n=[r];for(r._=1,l.push(t);r=n.pop();)t.push(r),r.forEach(function(r){r.forEach(function(r){s[r<0?~r:r].forEach(function(r){r._||(r._=1,n.push(r))})})})}}),f.forEach(function(r){delete r._}),{type:"MultiPolygon",arcs:l.map(function(t){var e,o=[];if(t.forEach(function(r){r.forEach(function(r){r.forEach(function(r){s[r<0?~r:r].length<2&&o.push(r)})})}),o=n.i(i.a)(r,o),(e=o.length)>1)for(var a,c,f=1,l=u(o[0]);f<e;++f)(a=u(o[f]))>l&&(c=o[0],o[0]=o[f],o[f]=c,l=a);return o})}}var a=n(110),i=n(216);t.b=o,t.a=function(r){return n.i(a.b)(r,o.apply(this,arguments))}},321:function(r,t,n){"use strict";function e(r,t,e){var a,c,u;if(arguments.length>1)a=o(r,t,e);else for(c=0,a=new Array(u=r.arcs.length);c<u;++c)a[c]=c;return{type:"MultiLineString",arcs:n.i(i.a)(r,a)}}function o(r,t,n){function e(r){var t=r<0?~r:r;(f[t]||(f[t]=[])).push({i:r,g:u})}function o(r){r.forEach(e)}function a(r){r.forEach(o)}function i(r){r.forEach(a)}function c(r){switch(u=r,r.type){case"GeometryCollection":r.geometries.forEach(c);break;case"LineString":o(r.arcs);break;case"MultiLineString":case"Polygon":a(r.arcs);break;case"MultiPolygon":i(r.arcs)}}var u,s=[],f=[];return c(t),f.forEach(null==n?function(r){s.push(r[0].i)}:function(r){n(r[0].g,r[r.length-1].g)&&s.push(r[0].i)}),s}var a=n(110),i=n(216);t.b=e,t.a=function(r){return n.i(a.b)(r,e.apply(this,arguments))}},322:function(r,t,n){"use strict";var e=n(442);t.a=function(r){function t(r,t){r.forEach(function(r){r<0&&(r=~r);var n=i[r];n?n.push(t):i[r]=[t]})}function o(r,n){r.forEach(function(r){t(r,n)})}function a(r,t){"GeometryCollection"===r.type?r.geometries.forEach(function(r){a(r,t)}):r.type in u&&u[r.type](r.arcs,t)}var i={},c=r.map(function(){return[]}),u={LineString:t,MultiLineString:o,Polygon:o,MultiPolygon:function(r,t){r.forEach(function(r){o(r,t)})}};r.forEach(a);for(var s in i)for(var f=i[s],l=f.length,h=0;h<l;++h)for(var p=h+1;p<l;++p){var v,g=f[h],d=f[p];(v=c[g])[s=n.i(e.a)(v,d)]!==d&&v.splice(s,0,d),(v=c[d])[s=n.i(e.a)(v,g)]!==g&&v.splice(s,0,g)}return c}},323:function(r,t,n){"use strict";var e=n(162),o=n(163);t.a=function(r,t){function a(r){return g(r)}function i(r){var t;switch(r.type){case"GeometryCollection":t={type:"GeometryCollection",geometries:r.geometries.map(i)};break;case"Point":t={type:"Point",coordinates:a(r.coordinates)};break;case"MultiPoint":t={type:"MultiPoint",coordinates:r.coordinates.map(a)};break;default:return r}return null!=r.id&&(t.id=r.id),null!=r.bbox&&(t.bbox=r.bbox),null!=r.properties&&(t.properties=r.properties),t}function c(r){var t,n=0,e=1,o=r.length,a=new Array(o);for(a[0]=g(r[0],0);++n<o;)((t=g(r[n],n))[0]||t[1])&&(a[e++]=t);return 1===e&&(a[e++]=[0,0]),a.length=e,a}if(r.transform)throw new Error("already quantized");if(t&&t.scale)p=r.bbox;else{if(!((u=Math.floor(t))>=2))throw new Error("n must be ≥2");p=r.bbox||n.i(e.a)(r);var u,s=p[0],f=p[1],l=p[2],h=p[3];t={scale:[l-s?(l-s)/(u-1):1,h-f?(h-f)/(u-1):1],translate:[s,f]}}var p,v,g=n.i(o.a)(t),d=r.objects,y={};for(v in d)y[v]=i(d[v]);return{type:"Topology",bbox:p,transform:t,objects:y,arcs:r.arcs.map(c)}}},44:function(r,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=n(162);n.d(t,"bbox",function(){return e.a});var o=n(110);n.d(t,"feature",function(){return o.a});var a=n(321);n.d(t,"mesh",function(){return a.a}),n.d(t,"meshArcs",function(){return a.b});var i=n(320);n.d(t,"merge",function(){return i.a}),n.d(t,"mergeArcs",function(){return i.b});var c=n(322);n.d(t,"neighbors",function(){return c.a});var u=n(323);n.d(t,"quantize",function(){return u.a});var s=n(111);n.d(t,"transform",function(){return s.a});var f=n(163);n.d(t,"untransform",function(){return f.a})},442:function(r,t,n){"use strict";t.a=function(r,t){for(var n=0,e=r.length;n<e;){var o=n+e>>>1;r[o]<t?n=o+1:e=o}return n}},443:function(r,t,n){"use strict";t.a=function(r,t){for(var n,e=r.length,o=e-t;o<--e;)n=r[o],r[o++]=r[e],r[e]=n}}},[44]);