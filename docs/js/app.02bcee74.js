(function(e){function t(t){for(var o,r,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)r=i[l],s[r]&&d.push(s[r][0]),s[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);m&&m(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},s={app:0},a=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/when-was-it-built/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var m=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"056c":function(e,t,n){"use strict";var o=n("f68e"),s=n.n(o);s.a},"0cfb":function(e,t,n){},"23f6":function(e,t,n){"use strict";var o=n("ed87"),s=n.n(o);s.a},"307a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[e.showWelcomeScreen?n("welcomeScreen",{on:{newGame:function(t){t?e.promptName(!0):e.proceedToRoom(!1)}}}):e._e(),e.showNamePrompt?n("namePrompt",{attrs:{newGame:e.newGame,roomName:e.roomName},on:{nameChosen:function(t){e.proceedToRoom(t)},gameReady:function(t){e.play(t)}}}):e._e(),e.showjoinRoom?n("joinRoom",{on:{roomChosen:function(t){e.promptName(t)}}}):e._e(),e.showCreateRoom?n("createRoom",{attrs:{userName:e.userName},on:{gameReady:function(t){e.play(t)}}}):e._e(),e.showGame?n("game",{attrs:{userName:e.userName,opponentName:e.opponentName,building:e.building,roomName:e.roomName}}):e._e()],1)])},a=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"hero is-success is-fullheight"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container has-text-centered content"},[n("h1",{staticClass:"title"},[e._v("\n          When was it built?\n        ")]),n("h2",{staticClass:"subtitle"},[e._v("\n          A game for two nerds of architecture history.\n        ")]),n("p",{staticClass:"has-text-centered"},[n("a",{staticClass:"button",on:{click:function(t){e.$emit("newGame",!1)}}},[e._v("Join game")])]),n("p",{staticClass:"has-text-centered"},[n("a",{staticClass:"button",on:{click:function(t){e.$emit("newGame",!0)}}},[e._v("New game")])])])]),e._m(0)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hero-foot"},[n("p",{staticClass:"has-text-centered is-size-7"},[e._v("\n          Made with 💙 by "),n("a",{attrs:{href:"http://nkb.fr",target:"_blank"}},[e._v("Nicolas Kayser-Bril")]),e._v(" with data from the University of Washington's "),n("a",{attrs:{href:"https://content.lib.washington.edu/buildingsweb/index.html",target:"_blank"}},[e._v("Cities and Buildings Database")]),e._v(".\n      ")])])}],c={name:"welcomeScreen"},u=c,m=(n("762a"),n("2877")),l=Object(m["a"])(u,r,i,!1,null,null,null);l.options.__file="welcomeScreen.vue";var d=l.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section"},[n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("What's your name?")]),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"input",attrs:{type:"text",placeholder:"Your name"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}})])]),n("p",{staticClass:"has-text-centered"},[n("a",{staticClass:"button",on:{click:function(t){e.clickedPlay()}}},[e._v(e._s(e.playMessage))])])])},h=[],f={name:"namePrompt",data:function(){return{}},props:{newGame:{default:!0,type:Boolean},roomName:{default:"",type:String}},computed:{playMessage:function(){return this.newGame?"Create game":"Start game"},userName:function(){return this.makeName()}},methods:{makeName:function(){var e=["pretty","funny","sweet","magic"],t=["unicorn","puppy","panda","lion","cat"];return e[Math.floor(Math.random()*e.length)]+" "+t[Math.floor(Math.random()*t.length)]},clickedPlay:function(){this.newGame?this.$emit("nameChosen",this.userName):this.startGame()},startGame:function(){var e=this;this.$socket.sendObj({joinRoom:this.roomName,username:this.userName}),this.$options.sockets.onmessage=function(t){var n=JSON.parse(t.data);if(n.hasOwnProperty("playerName")){var o=n.playerName;e.$emit("gameReady",{userName:e.userName,opponentName:o,building:n.building,roomName:e.roomName})}}}}},v=f,_=(n("056c"),Object(m["a"])(v,p,h,!1,null,null,null));_.options.__file="namePrompt.vue";var w=_.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section"},[n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v("Enter the name of the room you want to join")]),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.roomName,expression:"roomName"}],staticClass:"input",attrs:{type:"text",placeholder:"Room name"},domProps:{value:e.roomName},on:{input:function(t){t.target.composing||(e.roomName=t.target.value)}}})])]),n("p",{staticClass:"has-text-centered"},[n("a",{staticClass:"button",on:{click:function(t){e.$emit("roomChosen",e.roomName.toLowerCase().trim())}}},[e._v("Join room")])])])},b=[],N={name:"joinRoom",data:function(){return{roomName:""}}},y=N,C=(n("dfb6"),Object(m["a"])(y,g,b,!1,null,null,null));C.options.__file="joinRoom.vue";var S=C.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section"},[n("p",{staticClass:"has-text-centered"},[e._v("\n    Your room name is "),n("strong",[e._v(e._s(e.roomName))]),e._v(".\n  ")]),e.newPlayerJoined?n("p",{staticClass:"has-text-centered"},[n("strong",[e._v(e._s(e.opponentName))]),e._v(" has joined!\n  ")]):n("p",{staticClass:"has-text-centered"},[e._v("\n    Waiting for another player to join...\n  ")])])},R=[],j={name:"createRoom",props:{userName:{default:"",type:String}},data:function(){return{roomName:"...",newPlayerJoined:!1,opponentName:"",buildings:[]}},created:function(){var e=this;this.$socket.sendObj({newRoom:"true",username:this.userName}),this.$options.sockets.onmessage=function(t){var n=JSON.parse(t.data);if(n.hasOwnProperty("roomName"))e.roomName=n.roomName;else if(n.hasOwnProperty("newPlayerJoined")){e.newPlayerJoined=!0,e.opponentName=n.playerName,e.building=n.building;var o=e;setTimeout(function(){o.$emit("gameReady",{userName:o.userName,opponentName:o.opponentName,building:o.building,roomName:o.roomName})},200)}}}},O=j,G=(n("c413"),Object(m["a"])(O,x,R,!1,null,null,null));G.options.__file="createRoom.vue";var k=G.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.show_roundSummary?n("roundSummary",{attrs:{correctAnswer:e.correctAnswer,scores:e.scores,opponent:e.opponent,round:e.round},on:{engage:function(t){e.resumeGame()},newGame:function(t){e.newGame()}}}):e._e(),n("section",{staticClass:"hero is-fullheight"},[n("div",{staticClass:"hero-head header-score"},[n("div",{staticClass:"columns is-mobile is-size-7"},[n("div",{staticClass:"column"},[e._v("\n          You "),n("strong",[e._v(e._s(e.scores.total.user))])]),n("div",{staticClass:"column has-text-centered"},[e.countdown>=0?n("span",{staticClass:"tag",class:{"is-warning":e.countdown<=6,"is-danger":e.countdown<=3}},[e._v(e._s(e.countdown))]):e._e()]),n("div",{staticClass:"column has-text-right"},[n("strong",[e._v(e._s(e.scores.total.opponent))]),e._v(" "+e._s(e.opponentName)+"\n        ")])])]),n("div",{staticClass:"hero-body main-img",style:{"background-image":"url("+e.imageSrc+")"}}),n("div",{staticClass:"hero-footer footer-question"},[e.answerSubmitted?n("div",{staticClass:"container content"},[n("p",[e._v("Waiting for "+e._s(e.opponentName)+"'s answer...")])]):n("div",{staticClass:"container content"},[n("p",{staticClass:"is-size-7"},[n("strong",[e._v(e._s(e.currentBuilding.name))]),e._v(" ("+e._s(e.currentBuilding.city)+", "+e._s(e.currentBuilding.country)+"). When was it build?")]),n("div",{staticClass:"field has-addons"},[n("p",{staticClass:"control"},[n("a",{staticClass:"button",class:{"is-info":!e.isCurrentEra},on:{click:function(t){e.isCurrentEra=!1}}},[n("span",{staticClass:"is-size-7"},[e._v("BCE")])])]),n("p",{staticClass:"control"},[n("a",{staticClass:"button",class:{"is-info":e.isCurrentEra},on:{click:function(t){e.isCurrentEra=!0}}},[n("span",{staticClass:"is-size-7"},[e._v("CE")])])]),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.typed_answer,expression:"typed_answer"}],staticClass:"input",attrs:{type:"number",placeholder:"Date here",min:"1",max:"5000"},domProps:{value:e.typed_answer},on:{input:function(t){t.target.composing||(e.typed_answer=t.target.value)}}})]),n("div",{staticClass:"control"},[n("a",{staticClass:"button is-primary",on:{click:function(t){e.submitAnswer()}}},[e._v("\n              Next\n            ")])])])])])])],1)},$=[],A=(n("28a5"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal is-active"},[n("div",{staticClass:"modal-background"}),n("div",{staticClass:"modal-card"},[n("section",{staticClass:"modal-card-body content"},[n("h3",{staticClass:"has-text-centered"},[e._v("\n            Round "+e._s(e.roundDisplayed)+" of "+e._s(e.MAX_ROUNDS)+"\n          ")]),n("div",{staticClass:"has-text-centered"},[e._v("\n                "+e._s(e.correctAnswer[2])+" was built between "),n("strong",[e._v(e._s(e.correctAnswer[0]))]),e._v(" and "),n("strong",[e._v(e._s(e.correctAnswer[1]))]),e._v(".\n            ")]),n("div",{staticClass:"columns is-mobile section"},[n("div",{staticClass:"column has-text-centered"},[e._v("\n                    You scored "),n("br"),n("strong",[e._v(e._s(e.scores.round.user))]),e._v(" points!\n                ")]),n("div",{staticClass:"column has-text-centered"},[e._v("\n                    "+e._s(e.opponent.name)+" scored "),n("br"),n("strong",[e._v(e._s(e.opponent.score))]),e._v(" points!\n                ")])]),e.round==e.MAX_ROUNDS+1?n("div",{staticClass:"has-text-centered resultSentence"},[n("p",[n("span",{staticClass:"tag is-info is-size-6"},[e._v(e._s(e.resultSentence))])])]):e._e(),e.round<e.MAX_ROUNDS+1?n("div",{staticClass:"has-text-centered"},[n("span",{staticClass:"tag is-link is-size-6"},[e._v("Next question in "+e._s(e.countdown)+" seconds!")])]):n("div",{staticClass:"has-text-centered"},[n("p",[n("span",{staticClass:"tag is-link is-size-7"},[e._v("New game starts in "+e._s(e.countdown_newGame)+" seconds!")])])])])])])}),M=[],E=(n("c5f6"),{name:"roundSummary",data:function(){return{countdown:5,countdown_newGame:10,MAX_ROUNDS:10}},methods:{newGame:function(){var e=this;setInterval(function(){e.countdown_newGame-=1,0==e.countdown_newGame&&e.$emit("newGame")},1e3)}},mounted:function(){if(this.round==this.MAX_ROUNDS+1)this.newGame();else{var e=this;setInterval(function(){e.countdown-=1,0==e.countdown&&e.round<e.MAX_ROUNDS+1&&e.$emit("engage")},1e3)}},computed:{resultSentence:function(){return this.scores.total.user>=this.scores.total.opponent?"🏆 Congratulations, you won! 🏆":"😭 You lost, try harder! 😭"},roundDisplayed:function(){return this.round-1<=this.MAX_ROUNDS?this.round-1:this.MAX_ROUNDS}},props:{correctAnswer:{default:function(){return[0,0,""]},type:Array},scores:{default:function(){return{round:{user:0,opponent:0},total:{user:0,opponent:0}}},type:Object},round:{default:0,type:Number},opponent:{default:function(){return{name:"",score:0}},type:Object}}}),B=E,D=(n("23f6"),Object(m["a"])(B,A,M,!1,null,null,null));D.options.__file="roundSummary.vue";var J=D.exports,W=25,U={name:"game",components:{roundSummary:J},data:function(){return{scores:{round:{user:0,opponent:0},total:{user:0,opponent:0}},currentBuilding:{},correctAnswer:[],show_roundSummary:!1,answerSubmitted:!1,countdown:W,isCurrentEra:!0,typed_answer:2002,round:1}},computed:{imageSrc:function(){return"https://digitalcollections.lib.washington.edu/digital/api/singleitem/image/buildings/".concat(this.currentBuilding.photos.split(",")[0],"/default.jpg?highlightTerms=")},opponent:function(){return{name:this.opponentName,score:this.scores.round.opponent}},answer:function(){return this.isCurrentEra?this.typed_answer:-this.typed_answer}},methods:{submitAnswer:function(){this.$socket.sendObj({username:this.userName,roomName:this.roomName,answer:this.answer,building_id:this.currentBuilding.id,round:this.round}),this.answerSubmitted=!0},resumeGame:function(){this.show_roundSummary=!1,this.countdown=W},newGame:function(){this.$socket.sendObj({newGame:!0,lastRound:this.round,roomName:this.roomName}),this.resumeGame(),this.round=1,this.scores.round.user=0,this.scores.round.opponent=0,this.scores.total.user=0,this.scores.total.opponent=0}},mounted:function(){var e=this;setInterval(function(){e.countdown-=1,0==e.countdown&&e.submitAnswer()},1e3)},created:function(){var e=this;this.currentBuilding=this.building,this.$options.sockets.onmessage=function(t){var n=JSON.parse(t.data);n.hasOwnProperty("round_summary")&&(e.scores.round.user=n.round_summary[e.userName].points,e.scores.round.opponent=n.round_summary[e.opponentName].points,e.scores.total.user+=e.scores.round.user,e.scores.total.opponent+=e.scores.round.opponent,e.correctAnswer=n.round_summary.correct_answer,e.show_roundSummary=!0,e.currentBuilding=n.building,e.answerSubmitted=!1,e.round++)}},props:{userName:{default:"",type:String},roomName:{default:"",type:String},opponentName:{default:"",type:String},building:{default:function(){return{}},type:Object}}},z=U,T=(n("a4a7"),Object(m["a"])(z,P,$,!1,null,null,null));T.options.__file="game.vue";var X=T.exports,Y={components:{welcomeScreen:d,namePrompt:w,joinRoom:S,createRoom:k,game:X},data:function(){return{showWelcomeScreen:!0,showNamePrompt:!1,showjoinRoom:!1,showCreateRoom:!1,showGame:!1,newGame:!0,userName:"",opponentName:"",roomName:"",building:{}}},name:"app",methods:{promptName:function(e){!0===e?this.newGame=!0:(this.newGame=!1,this.roomName=e),this.showWelcomeScreen=!1,this.showNamePrompt=!0,this.showjoinRoom=!1},proceedToRoom:function(e){!1!==e?(this.userName=e,this.showNamePrompt=!1,this.createRoom()):(this.newGame=!1,this.showWelcomeScreen=!1,this.showjoinRoom=!0)},createRoom:function(){this.showjoinRoom=!1,this.showCreateRoom=!0},play:function(e){this.userName=e.userName,this.opponentName=e.opponentName,this.building=e.building,this.roomName=e.roomName,this.showjoinRoom=!1,this.showCreateRoom=!1,this.showNamePrompt=!1,this.showGame=!0}}},I=Y,q=(n("cf25"),Object(m["a"])(I,s,a,!1,null,null,null));q.options.__file="App.vue";var K=q.exports,L=n("b408"),F=n.n(L);o["a"].config.productionTip=!1;var H="wss://when-was-it-built.herokuapp.com";o["a"].use(F.a,H,{format:"json"}),new o["a"]({render:function(e){return e(K)}}).$mount("#app")},"73b9":function(e,t,n){},"762a":function(e,t,n){"use strict";var o=n("307a"),s=n.n(o);s.a},"9ce8":function(e,t,n){},a4a7:function(e,t,n){"use strict";var o=n("9ce8"),s=n.n(o);s.a},b986:function(e,t,n){},c413:function(e,t,n){"use strict";var o=n("73b9"),s=n.n(o);s.a},cf25:function(e,t,n){"use strict";var o=n("0cfb"),s=n.n(o);s.a},dfb6:function(e,t,n){"use strict";var o=n("b986"),s=n.n(o);s.a},ed87:function(e,t,n){},f68e:function(e,t,n){}});
//# sourceMappingURL=app.02bcee74.js.map