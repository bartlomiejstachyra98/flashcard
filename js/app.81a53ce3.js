(function(e){function t(t){for(var r,i,a=t[0],s=t[1],u=t[2],d=0,b=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&b.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(b.length)b.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/flashcard/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"04dd":function(e,t,n){"use strict";n("c645")},"0702":function(e,t,n){"use strict";n("9b0c")},1236:function(e,t,n){"use strict";n("c569")},"14b3":function(e,t,n){"use strict";n("3d6f")},"2a59":function(e,t,n){e.exports=n.p+"img/LearnPhoto.b0ffdff5.jpg"},"31b0":function(e,t,n){e.exports=n.p+"img/AnswerMobileDisplay.fdc106ed.jpg"},"321a":function(e,t,n){"use strict";n("e36e")},"37ae":function(e,t,n){},"39b9":function(e,t,n){"use strict";n("37ae")},"3d6f":function(e,t,n){},4407:function(e,t,n){"use strict";n("abba")},"4e34":function(e,t,n){"use strict";n("f586")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=Object(r["h"])("meta",{name:"viewport",content:"user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width /"},null,-1),c=Object(r["h"])("meta",{name:"apple-mobile-web-app-capable",content:"yes"},null,-1),i=Object(r["h"])("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"},null,-1);function a(e,t,n,a,s,u){var l=Object(r["B"])("the-header"),d=Object(r["B"])("router-view");return Object(r["t"])(),Object(r["g"])(r["a"],null,[o,c,i,Object(r["j"])(l),Object(r["h"])("main",null,[Object(r["j"])(d)])],64)}var s=function(e){return Object(r["w"])("data-v-20305ab8"),e=e(),Object(r["u"])(),e},u={class:"desktop-nav"},l=Object(r["i"])("FlashCard"),d=Object(r["i"])("Rozwiązuj"),b=Object(r["i"])("Dodaj słówka"),p={key:0},j=Object(r["i"])("Zaloguj"),h={key:1},f=Object(r["i"])("Zarejestruj"),O={key:2},w={class:"mobile-nav"},m=s((function(){return Object(r["h"])("span",{class:"toggle-button__bar"},null,-1)})),g=s((function(){return Object(r["h"])("span",{class:"toggle-button__bar"},null,-1)})),v=s((function(){return Object(r["h"])("span",{class:"toggle-button__bar"},null,-1)})),y=[m,g,v],k=s((function(){return Object(r["h"])("h1",null,"FlashCard",-1)})),I={key:1},z=Object(r["i"])("Rozwiązuj"),T=Object(r["i"])("Dodaj słówka"),x={key:0},_=Object(r["i"])("Zaloguj"),C={key:1},W=Object(r["i"])("Zarejestruj"),D={key:2};function S(e,t,n,o,c,i){var a=Object(r["B"])("router-link");return Object(r["t"])(),Object(r["g"])(r["a"],null,[Object(r["h"])("header",u,[Object(r["h"])("nav",null,[Object(r["j"])(a,{to:"/home"},{default:Object(r["I"])((function(){return[l]})),_:1}),Object(r["h"])("ul",null,[Object(r["h"])("li",null,[Object(r["j"])(a,{to:"/answer"},{default:Object(r["I"])((function(){return[d]})),_:1})]),Object(r["h"])("li",null,[Object(r["j"])(a,{to:"/flashcards"},{default:Object(r["I"])((function(){return[b]})),_:1})]),i.isLoggedIn?Object(r["f"])("",!0):(Object(r["t"])(),Object(r["g"])("li",p,[Object(r["j"])(a,{to:"/login"},{default:Object(r["I"])((function(){return[j]})),_:1})])),i.isLoggedIn?Object(r["f"])("",!0):(Object(r["t"])(),Object(r["g"])("li",h,[Object(r["j"])(a,{to:"/register"},{default:Object(r["I"])((function(){return[f]})),_:1})])),i.isLoggedIn?(Object(r["t"])(),Object(r["g"])("li",O,[Object(r["h"])("button",{onClick:t[0]||(t[0]=function(){return i.logout&&i.logout.apply(i,arguments)})},"Wyloguj")])):Object(r["f"])("",!0)])])]),Object(r["h"])("header",w,[Object(r["h"])("div",null,[Object(r["h"])("button",{onClick:t[1]||(t[1]=function(){return i.openCloseMenu&&i.openCloseMenu.apply(i,arguments)}),class:"toggle-button"},y)]),i.menu?(Object(r["t"])(),Object(r["g"])("button",{key:0,class:"backdrop",onClick:t[2]||(t[2]=function(){return i.openCloseMenu&&i.openCloseMenu.apply(i,arguments)})})):Object(r["f"])("",!0),k,i.menu?(Object(r["t"])(),Object(r["g"])("nav",I,[Object(r["h"])("ul",null,[Object(r["h"])("li",null,[Object(r["j"])(a,{onClick:i.openCloseMenu,to:"/answer"},{default:Object(r["I"])((function(){return[z]})),_:1},8,["onClick"])]),Object(r["h"])("li",null,[Object(r["j"])(a,{onClick:i.openCloseMenu,to:"/flashcards"},{default:Object(r["I"])((function(){return[T]})),_:1},8,["onClick"])]),i.isLoggedIn?Object(r["f"])("",!0):(Object(r["t"])(),Object(r["g"])("li",x,[Object(r["j"])(a,{onClick:i.openCloseMenu,to:"/login"},{default:Object(r["I"])((function(){return[_]})),_:1},8,["onClick"])])),i.isLoggedIn?Object(r["f"])("",!0):(Object(r["t"])(),Object(r["g"])("li",C,[Object(r["j"])(a,{onClick:i.openCloseMenu,to:"/register"},{default:Object(r["I"])((function(){return[W]})),_:1},8,["onClick"])])),i.isLoggedIn?(Object(r["t"])(),Object(r["g"])("li",D,[Object(r["h"])("button",{onClick:t[3]||(t[3]=function(){return i.logout&&i.logout.apply(i,arguments)})},"Wyloguj")])):Object(r["f"])("",!0)])])):Object(r["f"])("",!0)])],64)}var V={data:function(){return{isOpen:!1}},computed:{isLoggedIn:function(){return this.$store.getters["auth/isAuthenticated"]},userId:function(){return this.$store.getters["auth/userId"]},menu:function(){return this.isOpen}},methods:{logout:function(){this.$store.dispatch("auth/logout"),this.isOpen=!this.isOpen,this.$router.push("home")},openCloseMenu:function(){this.isOpen=!this.isOpen}}},A=(n("321a"),n("6b0d")),R=n.n(A);const B=R()(V,[["render",S],["__scopeId","data-v-20305ab8"]]);var P=B,$={name:"App",components:{TheHeader:P}};n("e425");const U=R()($,[["render",a]]);var E=U,J=n("6c02"),M=function(e){return Object(r["w"])("data-v-0d2cbab0"),e=e(),Object(r["u"])(),e},G=M((function(){return Object(r["h"])("h1",null,"Brak fiszek w wybranym temacie!",-1)})),L=Object(r["i"])("Dodaj Słowa"),F=M((function(){return Object(r["h"])("h2",{class:"title"},"Podaj tłumaczenie słowa na język angielski",-1)})),N=Object(r["i"])("Pokaż tłumaczenie"),q={class:"translation"},Z={class:"score"};function H(e,t,n,o,c,i){var a=Object(r["B"])("topic-viewer"),s=Object(r["B"])("base-card"),u=Object(r["B"])("base-dialog"),l=Object(r["B"])("base-button"),d=Object(r["B"])("base-item");return Object(r["t"])(),Object(r["g"])(r["a"],null,[c.topic?Object(r["f"])("",!0):(Object(r["t"])(),Object(r["e"])(s,{key:0,id:"select_topic"},{default:Object(r["I"])((function(){return[Object(r["j"])(a,{addTopic:!1,onSelectWords:i.selectTopic},null,8,["onSelectWords"])]})),_:1})),Object(r["j"])(u,{show:!!c.finalScore,title:"Gratulacje! Ukończyłeś lekcje!",onClose:i.handleError},{default:Object(r["I"])((function(){return[Object(r["h"])("p",null,"Twój wynik to: "+Object(r["D"])(c.finalScore)+"/"+Object(r["D"])(i.wordAmount),1)]})),_:1},8,["show","onClose"]),c.topic&&0==!!i.words.length?(Object(r["t"])(),Object(r["e"])(s,{key:1,id:"withoutWords"},{default:Object(r["I"])((function(){return[G,Object(r["j"])(l,{onClick:i.redirect},{default:Object(r["I"])((function(){return[L]})),_:1},8,["onClick"])]})),_:1})):Object(r["f"])("",!0),c.topic&&0==!i.words.length?(Object(r["t"])(),Object(r["e"])(s,{key:2,id:"card"},{default:Object(r["I"])((function(){return[F,Object(r["j"])(d,{class:"main",incorrectAnswer:c.incorrectAnswer,words:i.displayWord,onCheck:i.check},null,8,["incorrectAnswer","words","onCheck"]),Object(r["j"])(l,{class:"button",onClick:i.showAnswer},{default:Object(r["I"])((function(){return[N]})),_:1},8,["onClick"]),Object(r["h"])("h3",q,Object(r["D"])(c.answer),1),Object(r["h"])("h2",Z,"Wynik: "+Object(r["D"])(c.score)+"/"+Object(r["D"])(i.wordAmount),1)]})),_:1})):Object(r["f"])("",!0)],64)}n("7db0"),n("d3b7");var K={class:"word"},Q=Object(r["i"])("Dalej"),X={key:0};function Y(e,t,n,o,c,i){var a=Object(r["B"])("base-button");return Object(r["t"])(),Object(r["g"])("form",{onSubmit:t[0]||(t[0]=Object(r["K"])((function(){return o.saveInput&&o.saveInput.apply(o,arguments)}),["prevent"]))},[Object(r["h"])("h3",K,Object(r["D"])(n.words),1),Object(r["h"])("input",{autocomplete:"off",class:Object(r["p"])({invaild:"true"===n.incorrectAnswer}),type:"text",id:"translation",ref:"translation",maxlength:"30"},null,2),Object(r["j"])(a,null,{default:Object(r["I"])((function(){return[Q]})),_:1}),"true"===n.incorrectAnswer?(Object(r["t"])(),Object(r["g"])("h4",X,"Podaj właściwą odpowiedź")):Object(r["f"])("",!0)],32)}var ee={props:["words","incorrectAnswer"],emits:["check"],setup:function(e,t){var n=Object(r["y"])("");function o(){t.emit("check",n.value.value),n.value.value=""}return{saveInput:o,translation:n}}};n("6b3e");const te=R()(ee,[["render",Y],["__scopeId","data-v-5c8025da"]]);var ne=te,re=(n("c7cd"),{key:1,open:""}),oe={key:0},ce=Object(r["i"])("Close");function ie(e,t,n,o,c,i){var a=Object(r["B"])("base-button");return Object(r["t"])(),Object(r["e"])(r["b"],{to:"body"},[n.show?(Object(r["t"])(),Object(r["g"])("div",{key:0,onClick:t[0]||(t[0]=function(){return i.tryClose&&i.tryClose.apply(i,arguments)}),class:"backdrop"})):Object(r["f"])("",!0),n.show?(Object(r["t"])(),Object(r["g"])("dialog",re,[Object(r["h"])("header",null,[Object(r["A"])(e.$slots,"header",{},(function(){return[Object(r["h"])("h2",null,Object(r["D"])(n.title),1)]}),!0)]),Object(r["h"])("section",null,[Object(r["A"])(e.$slots,"default",{},void 0,!0)]),n.fixed?Object(r["f"])("",!0):(Object(r["t"])(),Object(r["g"])("menu",oe,[Object(r["A"])(e.$slots,"actions",{},(function(){return[Object(r["j"])(a,{onClick:i.tryClose},{default:Object(r["I"])((function(){return[ce]})),_:1},8,["onClick"])]}),!0)]))])):Object(r["f"])("",!0)])}var ae={props:{show:{type:Boolean,required:!0},title:{type:String,required:!1},fixed:{type:Boolean,required:!1,default:!1}},emits:["close"],methods:{tryClose:function(){this.fixed||this.$emit("close")}}};n("04dd");const se=R()(ae,[["render",ie],["__scopeId","data-v-da9a727e"]]);var ue=se,le=function(e){return Object(r["w"])("data-v-24788306"),e=e(),Object(r["u"])(),e},de={class:"topic_viewer"},be={class:"top"},pe=le((function(){return Object(r["h"])("h1",null,"Tematy:",-1)})),je={key:0,class:"desktop_topicDisplay"},he=["onClick"],fe={key:1,class:"withoutTopics"},Oe={key:0},we={class:"mobile_topicDisplay"},me=le((function(){return Object(r["h"])("option",{default:""},"Wybierz Temat",-1)})),ge=["value"],ve={key:0,class:"addNewTopic"},ye=Object(r["i"])("Dodaj");function ke(e,t,n,o,c,i){var a=this,s=Object(r["B"])("base-button");return Object(r["t"])(),Object(r["g"])("div",de,[Object(r["h"])("div",be,[pe,i.topics?(Object(r["t"])(),Object(r["g"])("div",je,[(Object(r["t"])(!0),Object(r["g"])(r["a"],null,Object(r["z"])(i.topics,(function(e){return Object(r["t"])(),Object(r["g"])("div",{class:Object(r["p"])(i.display),key:e.id},[Object(r["h"])("button",{class:"topicButton",onClick:function(t){return i.selectWords(e.id)}},[Object(r["h"])("p",null,Object(r["D"])(e.topic),1),a.addTopic?(Object(r["t"])(),Object(r["e"])(s,{key:0,class:"fa fa-trash",onClick:function(t){return i.deleteTopic(e.id)}},null,8,["onClick"])):Object(r["f"])("",!0)],8,he)],2)})),128))])):Object(r["f"])("",!0),i.topics[0]?Object(r["f"])("",!0):(Object(r["t"])(),Object(r["g"])("div",fe,[this.addTopic?(Object(r["t"])(),Object(r["g"])("h4",Oe,"Dodaj nowy temat")):(Object(r["t"])(),Object(r["g"])("button",{key:1,class:"topicButton",onClick:t[0]||(t[0]=function(){return i.redirect&&i.redirect.apply(i,arguments)})}," Dodaj Temat "))])),Object(r["h"])("div",we,[this.addTopic?Object(r["J"])((Object(r["t"])(),Object(r["g"])("select",{key:0,class:"topic_select",name:"topics",onChange:t[1]||(t[1]=function(e){return i.selectWords(!1)}),id:"topic","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.selectedTopic=e})},[me,(Object(r["t"])(!0),Object(r["g"])(r["a"],null,Object(r["z"])(i.topics,(function(e){return Object(r["t"])(),Object(r["g"])("option",{key:e.id,value:e.id},Object(r["D"])(e.topic),9,ge)})),128))],544)),[[r["F"],c.selectedTopic]]):Object(r["f"])("",!0),this.addTopic?(Object(r["t"])(),Object(r["e"])(s,{key:1,class:"fa fa-trash",onClick:t[3]||(t[3]=function(e){return i.deleteTopic(c.selectedTopic)})})):Object(r["f"])("",!0)])]),this.addTopic?(Object(r["t"])(),Object(r["g"])("div",ve,[Object(r["h"])("form",{onSubmit:t[5]||(t[5]=Object(r["K"])((function(){return i.addNewTopic&&i.addNewTopic.apply(i,arguments)}),["prevent"]))},[Object(r["J"])(Object(r["h"])("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.newTopic=e}),placeholder:"Nowy Temat"},null,512),[[r["G"],c.newTopic]]),Object(r["j"])(s,null,{default:Object(r["I"])((function(){return[ye]})),_:1})],32)])):Object(r["f"])("",!0)])}var Ie=n("1da1"),ze=(n("96cf"),{props:["addTopic"],data:function(){return{newTopic:"",selectedTopic:"Wybierz Temat"}},created:function(){0==this.topics.length&&this.loadTopics()},computed:{topics:function(){var e=this.$store.getters["words/topics"],t=[];for(var n in e)t.push({topic:e[n].topic,id:e[n].id});return t},display:function(){return window.innerWidth<720&&this.addTopic?"topic":"answer_topicDisplay"}},methods:{selectWords:function(e){!1===e?this.$emit("select-words",event.target.value):this.$emit("select-words",e)},addNewTopic:function(){""!==this.newTopic&&this.$store.dispatch("words/addNewTopic",{newTopic:this.newTopic})},deleteTopic:function(e){this.$store.dispatch("words/deleteTopic",e)},loadTopics:function(){var e=this;return Object(Ie["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("words/fetchTopics");case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),e.error=t.t0.message||"Coś poszło nie tak... :(";case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},redirect:function(){this.$router.push("flashcards")}}});n("bada");const Te=R()(ze,[["render",ke],["__scopeId","data-v-24788306"]]);var xe=Te,_e={components:{BaseItem:ne,BaseDialog:ue,TopicViewer:xe},data:function(){return{activeWord:0,userTranslation:"",finalScore:0,score:0,incorrectAnswer:!1,answer:"",topic:"",tip:!1}},computed:{words:function(){var e=this,t=[],n=this.$store.getters["words/topics"],r=n.find((function(t){return t.id===e.topic}));for(var o in r.words)t.push(r.words[o]);return r?t:""},displayWord:function(){return this.words[this.activeWord].word},wordAmount:function(){return this.words.length}},methods:{check:function(e){e.toUpperCase()===this.words[this.activeWord].translation.toUpperCase()?(this.incorrectAnswer="false",this.finalScore=null,!1===this.tip&&(this.score+=1),this.activeWord+=1,this.answer=null,e=null,this.tip=!1,this.activeWord>=this.words.length&&(this.activeWord=0,this.finalScore=this.score,this.score=0)):this.incorrectAnswer="true"},handleError:function(){this.topic=null,this.finalScore=null},showAnswer:function(){this.answer?this.answer="":(this.tip=!0,this.answer="Tłumaczenie to: "+this.words[this.activeWord].translation)},selectTopic:function(e){this.topic=e},redirect:function(){this.$router.push("/flashcards")}}};n("1236");const Ce=R()(_e,[["render",H],["__scopeId","data-v-0d2cbab0"]]);var We=Ce,De=(n("b0c0"),function(e){return Object(r["w"])("data-v-33b96e14"),e=e(),Object(r["u"])(),e}),Se=De((function(){return Object(r["h"])("p",null,"Rejestracja trwa, proszę czekać",-1)})),Ve=De((function(){return Object(r["h"])("h1",null,"Tworzenie konta FlashCard",-1)})),Ae=De((function(){return Object(r["h"])("h2",null,"Dołącz do nas juz dzisiaj!",-1)})),Re={key:0,id:"falseName"},Be={key:1,id:"falseEmail"},Pe={key:2,id:"falsePassword"},$e={key:3,id:"diffrentPass"},Ue=Object(r["i"])("Zarejestruj");function Ee(e,t,n,o,c,i){var a=Object(r["B"])("base-dialog"),s=Object(r["B"])("base-button"),u=Object(r["B"])("base-card");return Object(r["t"])(),Object(r["g"])(r["a"],null,[Object(r["j"])(a,{show:!!c.error,title:"Wystąpił błąd",onClose:i.handleError},{default:Object(r["I"])((function(){return[Object(r["h"])("p",null,Object(r["D"])(c.error),1)]})),_:1},8,["show","onClose"]),Object(r["j"])(a,{show:c.isLoading,title:"Rejestracja...",fixed:""},{default:Object(r["I"])((function(){return[Se]})),_:1},8,["show"]),Object(r["j"])(u,{id:"baseCard"},{default:Object(r["I"])((function(){return[Ve,Ae,Object(r["h"])("form",{onSubmit:t[4]||(t[4]=Object(r["K"])((function(){return i.submitRegister&&i.submitRegister.apply(i,arguments)}),["prevent"]))},[Object(r["J"])(Object(r["h"])("input",{placeholder:"Imię",class:Object(r["p"])({invalid:!c.name.isVaild}),"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.name.val=e}),type:"text",id:"name",maxlength:"30"},null,2),[[r["G"],c.name.val,void 0,{trim:!0}]]),c.name.isVaild?Object(r["f"])("",!0):(Object(r["t"])(),Object(r["g"])("p",Re,"Imię nie może być puste")),Object(r["J"])(Object(r["h"])("input",{id:"email",placeholder:"Email","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.email.val=e}),class:Object(r["p"])({invalid:!c.email.isVaild}),type:"text",maxlength:"30"},null,2),[[r["G"],c.email.val,void 0,{trim:!0}]]),c.email.isVaild?Object(r["f"])("",!0):(Object(r["t"])(),Object(r["g"])("p",Be,"Proszę podać właściwy e-mail")),Object(r["J"])(Object(r["h"])("input",{id:"password",placeholder:"Hasło",class:Object(r["p"])({invalid:!c.password.isVaild||!c.passwordReply.isVaild}),"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.password.val=e}),type:"password",maxlength:"30"},null,2),[[r["G"],c.password.val,void 0,{trim:!0}]]),c.password.isVaild?Object(r["f"])("",!0):(Object(r["t"])(),Object(r["g"])("p",Pe," Hasło powinno zawierać więcej niż 6 znaków ")),Object(r["J"])(Object(r["h"])("input",{id:"replyPassword",placeholder:"Powtórz hasło",class:Object(r["p"])({invalid:!c.password.isVaild||!c.passwordReply.isVaild}),"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.passwordReply.val=e}),type:"password",maxlength:"30"},null,2),[[r["G"],c.passwordReply.val,void 0,{trim:!0}]]),c.passwordReply.isVaild?Object(r["f"])("",!0):(Object(r["t"])(),Object(r["g"])("p",$e," Hasła muszą być identyczne ")),Object(r["j"])(s,{id:"confirm"},{default:Object(r["I"])((function(){return[Ue]})),_:1})],32)]})),_:1})],64)}n("ac1f"),n("00b4");var Je={class:"card"};function Me(e,t){return Object(r["t"])(),Object(r["g"])("div",Je,[Object(r["A"])(e.$slots,"default",{},void 0,!0)])}n("4407");const Ge={},Le=R()(Ge,[["render",Me],["__scopeId","data-v-026d6e1e"]]);var Fe=Le,Ne={components:{BaseCard:Fe,BaseDialog:ue},data:function(){return{name:{val:"",isVaild:!0},email:{val:"",isVaild:!0},password:{val:"",isVaild:!0},passwordReply:{val:"",isVaild:!0},formIsValid:!0,re:/\S+@\S+\.\S+/,isLoading:!1,error:null}},methods:{validate:function(){this.formIsValid=!0,""===this.name.val?(this.name.isVaild=!1,this.formIsValid=!1):this.name.isVaild=!0,""!==this.email.val&&this.re.test(this.email.val)?this.email.isVaild=!0:(this.email.isVaild=!1,this.formIsValid=!1),""===this.password.val||""===this.passwordReply.val||this.password.val.length<6?(this.password.isVaild=!1,this.formIsValid=!1):this.password.isVaild=!0,this.password.val!==this.passwordReply.val?(this.passwordReply.isVaild=!1,this.formIsValid=!1):this.passwordReply.isVaild=!0},submitRegister:function(){var e=this;return Object(Ie["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.validate(),e.formIsValid){t.next=3;break}return t.abrupt("return");case 3:return e.isLoading=!0,t.prev=4,t.next=7,e.$store.dispatch("auth/register",{email:e.email.val,password:e.password.val});case 7:t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](4),e.error=t.t0.message||"Błąd rejestracji";case 12:e.$router.push("answer"),e.isLoading=!1;case 14:case"end":return t.stop()}}),t,null,[[4,9]])})))()},handleError:function(){this.error=null}}};n("14b3");const qe=R()(Ne,[["render",Ee],["__scopeId","data-v-33b96e14"]]);var Ze=qe,He=function(e){return Object(r["w"])("data-v-12c5ce36"),e=e(),Object(r["u"])(),e},Ke=He((function(){return Object(r["h"])("h1",null,"Logowanie",-1)})),Qe={id:"email"},Xe={id:"password"},Ye={key:0,id:"error"},et=Object(r["i"])("Zaloguj"),tt={class:"mobile_login"},nt=He((function(){return Object(r["h"])("h1",null,"Logowanie",-1)})),rt={id:"email"},ot={id:"password"},ct={key:0,id:"error"},it=Object(r["i"])("Zaloguj");function at(e,t,n,o,c,i){var a=Object(r["B"])("base-button"),s=Object(r["B"])("base-dialog");return Object(r["t"])(),Object(r["g"])(r["a"],null,[Object(r["j"])(s,{show:i.display,onClose:i.handleError},{default:Object(r["I"])((function(){return[Ke,Object(r["h"])("form",{onSubmit:t[2]||(t[2]=Object(r["K"])((function(){return i.login&&i.login.apply(i,arguments)}),["prevent"]))},[Object(r["h"])("div",Qe,[Object(r["J"])(Object(r["h"])("input",{placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.email=e}),class:Object(r["p"])({invalid:!!c.error}),type:"text"},null,2),[[r["G"],c.email,void 0,{trim:!0}]])]),Object(r["h"])("div",Xe,[Object(r["J"])(Object(r["h"])("input",{placeholder:"Hasło",class:Object(r["p"])({invalid:!!c.error}),"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.password=e}),type:"password"},null,2),[[r["G"],c.password,void 0,{trim:!0}]])]),c.error?(Object(r["t"])(),Object(r["g"])("p",Ye,Object(r["D"])(c.error),1)):Object(r["f"])("",!0),Object(r["j"])(a,{id:"confirm"},{default:Object(r["I"])((function(){return[et]})),_:1})],32)]})),_:1},8,["show","onClose"]),Object(r["h"])("div",tt,[nt,Object(r["h"])("form",{onSubmit:t[5]||(t[5]=Object(r["K"])((function(){return i.login&&i.login.apply(i,arguments)}),["prevent"]))},[Object(r["h"])("div",rt,[Object(r["J"])(Object(r["h"])("input",{placeholder:"Email","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.email=e}),class:Object(r["p"])({invalid:!!c.error}),type:"text",maxlength:"30"},null,2),[[r["G"],c.email,void 0,{trim:!0}]])]),Object(r["h"])("div",ot,[Object(r["J"])(Object(r["h"])("input",{placeholder:"Hasło",class:Object(r["p"])({invalid:!!c.error}),"onUpdate:modelValue":t[4]||(t[4]=function(e){return c.password=e}),type:"password",maxlength:"30"},null,2),[[r["G"],c.password,void 0,{trim:!0}]])]),c.error?(Object(r["t"])(),Object(r["g"])("p",ct,Object(r["D"])(c.error),1)):Object(r["f"])("",!0),Object(r["j"])(a,{id:"confirm"},{default:Object(r["I"])((function(){return[it]})),_:1})],32)])],64)}n("5319");var st={components:{BaseDialog:ue},data:function(){return{email:"",password:"",error:null}},computed:{display:function(){return!(window.innerWidth<720)}},methods:{login:function(){var e=this;return Object(Ie["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("auth/login",{email:e.email,password:e.password});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),e.error=t.t0.message||"Podaj poprawne dane logowania";case 8:e.$store.getters["auth/isAuthenticated"]&&e.handleError(),e.$router.push("answer");case 10:case"end":return t.stop()}}),t,null,[[0,5]])})))()},handleError:function(){this.$router.replace("/register")}}};n("39b9");const ut=R()(st,[["render",at],["__scopeId","data-v-12c5ce36"]]);var lt=ut,dt={class:"flashCard"},bt={class:"topicDisplay"},pt={class:"wordsDisplay"};function jt(e,t,n,o,c,i){var a=this,s=Object(r["B"])("topic-viewer"),u=Object(r["B"])("words-viewer"),l=Object(r["B"])("base-card");return Object(r["t"])(),Object(r["g"])("body",null,[Object(r["j"])(l,{id:"card"},{default:Object(r["I"])((function(){return[Object(r["h"])("div",dt,[Object(r["h"])("div",bt,[Object(r["j"])(s,{addTopic:!0,onSelectWords:i.selectWords},null,8,["onSelectWords"])]),Object(r["h"])("div",pt,[Object(r["j"])(u,{topic:a.topic},null,8,["topic"])])])]})),_:1})])}var ht=function(e){return Object(r["w"])("data-v-3d49e1aa"),e=e(),Object(r["u"])(),e},ft={key:0},Ot={key:1,class:"wordsInTopic"},wt=ht((function(){return Object(r["h"])("h1",null,"Słowa w temacie",-1)})),mt={class:"addingWords"},gt=Object(r["i"])("+"),vt={class:"displayWords"},yt={class:"word"},kt=ht((function(){return Object(r["h"])("p",null,"-",-1)})),It={class:"word"};function zt(e,t,n,o,c,i){var a=Object(r["B"])("base-button");return Object(r["t"])(),Object(r["g"])(r["a"],null,[n.topic?Object(r["f"])("",!0):(Object(r["t"])(),Object(r["g"])("h1",ft,"Wybierz temat, aby wyświetlić słowa")),n.topic?(Object(r["t"])(),Object(r["g"])("div",Ot,[wt,Object(r["h"])("div",mt,[Object(r["h"])("form",{onSubmit:t[2]||(t[2]=Object(r["K"])((function(){return i.AddNewWord&&i.AddNewWord.apply(i,arguments)}),["prevent"]))},[Object(r["J"])(Object(r["h"])("input",{class:"word",placeholder:"Słowo","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.newWord.word=e}),type:"text",maxlength:"30"},null,512),[[r["G"],c.newWord.word]]),Object(r["J"])(Object(r["h"])("input",{class:"word",placeholder:"Tłumaczenie","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.newWord.translation=e}),type:"text",maxlength:"30"},null,512),[[r["G"],c.newWord.translation]]),Object(r["j"])(a,null,{default:Object(r["I"])((function(){return[gt]})),_:1})],32)]),Object(r["h"])("div",vt,[(Object(r["t"])(!0),Object(r["g"])(r["a"],null,Object(r["z"])(i.wordsData.id,(function(e){return Object(r["t"])(),Object(r["g"])("div",{class:"displayWord",key:e},[Object(r["h"])("p",yt,Object(r["D"])(i.wordsData.words[e].word),1),kt,Object(r["h"])("p",It,Object(r["D"])(i.wordsData.words[e].translation),1),Object(r["j"])(a,{class:"fa fa-trash",onClick:function(t){return i.deleteWord(e)}},null,8,["onClick"])])})),128))])])):Object(r["f"])("",!0)],64)}var Tt={props:["topic"],data:function(){return{newWord:{word:"",translation:""},addedCount:0}},computed:{wordsData:function(){var e=this,t=this.$store.getters["words/topics"],n=[],r=t.find((function(t){return t.id===e.topic}));for(var o in r.words)n.push(o);return r?{words:r.words,id:n}:""}},methods:{AddNewWord:function(){""!==this.newWord.word&&""!==this.newWord.translation&&(this.$store.dispatch("words/addWord",{id:this.topic,word:{word:this.newWord.word,translation:this.newWord.translation,count:this.addedCount}}),this.newWord.word="",this.newWord.translation="")},deleteWord:function(e){this.$store.dispatch("words/deleteWord",{wordId:e,topicId:this.topic})}}};n("d9fd");const xt=R()(Tt,[["render",zt],["__scopeId","data-v-3d49e1aa"]]);var _t=xt,Ct={components:{TopicViewer:xe,WordsViewer:_t},data:function(){return{topic:""}},methods:{selectWords:function(e){this.topic=e}}};n("6b72");const Wt=R()(Ct,[["render",jt],["__scopeId","data-v-a4e028be"]]);var Dt=Wt,St=n("5502"),Vt=(n("e9c4"),{namespaced:!0,state:function(){return{userId:null,token:null}},mutations:{setUser:function(e,t){e.token=t.token,e.userId=t.userId}},actions:{login:function(e,t){return Object(Ie["a"])(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCPm0kdX7ivPLzQG5W6jU0AZ3sYedVPApo",{method:"POST",body:JSON.stringify({email:t.email,password:t.password,returnSecureToken:!0})});case 2:return r=n.sent,n.next=5,r.json();case 5:if(o=n.sent,r.ok){n.next=9;break}throw c=new Error(o.message),c;case 9:localStorage.setItem("token",o.idToken),localStorage.setItem("userId",o.localId),e.commit("setUser",{token:o.idToken,userId:o.localId});case 12:case"end":return n.stop()}}),n)})))()},register:function(e,t){return Object(Ie["a"])(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCPm0kdX7ivPLzQG5W6jU0AZ3sYedVPApo",{method:"POST",body:JSON.stringify({email:t.email,password:t.password,returnSecureToken:!0})});case 2:return r=n.sent,n.next=5,r.json();case 5:if(o=n.sent,r.ok){n.next=9;break}throw c=new Error(o.message),c;case 9:e.commit("setUser",{token:o.idToken,userId:o.localId}),localStorage.setItem("token",o.idToken),localStorage.setItem("userId",o.localId);case 12:case"end":return n.stop()}}),n)})))()},logout:function(e){localStorage.removeItem("token"),localStorage.removeItem("userId"),e.commit("setUser",{token:null,userId:null})}},getters:{userId:function(e){return e.userId},token:function(e){return e.token},isAuthenticated:function(e){return!!e.token}}}),At=(n("99af"),{namespaced:!0,state:function(){return{data:[]}},mutations:{addTopic:function(e,t){e.data=t},addWord:function(e,t){for(var n=0;n<e.data.length;n++)e.data[n].id==t.id2&&(e.data[n].words[t.id]=t.word,e.data[n].words.length++)}},actions:{addNewTopic:function(e,t){return Object(Ie["a"])(regeneratorRuntime.mark((function n(){var r,o,c,i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={topic:t.newTopic},o=e.rootGetters["auth/userId"],n.next=4,fetch("https://flashcard-1607b-default-rtdb.europe-west1.firebasedatabase.app/data/".concat(o,".json?"),{method:"POST",body:JSON.stringify(r)}).then(setTimeout((function(){e.dispatch("fetchTopics")}),200));case 4:return c=n.sent,n.next=7,c.json();case 7:if(i=n.sent,c.ok){n.next=11;break}throw a=new Error(i.message||"Failed fetch requests"),a;case 11:case"end":return n.stop()}}),n)})))()},fetchTopics:function(e){return Object(Ie["a"])(regeneratorRuntime.mark((function t(){var n,r,o,c,i,a,s,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.rootGetters["auth/userId"],t.next=3,fetch("https://flashcard-1607b-default-rtdb.europe-west1.firebasedatabase.app/data/".concat(n,".json?"));case 3:return r=t.sent,t.next=6,r.json();case 6:if(o=t.sent,r.ok){t.next=10;break}throw c=new Error(o.message||"Failed fetch requests"),c;case 10:for(s in i=[],a=null,o){if(o[s].words)for(u in a={topic:o[s].topic,words:[],id:s},o[s].words)a.words[u]=o[s].words[u];else a={topic:o[s].topic,words:[],id:s};i.push(a)}e.commit("addTopic",i);case 14:case"end":return t.stop()}}),t)})))()},deleteTopic:function(e,t){return Object(Ie["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.rootGetters["auth/userId"],n.next=3,fetch("https://flashcard-1607b-default-rtdb.europe-west1.firebasedatabase.app/data/".concat(r,"/").concat(t,".json?"),{method:"DELETE"}).then(setTimeout((function(){e.dispatch("fetchTopics")}),200));case 3:case"end":return n.stop()}}),n)})))()},addWord:function(e,t){return Object(Ie["a"])(regeneratorRuntime.mark((function n(){var r,o,c,i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.rootGetters["auth/userId"],n.next=3,fetch("https://flashcard-1607b-default-rtdb.europe-west1.firebasedatabase.app/data/".concat(r,"/").concat(t.id,"/words.json?"),{method:"POST",body:JSON.stringify(t.word)});case 3:return o=n.sent,n.next=6,o.json();case 6:if(c=n.sent,o.ok){n.next=10;break}throw i=new Error(c.message||"Failed fetch requests"),i;case 10:a={id:c.name,word:t.word,id2:t.id},e.commit("addWord",a);case 12:case"end":return n.stop()}}),n)})))()},deleteWord:function(e,t){return Object(Ie["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.rootGetters["auth/userId"],n.next=3,fetch("https://flashcard-1607b-default-rtdb.europe-west1.firebasedatabase.app/data/".concat(r,"/").concat(t.topicId,"/words/").concat(t.wordId,".json?"),{method:"DELETE"}).then(setTimeout((function(){e.dispatch("fetchTopics")}),200));case 3:case"end":return n.stop()}}),n)})))()}},getters:{topics:function(e){return e.data},topicsLoaded:function(e,t){return t.topics}}}),Rt=Object(St["a"])({modules:{auth:Vt,words:At}}),Bt=Rt,Pt=n("2a59"),$t=n.n(Pt),Ut=n("e55b"),Et=n.n(Ut),Jt=n("ce5f"),Mt=n.n(Jt),Gt=n("f963"),Lt=n.n(Gt),Ft=n("31b0"),Nt=n.n(Ft),qt=n("8467"),Zt=n.n(qt),Ht=n("888e"),Kt=n.n(Ht),Qt=function(e){return Object(r["w"])("data-v-0ba61cc0"),e=e(),Object(r["u"])(),e},Xt={class:"main"},Yt={class:"baseCardContent"},en=Qt((function(){return Object(r["h"])("ul",null,[Object(r["h"])("h1",null,"Dołącz do nas juz dzisiaj!"),Object(r["h"])("li",null,[Object(r["h"])("h3",null,"90% użytkowników poprawia swoje wyniki w nauce")]),Object(r["h"])("li",null,[Object(r["h"])("h3",null," Poprzez naukę systemem powtórek zapamiętujemy nowe słowa szybciej i na dłużej! ")]),Object(r["h"])("li",null,[Object(r["h"])("h3",null,"Bardzo prosta obsługa aplikacji")]),Object(r["h"])("li",null,[Object(r["h"])("h3",null," Dostępność na różnych urządzeniach zsynchronizowanych z twoim kontem pozwala rozpocząć naukę w domu przy komputerze i kontynuować ją np. za pomocą aplikacji mobilnej w czasie podróży autobusem ")])],-1)})),tn={class:"joinButtons"},nn=Object(r["i"])("Zaloguj"),rn=Object(r["i"])("Dołącz do nas"),on=Qt((function(){return Object(r["h"])("div",null,[Object(r["h"])("img",{src:$t.a,class:"responsive",alt:""})],-1)})),cn=Qt((function(){return Object(r["h"])("h1",{id:"title"},"Zobacz jak wygląda nasz serwis!",-1)})),an={id:"topicDisplay",ref:"sectionFirst",class:"img left sectionFirst",src:Et.a},sn=Qt((function(){return Object(r["h"])("div",{class:"text sectionFirst",id:"topicDesc"},[Object(r["h"])("h3",null," Zdjęcia pokazją wygląd komponentu osbługującego wybór tematu fiszek, które chcesz rozwiązywać. Poprzez kliknięcie w temat przechodzimy do rozwiązywania ")],-1)})),un=Qt((function(){return Object(r["h"])("img",{id:"topicMobileDisplay",class:"img right sectionFirst",src:Mt.a},null,-1)})),ln={id:"AnswerDisplay",ref:"sectionSecond",class:"img left sectionSecond",src:Lt.a},dn=Qt((function(){return Object(r["h"])("div",{id:"desc2",class:"text sectionSecond"},[Object(r["h"])("h3",null," Po wyborze tematu przechodzimy do rozwiązywania. Jest to bajecznie proste, wystarczy wpisać swoją odpowiedź i kliknąć dalej. Jeśli odpowiedź jest błędna aplikacja nas o tym powiadomi, a gdy nie znamy odpowiedzi możemy zobaczyć tłumaczenie. Po przejściu przez wszystkie słowa w temacie dostaniemy wynik, który powie nam ile słów znaliśmy ")],-1)})),bn=Qt((function(){return Object(r["h"])("img",{id:"AnswerMobileDisplay",class:"img right sectionSecond",src:Nt.a},null,-1)})),pn={id:"flashcardsDisplay",class:"img left sectionThird",ref:"sectionThird",src:Zt.a},jn=Qt((function(){return Object(r["h"])("div",{id:"flashcardsDesc",class:"text sectionThird"},[Object(r["h"])("h3",null," Aplikacja polega na samodzielnym dodwaniu tematów oraz słów i tłumaczeń. Taki model pozwala użytkownikowi na perfekcyjne dopasowanie zawartości do poziomu. Można dowolnie konfigurować oraz zmieniać zawartość tematów w każym momencie ")],-1)})),hn=Qt((function(){return Object(r["h"])("img",{id:"flashcardsMobileDisplay",class:"img right sectionThird",src:Kt.a},null,-1)}));function fn(e,t,n,o,c,i){var a=Object(r["B"])("base-button"),s=Object(r["B"])("base-card");return Object(r["t"])(),Object(r["g"])("div",Xt,[Object(r["j"])(s,{class:"baseInfo"},{default:Object(r["I"])((function(){return[Object(r["h"])("div",Yt,[Object(r["h"])("div",null,[en,Object(r["h"])("div",tn,[Object(r["j"])(a,{onClick:i.login},{default:Object(r["I"])((function(){return[nn]})),_:1},8,["onClick"]),Object(r["j"])(a,{onClick:i.register},{default:Object(r["I"])((function(){return[rn]})),_:1},8,["onClick"])])]),on])]})),_:1}),cn,Object(r["h"])("img",an,null,512),sn,un,Object(r["h"])("img",ln,null,512),dn,bn,Object(r["h"])("img",pn,null,512),jn,hn])}var On=n("cffa"),wn=n("1dac"),mn={mounted:function(){On["a"].registerPlugin(wn["a"]),On["a"].to(".sectionFirst",{scrollTrigger:{trigger:this.$refs.sectionFirst,start:"top 60%"},keyframes:[{opacity:0,duration:0},{opacity:100,duration:100}]}),On["a"].to(".sectionSecond",{scrollTrigger:{trigger:this.$refs.sectionSecond,start:"top 60%"},keyframes:[{opacity:0,duration:0},{opacity:100,duration:100}]}),On["a"].to(".sectionThird",{scrollTrigger:{trigger:this.$refs.sectionThird,start:"top 60%"},keyframes:[{opacity:0,duration:0},{opacity:100,duration:100}]})},methods:{login:function(){this.$router.replace("login")},register:function(){this.$router.replace("register")}}};n("0702");const gn=R()(mn,[["render",fn],["__scopeId","data-v-0ba61cc0"]]);var vn=gn,yn=Object(J["a"])({history:Object(J["b"])(),routes:[{path:"/",redirect:"/home"},{name:"home",path:"/home",component:vn},{name:"answer",path:"/answer",component:We,meta:{requiresAuth:!0}},{name:"register",path:"/register",component:Ze},{name:"login",path:"/login",component:lt,meta:{requiresUnAuth:!0}},{name:"flashcards",path:"/flashcards",component:Dt,meta:{requiresAuth:!0}},{path:"/:notFound(.*)",component:vn}],linkActiveClass:"active"});function kn(e,t,n,o,c,i){return Object(r["t"])(),Object(r["g"])("button",{class:Object(r["p"])(n.mode)},[Object(r["A"])(e.$slots,"default",{},void 0,!0)],2)}yn.beforeEach((function(e,t,n){e.meta.requiresAuth&&!Bt.getters["auth/isAuthenticated"]?n("/login"):e.meta.requiresUnAuth&&Bt.getters["auth/isAuthenticated"]?n("/answer"):n()}));var In={props:{mode:{type:String,required:!1,default:null}}};n("4e34");const zn=R()(In,[["render",kn],["__scopeId","data-v-41dbbc69"]]);var Tn=zn,xn=Object(r["d"])(E);xn.component("base-card",Fe),xn.component("base-button",Tn),xn.use(Bt),xn.use(yn),xn.mount("#app")},"63cc":function(e,t,n){},"66cd":function(e,t,n){},6969:function(e,t,n){},"6b3e":function(e,t,n){"use strict";n("66cd")},"6b72":function(e,t,n){"use strict";n("6969")},8467:function(e,t,n){e.exports=n.p+"img/FlashcardsDisplay.5a3f68e9.jpg"},"888e":function(e,t,n){e.exports=n.p+"img/FlashcardsMobileDisplay.83d3bab8.jpg"},"8fe7":function(e,t,n){},"9b0c":function(e,t,n){},abba:function(e,t,n){},bada:function(e,t,n){"use strict";n("8fe7")},c569:function(e,t,n){},c645:function(e,t,n){},ce5f:function(e,t,n){e.exports=n.p+"img/TopicMobileDisplay.f0ae2161.jpg"},d6bc:function(e,t,n){},d9fd:function(e,t,n){"use strict";n("d6bc")},e36e:function(e,t,n){},e425:function(e,t,n){"use strict";n("63cc")},e55b:function(e,t,n){e.exports=n.p+"img/TopicDisplay.ff7a302e.jpg"},f586:function(e,t,n){},f963:function(e,t,n){e.exports=n.p+"img/AnswerDisplay.6b9cc02f.jpg"}});
//# sourceMappingURL=app.81a53ce3.js.map