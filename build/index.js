(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{22:function(t,e,o){}}]),function(t){function e(e){for(var n,c,a=e[0],s=e[1],i=e[2],u=0,b=[];u<a.length;u++)c=a[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);for(p&&p(e);b.length;)b.shift()();return l.push.apply(l,i||[]),o()}function o(){for(var t,e=0;e<l.length;e++){for(var o=l[e],n=!0,a=1;a<o.length;a++){var s=o[a];0!==r[s]&&(n=!1)}n&&(l.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},r={0:0},l=[];function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var i=0;i<a.length;i++)e(a[i]);var p=s;l.push([24,1]),o()}([function(t,e){!function(){t.exports=this.wp.element}()},function(t,e){function o(e){return t.exports=o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(e)}t.exports=o},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function o(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}},function(t,e,o){var n=o(12);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},function(t,e,o){var n=o(13),r=o(14);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?r(t):e}},function(t,e,o){var n=o(15),r=o(16),l=o(17),c=o(18);t.exports=function(t){return n(t)||r(t)||l(t)||c()}},function(t,e){t.exports=function(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}},function(t,e){function o(){return t.exports=o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},o.apply(this,arguments)}t.exports=o},function(t,e,o){var n=o(20);t.exports=function(t,e){if(null==t)return{};var o,r,l=n(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)o=c[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(l[o]=t[o])}return l}},function(t,e){var o=wp.hooks.hasFilter;o("wpBootstrapBlocks.container.customMarginOptions")&&console.warn("`wpBootstrapBlocks.container.customMarginOptions` filter was renamed to `wpBootstrapBlocks.container.marginAfterOptions`. Please change your filter definition."),o("wpBootstrapBlocks.container.useFluidContainerPerDefault")&&console.warn("`wpBootstrapBlocks.container.useFluidContainerPerDefault` filter has been removed. Please use `wp_bootstrap_blocks_container_default_attributes` filter (PHP) instead."),o("wpBootstrapBlocks.row.useOldObjectTemplateStructure")&&console.warn("`wpBootstrapBlocks.row.useOldObjectTemplateStructure` filter has no effect since the old template structure is not supported anymore. You can safely remove this filter.")},function(t,e){function o(e,n){return t.exports=o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},o(e,n)}t.exports=o},function(t,e){function o(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=o=function(t){return typeof t}:t.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(e)}t.exports=o},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e,o){var n=o(8);t.exports=function(t){if(Array.isArray(t))return n(t)}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e,o){var n=o(8);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(t,e):void 0}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,o){},function(t,e){t.exports=function(t,e){if(null==t)return{};var o,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)o=l[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}},function(t,e,o){},,function(t,e,o){},function(t,e,o){"use strict";o.r(e);o(11);var n=o(0),r=wp.blocks.updateCategory,l=wp.components,c=l.Path,a=l.Rect,s=l.SVG;r&&r("wp-bootstrap-blocks",{icon:Object(n.createElement)(s,{viewBox:"0 0 120 120",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)(a,{stroke:"#979797",fill:"#6EA644",x:"-110.5",y:"-123.5",width:"340",height:"367"}),Object(n.createElement)(c,{d:"M105.362393,45.9570783 C103.695123,44.8177711 101.427637,45.2868976 100.293893,46.9623494 C93.6915059,56.9480422 79.6864416,57.4841867 78.952843,57.4841867 C78.8194614,57.4841867 78.7527707,57.4841867 78.6193891,57.4841867 C61.3464764,57.4841867 54.744089,72.2951807 54.4773258,72.8983434 C53.6770365,74.7748494 54.5440166,76.9194277 56.3446678,77.7236446 C56.8115032,77.9246988 57.3450295,78.0587349 57.811865,78.0587349 C59.2123714,78.0587349 60.5461871,77.2545181 61.1464041,75.8471386 C61.2130949,75.7131024 65.7480681,65.5263554 77.418955,64.8561747 L77.418955,83.8222892 C76.9521195,87.9103916 75.0180868,91.127259 71.6168569,93.5399096 C68.0822455,96.0195783 63.3471999,97.2929217 57.5451018,97.2929217 C50.6092605,97.2929217 44.940544,94.8802711 40.7390247,90.121988 C36.4708146,85.3637048 34.3367095,78.5948795 34.3367095,69.8825301 L34.4034003,48.9728916 C34.7368542,41.2658133 36.8042685,35.1671687 40.7390247,30.810994 C45.0072347,26.0527108 50.6092605,23.6400602 57.5451018,23.6400602 C63.3471999,23.6400602 68.0822455,24.9134036 71.6168569,27.3930723 C75.1514684,29.872741 77.1521919,33.2906627 77.4856458,37.7138554 C77.4856458,37.8478916 77.4856458,38.0489458 77.4856458,38.1829819 C77.4856458,40.7296687 79.5530601,42.8072289 82.0873098,42.8072289 C84.6215595,42.8072289 86.6889738,40.7296687 86.6889738,38.1829819 C86.6889738,38.0489458 86.6889738,37.8478916 86.6889738,37.7138554 C86.022066,31.0790663 83.0209807,25.8516566 77.6190274,21.8975904 C72.217074,17.9435241 65.481305,16 57.3450295,16 C47.674866,16 39.8720445,19.2168675 33.9365648,25.5835843 C28.3345391,31.5481928 25.4001447,39.3893072 25.0666908,49.0399096 C25.0666908,49.7100904 25,50.3802711 25,51.0504518 L25.0666908,69.8825301 L25,69.8825301 C25,80.5384036 28.0010852,89.0496988 33.9365648,95.4164157 C39.8720445,101.783133 47.674866,105 57.3450295,105 C65.481305,105 72.217074,103.056476 77.6190274,99.1024096 C82.5541453,95.4834337 85.4885397,90.7251506 86.4889014,84.8275602 L86.6889738,63.7838855 C92.757835,62.309488 101.027492,58.9585843 106.229373,51.0504518 C107.563189,49.375 107.096353,47.0963855 105.362393,45.9570783 Z",stroke:"#FFFFFF",fill:"#FFFFFF"}))});var i=o(2),p=o.n(i),u=o(3),b=o.n(u),m=o(4),f=o.n(m),d=o(5),w=o.n(d),h=o(1),k=o.n(h),v=o(6),g=o.n(v),O=function(){return parseInt(wpBootstrapBlocks.bootstrapVersion)};function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=k()(t);if(e){var r=k()(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return w()(this,o)}}var C=wp.i18n.__,j=wp.blockEditor||wp.editor,E=j.InnerBlocks,B=j.InspectorControls,x=wp.components,z=x.CheckboxControl,S=x.PanelBody,M=x.SelectControl,P=wp.element,A=P.Component,V=P.Fragment,R=wp.data.withSelect,H=wp.compose.compose,_=wp.hooks.applyFilters,F=[{label:C("Small","wp-bootstrap-blocks"),value:"mb-2"},{label:C("Medium","wp-bootstrap-blocks"),value:"mb-3"},{label:C("Large","wp-bootstrap-blocks"),value:"mb-5"}];F=_("wpBootstrapBlocks.container.marginAfterOptions",F),F=[{label:C("None","wp-bootstrap-blocks"),value:"mb-0"}].concat(g()(F));var L=[{label:C("Xl","wp-bootstrap-blocks"),value:"xl"},{label:C("Lg","wp-bootstrap-blocks"),value:"lg"},{label:C("Md","wp-bootstrap-blocks"),value:"md"},{label:C("Sm","wp-bootstrap-blocks"),value:"sm"}];O()>=5&&(L=[{label:C("Xxl","wp-bootstrap-blocks"),value:"xxl"}].concat(g()(L))),L=[{label:C("No breakpoint selected","wp-bootstrap-blocks"),value:""}].concat(g()(L));var N=function(t){f()(o,t);var e=y(o);function o(){return p()(this,o),e.apply(this,arguments)}return b()(o,[{key:"render",value:function(){var t=this.props,e=t.attributes,o=t.className,r=t.setAttributes,l=t.hasChildBlocks,c=e.isFluid,a=e.fluidBreakpoint,s=e.marginAfter;return Object(n.createElement)(V,null,Object(n.createElement)(B,null,Object(n.createElement)(S,{title:C("Fluid","wp-bootstrap-blocks")},Object(n.createElement)(z,{label:C("Fluid","wp-bootstrap-blocks"),checked:c,onChange:function(t){r({isFluid:t})}}),Object(n.createElement)(M,{label:C("Fluid Breakpoint","wp-bootstrap-blocks"),disabled:!c,value:a,options:L,onChange:function(t){r({fluidBreakpoint:t})},help:C("Fluid breakpoints only work with Bootstrap v4.4+. The container will be 100% wide until the specified breakpoint is reached, after which max-widths for each of the higher breakpoints will be applied.","wp-bootstrap-blocks")})),Object(n.createElement)(S,{title:C("Margin","wp-bootstrap-blocks")},Object(n.createElement)(M,{label:C("Margin After","wp-bootstrap-blocks"),value:s,options:F,onChange:function(t){r({marginAfter:t})}}))),Object(n.createElement)("div",{className:o},Object(n.createElement)(E,{renderAppender:l?void 0:function(){return Object(n.createElement)(E.ButtonBlockAppender,null)}})))}}]),o}(A),X=H(R((function(t,e){var o=e.clientId;return{hasChildBlocks:(0,(t("core/block-editor")||t("core/editor")).getBlockOrder)(o).length>0}})))(N),q=(o(19),wp.i18n.__),I=wp.blocks.registerBlockType,D=(wp.blockEditor||wp.editor).InnerBlocks;I("wp-bootstrap-blocks/container",{title:q("Container","wp-bootstrap-blocks"),icon:"feedback",category:"wp-bootstrap-blocks",keywords:[q("Container","wp-bootstrap-blocks"),q("Bootstrap Container","wp-bootstrap-blocks"),q("Bootstrap","wp-bootstrap-blocks")],supports:{align:!1},edit:X,save:function(){return Object(n.createElement)(D.Content,null)}});var W=o(9),T=o.n(W),G=o(7),Z=o.n(G),J=o(10),U=o.n(J);function Y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=k()(t);if(e){var r=k()(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return w()(this,o)}}var $=wp.i18n.__,K=wp.blockEditor||wp.editor,Q=K.InnerBlocks,tt=K.InspectorControls,et=wp.components,ot=et.CheckboxControl,nt=et.ColorPalette,rt=et.PanelBody,lt=et.RangeControl,ct=et.SelectControl,at=wp.element,st=at.Component,it=at.Fragment,pt=wp.data.withSelect,ut=wp.hooks.applyFilters,bt=wp.compose.compose,mt=function(t){var e=t.label,o=t.attributeName,r=t.value,l=t.setAttributes,c=U()(t,["label","attributeName","value","setAttributes"]);return Object(n.createElement)(lt,T()({label:e,value:r,onChange:function(t){l(Z()({},o,t))},min:0,max:12},c))},ft=[{name:"primary",color:"#007bff"},{name:"secondary",color:"#6c757d"}];ft=ut("wpBootstrapBlocks.column.bgColorOptions",ft);var dt=[{label:$("None","wp-bootstrap-blocks"),value:""},{label:$("Small","wp-bootstrap-blocks"),value:"p-2"},{label:$("Medium","wp-bootstrap-blocks"),value:"p-3"},{label:$("Large","wp-bootstrap-blocks"),value:"p-5"}];dt=ut("wpBootstrapBlocks.column.paddingOptions",dt);var wt=function(t){f()(o,t);var e=Y(o);function o(){return p()(this,o),e.apply(this,arguments)}return b()(o,[{key:"render",value:function(){var t=this.props,e=t.attributes,o=t.className,r=t.setAttributes,l=t.hasChildBlocks,c=e.sizeXxl,a=e.sizeXl,s=e.sizeLg,i=e.sizeMd,p=e.sizeSm,u=e.sizeXs,b=e.equalWidthXxl,m=e.equalWidthXl,f=e.equalWidthLg,d=e.equalWidthMd,w=e.equalWidthSm,h=e.equalWidthXs,k=e.bgColor,v=e.padding,g=e.centerContent;return!k&&g&&r({centerContent:!1}),Object(n.createElement)(it,null,Object(n.createElement)(tt,null,Object(n.createElement)(rt,{title:$("Column size","wp-bootstrap-blocks"),initialOpen:!1},Object(n.createElement)(mt,{label:$("Xs Column count","wp-bootstrap-blocks"),attributeName:"sizeXs",value:u,disabled:h,setAttributes:r}),Object(n.createElement)(ot,{label:$("Xs equal-width","wp-bootstrap-blocks"),checked:h,onChange:function(t){return r({equalWidthXs:t})}}),Object(n.createElement)("hr",null),Object(n.createElement)(mt,{label:$("Sm Column count","wp-bootstrap-blocks"),attributeName:"sizeSm",value:p,disabled:w,setAttributes:r}),Object(n.createElement)(ot,{label:$("Sm equal-width","wp-bootstrap-blocks"),checked:w,onChange:function(t){return r({equalWidthSm:t})}}),Object(n.createElement)("hr",null),Object(n.createElement)(mt,{label:$("Md Column count","wp-bootstrap-blocks"),attributeName:"sizeMd",value:i,disabled:d,setAttributes:r}),Object(n.createElement)(ot,{label:$("Md equal-width","wp-bootstrap-blocks"),checked:d,onChange:function(t){return r({equalWidthMd:t})}}),Object(n.createElement)("hr",null),Object(n.createElement)(mt,{label:$("Lg Column count","wp-bootstrap-blocks"),attributeName:"sizeLg",value:s,disabled:f,setAttributes:r}),Object(n.createElement)(ot,{label:$("Lg equal-width","wp-bootstrap-blocks"),checked:f,onChange:function(t){return r({equalWidthLg:t})}}),Object(n.createElement)("hr",null),Object(n.createElement)(mt,{label:$("Xl Column count","wp-bootstrap-blocks"),attributeName:"sizeXl",value:a,disabled:m,setAttributes:r}),Object(n.createElement)(ot,{label:$("Xl equal-width","wp-bootstrap-blocks"),checked:m,onChange:function(t){return r({equalWidthXl:t})}}),O()>=5&&Object(n.createElement)(it,null,Object(n.createElement)("hr",null),Object(n.createElement)(mt,{label:$("Xxl Column count","wp-bootstrap-blocks"),attributeName:"sizeXxl",value:c,disabled:b,setAttributes:r}),Object(n.createElement)(ot,{label:$("Xxl equal-width","wp-bootstrap-blocks"),checked:b,onChange:function(t){return r({equalWidthXxl:t})}}))),Object(n.createElement)(rt,{title:$("Background color","wp-bootstrap-blocks"),initialOpen:!1},Object(n.createElement)(nt,{colors:ft,value:k,onChange:function(t){if(t){var e=ft.find((function(e){return e.color===t}));e&&r({bgColor:e.name})}else r({bgColor:"",centerContent:!1})},disableCustomColors:!0}),k?Object(n.createElement)(ot,{label:$("Center content vertically in row","wp-bootstrap-blocks"),checked:g,onChange:function(t){return r({centerContent:t})},help:$("This setting only applies if there is no vertical alignment set on the parent row block.","wp-bootstrap-blocks")}):null),Object(n.createElement)(rt,{title:$("Padding (inside column)","wp-bootstrap-blocks"),initialOpen:!1},Object(n.createElement)(ct,{label:$("Size","wp-bootstrap-blocks"),value:v,options:dt,onChange:function(t){r({padding:t})}}))),Object(n.createElement)("div",{className:o},Object(n.createElement)(Q,{templateLock:!1,renderAppender:l?void 0:function(){return Object(n.createElement)(Q.ButtonBlockAppender,null)}})))}}]),o}(st),ht=bt(pt((function(t,e){var o=e.clientId;return{hasChildBlocks:(0,(t("core/block-editor")||t("core/editor")).getBlockOrder)(o).length>0}})))(wt),kt=wp.i18n.__,vt=wp.blocks.registerBlockType,gt=(wp.blockEditor||wp.editor).InnerBlocks;vt("wp-bootstrap-blocks/column",{title:kt("Column","wp-bootstrap-blocks"),icon:"menu",category:"wp-bootstrap-blocks",keywords:[kt("Column","wp-bootstrap-blocks"),kt("Bootstrap Column","wp-bootstrap-blocks"),kt("Bootstrap","wp-bootstrap-blocks")],parent:["wp-bootstrap-blocks/row"],getEditWrapperProps:function(t){var e=t.sizeXxl,o=t.sizeXl,n=t.sizeLg,r=t.sizeMd,l=t.sizeSm,c=t.sizeXs,a=t.equalWidthXxl,s=t.equalWidthXl,i=t.equalWidthLg,p=t.equalWidthMd,u=t.equalWidthSm,b=t.equalWidthXs,m=t.bgColor,f=t.padding,d=t.centerContent,w={};if(m){var h=ft.find((function(t){return t.name===m}));h&&(w={backgroundColor:h.color})}return{"data-size-xs":a||s||i||p||u||b?0:c,"data-size-sm":a||s||i||p||u?0:l,"data-size-md":a||s||i||p?0:r,"data-size-lg":a||s||i?0:n,"data-size-xl":a||s?0:o,"data-size-xxl":a?0:e,"data-bg-color":m,"data-padding":f,"data-center-content":d,style:w}},edit:ht,save:function(){return Object(n.createElement)(gt.Content,null)}});var Ot=wp.components,yt=Ot.Path,Ct=Ot.SVG,jt=Object(n.createElement)(Ct,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Object(n.createElement)(yt,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)(yt,{d:"M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"})),Et=Object(n.createElement)(Ct,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Object(n.createElement)(yt,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)(yt,{d:"M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"})),Bt=Object(n.createElement)(Ct,{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Object(n.createElement)(yt,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)(yt,{d:"M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"})),xt=Object(n.createElement)(Ct,{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)(yt,{fillRule:"evenodd",clipRule:"evenodd",d:"M23.58 26.28c0-.600003.1499985-1.099998.45-1.5.3000015-.400002.7433304-.8399976 1.33-1.32.5600028-.4533356.9833319-.8699981 1.27-1.25s.43-.8433306.43-1.39c0-.5466694-.1733316-1.0566643-.52-1.53s-.986662-.71-1.92-.71c-1.1066722 0-1.8533314.2766639-2.24.83-.3866686.5533361-.58 1.1766632-.58 1.87 0 .1466674.0033333.2666662.01.36.0066667.0933338.01.1533332.01.18h-1.78c-.0133334-.0533336-.0266666-.146666-.04-.28-.0133334-.133334-.02-.2733326-.02-.42 0-.7733372.1766649-1.4666636.53-2.08.3533351-.6133364.8899964-1.0999982 1.61-1.46.7200036-.3600018 1.5999948-.54 2.64-.54 1.2133394 0 2.2033295.3233301 2.97.97s1.15 1.5099946 1.15 2.59c0 .7066702-.1033323 1.3033309-.31 1.79-.2066677.4866691-.4533319.8799985-.74 1.18-.2866681.3000015-.6566644.6233316-1.11.97-.4800024.3866686-.8333322.7166653-1.06.99-.2266678.2733347-.34.6233312-.34 1.05v.82h-1.74zm-.14 2.56h2V31h-2zM39 12c1.1046 0 2 .8954 2 2v20c0 1.1046-.8954 2-2 2H9c-1.10457 0-2-.8954-2-2V14c0-1.1046.89543-2 2-2h30zm0 22V14H9v20h30z"}));function zt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=k()(t);if(e){var r=k()(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return w()(this,o)}}function St(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}var Mt=wp.i18n.__,Pt=wp.blockEditor||wp.editor,At=Pt.InnerBlocks,Vt=Pt.InspectorControls,Rt=Pt.BlockControls,Ht=Pt.AlignmentToolbar,_t=wp.components,Ft=_t.IconButton,Lt=_t.CheckboxControl,Nt=_t.PanelBody,Xt=_t.SVG,qt=_t.Path,It=_t.SelectControl,Dt=wp.element,Wt=Dt.Component,Tt=Dt.Fragment,Gt=wp.data,Zt=Gt.withSelect,Jt=Gt.withDispatch,Ut=wp.hooks.applyFilters,Yt=wp.compose.compose,$t=["wp-bootstrap-blocks/column"],Kt=[{name:"1-1",title:Mt("2 Columns (1:1)","wp-bootstrap-blocks"),icon:Object(n.createElement)(Xt,{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)(qt,{fillRule:"evenodd",clipRule:"evenodd",d:"M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z"})),templateLock:"all",template:[["wp-bootstrap-blocks/column",{sizeMd:6}],["wp-bootstrap-blocks/column",{sizeMd:6}]]},{name:"1-2",title:Mt("2 Columns (1:2)","wp-bootstrap-blocks"),icon:Object(n.createElement)(Xt,{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)(qt,{fillRule:"evenodd",clipRule:"evenodd",d:"M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z"})),templateLock:"all",template:[["wp-bootstrap-blocks/column",{sizeMd:4}],["wp-bootstrap-blocks/column",{sizeMd:8}]]},{name:"2-1",title:Mt("2 Columns (2:1)","wp-bootstrap-blocks"),icon:Object(n.createElement)(Xt,{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)(qt,{fillRule:"evenodd",clipRule:"evenodd",d:"M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z"})),templateLock:"all",template:[["wp-bootstrap-blocks/column",{sizeMd:8}],["wp-bootstrap-blocks/column",{sizeMd:4}]]},{name:"1-1-1",title:Mt("3 Columns (1:1:1)","wp-bootstrap-blocks"),icon:Object(n.createElement)(Xt,{width:"48",height:"48",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)(qt,{fillRule:"evenodd",d:"M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"})),templateLock:"all",template:[["wp-bootstrap-blocks/column",{sizeMd:4}],["wp-bootstrap-blocks/column",{sizeMd:4}],["wp-bootstrap-blocks/column",{sizeMd:4}]]}];Kt=Ut("wpBootstrapBlocks.row.templates",Kt),Kt=Kt.map((function(t){return function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?St(Object(o),!0).forEach((function(e){Z()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):St(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({icon:xt},t)})),Ut("wpBootstrapBlocks.row.enableCustomTemplate",!0)&&Kt.push({name:"custom",title:Mt("Custom","wp-bootstrap-blocks"),icon:xt,templateLock:!1,template:[["wp-bootstrap-blocks/column"]]});var Qt=[{label:Mt("None","wp-bootstrap-blocks"),value:"gx-0"},{label:Mt("Small","wp-bootstrap-blocks"),value:"gx-3"},{label:Mt("Large","wp-bootstrap-blocks"),value:"gx-5"}];Qt=Ut("wpBootstrapBlocks.row.horizontalGuttersOptions",Qt),Qt=[{label:Mt("Bootstrap Default","wp-bootstrap-blocks"),value:""}].concat(g()(Qt));var te=[{label:Mt("Small","wp-bootstrap-blocks"),value:"gy-3"},{label:Mt("Large","wp-bootstrap-blocks"),value:"gy-5"}];te=Ut("wpBootstrapBlocks.row.verticalGuttersOptions",te),te=[{label:Mt("Bootstrap Default (None)","wp-bootstrap-blocks"),value:""}].concat(g()(te));var ee=function(t){var e=Kt.find((function(e){return e.name===t}));return!!e&&e.templateLock},oe=function(t){f()(o,t);var e=zt(o);function o(){return p()(this,o),e.apply(this,arguments)}return b()(o,[{key:"render",value:function(){var t,e,o=this.props,r=o.className,l=o.attributes,c=o.setAttributes,a=o.columns,s=o.updateBlockAttributes,i=l.template,p=l.noGutters,u=l.alignment,b=l.verticalAlignment,m=l.editorStackColumns,f=l.horizontalGutters,d=l.verticalGutters,w=[{icon:"editor-alignleft",title:Mt("Align columns left","wp-bootstrap-blocks"),align:"left"},{icon:"editor-aligncenter",title:Mt("Align columns center","wp-bootstrap-blocks"),align:"center"},{icon:"editor-alignright",title:Mt("Align columns right","wp-bootstrap-blocks"),align:"right"}],h=[{icon:Bt,title:Mt("Align columns top","wp-bootstrap-blocks"),align:"top"},{icon:Et,title:Mt("Align columns center","wp-bootstrap-blocks"),align:"center"},{icon:jt,title:Mt("Align columns bottom","wp-bootstrap-blocks"),align:"bottom"}];return Object(n.createElement)(Tt,null,Object(n.createElement)(Vt,null,Object(n.createElement)(Nt,null,Object(n.createElement)(Lt,{label:Mt("Editor: Display columns stacked","wp-bootstrap-blocks"),description:Mt("Displays stacked columns in editor to enhance readability of block content. This option is only used in the editor and won't affect the output of the row.","wp-bootstrap-blocks"),checked:m,onChange:function(t){return c({editorStackColumns:t})}})),Object(n.createElement)(Nt,{title:Mt("Change layout","wp-bootstrap-blocks")},Object(n.createElement)("ul",{className:"wp-bootstrap-blocks-template-selector-list"},Kt.map((function(t,e){return Object(n.createElement)("li",{className:"wp-bootstrap-blocks-template-selector-button",key:e},Object(n.createElement)(Ft,{label:t.title,icon:t.icon,onClick:function(){!function(t){var e=Kt.find((function(e){return e.name===t}));e&&(a.forEach((function(t,o){if(e.template.length>o){var n=e.template[o][1];s(t.clientId,n)}})),c({template:t}))}(t.name)},className:i===t.name?"is-active":null},Object(n.createElement)("div",{className:"wp-bootstrap-blocks-template-selector-button-label"},t.title)))})))),Object(n.createElement)(Nt,{title:Mt("Row options","wp-bootstrap-blocks")},Object(n.createElement)(Lt,{label:Mt("No Gutters","wp-bootstrap-blocks"),checked:p,onChange:function(t){return c({noGutters:t})}}),O()>=5&&!p&&Object(n.createElement)(Tt,null,Object(n.createElement)(It,{label:Mt("Horizontal Gutters","wp-bootstrap-blocks"),value:f,options:Qt,onChange:function(t){c({horizontalGutters:t})}}),Object(n.createElement)(It,{label:Mt("Vertical Gutters","wp-bootstrap-blocks"),value:d,options:te,onChange:function(t){c({verticalGutters:t})}})))),Object(n.createElement)(Rt,null,Object(n.createElement)(Ht,{value:u,label:Mt("Change horizontal alignment of columns","wp-bootstrap-blocks"),onChange:function(t){return c({alignment:t})},alignmentControls:w}),Object(n.createElement)(Ht,{value:b,label:Mt("Change vertical alignment of columns","wp-bootstrap-blocks"),onChange:function(t){return c({verticalAlignment:t})},alignmentControls:h})),Object(n.createElement)("div",{className:r},Object(n.createElement)(At,{allowedBlocks:$t,template:(t=i,e=Kt.find((function(e){return e.name===t})),e?e.template:[]),templateLock:ee(i)})))}}]),o}(Wt),ne=Yt(Zt((function(t,e){var o=e.clientId,n=(t("core/block-editor")||t("core/editor")).getBlocksByClientId;return{columns:n(o)[0]?n(o)[0].innerBlocks:[]}})),Jt((function(t){return{updateBlockAttributes:(t("core/block-editor")||t("core/editor")).updateBlockAttributes}})))(oe),re=(o(21),o(22),wp.i18n.__),le=wp.blocks.registerBlockType,ce=(wp.blockEditor||wp.editor).InnerBlocks;function ae(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=k()(t);if(e){var r=k()(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return w()(this,o)}}le("wp-bootstrap-blocks/row",{title:re("Row","wp-bootstrap-blocks"),icon:"layout",category:"wp-bootstrap-blocks",keywords:[re("Row","wp-bootstrap-blocks"),re("Bootstrap Row","wp-bootstrap-blocks"),re("Bootstrap","wp-bootstrap-blocks")],supports:{align:["full"]},getEditWrapperProps:function(t){return{"data-alignment":t.alignment,"data-vertical-alignment":t.verticalAlignment,"data-editor-stack-columns":t.editorStackColumns}},edit:ne,save:function(){return Object(n.createElement)(ce.Content,null)}});var se=wp.i18n.__,ie=wp.element,pe=ie.Component,ue=ie.Fragment,be=wp.blockEditor||wp.editor,me=be.RichText,fe=be.URLInput,de=be.InspectorControls,we=be.BlockControls,he=be.AlignmentToolbar,ke=wp.components,ve=ke.Dashicon,ge=ke.IconButton,Oe=ke.SelectControl,ye=ke.PanelBody,Ce=wp.hooks.applyFilters,je=function(t){f()(o,t);var e=ae(o);function o(){return p()(this,o),e.apply(this,arguments)}return b()(o,[{key:"render",value:function(){var t=this.props,e=t.attributes,o=t.className,r=t.setAttributes,l=t.isSelected,c=e.url,a=e.text,s=e.style,i=e.alignment,p=[{label:se("Primary","wp-bootstrap-blocks"),value:"primary"},{label:se("Secondary","wp-bootstrap-blocks"),value:"secondary"}];return p=Ce("wpBootstrapBlocks.button.styleOptions",p),Object(n.createElement)(ue,null,Object(n.createElement)("div",{className:o,"data-alignment":i},Object(n.createElement)(me,{placeholder:se("Add text...","wp-bootstrap-blocks"),value:a,onChange:function(t){return r({text:t})},formattingControls:[],keepPlaceholderOnFocus:!0}),Object(n.createElement)(de,null,Object(n.createElement)(ye,null,Object(n.createElement)(Oe,{label:se("Style","wp-bootstrap-blocks"),value:s,options:p,onChange:function(t){r({style:t})}}))),Object(n.createElement)(we,null,Object(n.createElement)(he,{value:i,label:se("Change button alignment","wp-bootstrap-blocks"),onChange:function(t){return r({alignment:t})}}))),l&&Object(n.createElement)("form",{className:"wp-block-wp-bootstrap-blocks-button-link",onSubmit:function(t){return t.preventDefault()}},Object(n.createElement)(ve,{icon:"admin-links"}),Object(n.createElement)(fe,{value:c,onChange:function(t){return r({url:t})}}),Object(n.createElement)(ge,{icon:"editor-break",label:se("Apply","wp-bootstrap-blocks"),type:"submit"})))}}]),o}(pe),Ee=(o(23),wp.i18n.__),Be=wp.blocks.registerBlockType,xe=wp.components,ze=xe.G,Se=xe.Path,Me=xe.SVG;Be("wp-bootstrap-blocks/button",{title:Ee("Button","wp-bootstrap-blocks"),icon:Object(n.createElement)(Me,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)(Se,{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)(ze,null,Object(n.createElement)(Se,{d:"M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"}))),category:"wp-bootstrap-blocks",keywords:[Ee("Button","wp-bootstrap-blocks"),Ee("Bootstrap Button","wp-bootstrap-blocks"),Ee("Bootstrap","wp-bootstrap-blocks")],example:{},getEditWrapperProps:function(t){return{"data-alignment":t.alignment}},edit:je,save:function(){return null}})}]);