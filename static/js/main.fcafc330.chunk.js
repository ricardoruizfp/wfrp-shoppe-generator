(this["webpackJsonpwfrp-shoppe-generator"]=this["webpackJsonpwfrp-shoppe-generator"]||[]).push([[0],[,,,,,,,,,,function(e,a,n){e.exports=n(22)},,,,,function(e,a,n){},,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),l=n(3),o=n.n(l),r=(n(15),n(1)),c=n.n(r),s=n(4),u=n(5),p=n(6),m=n(7),v=n(9),g=n(8);n(17);var b=function(e){var a=e.options,n=e.defaultValue,t=e.label;return i.a.createElement("div",{className:"form-dropdown"},i.a.createElement("b",null,t),i.a.createElement("select",{defaultValue:n},a.map((function(e){return i.a.createElement("option",{key:e.value+1,value:e.value},e.label)}))))};var h=[{label:"Below 100",value:"low"},{label:"Below 1,000",value:"average"},{label:"Below 10,000",value:"high"},{label:"10,000 or more",value:"vhigh"}];var f=function(){return i.a.createElement(b,{options:h,defaultValue:"average",label:"Select the location's Population"})};n(18);var y=function(e){var a=e.label,n=e.type,t=e.placeholder,l=e.onChange,o=e.stateName;return i.a.createElement("div",{className:"form-input input-".concat(o)},i.a.createElement("b",null,a),i.a.createElement("input",{placeholder:t,type:n,onChange:function(e){return l(o,"number"===n?e.target.valueAsNumber:e.target.value)}}))};n(19);var d=function(e){var a=e.onClearPress,n=e.gossipScore,t=e.gossipRoll,l=e.onRollPress,o=e.onChange;return i.a.createElement("div",{className:"main-form"},i.a.createElement(f,null),i.a.createElement(y,{label:"Input Gossip score...",stateName:"gossipScore",type:"number",value:n,onChange:o}),i.a.createElement(y,{label:"Input Gossip roll...",stateName:"gossipRoll",type:"number",value:t,onChange:o}),i.a.createElement("button",{onClick:l},"Roll!"),i.a.createElement("button",{onClick:a},"Clear"))};n(20);var E=function(e){var a=e.availableItems,n=0;return i.a.createElement("div",{className:"results"},a.map((function(e){return i.a.createElement("p",{key:n++},e.name)})))},S=(n(21),[{name:"Buckler",price:2,coin:"g",icon:"",availability:4,page:"108"},{name:"Dagger",price:1,coin:"g",icon:"",availability:5,page:"108"},{name:"Demilance (Cavalry Spear)",price:20,coin:"g",icon:"",availability:3,page:"108"},{name:"Flail",price:15,coin:"g",icon:"",availability:3,page:"108"},{name:"Foil",price:18,coin:"g",icon:"",availability:2,page:"108"},{name:"Gauntlet/Knuckle-duster",price:1,coin:"g",icon:"",availability:5,page:"108"},{name:"Great Weapon",price:20,coin:"g",icon:"",availability:4,page:"108"},{name:"Halberd",price:15,coin:"g",icon:"",availability:5,page:"108"},{name:"Hand Weapon",price:10,coin:"g",icon:"",availability:5,page:"108"},{name:"Lance",price:15,coin:"g",icon:"",availability:2,page:"108"},{name:"Main Gauche",price:4,coin:"g",icon:"",availability:3,page:"108"},{name:"Morning Star",price:15,coin:"g",icon:"",availability:3,page:"108"},{name:"Quarter Staff",price:3,coin:"s",icon:"",availability:6,page:"108"},{name:"Rapier",price:18,coin:"g",icon:"",availability:3,page:"108"},{name:"Shield",price:10,coin:"g",icon:"",availability:5,page:"108"},{name:"Spear",price:10,coin:"g",icon:"",availability:5,page:"108"},{name:"Sword-breaker",price:5,coin:"g",icon:"",availability:3,page:"108"}]),k=function(e){Object(v.a)(n,e);var a=Object(g.a)(n);function n(){var e;return Object(p.a)(this,n),(e=a.call(this)).onRollPress=function(){var a=e.state,n=a.gossipScore,t=a.gossipRoll,i=function(e,a,n){var t=[];return e.forEach((function(e){switch(e.availability){case 1:a-30>=n&&t.push(e);break;case 2:a-20>=n&&t.push(e);break;case 3:a-10>=n&&t.push(e);break;case 4:a>=n&&t.push(e);break;case 5:a+10>=n&&t.push(e);break;case 6:a+20>=n&&t.push(e);break;case 7:a+30>=n&&t.push(e)}})),t}(S,n,t);e.onSetAvailableItems(i)},e.onChange=function(a,n){e.setState(Object(u.a)({},a,n))},e.onClearPress=function(){e.setState({availableItems:[]})},e.onSetAvailableItems=function(){var a=Object(s.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.setState({availableItems:n});case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.state={availableItems:[],gossipScore:0,gossipRoll:0},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,a=e.availableItems,n=e.gossipScore,t=e.gossipRoll;return i.a.createElement("div",{className:"app"},i.a.createElement(d,{gossipScore:n,gossipRoll:t,onRollPress:this.onRollPress,onClearPress:this.onClearPress,onChange:this.onChange,onSetAvailableItems:this.onSetAvailableItems}),a.length>0&&i.a.createElement(E,{availableItems:a}))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.fcafc330.chunk.js.map