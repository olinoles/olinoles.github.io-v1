(window.webpackJsonp=window.webpackJsonp||[]).push([[15,2,3,4,5,6,7,8,9,10,11,12,13,14],{241:function(t,e,n){var content=n(248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("32400742",content,!0,{sourceMap:!1})},242:function(t,e,n){var content=n(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("0f4356b3",content,!0,{sourceMap:!1})},243:function(t,e,n){"use strict";n.r(e);var o={props:{label:{type:String,required:!0},icon:{type:String,required:!0}},data:function(){return{showTitle:!1}}},r=(n(247),n(9)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative mx-auto my-auto",on:{mouseover:function(e){t.showTitle=!0},focus:function(e){t.showTitle=!0},blur:function(e){t.showTitle=!1},mouseleave:function(e){t.showTitle=!1}}},[n("img",{staticClass:"h-14 w-auto mx-4 my-4 transform duration-75 hover:scale-110",attrs:{src:"/icons/"+t.icon,alt:t.label}}),t._v(" "),n("div",{staticClass:"opacity-0 pointer-events-none absolute left-0 right-0 mx-auto text-center z-10 bg-gray-800 bg-opacity-80 text-white rounded-md p-1 font-bold text-xs",class:t.showTitle?"is-active":null},[t._v("\n    "+t._s(t.label)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},244:function(t,e,n){var content=n(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("25941a10",content,!0,{sourceMap:!1})},245:function(t,e,n){var content=n(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("19323bb9",content,!0,{sourceMap:!1})},246:function(t,e,n){var content=n(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("02c5275e",content,!0,{sourceMap:!1})},247:function(t,e,n){"use strict";n(241)},248:function(t,e,n){var o=n(40)((function(i){return i[1]}));o.push([t.i,".tooltip{\n  transform:scale(0);\n  transform-origin:top center\n}\n.is-active{\n  -webkit-animation:pulse .2s cubic-bezier(0,0,.2,1) forwards;\n  animation:pulse .2s cubic-bezier(0,0,.2,1) forwards\n}\n@-webkit-keyframes pulse{\n0%{\n    transform:scale(0);\n    opacity:0\n}\n50%{\n    transform:scale(.99)\n}\nto{\n    transform:scale(1);\n    opacity:1;\n    visibility:visible\n}\n}\n@keyframes pulse{\n0%{\n    transform:scale(0);\n    opacity:0\n}\n50%{\n    transform:scale(.99)\n}\nto{\n    transform:scale(1);\n    opacity:1;\n    visibility:visible\n}\n}",""]),o.locals={},t.exports=o},249:function(t,e,n){var content=n(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("8c25c9b0",content,!0,{sourceMap:!1})},250:function(t,e,n){var content=n(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("6b1a8826",content,!0,{sourceMap:!1})},251:function(t,e,n){"use strict";n(242)},252:function(t,e,n){var o=n(40)((function(i){return i[1]}));o.push([t.i,".item[data-v-8227f0b8]{\n  color:#cfe2f3\n}\n.item[data-v-8227f0b8]:hover{\n  background-color:#254268\n}",""]),o.locals={},t.exports=o},253:function(t,e,n){t.exports=n.p+"img/prusa.171aed3.jpg"},254:function(t,e,n){t.exports=n.p+"videos/turret.4134af9.webm"},255:function(t,e,n){t.exports=n.p+"img/fpvdrone.3c81a2d.jpg"},256:function(t,e,n){t.exports=n.p+"img/CAD.26a0012.jpg"},257:function(t,e,n){t.exports=n.p+"img/arcade.a82254b.jpg"},258:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,required:!0},description:{type:String,required:!0},link:{type:String,required:!0},cta:{type:String,required:!1,default:null},ctaLink:{type:String,required:!1,default:null},image:{type:String,required:!0}}},r=n(9),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-start"},[n("nuxt-link",{attrs:{to:"projects/"+t.link}},[n("div",{staticClass:"flex flex-col sm:flex-row bg-white w-auto hover:shadow-md shadow-sm rounded-lg overflow-hidden mb-12 cursor-pointer"},[n("img",{staticClass:"w-auto sm:h-auto sm:w-72",attrs:{alt:t.image,src:"/projects/"+t.image}}),t._v(" "),n("div",{staticClass:"flex flex-col ml-10"},[n("div",{staticClass:"text-xl my-4"},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),n("div",{staticClass:"text-sm mb-4 mr-10 max-w-prose"},[t._v("\n          "+t._s(t.description)+"\n        ")]),t._v(" "),t.cta?n("div",{staticClass:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4 mr-auto"},[n("a",{attrs:{target:"_blank",rel:"noreferrer",href:t.ctaLink},on:{click:function(t){t.stopPropagation()}}},[t._v("\n            "+t._s(t.cta)+"\n          ")])]):t._e()])])])],1)}),[],!1,null,null,null);e.default=component.exports},259:function(t,e,n){"use strict";n.r(e);var o={props:{label:{type:String,required:!0},icon:{type:String,required:!0}}},r=(n(251),n(9)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pl-2 pr-14 py-2 my-2 rounded-lg item cursor-pointer"},[n("img",{staticClass:"h-8 w-auto inline-block",attrs:{src:"/icons/interests/"+t.icon,alt:t.label}}),t._v(" "),n("div",{staticClass:"inline-block ml-3"},[t._v("\n    "+t._s(t.label)+"\n  ")])])}),[],!1,null,"8227f0b8",null);e.default=component.exports},260:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-col lg:flex-row"},[o("p",{staticClass:"mr-5 mb-5"},[t._v("\n    I developed a passion for 3D printing in 2016 when I purchased my first 3D printer to print items I had modelled on my computer in Solidworks CAD. The additive manufacturing format of a 3D printer allows rapid prototyping of any simple of complex design in just hours. I introduced this technology to the NZDF during my time with the NZ Navy.\n    "),o("br"),o("br"),t._v("\n    I'm now the proud owner of two Prusa Mk3S printers, which get heavily used!\n  ")]),t._v(" "),o("img",{staticClass:"w-64 max-h-64 h-auto shadow-lg rounded-md",attrs:{alt:"Prusa Mk3S Printer",src:n(253)}})])}],r={},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o,!1,null,null,null);e.default=component.exports},261:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-col lg:flex-row"},[o("p",{staticClass:"mr-5 mb-5"},[t._v("\n    Since I was young I've always enjoyed pulling apart devices and seeing how they worked. This prompted me to pursue a career an as Electronics Technician in the NZ Navy, where I worked and gained qualifications in the Electrical Engineering field. I still regularly tinker with electronics such as Arduinos and Raspberry Pis, now combined with 3D printing I can build some really cool projects! "),o("br"),o("br"),t._v("Here is an Arduino controlled 3D turret I built using stepper motors in action. This project is clearly still a WIP!\n  ")]),t._v(" "),o("video",{staticClass:"w-60 rounded-md",attrs:{playsinline:"",autoplay:"",loop:""}},[o("source",{attrs:{src:n(254),type:"video/webm"}}),t._v(" "),o("video")])])}],r={},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o,!1,null,null,null);e.default=component.exports},262:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-col lg:flex-row"},[o("p",{staticClass:"mr-5 mb-5"},[t._v("\n    In 2017 I purchased my first racing drone - A 'Wizard X220', capable of flying at up to 130kmh! This became an obsession which lead to me opening my own dedicated racing drone parts business in 2018. KiwiQuads is now NZ's largest FPV drone specialist store."),o("br"),o("br"),t._v("Racing Drone technology moves extremely quickly. New products are released every month which allows the drones to fly faster and with more precision for racing.\n  ")]),t._v(" "),o("img",{staticClass:"w-64 max-h-64 h-auto shadow-lg rounded-md",attrs:{alt:"Racing Drone",src:n(255)}})])}],r={},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o,!1,null,null,null);e.default=component.exports},263:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-col lg:flex-row"},[o("p",{staticClass:"mr-5 mb-5"},[t._v("\n    I began using Solidworks CAD during my studies at Auckland University of Technology (AUT). I continued my learning beyond the basics so that I could build complex designs and use them within my projects. "),o("br"),o("br"),t._v("My most complex projects so far have been the 3D printed electronic turret, and the 3D drone customiser for KiwiQuads. I designed all models within these projects with reference to real life objects.\n  ")]),t._v(" "),o("img",{staticClass:"w-64  max-h-64 h-auto shadow-lg rounded-md",attrs:{alt:"CAD Drawing",src:n(256)}})])}],r={},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o,!1,null,null,null);e.default=component.exports},264:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex flex-col md:flex-row"},[o("p",{staticClass:"mr-5 mb-5"},[t._v("\n    In my spare time, I enjoy playing classic arcade games - the really old ones from the arcades back in the 80s and 90s. For my dad's birthday one year I built him a full-size arcade machine running some custom UI software I wrote with over 3000 MAME games.\n    "),o("br"),o("br"),t._v("\n    The picture to the right is the final product. I sketched and designed the machine in CAD software prior to building. The control panel was laser cut and features graphics I designed, which are inspired from the SNK Neo Geo.\n  ")]),t._v(" "),o("img",{staticClass:"w-64 max-h-64 h-auto shadow-lg rounded-md",attrs:{alt:"Arcade machine",src:n(257)}})])}],r={},l=n(9),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o,!1,null,null,null);e.default=component.exports},265:function(t,e,n){t.exports=n.p+"img/profile.8091eec.jpg"},266:function(t,e,n){"use strict";n(244)},267:function(t,e,n){var o=n(40)((function(i){return i[1]}));o.push([t.i,".bg-darkblue[data-v-06f9fae6]{\n  background-color:#14213d\n}",""]),o.locals={},t.exports=o},268:function(t,e,n){"use strict";n(245)},269:function(t,e,n){var o=n(40)((function(i){return i[1]}));o.push([t.i,".social-icon[data-v-561e2c15]{\n  height:25px;\n  width:auto;\n  display:inline-block;\n  margin-right:5px\n}\n.bg-darkblue[data-v-561e2c15]{\n  background-color:#14213d\n}\n.bg-lightblue[data-v-561e2c15]{\n  background-color:#f2f9ff\n}\n.bg-curve[data-v-561e2c15]{\n  fill:#14213d;\n  stroke:#14213d\n}",""]),o.locals={},t.exports=o},270:function(t,e,n){"use strict";n(246)},271:function(t,e,n){var o=n(40)((function(i){return i[1]}));o.push([t.i,".bg-light-blue[data-v-39cc2821]{\n  background-color:#f2f9ff\n}\n.title[data-v-39cc2821]{\n  color:#49638a;\n  font-weight:700\n}",""]),o.locals={},t.exports=o},272:function(t,e,n){"use strict";n(249)},273:function(t,e,n){var o=n(40),r=n(274),l=n(275),c=o((function(i){return i[1]})),d=r(l);c.push([t.i,".med-blue[data-v-743dd7b6]{\n  background-color:#335480\n}\n.bg-image[data-v-743dd7b6]{\n  background-image:url("+d+");\n  background-size:100%\n}\n@media (min-width:640px){\n.bg-image[data-v-743dd7b6]{\n    background-size:20%\n}\n}\n.title[data-v-743dd7b6]{\n  color:#353f4b;\n  font-weight:700\n}\n.subtitle[data-v-743dd7b6]{\n  margin-bottom:14px\n}\n.exp-list li[data-v-743dd7b6],.subtitle[data-v-743dd7b6]{\n  color:#243453\n}",""]),c.locals={},t.exports=c},274:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},275:function(t,e,n){t.exports=n.p+"img/circuit-board.8b78ce0.svg"},276:function(t,e,n){"use strict";n(250)},277:function(t,e,n){var o=n(40)((function(i){return i[1]}));o.push([t.i,".bg-light-blue[data-v-18b8576f]{\n  background-color:#f2f9ff\n}\n.title[data-v-18b8576f]{\n  color:#49638a;\n  font-weight:700\n}\n.interest-menu[data-v-18b8576f]{\n  background-color:#335480\n}\n.active-menu-item[data-v-18b8576f]{\n  background-color:#254268;\n  box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);\n  box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)\n}",""]),o.locals={},t.exports=o},278:function(t,e,n){"use strict";n.r(e);var o={components:{ChevronDownIcon:n(26).b},data:function(){return{isReadMoreOpen:!1}},methods:{slideDown:function(){var element=this.$refs.readmore;this.isReadMoreOpen?element.style.height=0:element.style.height="".concat(element.scrollHeight,"px"),this.isReadMoreOpen=!this.isReadMoreOpen}}},r=(n(266),n(9)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pb-4 lg:pb-10 bg-darkblue"},[t._m(0),t._v(" "),o("div",{staticClass:"flex justify-center flex-col md:flex-row mx-auto lg:flex-row"},[o("div",{staticClass:"inline-block max-w-xl lg:pt-20 pb-16 px-4 py-8 sm:px-6 lg:px-8"},[o("h2",{staticClass:"text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl",attrs:{id:"about"}},[t._v("\n        Hi, I'm Oliver\n      ")]),t._v(" "),t._m(1),t._v(" "),o("div",{ref:"readmore",staticClass:"transition-height duration-300 ease-out overflow-hidden h-0"},[t._m(2)]),t._v(" "),o("div",{staticClass:"mt-3 text-xl text-gray-300 underline cursor-pointer",on:{click:function(e){return t.slideDown()}}},[t._v("\n        "+t._s(t.isReadMoreOpen?"Read less":"Read more")+"\n      ")])]),t._v(" "),o("img",{staticClass:"mt-8 lg:mt-24 lg:h-80 lg:w-80 w-52 h-52 mx-auto lg:mx-20  rounded-full ring-4 ring-gray-600 ring-opacity-50",attrs:{src:n(265),alt:""}})]),t._v(" "),o("a",{staticClass:"pointer-cursor w-10 mx-auto block",attrs:{href:"#skills"}},[o("ChevronDownIcon",{staticClass:"text-white text-xl mx-auto h-8 w-8 mt-8"})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-4 right-4 space-x-3 hidden sm:inline absolute"},[n("a",{attrs:{href:"https://github.com/olinoles",target:"_blank"}},[n("img",{staticClass:"inline-block h-8 w-auto hover:scale-110 transform duration-75 cursor-pointer opacity-70 hover:opacity-100",attrs:{alt:"Github",src:"/icons/github.svg"}})]),t._v(" "),n("a",{attrs:{href:"https://www.linkedin.com/in/oliver-noles-2390a8178/",target:"_blank"}},[n("img",{staticClass:"inline-block h-8 w-auto hover:scale-110 transform duration-75 cursor-pointer opacity-70 hover:opacity-100",attrs:{alt:"LinkedIn",src:"/icons/linkedin.svg"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"mt-6 max-w-3xl text-xl text-gray-300"},[t._v("\n        I'm an Auckland-based tech enthusiast experienced in web technologies, creative projects, and UI design.\n        "),n("br"),n("br"),t._v("\n        I am most interested in full-stack development and enjoy working with both front-end and back-end tools. Outside of webdev, I enjoy hobbies that involve robotics and electronics, including 3D printing, building FPV Drones and CAD design.\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"mt-6 max-w-3xl text-xl text-gray-300"},[t._v("\n          My favourite projects currently involve developing clean and functional front-end software, but I'm not afraid of working on back-end applications either. My philosophy towards coding is "),n("i",[t._v("the right tool for the job")]),t._v(". Having a strong passion for learning new tools allows me to solve problems efficiently."),n("br"),n("br"),t._v("When I'm not working on projects I love to socialise with board games, try new craft beers, and travel.\n        ")])}],!1,null,"06f9fae6",null);e.default=component.exports},279:function(t,e,n){"use strict";n.r(e);var o=n(26),r={components:{MailIcon:o.g,LinkIcon:o.f,UsersIcon:o.i,CodeIcon:o.e}},l=(n(268),n(9)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-lightblue"},[n("svg",{staticClass:"bg-curve h-16 sm:h-32 -mb-px",attrs:{id:"curveUpColor",xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"100%",height:"100",viewBox:"0 0 100 100",preserveAspectRatio:"none"}},[n("path",{attrs:{"stroke-width":"6",d:"M 0 100 C 51 93 51 6 100 100 Z"}})]),t._v(" "),n("div",{staticClass:"pb-12 bg-darkblue bg-image mx-auto p-5 w-full overflow-hidden"},[n("div",{staticClass:"mx-auto my-5 max-w-5xl relative lg:pl-6"},[n("div",{staticClass:"flex flex-col sm:flex-row"},[t._m(0),t._v(" "),n("div",{staticClass:"ml-5"},[n("ul",{staticClass:"list-none space-y-4"},[n("li",{staticClass:"text-white text-2xl"},[n("MailIcon",{staticClass:"social-icon"}),t._v(" "),n("a",{attrs:{el:"noreferrer",target:"_blank",href:"mailto:oliver@noles.nz"}},[t._v("oliver@noles.nz")])],1),t._v(" "),n("li",{staticClass:"text-white text-2xl"},[n("CodeIcon",{staticClass:"social-icon"}),t._v(" "),n("a",{attrs:{rel:"noreferrer",target:"_blank",href:"https://www.github.com/olinoles"}},[t._v("On Github")])],1),t._v(" "),n("li",{staticClass:"text-white text-2xl"},[n("LinkIcon",{staticClass:"social-icon"}),t._v(" "),n("a",{attrs:{rel:"noreferrer",target:"_blank",href:"https://www.linkedin.com/in/oliver-noles-2390a8178/"}},[t._v("On LinkedIn")])],1),t._v(" "),n("li",{staticClass:"text-white text-2xl"},[n("UsersIcon",{staticClass:"social-icon"}),t._v(" "),n("a",{attrs:{rel:"noreferrer",target:"_blank",href:"https://www.facebook.com/oliver.noles/"}},[t._v("On Facebook")])],1)])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sm:mr-24 md:mr-56"},[n("h2",{staticClass:"font-bold text-white mb-10 mt-5 text-3xl sm:text-4xl",attrs:{id:"contact"}},[t._v("\n            Let's work together!\n          ")]),t._v(" "),n("h3",{staticClass:"font-bold text-gray-200 mb-10 text-xl lg:text-2xl"},[t._v("\n            Have a project you'd like to discuss?\n          ")])])}],!1,null,"561e2c15",null);e.default=component.exports},280:function(t,e,n){"use strict";n.r(e);var o={components:{ProjectSummary:n(258).default}},r=(n(270),n(9)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pb-10 bg-light-blue lg:pt-20 bg-image mx-auto p-5 w-full"},[n("div",{staticClass:"mx-auto my-5 max-w-5xl relative lg:pl-6"},[n("h2",{staticClass:"title mb-10 text-2xl lg:text-4xl",attrs:{id:"projects"}},[t._v("\n        Featured Projects\n      ")]),t._v(" "),n("ProjectSummary",{attrs:{title:"ASColour Colourmatic Critic",cta:"Watch Video","cta-link":"https://vimeo.com/312834441",description:"This creative project for ASColour used a camera and visuals to recommend t-shirts to customers. The display was featured outside the Customs Street store in Auckland CBD.",link:"ascolour",image:"ascolour.png"}}),t._v(" "),n("ProjectSummary",{attrs:{title:"KiwiQuads 3D Drone Customiser",cta:"Live Site","cta-link":"https://kiwiquads.co.nz/customiser",description:"A 3D drone customiser tool built for KiwiQuads allows real-time customisation of a drone to visualise different components and colours.\nBuilt using Babylon.js framework and React.",link:"customiser",image:"customiser.jpg"}}),t._v(" "),n("ProjectSummary",{attrs:{title:"KiwiQuads Order Dispatch System",description:"KiwiQuads needed a dispatching system to handle a large quantity of orders efficiently. I built this web application to combine order picking with the NZ Post API for shipping.",link:"dispatch",image:"dispatch.jpg"}})],1)])}),[],!1,null,"39cc2821",null);e.default=component.exports},281:function(t,e,n){var content=n(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("bad8e090",content,!0,{sourceMap:!1})},282:function(t,e,n){"use strict";n.r(e);var o={components:{ToolIcon:n(243).default}},r=(n(272),n(9)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pb-12 lg:pb-24 med-blue lg:pt-20 bg-image mx-auto p-5 w-full overflow-hidden"},[n("div",{staticClass:"mx-auto my-5 max-w-5xl relative"},[n("div",{staticClass:"bg-white shadow-xl rounded-lg"},[n("div",{staticClass:"px-4 py-5 sm:px-6"},[n("h2",{staticClass:"title mb-4 text-2xl lg:text-4xl",attrs:{id:"skills"}},[t._v("\n          Skills & Experience\n        ")]),t._v(" "),n("div",{staticClass:"flex flex-col lg:flex-row"},[n("div",{staticClass:"flex-grow max-w-lg"},[n("h3",{staticClass:"subtitle text-xl lg:text-3xl"},[t._v("\n              Technologies and tools I use\n            ")]),t._v(" "),n("div",{staticClass:"grid grid-cols-3 sm:grid-cols-4 mr-10"},[n("ToolIcon",{attrs:{label:"HTML5",icon:"html.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Javascript ES6",icon:"js.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"CSS",icon:"css.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"GraphQL",icon:"graphql.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Nuxt JS",icon:"nuxt.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Visual Studio C#",icon:"visualstudio.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Wordpress",icon:"wordpress.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Git",icon:"git.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Vue JS",icon:"vuejs.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Adobe Illustrator",icon:"illustrator.png"}}),t._v(" "),n("ToolIcon",{attrs:{label:"Adobe Photoshop",icon:"photoshop.png"}})],1)]),t._v(" "),t._m(0)])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-grow lg:border-l lg:pl-10 max-w-xl"},[n("h3",{staticClass:"subtitle mt-10 lg:mt-0 text-xl lg:text-3xl"},[t._v("\n              I am experienced in\n            ")]),t._v(" "),n("ul",{staticClass:"list-disc list-outside ml-5 leading-6 exp-list space-y-3"},[n("li",[t._v("Developing "),n("b",[t._v("full-stack applications")]),t._v(" using modern javascript frameworks")]),t._v(" "),n("li",[t._v("Developing with "),n("b",[t._v("Wordpress")]),t._v(" CMS and "),n("b",[t._v("WooCommerce")])]),t._v(" "),n("li",[t._v("Building "),n("b",[t._v("Visual Studio C#")]),t._v(" desktop applications")]),t._v(" "),n("li",[t._v("Integrating web & desktop applications with "),n("b",[t._v("RESTful API services")])]),t._v(" "),n("li",[t._v("Vector creation in "),n("b",[t._v("Adobe Illustrator")])]),t._v(" "),n("li",[t._v("Photo manipulation & colour correction in "),n("b",[t._v("Adobe Photoshop")])]),t._v(" "),n("li",[t._v("Code & project management using "),n("b",[t._v("Git")])]),t._v(" "),n("li",[t._v("Website performance analysis using "),n("b",[t._v("Google Analytics")])]),t._v(" "),n("li",[t._v("Marketing automation in "),n("b",[t._v("Klaviyo")]),t._v(" & "),n("b",[t._v("Facebook Ads Manager")])]),t._v(" "),n("ul")])])}],!1,null,"743dd7b6",null);e.default=component.exports;installComponents(component,{ToolIcon:n(243).default})},283:function(t,e,n){"use strict";n.r(e);var o=n(26),r={components:{ChevronLeftIcon:o.c,ChevronRightIcon:o.d},data:function(){return{selectedID:0,interests:[{id:0,label:"3D Printing",icon:"3dprinter.svg"},{id:1,label:"Electronics",icon:"electronics.svg"},{id:2,label:"FPV Racing Drones",icon:"drone.svg"},{id:3,label:"CAD Modelling",icon:"cad.svg"},{id:4,label:"Arcade Machines",icon:"joystick.svg"}]}},methods:{selectInterest:function(t){this.selectedID=t},cycleInterests:function(t){this.selectedID+=t,this.selectedID<0?this.selectedID=this.interests.length-1:this.selectedID>this.interests.length-1&&(this.selectedID=0)}}},l=(n(276),n(9)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pb-16 bg-light-blue bg-image mx-auto p-5 w-full overflow-hidden"},[n("div",{staticClass:"mx-auto my-5 max-w-5xl relative lg:pl-6"},[n("h2",{staticClass:"title mb-10 text-2xl lg:text-4xl",attrs:{id:"interests"}},[t._v("\n      Interests\n    ")]),t._v(" "),n("div",{staticClass:"bg-white w-auto shadow-sm rounded-lg mb-8"},[n("div",{staticClass:"flex flex-col sm:flex-row"},[n("div",{staticClass:"interest-menu rounded-b-none sm:rounded-r-none rounded-lg sm:rounded-lg last sm:pb-24 flex-shrink-0"},[n("div",{staticClass:"text-white p-2 pr-2"},t._l(t.interests,(function(e){return n("InterestsMenuItem",{key:"item-"+e.id,class:t.selectedID===e.id?"active-menu-item":null,attrs:{label:e.label,icon:e.icon},nativeOn:{click:function(n){return t.selectInterest(e.id)}}})})),1)]),t._v(" "),n("div",{staticClass:"p-5"},[n("h3",{staticClass:"text-3xl mb-4"},[t._v("\n            "+t._s(t.interests[t.selectedID].label)+"\n          ")]),t._v(" "),0==t.selectedID?n("Interests3DPrinting"):t._e(),t._v(" "),1==t.selectedID?n("InterestsElectronics"):t._e(),t._v(" "),2==t.selectedID?n("InterestsFPVRacingDrones"):t._e(),t._v(" "),3==t.selectedID?n("InterestsCAD"):t._e(),t._v(" "),4==t.selectedID?n("InterestsArcadeMachines"):t._e()],1)])]),t._v(" "),n("div",{staticClass:"m-3 mt-6 cursor-pointer sm:hidden",attrs:{id:"interests-nav"}},[n("ChevronLeftIcon",{staticClass:"inline-block w-10 mr-2 h-auto bg-gray-200 text-gray-600 active:bg-gray-300 rounded-md",on:{click:function(e){return t.cycleInterests(-1)}}}),t._v(" "),n("ChevronRightIcon",{staticClass:"inline-block w-10 ml-2 h-auto bg-gray-200 text-gray-600 active:bg-gray-300 rounded-md",on:{click:function(e){return t.cycleInterests(1)}}})],1)])])}),[],!1,null,"18b8576f",null);e.default=component.exports;installComponents(component,{InterestsMenuItem:n(259).default,Interests3DPrinting:n(260).default,InterestsElectronics:n(261).default,InterestsFPVRacingDrones:n(262).default,InterestsCAD:n(263).default,InterestsArcadeMachines:n(264).default})},284:function(t,e,n){"use strict";n(281)},285:function(t,e,n){var o=n(40)((function(i){return i[1]}));o.push([t.i,'h2:before{\n  display:block;\n  content:" ";\n  margin-top:-150px;\n  height:150px;\n  visibility:hidden;\n  pointer-events:none\n}',""]),o.locals={},t.exports=o},286:function(t,e,n){"use strict";n.r(e);var o=n(278),r=n(279),l=n(280),c={components:{About:o.default,Projects:l.default,Contact:r.default},head:function(){return{title:"Oliver Noles",description:"Oliver Noles Portfolio. Full-stack web developer."}}},d=(n(284),n(9)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("about"),t._v(" "),n("skills"),t._v(" "),n("projects"),t._v(" "),n("interests"),t._v(" "),n("contact")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{About:n(278).default,Skills:n(282).default,Projects:n(280).default,Interests:n(283).default,Contact:n(279).default})}}]);