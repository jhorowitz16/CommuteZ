(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(2),r=n.n(i),c=(n(14),n(15),n(3)),l=n(4),s=n(6),u=n(5),m=n(7),h=(n(16),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={time:(new Date).toLocaleString()},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){var e=(new Date).toLocaleString();this.setState({time:e,formattedTime:this.formatTime((new Date).toLocaleString())})}},{key:"formatTime",value:function(e){return new Date(e).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"})}},{key:"render",value:function(){return o.a.createElement("div",{className:"clock"},o.a.createElement("h1",{className:"clock__text"}," ",this.state.formattedTime," "),o.a.createElement("h5",{className:"clock__rawtext"}," ",this.state.time," "))}}]),t}(a.Component));var v=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.6a0b405f.chunk.js.map