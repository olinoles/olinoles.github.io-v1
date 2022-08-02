(window.webpackJsonp=window.webpackJsonp||[]).push([[16,10],{302:function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},305:function(e,t,n){"use strict";n.r(t);var o={props:{src:{type:String,required:!0}},data:function(){return{isLightboxOpen:!1}}},r=n(10),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("img",{staticClass:"cursor-pointer w-full h-auto mx-auto",attrs:{src:e.src},on:{click:function(t){e.isLightboxOpen=!0}}}),e._v(" "),e.isLightboxOpen?t("div",{staticClass:"z-50 h-screen w-screen flex fixed top-0 left-0",on:{click:function(t){e.isLightboxOpen=!1}}},[t("div",{staticClass:"fixed top-0 left-0 bg-gray-800 h-full w-full opacity-80"}),e._v(" "),t("img",{staticClass:"z-50 m-auto p-10 shadow-md max-h-screen",attrs:{src:e.src}})]):e._e()])}),[],!1,null,null,null);t.default=component.exports},340:function(e,t,n){var content=n(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(45).default)("6cb46b3d",content,!0,{sourceMap:!1})},346:function(e,t,n){e.exports=n.p+"img/colourmatic-logo.bf6ee92.jpg"},347:function(e,t,n){e.exports=n.p+"img/kinect.18a1857.jpg"},348:function(e,t,n){"use strict";n(340)},349:function(e,t,n){var o=n(44),r=n(302),c=n(350),l=o((function(i){return i[1]})),d=r(c);l.push([e.i,"/*purgecss start ignore*/\n#header-bg[data-v-34c045d4]{\n  background-image:linear-gradient(180deg,rgba(0,0,0,.768),hsla(0,0%,49.4%,.494)),url("+d+");\n  background-size:100%;\n  background-position:50%;\n  background-repeat:no-repeat\n}\n#content p[data-v-34c045d4],#summary p[data-v-34c045d4]{\n  font-size:1.25rem;\n  line-height:1.75rem\n}\n#content h3[data-v-34c045d4],#summary h3[data-v-34c045d4]{\n  font-size:1.24rem;\n  line-height:1.75rem;\n  font-weight:600;\n  margin-top:1.25rem;\n  margin-bottom:.75rem\n}\n#summary h3[data-v-34c045d4]{\n  text-transform:uppercase\n}\n.iframe-container[data-v-34c045d4]{\n  overflow:hidden;\n  padding-top:56.25%;\n  position:relative\n}\n.iframe-container iframe[data-v-34c045d4]{\n  border:0;\n  height:100%;\n  left:0;\n  position:absolute;\n  top:0;\n  width:100%\n}\np a[data-v-34c045d4]{\n  color:#ff4500\n}\np[data-v-34c045d4]{\n  color:#141b29\n}\nh3[data-v-34c045d4]{\n  color:#272b35\n}\n\n/*purgecss end ignore*/",""]),l.locals={},e.exports=l},350:function(e,t,n){e.exports=n.p+"img/colourmatic-1.52d2498.jpg"},361:function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex-shrink-0 border-b-2 mx-5 sm:mx-0 sm:border-b-0 sm:border-r-2 border-gray-300 pr-10 pl-5 sm:pl-10 pb-5 sm:py-5",attrs:{id:"summary"}},[t("img",{staticClass:"w-48 h-auto mb-12 hidden sm:block",attrs:{src:n(346)}}),e._v(" "),t("h3",[e._v("\n        Case Study\n      ")]),e._v(" "),t("p",[e._v("AS Colourmatic")]),e._v(" "),t("p",[e._v("AS Colour, Auckland")]),e._v(" "),t("h3",[e._v("\n        Type\n      ")]),e._v(" "),t("p",[e._v("Interactive Display")]),e._v(" "),t("h3",[e._v("\n        Languages used\n      ")]),e._v(" "),t("p",[e._v("Visual Studio C#")]),e._v(" "),t("p",[e._v("Adobe ActionScript")])])},function(){var e=this._self._c;return e("div",{staticClass:"iframe-container my-5 sm:my-3"},[e("iframe",{attrs:{id:"iframe2",src:"https://player.vimeo.com/video/312834441",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture"}})])},function(){var e=this,t=e._self._c;return t("p",[e._v("\n        I was chosen to work on this project for my experience using Adobe Animate and ActionScript. I worked closely with another developer to build a front and back-end system that would provide a fun experience for the users.\n        "),t("br"),t("br"),e._v("\n        I was responsible for the developing the user-friendly front-end application and integrating it with our C# Kinect application running behind the scenes.\n      ")])},function(){var e=this,t=e._self._c;return t("p",[t("img",{staticClass:"w-full h-auto sm:w-auto sm:h-44 sm:m-5 sm:mr-0",attrs:{align:"right",src:n(347)}}),e._v("\n        The Colourmatic project uses the Xbox Kinect sensor along with the "),t("a",{attrs:{href:"https://www.microsoft.com/en-nz/download/details.aspx?id=40278",target:"_blank",rel:"noreferrer"}},[e._v("Kinect SDK")]),e._v(" to track users and build a colour profile from the RGB camera on-board. We wrote an algorithm to take the colour average of the user's t-shirt, match it to a known hue, then use design patterns to provide a complimentary colour. The processing is done in the background C# application, which relays information to the front-end built in Adobe Animate in real-time. We built event handlers in the front-end which advance the animations and communicate information when called.\n      ")])},function(){var e=this,t=e._self._c;return t("p",[e._v("\n        The first difficult challenge we ran into with this project was the integration of two very different technologies - a Visual Studio C# application and Adobe ActionScript. An unusual duo chosen due for their strengths in functionality and animations. The front-end and back-end applications needed to communicate their states with each other to provide a seamless experience for the user. We achieved this by integrating the front-end animations in a C# form which used event handlers to communicate.\n        "),t("br"),t("br"),e._v("\n        The second challenge we experienced was the difficulty in accurately isolating the users t-shirt colour, to provide them their complimentary colour and recommendation. The outdoor lighting on the street also made it difficult for the camera to see colour on the user's clothing. We overcame this by building filters which compensate for the overall image lighting and enhanced saturation and brightness of the subject. The t-shirt colour was isolated by taking an average colour of the space surrounding the Kinect skeleton.\n      ")])}],r={layout:"project",head:function(){return{title:"Oliver Noles - AS Colourmatic",description:"Oliver Noles Portfolio. AS Colourmatic Project"}}},c=(n(348),n(10)),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"select-none max-w-5xl mx-auto h-32 sm:h-56 object-cover bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white text-4xl sm:text-5xl font-semibold pl-10 flex items-center",attrs:{id:"header-bg"}},[e._v("\n    AS COLOURMATIC\n  ")]),e._v(" "),t("div",{staticClass:"flex flex-col sm:flex-row mx-auto my-5 max-w-5xl relative"},[e._m(0),e._v(" "),t("article",{staticClass:"px-10 pb-5",attrs:{id:"content"}},[t("h3",[e._v("\n        Goal\n      ")]),e._v(" "),t("p",[e._v("\n        To produce a fun and interactive display to inspire customers to make new clothing choices.\n      ")]),e._v(" "),t("h3",[e._v("\n        What is the AS Colourmatic?\n      ")]),e._v(" "),e._m(1),e._v(" "),t("p",[e._v("\n        The above video describes this project really well, but in case you can't watch it: The AS Colourmatic is an interactive storefront display designed to analyse the user's clothing colour choices and prescribe them a complimentary 'better colour'.\n      ")]),e._v(" "),t("h3",[e._v("\n        My Experience\n      ")]),e._v(" "),e._m(2),e._v(" "),t("h3",[e._v("\n        Technical Specifications\n      ")]),e._v(" "),e._m(3),e._v(" "),t("LightboxImage",{staticClass:"py-5 w-full h-auto",attrs:{src:"images/colourmatic-2.jpg"}}),e._v(" "),t("p",{staticClass:"text-center mb-5 italic",staticStyle:{"font-size":"1rem"}},[e._v("\n        Users are presented with a 'Colour score' at the end of their turn\n      ")]),e._v(" "),t("h3",[e._v("\n        Challenges\n      ")]),e._v(" "),e._m(4),e._v(" "),t("h3",[e._v("\n        Conclusion\n      ")]),e._v(" "),t("p",[e._v("\n        I had a great time working with a new team on this project and learnt a lot during the development. AS Colour was a great brand to develop this project for and gave us a lot of creative freedom in the final product.\n      ")]),e._v(" "),t("LightboxImage",{staticClass:"py-5 w-full h-auto",attrs:{src:"images/colourmatic-3.jpg"}}),e._v(" "),t("p",{staticClass:"text-center mb-5 italic",staticStyle:{"font-size":"1rem"}},[e._v("\n        A customer using the display in front of the shop window\n      ")])],1)])])}),o,!1,null,"34c045d4",null);t.default=component.exports;installComponents(component,{LightboxImage:n(305).default})}}]);