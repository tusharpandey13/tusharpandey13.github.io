(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[661],{8849:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=n(5697)},function(e,t){e.exports=n(7294)},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=0,s=r.forwardRef((function(e,t){var n=e.title,o=void 0===n?null:n,s=e.description,l=void 0===s?null:s,c=e.size,u=void 0===c?null:c,p=e.color,d=void 0===p?"currentColor":p,h=e.horizontal,f=void 0===h?null:h,m=e.vertical,g=void 0===m?null:m,b=e.rotate,v=void 0===b?null:b,y=e.spin,w=void 0===y?null:y,k=e.style,S=void 0===k?{}:k,O=e.children,x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["title","description","size","color","horizontal","vertical","rotate","spin","style","children"]);a++;var j,P=null!==w&&w,_=r.Children.map(O,(function(e){var t=e;!0!==P&&(P=!0===(null===w?t.props.spin:w));var n=t.props.size;"number"==typeof u&&"number"==typeof t.props.size&&(n=t.props.size/u);var o={size:n,color:null===d?t.props.color:d,horizontal:null===f?t.props.horizontal:f,vertical:null===g?t.props.vertical:g,rotate:null===v?t.props.rotate:v,spin:null===w?t.props.spin:w,inStack:!0};return r.cloneElement(t,o)}));null!==u&&(S.width="string"==typeof u?u:1.5*u+"rem");var E,N="stack_labelledby_"+a,z="stack_describedby_"+a;if(o)j=l?N+" "+z:N;else if(E="presentation",l)throw new Error("title attribute required when description is set");return r.createElement("svg",i({ref:t,viewBox:"0 0 24 24",style:S,role:E,"aria-labelledby":j},x),o&&r.createElement("title",{id:N},o),l&&r.createElement("desc",{id:z},l),P&&r.createElement("style",null,"@keyframes spin { to { transform: rotate(360deg) } }","@keyframes spin-inverse { to { transform: rotate(-360deg) } }"),_)}));s.displayName="Stack",s.propTypes={size:o.oneOfType([o.number,o.string]),color:o.string,horizontal:o.bool,vertical:o.bool,rotate:o.number,spin:o.oneOfType([o.bool,o.number]),children:o.oneOfType([o.arrayOf(o.node),o.node]).isRequired,className:o.string,style:o.object},s.defaultProps={size:null,color:null,horizontal:null,vertical:null,rotate:null,spin:null};var l=s;n.d(t,"Icon",(function(){return p})),n.d(t,"Stack",(function(){return l}));var c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=0,p=r.forwardRef((function(e,t){var n=e.path,o=e.id,i=void 0===o?++u:o,a=e.title,s=void 0===a?null:a,l=e.description,p=void 0===l?null:l,d=e.size,h=void 0===d?null:d,f=e.color,m=void 0===f?"currentColor":f,g=e.horizontal,b=void 0!==g&&g,v=e.vertical,y=void 0!==v&&v,w=e.rotate,k=void 0===w?0:w,S=e.spin,O=void 0!==S&&S,x=e.style,j=void 0===x?{}:x,P=e.inStack,_=void 0!==P&&P,E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["path","id","title","description","size","color","horizontal","vertical","rotate","spin","style","inStack"]),N={},z=[];null!==h&&(_?z.push("scale("+h+")"):(j.width="string"==typeof h?h:1.5*h+"rem",j.height=j.width)),b&&z.push("scaleX(-1)"),y&&z.push("scaleY(-1)"),0!==k&&z.push("rotate("+k+"deg)"),null!==m&&(N.fill=m);var I=r.createElement("path",c({d:n,style:N},_?E:{})),T=I;z.length>0&&(j.transform=z.join(" "),j.transformOrigin="center",_&&(T=r.createElement("g",{style:j},I,r.createElement("rect",{width:"24",height:"24",fill:"transparent"}))));var R,A=T,M=!0===O||"number"!=typeof O?2:O,J=!_&&(b||y);if(M<0&&(J=!J),O&&(A=r.createElement("g",{style:{animation:"spin"+(J?"-inverse":"")+" linear "+Math.abs(M)+"s infinite",transformOrigin:"center"}},T,!(b||y||0!==k)&&r.createElement("rect",{width:"24",height:"24",fill:"transparent"}))),_)return A;var B,C="icon_labelledby_"+i,L="icon_describedby_"+i;if(s)R=p?C+" "+L:C;else if(B="presentation",p)throw new Error("title attribute required when description is set");return r.createElement("svg",c({ref:t,viewBox:"0 0 24 24",style:j,role:B,"aria-labelledby":R},E),s&&r.createElement("title",{id:C},s),p&&r.createElement("desc",{id:L},p),!_&&O&&(J?r.createElement("style",null,"@keyframes spin-inverse { to { transform: rotate(-360deg) } }"):r.createElement("style",null,"@keyframes spin { to { transform: rotate(360deg) } }")),A)}));p.displayName="Icon",p.propTypes={path:o.string.isRequired,size:o.oneOfType([o.number,o.string]),color:o.string,horizontal:o.bool,vertical:o.bool,rotate:o.number,spin:o.oneOfType([o.bool,o.number]),style:o.object,inStack:o.bool,className:o.string},p.defaultProps={size:null,color:"currentColor",horizontal:!1,vertical:!1,rotate:0,spin:!1},t.default=p}])},6086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},5377:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(8849),i=n.n(o),a=n(5317),s=n(1154);t.default=function(e){return(0,r.jsxs)("div",{className:"flex justify-end text gap-4",children:[(0,r.jsx)("a",{href:s.Ok.linkedin,target:"blank",children:(0,r.jsx)("span",{className:"flex gap-contentgap hover:text-blue-900 items-center",children:(0,r.jsx)(i(),{path:a.rbi,title:"Linkedin",size:1.5})})}),(0,r.jsx)("a",{href:s.Ok.github,target:"blank",children:(0,r.jsx)("span",{className:"flex gap-contentgap hover:text-blue-900 items-center",children:(0,r.jsx)(i(),{path:a.LcO,title:"Github",size:1.5})})}),(0,r.jsx)("a",{href:s.Ok.email,target:"blank",children:(0,r.jsx)("span",{className:"flex gap-contentgap hover:text-blue-900 items-center",children:(0,r.jsx)(i(),{path:a.XH8,title:"Email",size:1.5})})}),(0,r.jsx)("a",{href:s.Ok.twitter,target:"blank",children:(0,r.jsx)("span",{className:"flex gap-contentgap hover:text-blue-900 items-center",children:(0,r.jsx)(i(),{path:a.SGh,title:"Twitter",size:1.5})})})]})}},1154:function(e,t,n){"use strict";n.d(t,{b8:function(){return o},q:function(){return i},wn:function(){return a},Ok:function(){return s}});var r=n(1754),o=r.experience,i=r.projects,a=r.aboutme,s=r.links},7487:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/SocialLinks",function(){return n(5377)}])},1754:function(e){"use strict";e.exports=JSON.parse('{"aboutme":{"title":"about me","content":"I am a CSE undergrad at BMSIT&M, Bangalore, batch of 2022. I live in Bangalore, India. I like to work with TS, JS and it\'s various frameworks. Python is my 2nd language of choice. This website shows my contact details, past experience along with some of the projects that I have worked on."},"experience":{"title":"experience","items":[{"title":{"content":"DAPHNIS LABS"},"role":"Full Stack Intern","time":"07/2020 \u2013 08/2020","items":["Developed Production Ready APIs and Admin Panels","Service handles thousands of live users","Worked with Selenium, AWS, PostgreSQL, NodeJS"]},{"title":{"content":"IBM (GRM)"},"role":"Research Intern","time":"04/2020 \u2013 07/2020","items":["Developed RESTful APIs for Industrial scale ML Pipeline","Automated cleaning & transormation of raw data","Visualized change in accuracy of data after transformation on standard models"]},{"title":{"content":"URBANSTOP STUDIOS"},"role":"Backend Intern","time":"11/2019 \u2013 12/2019","items":["Deployed RESTful APIs on the Firebase ecosystem","Learned skills like time management and being a team player"]}]},"projects":{"title":"projects","items":[{"title":{"content":"Workout Assistance using Pose Estimation & CNNs","url":"https://github.com/tusharpandey13/pose_cnn_workout_assistance"},"tags":["Keras","TensorFlow","MediaPipe","Python"],"content":"A workout assistant that counts the reps of various workouts in realtime using pose-estimation. A convolutional neural network is trained on pose data of selected workouts in their respective end-states. It is used to classify pose data from live webcam feed and thus, count individual reps."},{"title":{"content":"express-mongosoe-boilerplate","url":"https://github.com/tusharpandey13/express-mongoose-boilerplate"},"tags":["NodeJS","ExpressJS","MongoDB","Redis","Boilerplate","ES6"],"content":"A clean, opinionated NodeJS server boilerplate that uses ExpressJS as server backend, MongoDB as document store and Redis as session store. Features \u200bThree-layer architecture\u200b, extensive logging capabilities, \u200bmulti-agent authentication support\u200b, simplified configuration, \u200bSocket.IO support\u200b and \u200bmodular design."},{"title":{"content":"Graph pathfinding on the London Metro","url":"https://github.com/tusharpandey13/dijkstra_london_tube"},"tags":["Pandas","Flask","P5.JS","Dijkstra","Graph"],"content":"An interactive visualisation for using \u200bDijkstra\'s algorithm\u200b to find the shortest path between stations in the London underground. Made using HTML5, CSS for frontend and a Flask server written in Python for backend."},{"title":{"content":"Titanic survival prediction","url":"https://colab.research.google.com/drive/101I_iZYOSyKWZ8mdVoeLOAcFyFMjuNx2#scrollTo=cMLDx-337Rm7"},"tags":["Keras","Pandas","Numpy"],"content":"Worked on the titanic dataset to predict survival of passengers. Employed data cleaning, pre-processing, imputation, feature engineering and vizualization on the standard titanic dataset availiable on Kaggle and predicted the survival of female passengers with an accuracy of 86%."},{"title":{"content":"Handwriter","url":"https://github.com/tusharpandey13/HandWriter"},"tags":["React","KonvaJS","React-hooks"],"content":"An interactive tool to easily convert digital text into handwriting by using the HTML canvas element. The project was made using ReactJS. Used \u200bReact Hooks\u200b for state management and component lifecycle management."}],"unneeded":[{"title":{"content":"totoro-node","url":"https://github.com/VGJohn/totoro"},"tags":["npm","package","NodeJS","ExpressJS"],"content":"Node.js API Versioning Helper Module"},{"title":{"content":"portfolio-site","url":"https://github.com/tusharpandey13/portfolio-site"},"tags":["ReactJS","NodeJS","SCSS","Create-React-App","gh-pages"],"content":"My portfolio website source created in React and SCSS"},{"title":{"content":"Webrtc OpenCV.JS Demo","url":"https://github.com/tusharpandey13/webrtc_opencvjs_demo"},"tags":["Python","Flask","OpenCV","JS"],"content":"Using opencv.js with webrtc to detect faces"},{"title":{"content":"Interesting Wikis Bot","url":"https://github.com/tusharpandey13/interestingwikisbot"},"tags":["Python","Bot","Twitter","Wikipedia","Reddit"],"content":"A twitter bot made in python that tweets the top post(sorted by hot) on /r/wikipedia every 30 mins"}]},"talks":{"title":"talks and seminars","items":[{"title":{"content":"Web APIs and JSON","url":"https://www.youtube.com/watch?v=AV-491rIPxg"},"role":"Youtube","time":"Jun 23, 2020"},{"title":{"content":"Introduction to Open Source"},"time":"Nov 9, 2020"}]},"links":{"github":"https://github.com/tusharpandey13","linkedin":"https://www.linkedin.com/in/tusharpandey13","email":"mailto:tusharpandey13@gmail.com","resume":"https://drive.google.com/file/d/1ONg_BqQdhxrio_w6m5kY6WQbgDaWiPIR/view?usp=sharing","twitter":"https://twitter.com/_tusharpandey13/","ig":"https://www.instagram.com/tusharpandey13/"}}')}},function(e){e.O(0,[774,702],(function(){return t=7487,e(e.s=t);var t}));var t=e.O();_N_E=t}]);