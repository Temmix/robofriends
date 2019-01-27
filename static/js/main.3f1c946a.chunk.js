(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(34)},28:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),i=n(2),s=n(7),l=n(17),u=n(18),h=(n(28),n(30),n(4)),d=n(5),b=n(8),E=n(6),m=n(9),p=function(){return function(e){var t;e({type:"REQUEST_ROBOTS_PENDING"}),(t="https://jsonplaceholder.typicode.com/users",fetch(t).then(function(e){return e.json()})).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})}},g=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(a,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},f=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement(g,{key:t,id:e.id,email:e.email,name:e.name})}))},O=function(e){var t=e.searchChanged;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robofriends",onChange:t}))},v=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid white",height:"800px"}},e.children)},R=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(b.a)(this,Object(E.a)(t).call(this,e))).state={hasError:!1},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Opps something went wrong "):this.props.children}}]),t}(a.Component),S=(n(32),function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.robots,n=e.searchField,a=e.onSearchChange,o=e.isPending,c=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return o?r.a.createElement("h1",null,"Loading ..."):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(O,{searchChanged:a}),r.a.createElement(v,null,r.a.createElement(R,null,r.a.createElement(f,{robots:c}))))}}]),t}(a.Component)),w=Object(s.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestRobots:function(){return e(p())}}})(S);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y={searchField:""},j={robots:[],isPending:!0},C=Object(u.createLogger)(),_=Object(i.c)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:t.payload});default:return e}}}),T=Object(i.d)(_,Object(i.a)(l.a,C));c.a.render(r.a.createElement(s.a,{store:T},r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.3f1c946a.chunk.js.map