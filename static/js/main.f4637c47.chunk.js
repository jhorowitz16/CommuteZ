(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(9),c=n.n(i),r=(n(16),n(17),n(2)),l=n(3),s=n(5),u=n(4),m=n(6),v=(n(18),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={time:(new Date).toLocaleString()},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){var e=(new Date).toLocaleString();this.setState({time:e,formattedTime:this.formatTime((new Date).toLocaleString())})}},{key:"formatTime",value:function(e){return new Date(e).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"})}},{key:"render",value:function(){return o.a.createElement("div",{className:"clock"},o.a.createElement("h1",{className:"clock__text"}," ",this.state.formattedTime," "),o.a.createElement("h5",{className:"clock__rawtext"}," ",this.state.time," "))}}]),t}(a.Component)),d=(n(19),n(7)),h=["Home","MV Caltrain","SF Caltrain","Work"],f=function(e){function t(e){var n;return Object(r.a)(this,t),n=Object(s.a)(this,Object(u.a)(t).call(this,e)),d.a.initialize("UA-128940867-3"),n.state={prevClick:null},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e){return this.state.prevClick!==e.prevClick}},{key:"log",value:function(e){var t=this;return function(){t.sendGA("logLocation",h[e],(new Date).toLocaleString()),console.log(e),console.log(h[e]),t.setState({prevClick:h[e]})}}},{key:"sendGA",value:function(e,t,n){console.log(e+" "+t+" "+n),d.a.event({category:e,action:t,label:n})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"dashboard"},o.a.createElement("div",{className:"dashboard__buttons"},[0,1,2,3].map(function(t){return o.a.createElement("div",null,o.a.createElement("button",{onClick:e.log(t)},o.a.createElement("span",null,h[t])))})),o.a.createElement("div",{className:"dashboard__action"},this.state.prevClick))}}]),t}(a.Component);var k=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(v,null),o.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.f4637c47.chunk.js.map