(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(t,e,a){t.exports=a.p+"static/media/1.3ee16d09.md"},109:function(t,e,a){t.exports=a.p+"static/media/1.2521b81c.md"},110:function(t,e,a){t.exports=a.p+"static/media/test1.75250e6a.md"},111:function(t,e,a){t.exports=a.p+"static/media/submit1.00ff6f5c.md"},112:function(t,e,a){t.exports=a.p+"static/media/1.1.0e3da01e.md"},113:function(t,e,a){t.exports=a.p+"static/media/1.2.fc6921e6.md"},114:function(t,e,a){t.exports=a.p+"static/media/1.3.c51d0e5e.md"},115:function(t,e,a){t.exports=a.p+"static/media/submit2.663b4402.md"},116:function(t,e,a){t.exports=a.p+"static/media/2.1.7b2b7368.md"},117:function(t,e,a){t.exports=a.p+"static/media/2.2.8f9fa10b.md"},118:function(t,e,a){t.exports=a.p+"static/media/2.3.fa332d27.md"},119:function(t,e,a){t.exports=a.p+"static/media/2.4.0d3f9e59.md"},120:function(t,e,a){t.exports=a.p+"static/media/2.5.b377abd1.md"},121:function(t,e,a){t.exports=a.p+"static/media/2.6.22c0eae3.md"},122:function(t,e,a){t.exports=a.p+"static/media/2.7a6bbe06.md"},123:function(t,e,a){t.exports=a.p+"static/media/2.c690d494.md"},124:function(t,e,a){t.exports=a.p+"static/media/test2.f5f3028d.md"},128:function(t,e,a){t.exports=a(294)},133:function(t,e,a){},148:function(t,e){},150:function(t,e){},292:function(t,e,a){t.exports=a.p+"static/media/theme.77c2d2ac.png"},294:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(29),c=a.n(i),o=(a(133),a(19)),r=a(20),u=a(23),l=a(21),m=a(22),h=(a(135),a(58)),p=a.n(h),d=a(9),f=a.n(d),b=(a(250),a(55),a(41)),g=a.n(b),v=(a(56),a(57),a(6)),E=a(5),y=(a(90),a(60)),j=a.n(y),x=a(42),O=a.n(x),w=a(31),S=function(t){function e(){var t;return Object(o.a)(this,e),(t=Object(u.a)(this,Object(l.a)(e).call(this))).state={show:!1,judge:""},t}return Object(m.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch(this.props.judge).then(function(t){return t.text()}).then(function(e){t.setState({judge:e})})}},{key:"render",value:function(){var t=this,e=s.a.createElement(E.a,{onClick:function(){t.setState({show:!0})}},"this");return 1==this.props.bstate&&(e=s.a.createElement(E.a,{onClick:function(){t.setState({show:!0})},className:"btn-secondary",style:{"margin-left":"3%"}},"Test",this.props.index)),2==this.props.bstate&&(e=s.a.createElement(E.a,{onClick:function(){t.setState({show:!0})},className:"btn-success",style:{"margin-left":"3%"}},"O")),3==this.props.bstate&&(e=s.a.createElement(E.a,{onClick:function(){t.setState({show:!0})},className:"btn-danger",style:{"margin-left":"3%"}},"X")),s.a.createElement(s.a.Fragment,null,e,s.a.createElement(w.a,{size:"sm",show:this.state.show,onHide:function(){t.setState({show:!1})},"aria-labelledby":"example-modal-sizes-title-sm"},s.a.createElement(w.a.Header,{closeButton:!0},s.a.createElement(w.a.Title,{id:"example-modal-sizes-title-sm"},"Test ",this.props.index)),s.a.createElement(w.a.Body,null,this.state.judge)))}}]),e}(n.Component),k=a(107),C=a.n(k),N=function(){return s.a.createElement(C.a,{width:2e3,height:500})},I=function(t){function e(){var t;return Object(o.a)(this,e),(t=Object(u.a)(this,Object(l.a)(e).call(this))).state={mycode:"",status:0,output:"",loading:!1,summiting:!1,A:[],inputstate:!1,myinput:"",correct:!1,done:!1},t.onchange=t.onchange.bind(Object(v.a)(Object(v.a)(t))),t.handleCompile=t.handleCompile.bind(Object(v.a)(Object(v.a)(t))),t.changeOutput=t.changeOutput.bind(Object(v.a)(Object(v.a)(t))),t.changeInput=t.changeInput.bind(Object(v.a)(Object(v.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(v.a)(Object(v.a)(t))),t.inputstateChange=t.inputstateChange.bind(Object(v.a)(Object(v.a)(t))),t}return Object(m.a)(e,t),Object(r.a)(e,[{key:"componentDidUpdate",value:function(t,e){var a=this;t.code!=this.props.code&&fetch(this.props.content).then(function(t){return t.text()}).then(function(t){return a.setState({mycode:a.props.code})})}},{key:"inputstateChange",value:function(){var t=!this.state.inputstate;this.setState({inputstate:t})}},{key:"componentDidMount",value:function(){this.setState({mycode:this.props.code})}},{key:"onchange",value:function(t){this.setState({mycode:t})}},{key:"changeOutput",value:function(t){this.setState({output:t.target.value})}},{key:"changeInput",value:function(t){this.setState({myinput:t.target.value})}},{key:"handleCompile",value:function(){var t=this;this.setState({loading:!0}),O.a.post("https://frozen-atoll-01566.herokuapp.com/api/run",{lang:"java",code:this.state.mycode+this.props.test,input:this.state.myinput}).then(function(e){var a=e.data,n=parseInt(a.message.status);console.log(e),t.setState({status:n,output:a.message,loading:!1,inputstate:!1})})}},{key:"handleSubmit",value:function(){var t=this;this.setState({summiting:!0}),O.a.post("https://frozen-atoll-01566.herokuapp.com/api/submit",{lang:"java",code:this.state.mycode+this.props.submit}).then(function(e){var a=0,n=e.data,s=parseInt(n.message.status),i=n.message.split("\n"),c=!1,o=[],r=[],u=t.props.testcase;i.length<u&&(u=0);for(var l=i.length-1;l>=0;l--)0!=i[l].length&&(u>0?("t"==i[l].charAt(0)&&a++,o.push(i[l]),u--):r.push(i[l]));a==t.props.testcase?(c=!0,j()("Congratulation!").then(function(e){e&&t.setState({correct:!1})})):j()({text:"You are not YOUXIU enough!",icon:"warning",dangerMode:!0}),t.setState({status:s,output:r.reverse().join("\n"),summiting:!1,inputstate:!1,done:!0,A:o.reverse(),correct:c})})}},{key:"render",value:function(){var t=s.a.createElement(E.a,{className:"outline-primary"},s.a.createElement("i",{class:"fa fa-refresh fa-spin"})),e=s.a.createElement(E.a,{className:"btn-info",style:{margin:"5%"}},s.a.createElement("i",{class:"fa fa-refresh fa-spin"})),a="",n="";this.state.inputstate?(a=s.a.createElement(E.a,{className:"btn-success ",style:{margin:"5%"},onClick:this.inputstateChange},"My output"),n="Input Your Data please!"):(a=s.a.createElement(E.a,{className:"btn-success",style:{margin:"5%"},onClick:this.inputstateChange},"Input"),n="Here is Your Output!");var i=s.a.createElement("textarea",{className:"output",name:"code",type:"textarea",componentClass:"textarea",rows:"5",cols:"100",width:200,value:this.state.output,onChange:this.changeOutput});this.state.inputstate&&(i=s.a.createElement("textarea",{className:"output",name:"code",type:"textarea",componentClass:"textarea",rows:"5",cols:"100",width:200,value:this.state.myinput,onChange:this.changeInput}));for(var c,o=[],r=0;r<this.props.testcase;r++)this.state.done?(console.log(this.state.A),null!=this.state.A[r]&&this.state.A[r].length>=1&&"t"==this.state.A[r].charAt(0)?o.push(s.a.createElement(S,{bstate:2,index:r,judge:this.props.judgecase[r]})):o.push(s.a.createElement(S,{bstate:3,index:r,judge:this.props.judgecase[r]}))):o.push(s.a.createElement(S,{bstate:1,index:r,judge:this.props.judgecase[r]}));return this.state.loading||(t=this.state.summiting?s.a.createElement(E.a,{className:"outline-primary"},"Compile"):s.a.createElement(E.a,{className:"outline-primary",onClick:this.handleCompile},"Compile")),this.state.summiting||(e=this.state.loading?s.a.createElement(E.a,{className:"btn-info",style:{margin:"5%"}},"Submit"):s.a.createElement(E.a,{className:"btn-info",style:{margin:"5%"},onClick:this.handleSubmit},"Submit")),this.state.correct&&(c=s.a.createElement(N,null)),s.a.createElement("div",null,c,o,s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(g.a,{height:500,width:750,mode:"java",theme:"github",name:"blah2",onChange:this.onchange,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:this.state.mycode,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!1,showLineNumbers:!0,tabSize:2}}),a,s.a.createElement("br",null),n,i,s.a.createElement("br",null),t,e)}}]),e}(n.Component),T=(a(275),a(292),a(108)),A=a.n(T),H=a(109),z=a.n(H),L=a(110),M=a.n(L),D=a(111),P=a.n(D),B=a(112),K=a.n(B),U=a(113),Y=a.n(U),J=a(114),W=a.n(J),X=a(115),q=a.n(X),F=a(116),G=a.n(F),$=a(117),Q=a.n($),R=a(118),V=a.n(R),Z=a(119),_=a.n(Z),tt=a(120),et=a.n(tt),at=a(121),nt=a.n(at),st=a(122),it=a.n(st),ct=a(123),ot=a.n(ct),rt=a(124),ut=a.n(rt),lt=[[A.a,""],[ot.a,""]],mt=[z.a,it.a],ht=["Two Sum","Present To 66"],pt=[M.a,ut.a],dt=[P.a,q.a],ft=[3,6],bt=[[K.a,Y.a,W.a],[G.a,Q.a,V.a,_.a,et.a,nt.a]],gt=function(t){function e(){return Object(o.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(vt,null))}}]),e}(n.Component),vt=function(t){function e(){var t;return Object(o.a)(this,e),(t=Object(u.a)(this,Object(l.a)(e).call(this))).state={index:0,code:null,isHome:!0},t}return Object(m.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this,e=null;return this.state.isHome&&(e=s.a.createElement("h1",{style:{"margin-left":"35%"}},"My Coding Platform")),s.a.createElement("div",null,s.a.createElement(f.a,{onSelect:function(e){if("Leetcode"==e.split(" ")[0]){var a=parseInt(e.split(" ")[1]);t.setState({isHome:!1,index:a,code:s.a.createElement(Et,{content:lt[a][0],description:mt[a],name:ht[a],test:pt[a],index:a,submit:dt[a],testcase:ft[a],input:bt[a]})})}else t.setState({index:0,code:null,isHome:!0})}},s.a.createElement(f.a.Toggle,null),s.a.createElement(f.a.Nav,{defaultSelected:"home"},s.a.createElement(d.NavItem,{eventKey:"home"},s.a.createElement(d.NavIcon,null,s.a.createElement("i",{className:"fa fa-fw fa-home",style:{fontSize:"1.75em"}})),s.a.createElement(d.NavText,null,"Home")),s.a.createElement(d.NavItem,{eventKey:"Leetcode"},s.a.createElement(d.NavIcon,null,"Problems"),s.a.createElement(d.NavItem,{eventKey:"Leetcode 0"},s.a.createElement(d.NavText,null,"1. Two sum")),s.a.createElement(d.NavItem,{eventKey:"Leetcode 1"},s.a.createElement(d.NavText,null,"2. Present To 66"))))),e,this.state.code)}}]),e}(n.Component),Et=function(t){function e(){var t;return Object(o.a)(this,e),(t=Object(u.a)(this,Object(l.a)(e).call(this))).state={markdown:"",editor:null,name:"Two Sum",description:"",test:"",submit:"",testcases:0},t}return Object(m.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch(this.props.content).then(function(t){return t.text()}).then(function(e){t.setState({markdown:e})}),fetch(this.props.description).then(function(t){return t.text()}).then(function(e){t.setState({description:e})}),fetch(this.props.test).then(function(t){return t.text()}).then(function(e){t.setState({test:e})}),fetch(this.props.submit).then(function(t){return t.text()}).then(function(e){t.setState({submit:e})})}},{key:"componentDidUpdate",value:function(t,e){var a=this;t.content!=this.props.content&&fetch(this.props.content).then(function(t){return t.text()}).then(function(t){return a.setState({markdown:t})})}},{key:"render",value:function(){this.state.markdown;return s.a.createElement("div",null,s.a.createElement("h2",{style:{width:"100%","margin-left":"45%"}},this.props.name),s.a.createElement("div",{style:{width:"100%","margin-left":"5%"},className:"code"},s.a.createElement("div",{style:{margin:"3%"}},s.a.createElement(p.a,{escapeHtml:!0,source:this.state.description}),s.a.createElement("br",null),s.a.createElement("br",null)),s.a.createElement("div",{style:{margin:"5%"}},s.a.createElement(I,{judgecase:this.props.input,testcase:this.props.testcase,code:this.state.markdown,test:this.state.test,submit:this.state.submit}),s.a.createElement("br",null))))}}]),e}(n.Component),yt=gt;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(yt,null),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},90:function(t,e,a){}},[[128,2,1]]]);
//# sourceMappingURL=main.40e5fbe3.chunk.js.map