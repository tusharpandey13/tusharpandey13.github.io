(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[531],{18:function(t,e,n){"use strict";function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function a(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,{Z:function(){return a}})},6086:function(t){"use strict";var e=Object.assign.bind(Object);t.exports=e,t.exports.default=t.exports},6552:function(t,e,n){"use strict";n.r(e);var o=n(18),a=n(5893);e.default=function(t){var e,n,i=null!==(e=t.colWidth)&&void 0!==e?e:355;return(0,a.jsxs)("div",{className:"flex flex-col flex-nowrap tracking-[1px] font-basefont gap-contentgap\n                  transform-gpu transition-all opacity-0 ".concat(t.colId),style:{width:"".concat(null!==(n=t.width)&&void 0!==n?n:355,"px")},children:[t.image,t.imgId&&(0,a.jsx)("div",{className:"overflow-hidden",children:(0,a.jsxs)("picture",{children:[t.avif&&(0,a.jsx)("source",{srcSet:"/img/".concat(t.imgId,".avif"),type:"image/avif"}),t.webp&&(0,a.jsx)("source",{srcSet:"/img/".concat(t.imgId,".webp"),type:"image/webp"}),(0,a.jsx)("img",{className:"transition-all duration-500 ease-customtf transform bg-center bg-cover \n                          scale-105 hover:scale-100",width:i,height:9/16*i,decoding:"async",loading:"lazy",src:"/img/".concat(t.imgId,".jpg"),alt:"Me"})]})}),t.title&&(0,a.jsxs)("div",{className:"flex content-center items-center justify-between",children:[(0,a.jsx)("span",{className:"uppercase text-[14px] font-medium text-[#333] mt-[5px]",children:t.title}),(0,a.jsx)("span",{className:"text-gray",children:[" "," "].concat((0,o.Z)(Array(42-t.title.length))).map((function(t,e){return(0,a.jsx)("span",{children:"-"},"dash".concat(e))}))})]}),t.description&&(0,a.jsx)("p",{className:"text-[12px] font-normal leading-[180%] select-text text-[rgba(0,0,0,0.85)] font-contentfont",children:t.description}),(0,a.jsx)("div",{className:"flex flex-col gap-contentgap select-text",children:t.elements})]})}},6628:function(t,e,n){"use strict";n.r(e);var o=n(5893),a=n(6552),i=n(1154);e.default=function(t){return(0,o.jsx)(a.default,{colId:"animate-fadeInLeft1",imgId:"face",avif:!0,webp:!0,title:i.wn.title,description:i.wn.content})}},1154:function(t,e,n){"use strict";n.d(e,{b8:function(){return a},q:function(){return i},wn:function(){return s},Ok:function(){return r}});var o=n(1754),a=o.experience,i=o.projects,s=o.aboutme,r=o.links},2758:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Column1",function(){return n(6628)}])},1754:function(t){"use strict";t.exports=JSON.parse('{"aboutme":{"title":"about me","content":"I am a CSE undergrad at BMSIT&M, Bangalore, batch of 2022. I live in Bangalore, India. I like to work with TS, JS and it\'s various frameworks. Python is my 2nd language of choice. This website shows my contact details, past experience along with some of the projects that I have worked on."},"experience":{"title":"experience","items":[{"title":{"content":"DAPHNIS LABS"},"role":"Full Stack Intern","time":"07/2020 \u2013 08/2020","items":["Developed Production Ready APIs and Admin Panels","Service handles thousands of live users","Worked with Selenium, AWS, PostgreSQL, NodeJS"]},{"title":{"content":"IBM (GRM)"},"role":"Research Intern","time":"04/2020 \u2013 07/2020","items":["Developed RESTful APIs for Industrial scale ML Pipeline","Automated cleaning & transormation of raw data","Visualized change in accuracy of data after transformation on standard models"]},{"title":{"content":"URBANSTOP STUDIOS"},"role":"Backend Intern","time":"11/2019 \u2013 12/2019","items":["Deployed RESTful APIs on the Firebase ecosystem","Learned skills like time management and being a team player"]}]},"projects":{"title":"projects","items":[{"title":{"content":"Workout Assistance using Pose Estimation & CNNs","url":"https://github.com/tusharpandey13/pose_cnn_workout_assistance"},"tags":["Keras","TensorFlow","MediaPipe","Python"],"content":"A workout assistant that counts the reps of various workouts in realtime using pose-estimation. A convolutional neural network is trained on pose data of selected workouts in their respective end-states. It is used to classify pose data from live webcam feed and thus, count individual reps."},{"title":{"content":"express-mongosoe-boilerplate","url":"https://github.com/tusharpandey13/express-mongoose-boilerplate"},"tags":["NodeJS","ExpressJS","MongoDB","Redis","Boilerplate","ES6"],"content":"A clean, opinionated NodeJS server boilerplate that uses ExpressJS as server backend, MongoDB as document store and Redis as session store. Features \u200bThree-layer architecture\u200b, extensive logging capabilities, \u200bmulti-agent authentication support\u200b, simplified configuration, \u200bSocket.IO support\u200b and \u200bmodular design."},{"title":{"content":"Graph pathfinding on the London Metro","url":"https://github.com/tusharpandey13/dijkstra_london_tube"},"tags":["Pandas","Flask","P5.JS","Dijkstra","Graph"],"content":"An interactive visualisation for using \u200bDijkstra\'s algorithm\u200b to find the shortest path between stations in the London underground. Made using HTML5, CSS for frontend and a Flask server written in Python for backend."},{"title":{"content":"Titanic survival prediction","url":"https://colab.research.google.com/drive/101I_iZYOSyKWZ8mdVoeLOAcFyFMjuNx2#scrollTo=cMLDx-337Rm7"},"tags":["Keras","Pandas","Numpy"],"content":"Worked on the titanic dataset to predict survival of passengers. Employed data cleaning, pre-processing, imputation, feature engineering and vizualization on the standard titanic dataset availiable on Kaggle and predicted the survival of female passengers with an accuracy of 86%."},{"title":{"content":"Handwriter","url":"https://github.com/tusharpandey13/HandWriter"},"tags":["React","KonvaJS","React-hooks"],"content":"An interactive tool to easily convert digital text into handwriting by using the HTML canvas element. The project was made using ReactJS. Used \u200bReact Hooks\u200b for state management and component lifecycle management."}],"unneeded":[{"title":{"content":"totoro-node","url":"https://github.com/VGJohn/totoro"},"tags":["npm","package","NodeJS","ExpressJS"],"content":"Node.js API Versioning Helper Module"},{"title":{"content":"portfolio-site","url":"https://github.com/tusharpandey13/portfolio-site"},"tags":["ReactJS","NodeJS","SCSS","Create-React-App","gh-pages"],"content":"My portfolio website source created in React and SCSS"},{"title":{"content":"Webrtc OpenCV.JS Demo","url":"https://github.com/tusharpandey13/webrtc_opencvjs_demo"},"tags":["Python","Flask","OpenCV","JS"],"content":"Using opencv.js with webrtc to detect faces"},{"title":{"content":"Interesting Wikis Bot","url":"https://github.com/tusharpandey13/interestingwikisbot"},"tags":["Python","Bot","Twitter","Wikipedia","Reddit"],"content":"A twitter bot made in python that tweets the top post(sorted by hot) on /r/wikipedia every 30 mins"}]},"talks":{"title":"talks and seminars","items":[{"title":{"content":"Web APIs and JSON","url":"https://www.youtube.com/watch?v=AV-491rIPxg"},"role":"Youtube","time":"Jun 23, 2020"},{"title":{"content":"Introduction to Open Source"},"time":"Nov 9, 2020"}]},"links":{"github":"https://github.com/tusharpandey13","linkedin":"https://www.linkedin.com/in/tusharpandey13","email":"mailto:tusharpandey13@gmail.com","resume":"https://drive.google.com/file/d/1ONg_BqQdhxrio_w6m5kY6WQbgDaWiPIR/view?usp=sharing","twitter":"https://twitter.com/_tusharpandey13/","ig":"https://www.instagram.com/tusharpandey13/"}}')}},function(t){t.O(0,[774],(function(){return e=2758,t(t.s=e);var e}));var e=t.O();_N_E=e}]);