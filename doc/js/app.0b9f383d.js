(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],u=0,A=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&A.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(A.length)A.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("1d50")},"08fd":function(t,e,a){t.exports=a.p+"img/FAIRsharing.c8194b18.svg"},"1d50":function(t,e,a){"use strict";a.r(e);a("646a"),a("4757"),a("d57d"),a("2026");var n=a("e832"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("top-bar"),a("community")],1)},r=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"container-fluid navTop"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-2"},[n("img",{attrs:{alt:"Vue logo",src:a("08fd")}})]),n("div",{staticClass:"col-10 navbar-collapse collapse show navbar"},[n("div",{staticClass:"navContainer"},[n("form",{staticClass:"solr-search",attrs:{action:"/search"}},[n("input",{staticClass:"input",attrs:{type:"text",placeholder:"Search FAIRsharing","aria-invalid":"false"}})]),n("button",{staticClass:"btn navButton mainButton"},[t._v("Standards")]),n("button",{staticClass:"btn navButton mainButton"},[t._v("Databases")]),n("button",{staticClass:"btn navButton mainButton"},[t._v("Policies")]),n("button",{staticClass:"btn navButton mainButton"},[t._v("Collections")]),n("button",{staticClass:"btn navButton ternaryButton"},[t._v("Add/claim content")]),n("button",{staticClass:"btn navButton secondaryButton"},[t._v("Stats")]),n("button",{staticClass:"btn navButton secondaryButton"},[t._v("Login/Register")])])])])])}],c={name:"topBar",data:function(){return{initial:null}}},l=c,d=(a("cfb6"),a("a6c2")),u=Object(d["a"])(l,s,o,!1,null,"47a4d752",null),A=u.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"communityPage"},[a("h1",[t._v("FAIRsharing is a community-driven resource and has a growing number of users, adopters, collaborators and activities working to enable the FAIR Principles. ")]),a("div",{staticClass:"container-fluid mainContainer"},[a("div",{},[a("div",{staticClass:"row"},[a("div",{staticClass:"col col-lg-4 col-xl-4 col-sm-12 col-md-12"},[a("div",{staticClass:"card"},[t._m(0),a("div",{staticClass:"card-body"},[a("activity")],1)])]),a("div",{staticClass:"col col-lg-8 col-xl-8 col-sm-12 col-md-12"},[a("div",{staticClass:"card"},[t._m(1),a("div",{staticClass:"card-body"},[a("adopter")],1)])]),a("div",{staticClass:"col col-lg-4 col-xl-4 col-sm-12 col-md-12"},[a("div",{staticClass:"card"},[t._m(2),a("div",{staticClass:"card-body"},[a("recommendation")],1)])]),t._m(3),t._m(4)])])])])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[a("h4",[t._v("Activities")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[a("h4",[t._v("Adopters")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[a("h4",[t._v("Recommendations")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col col-lg-4 col-xl-4 col-sm-12 col-md-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h4",[t._v("Governance")])]),a("div",{staticClass:"card-body"},[t._v("\n                            A few facts about the governance and technical teams.\n                        ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col col-lg-4 col-xl-4 col-sm-12 col-md-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h4",[t._v("Citing Us")])]),a("div",{staticClass:"card-body"},[t._v("\n                            How to cite FAIRsharing.org in your articles, papers ...\n                        ")])])])}],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("highcharts",{staticClass:"shadowBox chart",attrs:{options:t.chartOptions}})],1)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("\n        FAIRsharing is not just a registry. The team behind FAIRsharing is involved in a number of\n        FAIR-enabling activities, delivering guidance, tools and services with and for a variety of stakeholders.\n        As these activities mature, we will implement them in, or connect them to, the FAIRsharing resource itself. "),a("br"),t._v("\n        Some of these activities are part of funded projects andas part of national or international consortia,\n        while others are volunteer efforts that fall under a variety of umbrella organisations, e.g. working groups\n        (WG) and learned societies."),a("br"),t._v("\n        Our activities, classified using the three GO-FAIR pillar structures (change, build, train), are outlined here.\n    ")])}],g=(a("5a5f"),a("43d1")),p=a.n(g),C={name:"Activity",components:{highcharts:g["Chart"]},data:function(){return{chartOptions:{colors:["#E27D60","#27aae1","#98bfcc"],chart:{plotBackgroundColor:"#f8f8f8",plotBorderWidth:0,plotShadow:!0,renderTo:"container",margin:0},title:{text:"FAIRsharing<br></br>activities",align:"center",verticalAlign:"top",y:30},credits:{enabled:!1},tooltip:{formatter:function(){var t,e,a=this.point,n=this.series,i=a.index;for(var r in t='<span style="color:'+this.color+'">●</span> '+n.name+": <b>"+this.y+"%</b><br/>",e=n.userOptions.data[i][2],t+="<hr>",e){var s=parseInt(r)+1;t+="<br>"+s+". "+e[r]}return t}},plotOptions:{pie:{dataLabels:{enabled:!0,style:{fontWeight:"bold",color:"white"}},startAngle:-90,endAngle:90,center:["50%","75%"],size:"100%",showInLegend:!0}},series:[{type:"pie",name:"Activities",innerSize:"50%",data:[["CHANGE",33.3,["FAIR maturity indicators, metrics and models","Cross-publishers common criteria for repository selection","Journal data policies and the TOP guidelines","Standardized templates for journal data policies"]],["BUILD",50,["Domain and subject terminologies for data classification","Future-proofing the FAIRsharing technical architecture ","FAIR assessment tools","Connecting FAIRsharing to data stewardship and data management plans tools","Data FAIRification","Metadata standards for machines"]],["TRAIN",16.7,["Guidance to stakeholders","FAIR competencies and curricula"]]]}]}}}},R=C,E=Object(d["a"])(R,m,v,!1,null,"10cd0994",null),b=E.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 col-xl-6 col-md-12 col-sm-12 leftCol"},[t._m(0),a("div",{staticClass:"graph"},[a("highcharts",{staticClass:"shadowBox chart",attrs:{options:t.chartOptions}})],1)]),a("div",{staticClass:"col-lg-6 col-xl-6 col-md-12 col-sm-12"},[a("div",{staticClass:"grid container-fluid"},[t._m(1),a("div",{staticClass:"row"},t._l(t.gridItems,(function(e){return a("div",{key:"item_"+e.name,staticClass:"col-md-6 col-sm-6 col-lg-6 col-xl-4",staticStyle:{"margin-bottom":"20px"}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"logoZone"},[a("img",{staticClass:"logo",attrs:{src:e.logo}})]),a("div",{staticClass:"title"},[a("div",[t._v(t._s(e.name))])]),a("div",{staticClass:"textZone"},[a("div",[t._v("\n                                            - "),a("br"),t._v("\n                                            "+t._s(e.text)+"\n                                        ")])])])])])})),0)])])])])])},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text"},[t._v("\n                    Anyone can use FAIRsharing. Adopters, however, use FAIRsharing specifically to:\n                    "),a("ol",[a("li",[t._v("Educate their users/community on the variety of existing standards, repositories and policies, and actively encourage them to submit/claim records, where relevant;")]),a("li",[t._v("Create Recommendations by registering their data policy, and then link it to standards and/or databases recommended in the policy; and/or")]),a("li",[t._v("Create a Collection by pulling together a list of standards and/or databases around a given domain of interest relevant to them.")])]),t._v("\n                    Here are the instructions for record creation."),a("br"),t._v("\n                    Adopters are generally representatives of institutions, libraries, journal publishers,\n                    infrastructure programmes, societies and other organizations or projects that in turn serve and guide individual\n                    researchers or other stakeholders on research data management matters."),a("br"),t._v("\n                    Adopters have a FAIRsharing logo on their websites with a link from their website to our homepage."),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12",staticStyle:{"text-align":"center"}},[a("b",[t._v("We cannot list all of our adopters, but list here those publishers that use FAIRsharing to define and refine their data policy.")]),a("hr")])])}],F={name:"Adopter",data:function(){return{chartOptions:{colors:["#E27D60","#27aae1","#98bfcc"],chart:{type:"column",plotBackgroundColor:"white",backgroundColor:"#f8f8f8",plotBorderWidth:1,renderTo:"container"},title:{text:"FAIRsharing adopters databases and standards"},xAxis:{categories:["Elsevier","EMBO press","F1000Research","Gigascience","PLOS","BioMed Central","Scientific Data","Taylor and Francis","Wellcome Open Research"]},yAxis:{title:{enabled:!1,text:void 0}},credits:{enabled:!1},plotOptions:{series:{pointWidth:30}},series:[{name:"Databases",data:[72,24,47,42,84,0,101,9,48]},{name:"Standards",data:[3,9,6,15,1,2,11,1,6]}]},gridItems:[{name:"eLife",logo:a("ec1e"),text:"Policy",link:"https://fairsharing.org/FAIRsharing.F0QmCP"},{name:"Elsevier",logo:a("5c0e"),text:"Recommendation",link:"https://fairsharing.org/recommendation/Elsevier"},{name:"EMBO Press",logo:a("72eb"),text:"Recommendation",link:"https://fairsharing.org/recommendation/EMBOPress"},{name:"Faculty of 1000",logo:a("f787"),text:"Recommendation",link:"https://fairsharing.org/recommendation/F1000ResearchRecommendedRepositories"},{name:"GigaScience",logo:a("5536"),text:"Recommendation",link:"https://fairsharing.org/recommendation/GigaScience"},{name:"Public Library of Science (PLOS)",logo:a("1d94"),text:"Recommendation",link:"https://fairsharing.org/recommendation/PLOS"},{name:"Taylor and Francis",logo:a("5d0b"),text:"Recommendation",link:"https://fairsharing.org/recommendation/TaylorandFrancis"},{name:"Wiley",logo:a("a2ce"),text:"Policy",link:"https://fairsharing.org/recommendation/TaylorandFrancis"},{name:"Springer Nature Scientific Data",logo:a("2d11"),text:"Recommendation",link:"https://fairsharing.org/recommendation/TaylorandFrancis"}]}}},w=F,B=(a("a739"),Object(d["a"])(w,y,I,!1,null,"15500ea6",null)),x=B.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"recommendation"},[a("div",{staticClass:"textImportant"},[t._v("\n        A selection of funder-driven policies and reports recommending FAIRsharing\n    ")])])}],O={name:"Recommendation"},L=O,M=(a("e037"),Object(d["a"])(L,j,S,!1,null,"cb7e012c",null)),P=M.exports,k={name:"Community",components:{Activity:b,Adopter:x,Recommendation:P}},X=k,Y=(a("5558"),Object(d["a"])(X,f,h,!1,null,"25f8b0d8",null)),Q=Y.exports,J={name:"app",components:{topBar:A,Community:Q}},D=J,G=(a("e5cd"),Object(d["a"])(D,i,r,!1,null,null,null)),H=G.exports,U=a("361f"),K=a.n(U),V=a("9ce6"),W=a.n(V),q=a("1059"),Z=a.n(q),T=a("4410"),N=a.n(T),z=a("65f7"),_=a.n(z),$=(a("e4f7"),a("7e05"));a("5b3d"),a("7db1");W()(K.a),Z()(K.a),N()(K.a),n["default"].use(_.a),n["default"].use(p.a),n["default"].use($["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(H)}}).$mount("#app")},"1d94":function(t,e,a){t.exports=a.p+"img/PLOS_logo.e7876df7.png"},"2d11":function(t,e,a){t.exports=a.p+"img/SciData_logo.4890ca70.png"},5536:function(t,e){t.exports="data:image/png;base64,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"},5558:function(t,e,a){"use strict";var n=a("6ce9"),i=a.n(n);i.a},"5c0e":function(t,e,a){t.exports=a.p+"img/ELSEVIER.8aa3eadf.png"},"5d0b":function(t,e,a){t.exports=a.p+"img/taylor_francis.1ee8027b.png"},"6ce9":function(t,e,a){},"72eb":function(t,e){t.exports="data:image/png;base64,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"},"759a":function(t,e,a){},"7e80":function(t,e,a){},a2ce:function(t,e){t.exports="data:image/png;base64,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"},a739:function(t,e,a){"use strict";var n=a("759a"),i=a.n(n);i.a},cfb6:function(t,e,a){"use strict";var n=a("7e80"),i=a.n(n);i.a},e037:function(t,e,a){"use strict";var n=a("e713"),i=a.n(n);i.a},e5cd:function(t,e,a){"use strict";var n=a("ecc9"),i=a.n(n);i.a},e713:function(t,e,a){},ec1e:function(t,e,a){t.exports=a.p+"img/elife_logo.00f161cb.jpg"},ecc9:function(t,e,a){},f787:function(t,e){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.0b9f383d.js.map