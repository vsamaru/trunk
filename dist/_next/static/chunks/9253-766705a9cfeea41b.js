(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9253],{47166:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function u(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(u.apply(this,r));else if("object"===a)if(r.toString===Object.prototype.toString)for(var o in r)n.call(r,o)&&r[o]&&e.push(this&&this[o]||o);else e.push(r.toString())}}return e.join(" ")}e.exports?(u.default=u,e.exports=u):void 0===(r=function(){return u}.apply(t,[]))||(e.exports=r)}()},62663:function(e){e.exports=function(e,t,r,n){var u=-1,a=null==e?0:e.length;for(n&&a&&(r=e[++u]);++u<a;)r=t(r,e[u],u,e);return r}},49029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},18674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},35393:function(e,t,r){var n=r(62663),u=r(53816),a=r(58748),o=RegExp("['\u2019]","g");e.exports=function(e){return function(t){return n(a(u(t).replace(o,"")),e,"")}}},69389:function(e,t,r){var n=r(18674)({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"});e.exports=n},93157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2757:function(e){var t="\\u2700-\\u27bf",r="a-z\\xdf-\\xf6\\xf8-\\xff",n="A-Z\\xc0-\\xd6\\xd8-\\xde",u="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+u+"]",o="\\d+",i="[\\u2700-\\u27bf]",s="["+r+"]",c="[^\\ud800-\\udfff"+u+o+t+r+n+"]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",d="["+n+"]",p="(?:"+s+"|"+c+")",v="(?:"+d+"|"+c+")",m="(?:['\u2019](?:d|ll|m|re|s|t|ve))?",x="(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",I="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",g="[\\ufe0e\\ufe0f]?",R=g+I+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",l,f].join("|")+")"+g+I+")*"),y="(?:"+[i,l,f].join("|")+")"+R,b=RegExp([d+"?"+s+"+"+m+"(?="+[a,d,"$"].join("|")+")",v+"+"+x+"(?="+[a,d+p,"$"].join("|")+")",d+"?"+p+"+"+m,d+"+"+x,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,y].join("|"),"g");e.exports=function(e){return e.match(b)||[]}},53816:function(e,t,r){var n=r(69389),u=r(79833),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=u(e))&&e.replace(a,n).replace(o,"")}},58748:function(e,t,r){var n=r(49029),u=r(93157),a=r(79833),o=r(2757);e.exports=function(e,t,r){return e=a(e),void 0===(t=r?void 0:t)?u(e)?o(e):n(e):e.match(t)||[]}},40414:function(e,t,r){"use strict";r.d(t,{v:function(){return L}});var n=r(67294),u=r(32984),a=r(12351),o=r(9362),i=r(94192),s=r(16723),c=r(23784),l=r(19946),f=r(61363),d=r(11497),p=r(64103),v=r(84575),m=r(4503),x=r(15466);var I=r(16567),g=r(14157);var R,y,b=r(73781),h=((y=h||{})[y.Open=0]="Open",y[y.Closed=1]="Closed",y),S=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(S||{}),T=((R=T||{})[R.OpenMenu=0]="OpenMenu",R[R.CloseMenu=1]="CloseMenu",R[R.GoToItem=2]="GoToItem",R[R.Search=3]="Search",R[R.ClearSearch=4]="ClearSearch",R[R.RegisterItem=5]="RegisterItem",R[R.UnregisterItem=6]="UnregisterItem",R);function E(e,t=(e=>e)){let r=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,n=(0,v.z2)(t(e.items.slice()),(e=>e.dataRef.current.domRef.current)),u=r?n.indexOf(r):null;return-1===u&&(u=null),{items:n,activeItemIndex:u}}let A={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,menuState:0},2:(e,t)=>{var r;let n=E(e),u=(0,d.d)(t,{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeItemIndex:u,activationTrigger:null!=(r=t.trigger)?r:1}},3:(e,t)=>{let r=""!==e.searchQuery?0:1,n=e.searchQuery+t.value.toLowerCase(),u=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+r).concat(e.items.slice(0,e.activeItemIndex+r)):e.items).find((e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(n))&&!e.dataRef.current.disabled})),a=u?e.items.indexOf(u):-1;return-1===a||a===e.activeItemIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeItemIndex:a,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let r=E(e,(e=>[...e,{id:t.id,dataRef:t.dataRef}]));return{...e,...r}},6:(e,t)=>{let r=E(e,(e=>{let r=e.findIndex((e=>e.id===t.id));return-1!==r&&e.splice(r,1),e}));return{...e,...r,activationTrigger:1}}},P=(0,n.createContext)(null);function k(e){let t=(0,n.useContext)(P);if(null===t){let t=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,k),t}return t}function M(e,t){return(0,u.E)(t.type,A,e,t)}P.displayName="MenuContext";let D=n.Fragment,O=(0,a.yV)((function(e,t){let r=(0,n.useReducer)(M,{menuState:1,buttonRef:(0,n.createRef)(),itemsRef:(0,n.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:o,itemsRef:i,buttonRef:s},l]=r,f=(0,c.T)(t);(0,m.O)([s,i],((e,t)=>{var r;0===o&&(l({type:1}),(0,v.sP)(t,v.tJ.Loose)||(e.preventDefault(),null==(r=s.current)||r.focus()))}));let d=(0,n.useMemo)((()=>({open:0===o})),[o]),p=e,x={ref:f};return n.createElement(P.Provider,{value:r},n.createElement(I.up,{value:(0,u.E)(o,{0:I.ZM.Open,1:I.ZM.Closed})},(0,a.sY)({ourProps:x,theirProps:p,slot:d,defaultTag:D,name:"Menu"})))})),C=(0,a.yV)((function(e,t){var r;let[u,o]=k("Menu.Button"),s=(0,c.T)(u.buttonRef,t),v=`headlessui-menu-button-${(0,l.M)()}`,m=(0,i.G)(),x=(0,b.z)((e=>{switch(e.key){case f.R.Space:case f.R.Enter:case f.R.ArrowDown:e.preventDefault(),e.stopPropagation(),o({type:0}),m.nextFrame((()=>o({type:2,focus:d.T.First})));break;case f.R.ArrowUp:e.preventDefault(),e.stopPropagation(),o({type:0}),m.nextFrame((()=>o({type:2,focus:d.T.Last})))}})),I=(0,b.z)((e=>{if(e.key===f.R.Space)e.preventDefault()})),R=(0,b.z)((t=>{if((0,p.P)(t.currentTarget))return t.preventDefault();e.disabled||(0===u.menuState?(o({type:1}),m.nextFrame((()=>{var e;return null==(e=u.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(t.preventDefault(),t.stopPropagation(),o({type:0})))})),y=(0,n.useMemo)((()=>({open:0===u.menuState})),[u]),h=e,S={ref:s,id:v,type:(0,g.f)(e,u.buttonRef),"aria-haspopup":!0,"aria-controls":null==(r=u.itemsRef.current)?void 0:r.id,"aria-expanded":e.disabled?void 0:0===u.menuState,onKeyDown:x,onKeyUp:I,onClick:R};return(0,a.sY)({ourProps:S,theirProps:h,slot:y,defaultTag:"button",name:"Menu.Button"})})),w=a.AN.RenderStrategy|a.AN.Static,N=(0,a.yV)((function(e,t){var r,u;let[p,v]=k("Menu.Items"),m=(0,c.T)(p.itemsRef,t),g=function(...e){return(0,n.useMemo)((()=>(0,x.r)(...e)),[...e])}(p.itemsRef),R=`headlessui-menu-items-${(0,l.M)()}`,y=(0,i.G)(),h=(0,I.oJ)(),S=null!==h?h===I.ZM.Open:0===p.menuState;(0,n.useEffect)((()=>{let e=p.itemsRef.current;!e||0===p.menuState&&e!==(null==g?void 0:g.activeElement)&&e.focus({preventScroll:!0})}),[p.menuState,p.itemsRef,g]),function({container:e,accept:t,walk:r,enabled:u=!0}){let a=(0,n.useRef)(t),o=(0,n.useRef)(r);(0,n.useEffect)((()=>{a.current=t,o.current=r}),[t,r]),(0,s.e)((()=>{if(!e||!u)return;let t=(0,x.r)(e);if(!t)return;let r=a.current,n=o.current,i=Object.assign((e=>r(e)),{acceptNode:r}),s=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,i,!1);for(;s.nextNode();)n(s.currentNode)}),[e,u,a,o])}({container:p.itemsRef.current,enabled:0===p.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let T=(0,b.z)((e=>{var t,r;switch(y.dispose(),e.key){case f.R.Space:if(""!==p.searchQuery)return e.preventDefault(),e.stopPropagation(),v({type:3,value:e.key});case f.R.Enter:if(e.preventDefault(),e.stopPropagation(),v({type:1}),null!==p.activeItemIndex){let{dataRef:e}=p.items[p.activeItemIndex];null==(r=null==(t=e.current)?void 0:t.domRef.current)||r.click()}(0,o.k)().nextFrame((()=>{var e;return null==(e=p.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case f.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),v({type:2,focus:d.T.Next});case f.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),v({type:2,focus:d.T.Previous});case f.R.Home:case f.R.PageUp:return e.preventDefault(),e.stopPropagation(),v({type:2,focus:d.T.First});case f.R.End:case f.R.PageDown:return e.preventDefault(),e.stopPropagation(),v({type:2,focus:d.T.Last});case f.R.Escape:e.preventDefault(),e.stopPropagation(),v({type:1}),(0,o.k)().nextFrame((()=>{var e;return null==(e=p.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case f.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(v({type:3,value:e.key}),y.setTimeout((()=>v({type:4})),350))}})),E=(0,b.z)((e=>{if(e.key===f.R.Space)e.preventDefault()})),A=(0,n.useMemo)((()=>({open:0===p.menuState})),[p]),P=e,M={"aria-activedescendant":null===p.activeItemIndex||null==(r=p.items[p.activeItemIndex])?void 0:r.id,"aria-labelledby":null==(u=p.buttonRef.current)?void 0:u.id,id:R,onKeyDown:T,onKeyUp:E,role:"menu",tabIndex:0,ref:m};return(0,a.sY)({ourProps:M,theirProps:P,slot:A,defaultTag:"div",features:w,visible:S,name:"Menu.Items"})})),z=n.Fragment,F=(0,a.yV)((function(e,t){let{disabled:r=!1,...u}=e,[i,f]=k("Menu.Item"),p=`headlessui-menu-item-${(0,l.M)()}`,v=null!==i.activeItemIndex&&i.items[i.activeItemIndex].id===p,m=(0,n.useRef)(null),x=(0,c.T)(t,m);(0,s.e)((()=>{if(0!==i.menuState||!v||0===i.activationTrigger)return;let e=(0,o.k)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=m.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[m,v,i.menuState,i.activationTrigger,i.activeItemIndex]);let I=(0,n.useRef)({disabled:r,domRef:m});(0,s.e)((()=>{I.current.disabled=r}),[I,r]),(0,s.e)((()=>{var e,t;I.current.textValue=null==(t=null==(e=m.current)?void 0:e.textContent)?void 0:t.toLowerCase()}),[I,m]),(0,s.e)((()=>(f({type:5,id:p,dataRef:I}),()=>f({type:6,id:p}))),[I,p]);let g=(0,b.z)((e=>{if(r)return e.preventDefault();f({type:1}),(0,o.k)().nextFrame((()=>{var e;return null==(e=i.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))})),R=(0,b.z)((()=>{if(r)return f({type:2,focus:d.T.Nothing});f({type:2,focus:d.T.Specific,id:p})})),y=(0,b.z)((()=>{r||v||f({type:2,focus:d.T.Specific,id:p,trigger:0})})),h=(0,b.z)((()=>{r||!v||f({type:2,focus:d.T.Nothing})})),S=(0,n.useMemo)((()=>({active:v,disabled:r})),[v,r]);return(0,a.sY)({ourProps:{id:p,ref:x,role:"menuitem",tabIndex:!0===r?void 0:-1,"aria-disabled":!0===r||void 0,disabled:void 0,onClick:g,onFocus:R,onPointerMove:y,onMouseMove:y,onPointerLeave:h,onMouseLeave:h},theirProps:u,slot:S,defaultTag:z,name:"Menu.Item"})})),L=Object.assign(O,{Button:C,Items:N,Item:F})}}]);
//# sourceMappingURL=9253-766705a9cfeea41b.js.map