"use strict";(self.webpackChunksite_docs=self.webpackChunksite_docs||[]).push([[888],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9471:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={sidebar_position:2},s=void 0,u={unversionedId:"getting-started/Diving In",id:"getting-started/Diving In",title:"Diving In",description:"After installing, and booting into TempleOS you'll be greeted with TempleOS's holiest and simplistic bootloader, from here just enter 1 to boot into the C drive.",source:"@site/docs/getting-started/Diving In.mdx",sourceDirName:"getting-started",slug:"/getting-started/Diving In",permalink:"/docs/getting-started/Diving In",editUrl:"https://github.com/TempleOS-Simplified/Site-Docs/tree/main/docs/getting-started/Diving In.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/getting-started/installation"}},c={},p=[],d={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After installing, and booting into TempleOS you'll be greeted with TempleOS's holiest and simplistic bootloader, from here just enter ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," to boot into the C drive."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Bootloader")),(0,o.kt)("br",null),(0,o.kt)("img",{src:"img/bootloader.png",width:"600"})),(0,o.kt)("h1",{id:"the-os"},"The OS"),(0,o.kt)("p",null,"Once fully inside, you'll be asked if you'd like to take the tour; thankfully Terry Davis was kind enough to teach people how to use his system. For the purpose of this guide, I'll be ignoring the guide and exploring things my own way - although, don't take that as an excuse to not explore the vastness of the tour, going so much as guiding you through everything, how kind of you Terry. Floating over on the right of your screen is a super helpful tool called \"AutoComplete\"; which - you guessed it - is a program that autocompletes what you're typing system-wide. Autocomplete can be enabled with ",(0,o.kt)("kbd",null,"Alt+A")," and disabled with ",(0,o.kt)("kbd",null,"Shift+Alt+A"),'. From the start, we\'ll be greeted with two command windows or "terminals".'),(0,o.kt)("p",null,'The entirety of TempleOS - disregarding a portion of assembly code - is written in a C variant created by Terry A. Davis titled "HolyC" with its own appropriately named "HolyC" compiler. What might be surprising about TempleOS is that the "SHELL" environment goes directly to the compiler, thus being completely different from something like Linux using BASH which is a standalone program used for executing programs, instead TempleOS resembles something like how the Python Interpreter has its own Read-eval-print loop which feeds directly to the interpreter (although with HolyC it is way faster). Pairing one of the powerful languages with a direct user input might seem crazy, but it\'s ridiculously overpowered! ',(0,o.kt)("i",null,"We will be diving deeper into commands and the inner workings in the next chapter.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"The Terminal")),(0,o.kt)("br",null),(0,o.kt)("img",{src:"https://gitlab.com/eccentrici/templeos/-/raw/main/assets/tos_terminal.png"})),(0,o.kt)("h1",{id:"the-ui"},"The UI"),(0,o.kt)("p",null,"At the top of the screen, a lot of system information is display; accurate date and time, FPS, Memory and CPU, and farthest to the right we have text displaying our last key press. Below this initial region we have a second bar of information for the current program; a link to the Personal Menu, task name, process ID, and our close button (depicted as ",(0,o.kt)("inlineCode",{parentName:"p"},"[X]"),")."))}h.isMDXComponent=!0}}]);