(this.webpackJsonpbattleship=this.webpackJsonpbattleship||[]).push([[0],{10:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(2),o=r.n(i),s=(r(9),r(3)),l=function(e){e.square;var t=e.color;return a.a.createElement("div",{style:{width:20,height:20,border:"1px solid gray",backgroundColor:t}})},c=function(e){var t=e.squares,r=e.ships,n=e.horizontals,i=e.verticals,o=function(e){var t="#ccc";return r.forEach((function(r){return Object.values(r.ship).forEach((function(n){n.x===e.x&&n.y===e.y&&(4===r.length&&(t="#263238"),3===r.length&&(t="#37474f"),2===r.length&&(t="#455a64"),1===r.length&&(t="#546e7a"))}))})),t};return a.a.createElement("div",{style:{margin:"auto",width:264}},a.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(11, 22px)"}},a.a.createElement("span",null),n.map((function(e){return a.a.createElement("div",{key:e,style:{width:22,height:22,textAlign:"center"}},e)}))),a.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"22px auto"}},a.a.createElement("div",null,i.map((function(e){return a.a.createElement("div",{key:e,style:{width:22,height:22,textAlign:"center"}},e)}))),a.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(10, 22px)"}},t.map((function(e){return a.a.createElement(l,{key:e.id,square:e,color:o(e)})})))))},u=["up","right","down","left"],h=[],f=0,v=0,d=function(e){if(!(e.x<0||e.x>f||e.y<0||e.y>v)){for(var t=0;t<h.length;t++)if(h[t].x===e.x&&h[t].y===e.y)return;h.push(e)}},p=function(e){for(var t=-1;t<=1;t++)for(var r=-1;r<=1;r++)d({x:e.x+r,y:e.y+t})},g=function(e){if(e.x<0||e.x>f||e.y<0||e.y>v)return!1;for(var t=0;t<h.length;t++)if(h[t].x===e.x&&h[t].y===e.y)return!1;return!0},m=function(e,t,r){var n={x:r?e.ship[e.firstRevers?0:e.ship.length-1].x+t:e.ship[0].x,y:r?e.ship[0].y:e.ship[e.firstRevers?0:e.ship.length-1].y+t,isHit:!1};e.firstRevers=!1,g(n)?e.ship.push(n):e.revers?e.changedAngle?e.break=!0:(e.revers=!1,e.vector=function(e){var t=u.findIndex((function(t){return t===e})),r=t>1?t-2:t+2,n=[0,1,2,3].filter((function(e){return e!==t&&e!==r}));return Math.random()<.5?u[n[0]]:u[n[1]]}(e.vector),e.changedAngle=!0,e.ship=[e.ship[0]]):(e.revers=!0,e.firstRevers=!0,e.vector=function(e){var t=u.findIndex((function(t){return t===e}));return t>1?u[t-2]:u[t+2]}(e.vector))},y=function(e){switch(e.vector){case u[0]:m(e,-1,!1);break;case u[1]:m(e,1,!0);break;case u[2]:m(e,1,!1);break;case u[3]:m(e,-1,!0)}},x=function e(){var t={x:Math.floor(Math.random()*f),y:Math.floor(Math.random()*v),isHit:!1};return g(t)?t:e()},E=function(e,t,r){var n=function e(t){for(var r={revers:!1,firstRevers:!1,vector:u[Math.floor(4*Math.random())],changedAngle:!1,ship:[x()],break:!1};r.ship.length<t;)if(y(r),r.break)return e(t);return r.ship}(t);!function(e){for(var t=0;t<e.length;t++)p(e[t])}(n),e.push({id:r,length:t,hits:0,isSunk:!1,ship:n})},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=[];if(e.forEach((function(e){f=Math.max(e.x,f),v=Math.max(e.y,v)})),r){r.sort((function(e,t){return e>t}));for(var a=0;a<r.length;a++)E(n,r[a],a)}else for(var i=t,o=1,s=0;i>0;i--,o++)for(var l=0;l<o;l++)E(n,i,s++);return h=[],f=0,v=0,n},k=function(e){var t=e.squares,r=e.maxShip,n=e.horizontals,i=e.verticals,o=a.a.useState(b(t,r)),l=Object(s.a)(o,2),u=l[0],h=l[1];return a.a.createElement("div",null,a.a.createElement(c,{squares:t,ships:u,horizontals:n,verticals:i}),a.a.createElement("div",{style:{margin:"auto",paddingTop:20,width:220}},a.a.createElement("button",{style:{cursor:"pointer",fontSize:18,backgroundColor:"#ddd",outline:0,border:"1px solid #000"},onClick:function(){h(b(t,r))}},"get new random battleships")))},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=[];if(("number"!==typeof e||e<10||e>100)&&(e=10),t&&e<=26){for(var n="abcdefghijklmnopqrstuvwxyz",a=0;a<e;a++)r.push(n[a]);return r}if(t){e+=100;for(var i=101;i<=e;i++)r.push(String(i));return r}for(var o=1;o<=e;o++)r.push(String(o));return r},M=function(){var e=w(10,!0),t=w(10),r=function(e,t){for(var r=[],n=0;n<t;n++)for(var a=0;a<e;a++){var i={x:a,y:n,id:r.length};r.push(i)}return r}(10,10);return a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{squares:r,maxShip:4,horizontals:e,verticals:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,r){e.exports=r(10)},9:function(e,t,r){}},[[4,1,2]]]);
//# sourceMappingURL=main.e1ff9e5a.chunk.js.map