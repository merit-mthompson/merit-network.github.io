(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+1nu":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("IP2g");t.a=function(e){var t=e.href,r=e.icon;return a.a.createElement("a",{href:t,className:"button is-info is-inverted"},a.a.createElement("span",{className:"icon"},a.a.createElement(o.a,{icon:r,size:"lg"})))}},"7oih":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("8tEE"),i=r("Wbzz"),c=r("+1nu"),l=function(){var e,t=null===(e=Object(i.useStaticQuery)("1598440204").site.siteMetadata)||void 0===e?void 0:e.siteRepo;return a.a.createElement("footer",{className:"footer"},a.a.createElement("div",{className:"content has-text-centered"},a.a.createElement("p",null,"Built with"," ",a.a.createElement("a",{href:"https://www.gatsbyjs.com/"},a.a.createElement("strong",null,"Gatsby")),","," ",a.a.createElement("a",{href:"https://bulma.io/"},a.a.createElement("strong",null,"Bulma")),", and"," ",a.a.createElement("a",{href:"https://fontawesome.com/"},a.a.createElement("strong",null,"Font Awesome")),"."," ",a.a.createElement("a",{href:"https://github.com/merit-network/merit-network.github.io"},"Source")," ","is"," ",a.a.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT"),". Content is"," ",a.a.createElement("a",{href:"http://creativecommons.org/licenses/by-sa/4.0/"},"CC BY-SA 4.0"),"."),t&&a.a.createElement("p",null,a.a.createElement(c.a,{href:t,icon:o.b}))))},u=r("IP2g"),s=r("lADJ"),f=r.n(s),p=function(){var e,t=Object(n.useRef)(),r=Object(n.useRef)(),c=null===(e=Object(i.useStaticQuery)("1265084305").site.siteMetadata)||void 0===e?void 0:e.siteRepo;return a.a.createElement("nav",{className:"navbar is-white is-spaced",role:"navigation","aria-label":"main navigation"},a.a.createElement("div",{className:"navbar-brand"},a.a.createElement(i.Link,{to:"/",className:"navbar-item"},a.a.createElement(f.a,{width:"93",height:"30"})),a.a.createElement("a",{"aria-expanded":"false","aria-label":"menu",className:"navbar-burger burger",href:"/",onClick:function(e){e.preventDefault(),t.current.classList.toggle("is-active"),r.current.classList.toggle("is-active")},ref:t,role:"button"},a.a.createElement("span",{"aria-hidden":"true"}),a.a.createElement("span",{"aria-hidden":"true"}),a.a.createElement("span",{"aria-hidden":"true"}))),a.a.createElement("div",{className:"navbar-menu",ref:r},a.a.createElement("div",{className:"navbar-start"},a.a.createElement(i.Link,{to:"/",className:"navbar-item"},"Open Source and Technology")),a.a.createElement("div",{className:"navbar-end"},a.a.createElement("div",{className:"navbar-item"},a.a.createElement("div",{className:"buttons"},c&&a.a.createElement("a",{className:"button is-light is-small",href:c},a.a.createElement(u.a,{icon:o.b,className:"mr-1"}),"View on GitHub"))))))};t.a=function(e){var t=e.location,r=(e.title,e.children),n="/"===t.pathname;return a.a.createElement("div",{className:"global-wrapper","data-is-root-path":n},a.a.createElement(p,null),a.a.createElement("main",{role:"main"},r),a.a.createElement(l,null))}},"8+s/":function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=r("q1tI"),o=n(a),i=n(r("Gytx"));function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function f(){u=e(s.map((function(e){return e.props}))),p.canUseDOM?t(u):r&&(u=r(u))}var p=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var c=a.prototype;return c.shouldComponentUpdate=function(e){return!i(e,this.props)},c.componentWillMount=function(){s.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},c.render=function(){return o.createElement(n,this.props)},a}(a.Component);return c(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),c(p,"canUseDOM",l),p}}},EYWl:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("TJpk"),i=r("Wbzz"),c=function(e){var t,r,n,c=e.description,l=e.lang,u=e.meta,s=e.title,f=Object(i.useStaticQuery)("3333504701").site,p=c||f.siteMetadata.description,T=null===(t=f.siteMetadata)||void 0===t?void 0:t.title;return a.a.createElement(o.Helmet,{htmlAttributes:{lang:l},title:s,titleTemplate:T?"%s | "+T:null,meta:[{name:"description",content:p},{property:"og:title",content:s},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=f.siteMetadata)||void 0===r||null===(n=r.social)||void 0===n?void 0:n.twitter)||""},{name:"twitter:title",content:s},{name:"twitter:description",content:p},{name:"google-site-verification",content:f.siteMetadata.googleSiteVerification}].concat(u)})};c.defaultProps={lang:"en",meta:[],description:""},t.a=c},Gytx:function(e,t){e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var u=o[l];if(!c(u))return!1;var s=e[u],f=t[u];if(!1===(a=r?r.call(n,s,f,u):void 0)||void 0===a&&s!==f)return!1}return!0}},IP2g:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));r("E9XD");var n=r("7O5W"),a=r("17x9"),o=r.n(a),i=r("q1tI"),c=r.n(i);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function T(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function E(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=d(t.slice(0,n)),o=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[a]=o,e}),{})}var m=!1;try{m=!0}catch(v){}function y(e){return null===e?null:"object"===l(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function A(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}function b(e){var t=e.forwardedRef,r=p(e,["forwardedRef"]),a=r.icon,o=r.mask,i=r.symbol,c=r.className,l=r.title,s=y(a),d=A("classes",[].concat(T(function(e){var t,r=e.spin,n=e.pulse,a=e.fixedWidth,o=e.inverse,i=e.border,c=e.listItem,l=e.flip,s=e.size,f=e.rotation,p=e.pull,T=(u(t={"fa-spin":r,"fa-pulse":n,"fa-fw":a,"fa-inverse":o,"fa-border":i,"fa-li":c,"fa-flip-horizontal":"horizontal"===l||"both"===l,"fa-flip-vertical":"vertical"===l||"both"===l},"fa-".concat(s),null!=s),u(t,"fa-rotate-".concat(f),null!=f&&0!==f),u(t,"fa-pull-".concat(p),null!=p),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(T).map((function(e){return T[e]?e:null})).filter((function(e){return e}))}(r)),T(c.split(" ")))),E=A("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),v=A("mask",y(o)),S=Object(n.icon)(s,f({},d,{},E,{},v,{symbol:i,title:l}));if(!S)return function(){var e;!m&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",s),null;var O=S.abstract,g={ref:t};return Object.keys(r).forEach((function(e){b.defaultProps.hasOwnProperty(e)||(g[e]=r[e])})),h(O[0],g)}b.displayName="FontAwesomeIcon",b.propTypes={border:o.a.bool,className:o.a.string,mask:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),fixedWidth:o.a.bool,inverse:o.a.bool,flip:o.a.oneOf(["horizontal","vertical","both"]),icon:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),listItem:o.a.bool,pull:o.a.oneOf(["right","left"]),pulse:o.a.bool,rotation:o.a.oneOf([0,90,180,270]),size:o.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o.a.bool,symbol:o.a.oneOfType([o.a.bool,o.a.string]),title:o.a.string,transform:o.a.oneOfType([o.a.string,o.a.object]),swapOpacity:o.a.bool},b.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var h=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=E(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[d(t)]=n}return e}),{attrs:{}}),i=n.style,c=void 0===i?{}:i,l=p(n,["style"]);return o.attrs.style=f({},o.attrs.style,{},c),t.apply(void 0,[r.tag,f({},o.attrs,{},l)].concat(T(a)))}.bind(null,c.a.createElement)},TJpk:function(e,t,r){t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=f(r("q1tI")),i=f(r("17x9")),c=f(r("8+s/")),l=f(r("bmMU")),u=r("v1p5"),s=r("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E,m,y,A=(0,c.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),b=(E=A,y=m=function(e){function t(){return T(this,t),d(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return n({},a,((t={})[r.type]=[].concat(a[r.type]||[],[n({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,a=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(a.type){case s.TAG_NAMES.TITLE:return n({},o,((t={})[a.type]=c,t.titleAttributes=n({},i),t));case s.TAG_NAMES.BODY:return n({},o,{bodyAttributes:n({},i)});case s.TAG_NAMES.HTML:return n({},o,{htmlAttributes:n({},i)})}return n({},o,((r={})[a.type]=n({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var a;r=n({},r,((a={})[t]=e[t],a))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=p(a,["children"]),c=(0,u.convertReactPropstoHtmlAttributes)(i);switch(r.warnOnInvalidChildren(e,o),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:c,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=p(e,["children"]),a=n({},r);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(E,a)},a(t,null,[{key:"canUseDOM",set:function(e){E.canUseDOM=e}}]),t}(o.default.Component),m.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=E.peek,m.rewind=function(){var e=E.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},y);b.renderStatic=b.rewind,t.Helmet=b,t.default=b},bmMU:function(e,t,r){"use strict";var n=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var c,l,u,s=n(t),f=n(r);if(s&&f){if((l=t.length)!=r.length)return!1;for(c=l;0!=c--;)if(!e(t[c],r[c]))return!1;return!0}if(s!=f)return!1;var p=t instanceof Date,T=r instanceof Date;if(p!=T)return!1;if(p&&T)return t.getTime()==r.getTime();var d=t instanceof RegExp,E=r instanceof RegExp;if(d!=E)return!1;if(d&&E)return t.toString()==r.toString();var m=a(t);if((l=m.length)!==a(r).length)return!1;for(c=l;0!=c--;)if(!o.call(r,m[c]))return!1;if(i&&t instanceof Element&&r instanceof Element)return t===r;for(c=l;0!=c--;)if(!("_owner"===(u=m[c])&&t.$$typeof||e(t[u],r[u])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},"hFT/":function(e,t,r){r("E9XD"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},lADJ:function(e,t,r){var n=r("q1tI");function a(e){return n.createElement("svg",e,[n.createElement("path",{className:"cls-1",d:"M127.943,68.7c0-15.7691-5.714-25.7291-17.5456-25.7291-13.6027,0-24.6441,14.11-24.6441,28.64v51.4579c0,6.2221,3.1586,8.3,16.1728,8.3v5.81H72.352V68.7c0-15.7691-5.7191-25.7291-17.5416-25.7291-13.6071,0-24.6486,14.11-24.6486,28.64v51.4579c0,6.2221,3.16,8.3,15.7754,8.3v5.81H0v-5.81c13.6025,0,16.7657-2.0782,16.7657-8.3V53.7638c0-6.2227-3.1632-8.3015-15.5781-8.3015V39.65l28.7787-1.2421V52.72h.3974c7.0977-9.95,13.7981-15.5643,26.0174-15.5643,14.5884,0,24.2512,7.4716,28.3858,18.8915,6.9023-14.3244,17.9438-18.8915,27.4059-18.8915,18.727,0,29.1755,12.0416,29.1755,30.3024V123.07c0,6.2221,3.1586,8.3,16.167,8.3v5.81H127.943Z",key:0}),n.createElement("path",{className:"cls-1",d:"M169.3609,83.7846v6.2892c0,24.316,11.725,43.6366,33.2137,43.6366,18.8877,0,26.2612-8.6857,34.518-20.8374l5.21,3.466c-13.0313,19.1054-23.2344,23.4455-41.4671,23.4455-29.7421,0-47.9691-26.48-47.9691-53.6154,0-31.69,17.5824-53.6027,47.1054-53.6027,26.915,0,42.3308,25.6028,42.3308,51.2182Zm56.4413-6.077c0-17.8-5.4307-39.07-27.57-39.07-19.9692,0-28.8715,20.1877-28.8715,39.07Z",key:1}),n.createElement("path",{className:"cls-1",d:"M260.5265,49.925c0-6.5122-3.4763-8.6821-17.1511-8.6821V35.1624L275.292,33.863V59.9073h.429c4.989-12.5873,12.8043-27.3409,28.4346-27.3409,8.6868,0,16.71,5.2007,16.71,14.9747,0,6.506-4.1255,10.6281-9.9783,10.6281-5.8666,0-9.9851-3.2516-9.9851-9.7638a9.1252,9.1252,0,0,1,5.2036-8.6857c-.6561-.8642-1.95-1.0821-3.2481-1.0821-5.6464,0-18.8853,6.5094-24.5305,31.4757-3.0348,13.6713-3.0348,33.8624-3.0348,47.97,0,10.8488,3.4694,13.0223,19.5345,13.0223V137.18h-51.666v-6.0741c13.8893,0,17.3656-2.1735,17.3656-8.6835Z",key:2}),n.createElement("path",{className:"cls-1",d:"M372.525,137.18H321.3067v-6.0741c15.1956,0,18.6639-2.1735,18.6639-8.6835V49.925c0-6.5122-3.4683-8.6821-17.15-8.6821V35.1624l31.9109-1.2994v88.5592c0,6.51,3.4752,8.6835,17.7934,8.6835Z",key:3}),n.createElement("path",{className:"cls-1",d:"M428.5248,32.5664v6.0712h-32.56v77.0545c0,13.46,6.5157,18.0183,14.11,18.0183,6.2954,0,15.8459-4.7782,15.8459-21.9224v-9.3325H432v7.8185c0,17.3553-8.03,29.5105-25.8356,29.5105-15.8391,0-24.9595-8.6788-24.9595-25.18V38.6376h-16.06V32.5664c18.2293,0,23.4467-17.8095,24.7461-32.5664h6.0741V32.5664Z",key:4})])}a.defaultProps={id:"brand-lgo","data-name":"brand-logo",width:"432",height:"140",viewBox:"0 0 432 140"},e.exports=a,a.default=a},v1p5:function(e,t,r){(function(e){r("E9XD"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=l(r("q1tI")),i=l(r("YVoz")),c=r("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}var u,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=m(e,c.TAG_NAMES.TITLE),r=m(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=m(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},p=function(e){return m(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},d=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},E=function(e,t,r){var a={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var l=o[i],u=l.toLowerCase();-1===t.indexOf(u)||r===c.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(l)||l!==c.TAG_PROPERTIES.INNER_HTML&&l!==c.TAG_PROPERTIES.CSS_TEXT&&l!==c.TAG_PROPERTIES.ITEM_PROP||(r=l)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return a[r]||(a[r]={}),n[r]||(n[r]={}),!a[r][s]&&(n[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(n),l=0;l<o.length;l++){var u=o[l],s=(0,i.default)({},a[u],n[u]);a[u]=s}return e}),[]).reverse()},m=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},y=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){y(e)}),0)}),A=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||y:e.requestAnimationFrame||y,h="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,O=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,p=e.title,T=e.titleAttributes;P(c.TAG_NAMES.BODY,n),P(c.TAG_NAMES.HTML,a),_(p,T);var d={baseTag:R(c.TAG_NAMES.BASE,r),linkTags:R(c.TAG_NAMES.LINK,o),metaTags:R(c.TAG_NAMES.META,i),noscriptTags:R(c.TAG_NAMES.NOSCRIPT,l),scriptTags:R(c.TAG_NAMES.SCRIPT,s),styleTags:R(c.TAG_NAMES.STYLE,f)},E={},m={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(E[e]=r),n.length&&(m[e]=d[e].oldTags)})),t&&t(),u(e,E,m)},g=function(e){return Array.isArray(e)?e.join(""):e},_=function(e,t){void 0!==e&&document.title!==e&&(document.title=g(e)),P(c.TAG_NAMES.TITLE,t)},P=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(c.HELMET_ATTRIBUTE),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),l=0;l<i.length;l++){var u=i[l],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var f=o.indexOf(u);-1!==f&&o.splice(f,1)}for(var p=o.length-1;p>=0;p--)r.removeAttribute(o[p]);a.length===o.length?r.removeAttribute(c.HELMET_ATTRIBUTE):r.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&r.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},R=function(e,t){var r=document.head||document.querySelector(c.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===c.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===c.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[n]?"":t[n];r.setAttribute(n,l)}r.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},w=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[c.REACT_TAG_MAP[r]||r]=e[r],t}),t)},N=function(e,t,r){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[c.HELMET_ATTRIBUTE]=!0,a=M(r,n),[o.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=w(r),o=g(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+s(o,n)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+s(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return w(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[c.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=c.REACT_TAG_MAP[e]||e;if(r===c.TAG_PROPERTIES.INNER_HTML||r===c.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+s(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[c.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){S&&h(S),e.defer?S=b((function(){O(e,(function(){S=null}))})):(O(e),S=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,u=e.scriptTags,s=e.styleTags,f=e.title,p=void 0===f?"":f,T=e.titleAttributes;return{base:N(c.TAG_NAMES.BASE,t,n),bodyAttributes:N(c.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:N(c.ATTRIBUTE_NAMES.HTML,a,n),link:N(c.TAG_NAMES.LINK,o,n),meta:N(c.TAG_NAMES.META,i,n),noscript:N(c.TAG_NAMES.NOSCRIPT,l,n),script:N(c.TAG_NAMES.SCRIPT,u,n),style:N(c.TAG_NAMES.STYLE,s,n),title:N(c.TAG_NAMES.TITLE,{title:p,titleAttributes:T},n)}},t.reducePropsToState=function(e){return{baseTag:d([c.TAG_PROPERTIES.HREF],e),bodyAttributes:T(c.ATTRIBUTE_NAMES.BODY,e),defer:m(e,c.HELMET_PROPS.DEFER),encode:m(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(c.ATTRIBUTE_NAMES.HTML,e),linkTags:E(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:E(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:E(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:T(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=b,t.warn=v}).call(this,r("yLpj"))}}]);
//# sourceMappingURL=commons-f3df671966f8524dca56.js.map