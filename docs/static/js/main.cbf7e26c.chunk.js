(this["webpackJsonpjob-listings"]=this["webpackJsonpjob-listings"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"./images/photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"./images/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"./images/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"./images/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"./images/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"Fullstack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"./images/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"./images/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"./images/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')},,,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(1),a=o.n(n),l=o(6),c=o.n(l),s=(o(13),o(14),o(15),o(0)),i=function(){return Object(s.jsxs)("div",{className:"Attribution",children:[Object(s.jsxs)("div",{children:["Challenge by ",Object(s.jsx)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noreferrer",children:"Frontend Mentor"}),"."]}),Object(s.jsxs)("div",{children:["Coded by ",Object(s.jsx)("a",{href:"https://lkilp.github.io/portfolio/",target:"_blank",rel:"noreferrer",children:"Liis Kilp"}),"."]})]})},r=o(4),d=o(8),u=(o(17),o(7)),g=(o(18),function(e){var t=e.job,o=e.addTag,n=(0,e.getTags)(t);return Object(s.jsxs)("div",{className:"JobCard",children:[t.featured&&Object(s.jsx)("div",{className:"feature-color"}),Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("img",{className:"logo",src:t.logo,alt:t.company}),Object(s.jsxs)("div",{className:"details",children:[Object(s.jsxs)("div",{className:"company-name-tags",children:[Object(s.jsx)("div",{className:"company-name",children:t.company}),t.new&&Object(s.jsx)("div",{className:"new",children:"new!"}),t.featured&&Object(s.jsx)("div",{className:"featured",children:"featured"})]}),Object(s.jsx)("div",{className:"position",children:t.position}),Object(s.jsxs)("div",{className:"time-contract-location",children:[Object(s.jsx)("div",{className:"time",children:t.postedAt}),Object(s.jsx)("div",{className:"contract",children:t.contract}),Object(s.jsx)("div",{className:"location",children:t.location})]})]}),Object(s.jsx)("div",{className:"line"}),Object(s.jsx)("div",{className:"tags",children:n.map((function(e,t){return Object(s.jsx)("div",{onClick:function(){o(e)},children:e.value},t)}))})]})]})}),v=(o(19),function(e){var t=e.filterTags,o=e.removeTags,n=e.removeTag;return 0===t.length?Object(s.jsx)("div",{}):Object(s.jsxs)("div",{className:"Filter",children:[Object(s.jsx)("div",{className:"filter-tags",children:t.map((function(e,t){return Object(s.jsxs)("div",{className:"filter-tag",children:[Object(s.jsx)("div",{className:"tag-name",children:e.value},t),Object(s.jsx)("div",{className:"remove-button",onClick:function(){return n(e)}})]})}))}),Object(s.jsx)("button",{className:"clear-button",onClick:o,children:"Clear"})]})}),j=function(){var e=Object(n.useState)([{key:"role",value:"Frontend"}]),t=Object(d.a)(e,2),o=t[0],a=t[1],l=function(e){o.find((function(t){return t.value===e.value}))||a([].concat(Object(r.a)(o),[e]))},c=function(e){return[{key:"role",value:e.role},{key:"level",value:e.level}].concat(Object(r.a)(e.languages.map((function(e){return{key:"language",value:e}}))),Object(r.a)(e.tools.map((function(e){return{key:"tool",value:e}}))))},i=u;return o.length>0&&(i=i.filter((function(e){for(var t=c(e),n=function(e){var n=o[e].value;if(!t.find((function(e){return e.value===n})))return{v:!1}},a=0;a<o.length;a++){var l=n(a);if("object"===typeof l)return l.v}return!0}))),Object(s.jsxs)("div",{className:"JobsList",children:[Object(s.jsx)(v,{filterTags:o,removeTags:function(){a([])},removeTag:function(e){a(o.filter((function(t){return t!==e})))}}),i.map((function(e){return Object(s.jsx)(g,{job:e,addTag:l,getTags:c},e.id)}))]})};var m=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("svg",{className:"desktop-header",viewBox:"-10 0 1440 158",preserveAspectRatio:"xMidYMid slice",children:Object(s.jsx)("g",{fill:"#63BABA",fillRule:"evenodd",children:Object(s.jsx)("path",{d:"M470.577 563.429c-51.432-51.425-51.438-134.806-.013-186.237l.013-.013L867.235-19.424c51.441-51.434 134.836-51.434 186.276 0 48.811 48.804 51.304 126.392 7.473 178.135l178.158-178.135c51.441-51.434 134.836-51.434 186.277 0 51.431 51.424 51.437 134.805.013 186.237-.005.004-.01.008-.013.013l-396.66 396.603c-51.44 51.433-134.834 51.433-186.275 0-48.812-48.805-51.304-126.394-7.471-178.138L656.853 563.43c-51.441 51.433-134.836 51.433-186.276 0zM342.268 45.605c-51.432-51.425-51.438-134.806-.013-186.237l.013-.013 396.658-396.603c51.441-51.434 134.836-51.434 186.277 0 51.431 51.424 51.437 134.805.013 186.237-.005.004-.01.008-.013.013L528.543 45.605c-51.44 51.433-134.834 51.433-186.275 0zm-444.692 71.824c-51.432-51.424-51.438-134.806-.013-186.237l.013-.013 396.658-396.603c51.441-51.434 134.836-51.434 186.277 0 51.431 51.424 51.437 134.805.013 186.237a80.86 80.86 0 01-.013.013L83.85 117.429c-51.44 51.433-134.834 51.433-186.275 0z"})})}),Object(s.jsx)("svg",{className:"mobile-header",xmlns:"http://www.w3.org/2000/svg",width:"375",height:"156",children:Object(s.jsx)("path",{fill:"#63BABA",fillRule:"evenodd",d:"M-86.732 487.429c-51.432-51.425-51.438-134.806-.013-186.237l.013-.013L309.926-95.424c51.441-51.434 134.836-51.434 186.277 0C547.634-44 547.64 39.38 496.216 90.813c-.005.004-.01.008-.013.013L99.543 487.429c-51.44 51.433-134.834 51.433-186.275 0zm-444.692 71.824c-51.432-51.424-51.438-134.806-.013-186.237l.013-.013L-134.766-23.6C-83.325-75.034.07-75.034 51.511-23.6c51.431 51.424 51.437 134.805.013 186.237l-.013.013-396.66 396.603c-51.44 51.433-134.834 51.433-186.275 0z"})})]}),Object(s.jsx)(j,{}),Object(s.jsx)(i,{})]})},f=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,21)).then((function(t){var o=t.getCLS,n=t.getFID,a=t.getFCP,l=t.getLCP,c=t.getTTFB;o(e),n(e),a(e),l(e),c(e)}))};c.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),f()}],[[20,1,2]]]);
//# sourceMappingURL=main.cbf7e26c.chunk.js.map