(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{166:function(e,a,t){},167:function(e,a,t){},170:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(60),i=t.n(l),s=(t(70),t(28)),r=t(8),o=t(16),u=t(23),m=t(24),h=t(26),d=t(25),p=t(27),b=t(15),f=(t(165),t(58),function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(h.a)(this,Object(d.a)(a).call(this,e))).state={barData:{labels:[],datasets:[{data:[],backgroundColor:"#03A9F4"}]},barDataOptions:{maintainAspectRatio:!1,responsive:!0,legend:{display:!1},scales:{xAxes:[{gridLines:{color:"rgba(0, 0, 0, 0)"}}],yAxes:[{ticks:{beginAtZero:!0},gridLines:{color:"rgba(0, 0, 0, 0)"}}]}},pieData:{labels:[],datasets:[{options:{labels:{userPointStyle:!0}},data:[],backgroundColor:["#DBECF8","#2C82BE","#32B88B"]}]},pieDataOptions:{maintainAspectRatio:!1,responsive:!0,legend:{display:!0,labels:{boxWidth:8,usePointStyle:!0}}}},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.fetchBarData(),this.fetchPieData()}},{key:"fetchBarData",value:function(){var e=this;fetch("https://private-afe609-testefront.apiary-mock.com/anual-result",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(a){var t=a.reduce(function(e,a){return e.labels.push(a.label),e.data.push(a.value),e},{labels:[],data:[]}),n=t.labels,c=t.data;e.setState({barData:{labels:Object(o.a)(n),datasets:[{data:Object(o.a)(c)}]}})})}},{key:"fetchPieData",value:function(){var e=this;this.state.body;fetch("https://private-afe609-testefront.apiary-mock.com/anual-percentage",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(a){console.log("pieChartObj",a);var t=a.reduce(function(e,a){return e.labels.push(a.label),e.data.push(a.value),e},{labels:[],data:[]}),n=t.labels,c=t.data;e.setState({pieData:{labels:Object(o.a)(n),datasets:[{data:Object(o.a)(c),options:{legend:{display:!0}}}]}})})}},{key:"render",value:function(){var e=this.state,a=e.barData,t=e.barDataOptions,n=e.pieDataOptions;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container",id:"page1"},c.a.createElement("h1",{className:"page_title"},"Page 1"),c.a.createElement("div",{className:"bar-chart-container"},c.a.createElement("div",{className:"bar-chart"},c.a.createElement("h3",{className:"bar-chart-title"},"BARS CHART"),c.a.createElement(b.a,{data:a,options:t})),c.a.createElement("div",{className:"bar-chart"},c.a.createElement("h3",{className:"bar-chart-title"},"PIE CHART"),c.a.createElement(b.c,{data:this.state.pieData,options:n})))))}}]),a}(n.Component)),v=t(64),E=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(h.a)(this,Object(d.a)(a).call(this,e))).state={lineData:{labels:[],datasets:[]},lineOptions:{maintainAspectRatio:!1,responsive:!0,legend:{display:!0,labels:{boxWidth:8,usePointStyle:!0}}}},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.fetchLineData()}},{key:"fetchLineData",value:function(){var e=this,a={fill:!1,lineTension:0},t=["#b55be3","#444c97"];this.fetchChartData().then(function(n){var c=0,l=e.state.lineData;Object.keys(n).forEach(function(e,i){var s=n[e];c=s.length,l.datasets.push(Object(v.a)({label:e,data:[],borderColor:t[i]},a)),s.forEach(function(e){l.labels.length<c&&l.labels.push(e.label),l.datasets[i].data.push(e.value)})}),e.setState(l)}).catch(function(e){console.log(e)})}},{key:"fetchChartData",value:function(){return new Promise(function(e,a){fetch("https://private-afe609-testefront.apiary-mock.com/time-data",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(a){e(a.json())}).catch(function(e){a(e)})})}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container",id:"page2"},c.a.createElement("h1",{className:"page_title"},"Page 2"),c.a.createElement("div",{className:"bar-chart-container"},c.a.createElement("div",{className:"line-chart"},c.a.createElement("h3",{className:"bar-chart-title"},"LINE CHART"),c.a.createElement(b.b,{data:this.state.lineData,options:this.state.lineOptions})))))}}]),a}(n.Component),g=(t(166),t(167),function(){return c.a.createElement("div",{className:"content"},c.a.createElement(s.a,null,c.a.createElement("section",{className:"sidebar-big",id:"sidebar"},c.a.createElement("h1",{className:"sidebar-big_title"},"Semantix"),c.a.createElement("nav",{className:"nav-group"},c.a.createElement("div",null,c.a.createElement(s.b,{to:"/page1",className:"nav-link",activeClassName:"active"},c.a.createElement("span",{id:"page1-icon",className:"icon"}),"Page 1")),c.a.createElement("div",null,c.a.createElement(s.b,{to:"/page2",className:"nav-link",activeClassName:"active"},c.a.createElement("span",{id:"page2-icon",className:"icon"}),"Page 2")))),c.a.createElement(r.a,{path:"/page1/",component:f}),c.a.createElement(r.a,{path:"/page2/",component:E})))}),y=function(e){e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement(g,null)))};var D=function(){return c.a.createElement(y,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},58:function(e,a,t){},65:function(e,a,t){e.exports=t(170)},70:function(e,a,t){}},[[65,1,2]]]);
//# sourceMappingURL=main.bc16b6be.chunk.js.map