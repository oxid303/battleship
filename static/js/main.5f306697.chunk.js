(this.webpackJsonpbattleship=this.webpackJsonpbattleship||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(8),o=n.n(i),c=(n(13),n(6)),s=n(4),u=n(2),l={getBoardWrapper:function(e,t){return{margin:"auto",width:(e+2)*t}},getXNames:function(e,t){return{display:"grid",gridTemplateColumns:"repeat(".concat(e+1,", ").concat(t,"px)")}},getYNamesAndBoard:function(e){return{display:"grid",gridTemplateColumns:"".concat(e,"px auto")}},getName:function(e){return{width:e,height:e,textAlign:"center",lineHeight:2}},canvas:{display:"block",outline:0}},f=n(0),h=function(e){var t=e.x,n=e.y,r=e.xNames,i=e.yNames,o=e.ships,c=a.a.createRef(),s=32;return a.a.useEffect((function(){var e=t*s+1,r=n*s+1,a=c.current,i=a.getContext("2d");a.width=e,a.height=r,i.fillStyle="#263238",i.fillRect(0,0,e,r),i.fillStyle="#fff",i.fillRect(1,1,e-2,r-2),i.fillStyle="#b0bec5";for(var l=1;l<t;++l)i.fillRect(l*s,1,1,r-2);for(var f=1;f<n;++f)i.fillRect(1,f*s,e-2,1);i.fillStyle="#455a64";var h,d=Object(u.a)(o);try{for(d.s();!(h=d.n()).done;){var p=h.value,b=p.x,v=p.y;i.fillRect(b*s+1,v*s+1,31,31)}}catch(j){d.e(j)}finally{d.f()}}),[t,n,o,c]),Object(f.jsxs)("div",{style:l.getBoardWrapper(t,s),children:[Object(f.jsxs)("div",{style:l.getXNames(t,s),children:[Object(f.jsx)("span",{}),r.map((function(e){return Object(f.jsx)("div",{style:l.getName(s),children:e},e)}))]}),Object(f.jsxs)("div",{style:l.getYNamesAndBoard(s),children:[Object(f.jsx)("div",{children:i.map((function(e){return Object(f.jsx)("div",{style:l.getName(s),children:e},e)}))}),Object(f.jsx)("canvas",{ref:c,style:l.canvas})]})]})},d={buttonWrapper:{margin:"auto",paddingTop:28,width:258},getButton:function(e,t){return{cursor:"pointer",fontSize:18,backgroundColor:e?"#b0bec5":t?"#cfd8dc":"#fff",outline:0,border:"1px solid #263238",width:258,height:50,transition:"0.1s"}}},p=function(e){var t=e.handleUpdate,n=a.a.useState(!1),r=Object(c.a)(n,2),i=r[0],o=r[1],s=a.a.useState(!1),u=Object(c.a)(s,2),l=u[0],h=u[1];return Object(f.jsx)("div",{children:Object(f.jsx)("div",{style:d.buttonWrapper,children:Object(f.jsx)("button",{onClick:function(){return t()},onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},onFocus:function(){return h(!0)},onBlur:function(){return h(!1)},style:d.getButton(i,l),children:"generate battleships"})})})},b=1e3,v=[-1001,-1,999,-1e3,0,b,-999,1,1001],j=function(e,t,n){var r,a=Math.max(e,t),i=Math.min(e,t),o=Math.ceil(i/3),c=Array(o).fill({line:a,shipsOnLine:0}),s=Object(u.a)(n);try{for(s.s();!(r=s.n()).done;){for(var l=r.value,f=!0,h=0;h<o;++h){var d=c[h],p=d.line,b=d.shipsOnLine;if(b*(l-1)+l<=p){c[h]={line:p-l-2,shipsOnLine:b+1},f=!1;break}}if(f)return!1}}catch(v){s.e(v)}finally{s.f()}return!0},g=function(e){if(!Array.isArray(e)||!e.length)return!1;var t,n=Object(u.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(!Number.isInteger(r)||r<1)return!1}}catch(a){n.e(a)}finally{n.f()}return!0},y=function(e,t){for(var n=1,r=[1],a=r;j(e,t,r);){a=r,r=[];for(var i=++n,o=1;i>0;--i,++o)for(var c=0;c<o;++c)r.push(i)}return a},m=function(e){e instanceof Object||(e={});var t=e,n=t.x,r=t.y,a=t.shipsSizes;return(!Number.isInteger(n)||n<1||n>100)&&(n=10),(!Number.isInteger(r)||r<1||r>100)&&(r=10),g(a)?(a=Object(s.a)(a).sort((function(e,t){return t-e})),j(n,r,a)?{x:n,y:r,shipsSizes:a}:{x:n,y:r,shipsSizes:y(n,r)}):{x:n,y:r,shipsSizes:y(n,r)}},x=function(e,t){for(var n=new Set,r=0;r<t;++r)for(var a=0;a<e;++a)n.add(a*b+r);return n},O=function(){var e=[-1e3,1,b,-1],t=e[Math.floor(4*Math.random())],n=-t,r=(e=e.filter((function(e){return e!==t&&e!==n})))[Math.floor(2*Math.random())];return[-r,r,n,t]},S=function e(t,n){if(!n.size)return[];for(var r=Object(s.a)(n)[Math.floor(Math.random()*n.size)],a=O(),i=[r];i.length<t;){var o=i[i.length-1]+a[a.length-1];if(n.has(o))i.push(o);else{if(a.pop(),!a.length){var c=new Set(n);return c.delete(r),e(t,c)}2===a.length?i=[r]:i.reverse()}}return i},w=function(e){var t,n=m(e),r=n.x,a=n.y,i=n.shipsSizes,o=x(r,a),c=[],s=Object(u.a)(i);try{for(s.s();!(t=s.n()).done;){var l=t.value;S(l,o).forEach((function(e){c.push({x:~~(e/b),y:e%b}),v.forEach((function(t){return o.delete(e+t)}))}))}}catch(f){s.e(f)}finally{s.f()}return c},N=Object(s.a)("ABCDEFGHIJKLMNOPQRSTUVWXYZ".substr(0,10)),M=Array(10).fill().map((function(e,t){return String(t+1)})),B=function(){var e=a.a.useState(null),t=Object(c.a)(e,2),n=t[0],r=t[1],i=function(){r(w({x:10,y:10}))};return a.a.useEffect((function(){i()}),[]),Object(f.jsx)(f.Fragment,{children:n&&Object(f.jsxs)("div",{children:[Object(f.jsx)(h,{x:10,y:10,ships:n,xNames:N,yNames:M}),Object(f.jsx)(p,{handleUpdate:i})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(B,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.5f306697.chunk.js.map