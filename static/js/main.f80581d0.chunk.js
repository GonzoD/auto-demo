(this["webpackJsonpfront-demo"]=this["webpackJsonpfront-demo"]||[]).push([[0],{56:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),i=n(13),a=n.n(i),r=(n(56),n(85)),l=n(35),s=n(94),x=n(89),u=n(88),d=n(87),b=n(91),m=n(42),j=n.n(m),g=n(93),f=n(90),p=n(5),h=n(1),O=Object(r.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},icon:{backgroundColor:"#30D171"},iconMobie:{height:"20px",width:"20px"},fab:{background:"#30D171","&:hover":{backgroundColor:"#30D171"}},fabMobile:{width:"33px",height:"31px"},appBar:{color:"black",backgroundColor:"transparent"},toolBar:{display:"flex",justifyContent:"center"},menu:{color:"#FF7618",fontWeight:600,fontFamily:"Poppins",fontStyle:"normal"},menuBigScreen:{fontSize:"20px"},menuMobile:{fontSize:"10px"}}})),S=function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},y=function(e){return document.getElementById("".concat(e)).scrollIntoView({behavior:"smooth"})};function B(e){var t=e.children,n=e.window,c=O(),o=Object(d.a)({target:n?n():void 0,disableHysteresis:!0,threshold:100});return Object(h.jsx)(g.a,{in:o,children:Object(h.jsx)("div",{onClick:S,role:"presentation",className:c.root,children:t})})}var N=function(e){var t=O(),n=Object(p.useMediaQuery)({query:"(max-width: 1224px)"});return Object(h.jsxs)(o.a.Fragment,{children:[Object(h.jsx)(u.a,{}),Object(h.jsx)(s.a,{className:t.appBar,children:Object(h.jsxs)(x.a,{className:t.toolBar,children:[Object(h.jsx)(f.a,{className:"".concat(t.menu," ").concat(n?t.menuMobile:t.menuBigScreen),onClick:function(){return y("features")},children:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438"}),Object(h.jsx)(f.a,{className:"".concat(t.menu," ").concat(n?t.menuMobile:t.menuBigScreen),onClick:function(){return y("about")},children:"\u041e \u0441\u0435\u0431\u0435"}),Object(h.jsx)(f.a,{className:"".concat(t.menu," ").concat(n?t.menuMobile:t.menuBigScreen),onClick:function(){return y("program")},children:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430"}),Object(h.jsx)(f.a,{className:"".concat(t.menu," ").concat(n?t.menuMobile:t.menuBigScreen),onClick:function(){return y("advantages")},children:"\u041f\u043b\u044e\u0441\u044b"}),Object(h.jsx)(f.a,{className:"".concat(t.menu," ").concat(n?t.menuMobile:t.menuBigScreen),onClick:function(){return y("contacts")},children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]})}),Object(h.jsx)(x.a,{id:"back-to-top-anchor"}),Object(h.jsx)(B,Object(l.a)(Object(l.a)({},e),{},{children:Object(h.jsx)(b.a,{className:"".concat(t.fab," ").concat(n&&t.fabMobile),color:"secondary",size:"small","aria-label":"scroll back to top",children:Object(h.jsx)(j.a,{className:"".concat(t.icon," ").concat(n&&t.iconMobie)})})}))]})},v=n(17),M=n(92),k=function(e){return Object(h.jsx)(f.a,{variant:"contained",onClick:e.onClick,className:e.style,children:e.text})},w=n(43),C=n.n(w);function z(){var e=o.a.useState(!1),t=Object(v.a)(e,2),n=t[0],c=t[1];return[n,function(e){"string"===typeof e||"number"==typeof e?(C()(e.toString()),c(!0)):(c(!1),console.error("Cannot copy typeof ".concat(typeof e," to clipboard, must be a string or number.")))}]}var F="0994838737",D=Object(r.a)((function(){return{root:{display:"flex",width:"100%",height:"30%",backgroundImage:"url(odessa.jpg)",justifyContent:"space-between",padding:"3% 5%"},introText:{display:"flex",flexDirection:"column",marginTop:"20%",width:"80%"},greeting:{fontSize:"40px",backgroundColor:"#3d4961"},greetingBigScreen:{fontSize:"40px"},greetingMobile:{fontSize:"17px"},intro:{color:"white",marginTop:"5px",fontSize:"20px",backgroundColor:"#3d4961"},introBigScreen:{fontSize:"20px"},introMobile:{fontSize:"11px"},button:{marginTop:"25%",background:"#FF7618"},buttonBigScreen:{fontSize:"20px",height:"50px"},buttonMobile:{fontSize:"10px",height:"20px"}}})),I=function(e){var t=D(),n=Object(p.useMediaQuery)({query:"(max-width: 1224px)"}),c=z(),o=Object(v.a)(c,2),i=(o[0],o[1]);return Object(h.jsxs)("div",{id:"intro",className:"".concat(t.root," ").concat(e.className),children:[Object(h.jsxs)("div",{className:t.introText,children:[Object(h.jsx)(M.a,{className:"".concat(t.greeting," ").concat(n?t.greetingMobile:t.greetingBigScreen),children:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0430\u0432\u0442\u043e\u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440"}),Object(h.jsx)(M.a,{className:"".concat(t.intro," ").concat(n?t.introMobile:t.introBigScreen),children:"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435! \u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0412\u0438\u0442\u0430\u043b\u0438\u0439, \u044f \u043f\u0440\u043e\u0444\u0444\u0435\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0430\u0432\u0442\u043e\u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440 \u043f\u043e \u0432\u043e\u0436\u0434\u0435\u043d\u0438\u044e \u0432 \u0433\u043e\u0440\u043e\u0434\u0435 \u041e\u0434\u0435\u0441\u0441\u0430. \u0417\u0430 \u044d\u0442\u0438 \u043d\u0435\u043c\u0430\u043b\u044b\u0435 \u0433\u043e\u0434\u044b \u044f, \u043a\u0430\u043a \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440, \u043e\u0431\u0443\u0447\u0438\u043b \u0431\u043e\u043b\u0435\u0435 1000 \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u043d\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0435 \u0438 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u043b \u043e\u0433\u0440\u043e\u043c\u043d\u044b\u0439 \u043e\u043f\u044b\u0442 \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u0443\u044e \u043c\u0435\u0442\u043e\u0434\u0438\u043a\u0443 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f."})]}),Object(h.jsx)(k,{text:F,style:"".concat(t.button," ").concat(n?t.buttonMobile:t.buttonBigScreen),onClick:function(){return i(F)}})]})},T=Object(r.a)((function(){return{root:{display:"flex",flexDirection:"column",justifyContent:"center",maxWidth:"300px"},text:{textAlign:"center",color:"#30D171",fontWeight:600,fontFamily:"Poppins",fontStyle:"normal"},img:{height:"350px"}}})),q=function(e){var t=T(),n=Object(p.useMediaQuery)({query:"(max-width: 1224px)"});return Object(h.jsxs)("div",{className:"".concat(t.root," ").concat(e.className),children:[Object(h.jsx)("img",{className:"".concat(n&&t.img),src:e.img,alt:"imh"}),Object(h.jsx)(M.a,{className:t.text,children:e.textImg})]})},Q=Object(r.a)((function(){return{root:{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"30px"},header:{fontSize:"20px",color:"white",fontWeight:600,fontFamily:"Poppins",fontStyle:"normal"},lineRow:{display:"flex"},lineColumn:{flexDirection:"column"},box:{margin:"20px 20px"}}})),P=[{img:"parking.jpg",text:"\u0412\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0432\u0438\u0434\u044b \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0438"},{img:"parking.jpg",text:"\u0412\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0432\u0438\u0434\u044b \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0438"},{img:"parking.jpg",text:"\u0412\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0432\u0438\u0434\u044b \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0438"}],W=[{img:"parking.jpg",text:"\u0412\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0432\u0438\u0434\u044b \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0438"},{img:"parking.jpg",text:"\u0412\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0432\u0438\u0434\u044b \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0438"},{img:"parking.jpg",text:"\u0412\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0432\u0438\u0434\u044b \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0438"}],A=function(){var e=Q(),t=Object(p.useMediaQuery)({query:"(max-width: 1224px)"});return Object(h.jsxs)("div",{id:"program",className:e.root,children:[Object(h.jsx)(M.a,{className:e.header,children:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f"}),Object(h.jsx)("div",{className:"".concat(e.lineRow," ").concat(t&&e.lineColumn),children:P.map((function(t){return Object(h.jsx)(q,{className:e.box,img:t.img,textImg:t.text})}))}),Object(h.jsx)("div",{className:"".concat(e.lineRow," ").concat(t&&e.lineColumn),children:W.map((function(t){return Object(h.jsx)(q,{className:e.box,img:t.img,textImg:t.text})}))})]})},L=Object(r.a)((function(){return{root:{marginLeft:"10%",backgroundColor:"#FFFFFFCC",width:"50%"},header:{marginBottom:"14px"},headerBigScreen:{fontSize:"25px"},headerMobile:{fontSize:"15px"},infoBigScreen:{fontSize:"20px"},infoMobile:{fontSize:"10px"}}})),R=function(){var e=L(),t=Object(p.useMediaQuery)({query:"(max-width: 1224px)"});return Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsx)(M.a,{className:"".concat(e.header," ").concat(t?e.headerMobile:e.headerBigScreen),children:"\u041e\u0431\u043e \u043c\u043d\u0435"}),Object(h.jsx)(M.a,{className:"".concat(t?e.infoMobile:e.infoBigScreen),children:"\u042f \u0437\u0430\u043d\u0438\u043c\u0430\u044e\u0441\u044c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435\u043c \u0431\u0443\u0434\u0443\u0449\u0438\u0445 \u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u0439 \u0431\u043e\u043b\u0435\u0435 10 \u043b\u0435\u0442. \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043b \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u0443\u044e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043d\u0430\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u0432\u043e\u0434\u0438\u0442\u044c \u043a\u0430\u0436\u0434\u043e\u043c\u0443! \u041f\u0440\u043e\u0432\u043e\u0436\u0443 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u0430\u043d\u044f\u0442\u0438\u044f \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u043b\u044e\u0431\u0438\u0442\u0435\u043b\u0435\u0439 \u0441 \u043b\u044e\u0431\u044b\u043c \u0443\u0440\u043e\u0432\u043d\u0435\u043c \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438 \u043d\u0430 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u0430\u0431\u0435\u043b\u044c\u043d\u043e\u043c \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0435 Toyota Camry. \u0423\u0440\u043e\u043a\u0438 \u043f\u0440\u043e\u0445\u043e\u0434\u044f\u0442 \u0432 \u0434\u043e\u0431\u0440\u043e\u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u043e\u0431\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435. \u041d\u0430 \u043d\u0438\u0445 \u044f \u043f\u043e\u043c\u043e\u0433\u0443 \u0412\u0430\u043c \u043e\u0441\u0432\u043e\u0438\u0442\u044c \u0438 \u043e\u0442\u0442\u043e\u0447\u0438\u0442\u044c \u043d\u0430\u0432\u044b\u043a\u0438 \u0432\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u043d\u0430 \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0435, \u0432 \u043f\u043b\u043e\u0442\u043d\u043e\u043c \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u043c \u043f\u043e\u0442\u043e\u043a\u0435, \u043d\u0430\u0443\u0447\u0443 \u0441\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0441\u043e \u0441\u043b\u043e\u0436\u043d\u044b\u043c\u0438 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044f\u043c\u0438 \u043d\u0430 \u0434\u043e\u0440\u043e\u0433\u0435, \u043f\u043e\u043c\u043e\u0433\u0443 \u0434\u043e\u0441\u043a\u043e\u043d\u0430\u043b\u044c\u043d\u043e \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c\u0441\u044f \u043a \u0441\u0434\u0430\u0447\u0435 \u044d\u043a\u0437\u0430\u043c\u0435\u043d\u043e\u0432 . \u0421\u0438\u0442\u0443\u0430\u0446\u0438\u044f \u043d\u0430 \u0434\u043e\u0440\u043e\u0433\u0430\u0445 \u043e\u0431\u0441\u0443\u0436\u0434\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u043e\u0433\u043e \u0432\u044b\u0435\u0437\u0434\u0430. \u041f\u043e\u0434\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0432\u0430\u0436\u043d\u044b\u0435 \u043c\u043e\u043c\u0435\u043d\u0442\u044b \u044d\u043a\u0437\u0430\u043c\u0435\u043d\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430 , \u0434\u0435\u043b\u0430\u044e\u0442\u0441\u044f \u0432\u044b\u0432\u043e\u0434\u044b \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u043d\u0443\u0436\u043d\u043e \u0432\u0435\u0441\u0442\u0438 \u0441\u0435\u0431\u044f \u0432 \u0441\u043b\u043e\u0436\u043d\u043e\u0439 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438. \u041f\u043e\u0434 \u043c\u043e\u0438\u043c \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e\u043c \u0432\u044b \u043d\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0440\u0435\u0430\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435\u0440\u0435\u0434\u043a\u043e \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0442 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0434\u0430\u0447\u0435 \u044d\u043a\u0437\u0430\u043c\u0435\u043d\u043e\u0432, \u043d\u043e \u0438 \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0432\u043e\u0436\u0434\u0435\u043d\u0438\u044f."})]})},E=Object(r.a)((function(){return{root:{display:"flex",flexDirection:"column",alignItems:"center"},circle:{display:"flex",alignItems:"center",border:"2px solid white",borderRadius:"30px",color:"#30D171",fontWeight:600,fontFamily:"Poppins",fontStyle:"normal"},circleBigScreen:{width:"50px",height:"50px"},circleMobile:{width:"35px",height:"35px"},amount:{textAlign:"center"},amountBigScreen:{fontSize:"15px"},amountMobile:{fontSize:"10px"},info:{textAlign:"center",width:"130px",color:"white"},infoBigScreen:{fontSize:"15px"},infoMobile:{fontSize:"10px",width:"80%"}}})),J=function(e){var t=E(),n=Object(p.useMediaQuery)({query:"(max-width: 1224px)"});return Object(h.jsxs)("div",{className:t.root,children:[Object(h.jsx)("div",{className:"".concat(t.circle," ").concat(n?t.circleMobile:t.circleBigScreen),children:Object(h.jsx)(M.a,{className:"".concat(t.amount," ").concat(n?t.amountMobile:t.amountBigScreen),children:e.amount})}),Object(h.jsx)(M.a,{className:"".concat(t.info," ").concat(n?t.infoMobile:t.infoBigScreen),children:e.info})]})},V=Object(r.a)((function(){return{root:{background:"#1b2957CC",marginLeft:"50%",position:"absolute"},rootBigScreen:{marginTop:"-5%"},rootMobile:{marginTop:"-20%"}}})),H=function(){var e=V(),t=Object(p.useMediaQuery)({query:"(max-width: 1224px)"});return Object(h.jsx)("div",{className:"".concat(e.root," ").concat(t?e.rootMobile:e.rootBigScreen),children:Object(h.jsx)(J,{amount:"10 \u043b\u0435\u0442",info:"\u043e\u043f\u044b\u0442\u0430 \u0430\u0432\u0442\u043e\u0438\u043d\u0441\u0440\u0443\u043a\u0442\u043e\u0440\u0430"})})},G=Object(r.a)((function(){return{root:{padding:"10% 0",backgroundImage:"url(carsandsea.jpg)",backgroundSize:"cover"}}})),K=function(){var e=G();return Object(h.jsxs)("div",{id:"about",className:e.root,children:[Object(h.jsx)(R,{}),Object(h.jsx)(H,{})]})},U=n(44),X=n.n(U),Y=n(45),Z=n.n(Y),$=n(46),_=n.n($),ee=Object(r.a)((function(){return{root:{display:"flex",flexDirection:"row",minWidth:"100px",marginLeft:"15px"},text:{marginLeft:"7px"},header:{color:"white"},headerBigScreen:{fontSize:"18px"},headerMobile:{fontSize:"9px"},info:{fontSize:"14px",color:"#30D171",fontWeight:600,fontFamily:"Poppins",fontStyle:"normal"},infoBigScreen:{fontSize:"15px"},infoMobile:{fontSize:"8px"}}})),te={pro:{icon:function(e){return Object(h.jsx)(X.a,{fontSize:"".concat(e?"medium":"large")})},header:"\u041f\u0440\u043e\u0444\u0444\u0435\u0441\u0438\u043e\u043d\u0430\u043b\u0438\u0437\u043c",info:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043a \u0441\u043b\u043e\u0436\u043d\u044b\u043c \u0434\u043e\u0440\u043e\u0436\u043d\u044b\u043c \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044f\u043c: \u0432\u044b\u0431\u0435\u0436\u0430\u043b \u0440\u0435\u0431\u0435\u043d\u043e\u043a, \u0443\u043f\u0430\u043b\u043e \u0434\u0435\u0440\u0435\u0432\u043e, \u0440\u0435\u0437\u043a\u0438\u0439 \u043c\u0430\u043d\u0435\u0432\u0440"},car:{icon:function(e){return Object(h.jsx)(Z.a,{fontSize:"".concat(e?"medium":"large")})},header:"\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u043e\u043f\u044b\u0442 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f",info:"\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435\u043c \u0431\u0443\u0434\u0443\u0449\u0438\u0445 \u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u0439 \u0431\u043e\u043b\u0435\u0435 10 \u043b\u0435\u0442"},mood:{icon:function(e){return Object(h.jsx)(_.a,{fontSize:"".concat(e?"medium":"large")})},header:"\u041f\u0440\u0438\u044f\u0442\u043d\u0430\u044f \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u0430",info:"\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0432 \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u043e\u0439 \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u0435, \u0431\u0435\u0437 \u0441\u0442\u0440\u0435\u0441\u0441\u0430 \u0438 \u0441\u0442\u0440\u0430\u0445\u0430 \u0434\u043b\u044f \u0443\u0447\u0435\u043d\u0438\u043a\u0430"}},ne=function(e){var t=ee(),n=Object(p.useMediaQuery)({query:"(max-width: 1224px)"});return Object(h.jsxs)("div",{className:t.root,children:[Object(h.jsx)("div",{children:te[e.icon].icon(n)}),Object(h.jsxs)("div",{className:t.text,children:[Object(h.jsx)(M.a,{className:"".concat(t.header," ").concat(n?t.headerMobile:t.headerBigScreen),children:te[e.icon].header}),Object(h.jsx)(M.a,{className:"".concat(t.info," ").concat(n?t.infoMobile:t.infoBigScreen),children:te[e.icon].info})]})]})},ce=Object(r.a)((function(){return{root:{background:"#1b2957CC",padding:"4% 0"},header:{marginBottom:"14px",textAlign:"center",color:"#30D171",fontWeight:600,fontFamily:"Poppins",fontStyle:"normal"},featureBlock:{display:"flex",flexDirection:"row",justifyContent:"center"}}})),oe=function(){var e=ce();return Object(h.jsxs)("div",{id:"features",className:e.root,children:[Object(h.jsx)(M.a,{className:e.header,children:"\u041b\u0443\u0447\u0448\u0438\u0435 \u043e\u0441\u043e\u0431\u0435\u043d\u043e\u0441\u0442\u0438"}),Object(h.jsxs)("div",{className:e.featureBlock,children:[Object(h.jsx)(ne,{icon:"pro"}),Object(h.jsx)(ne,{icon:"car"}),Object(h.jsx)(ne,{icon:"mood"})]})]})},ie=Object(r.a)((function(){return{root:{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"20px"},header:{fontSize:"20px",color:"white"},cardRow:{display:"flex",justifyContent:"center"},cardColumn:{flexDirection:"column"},box:{margin:"15px 15px"}}})),ae=[{img:"parking.jpg",text:"\u0412\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0432\u0438\u0434\u044b \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0438"},{img:"parking.jpg",text:"\u0412\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0432\u0438\u0434\u044b \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0438"},{img:"parking.jpg",text:"\u0412\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0432\u0438\u0434\u044b \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0438"}],re=function(){var e=ie(),t=Object(p.useMediaQuery)({query:"(max-width: 1224px)"});return Object(h.jsxs)("div",{id:"advantages",className:e.root,children:[Object(h.jsx)(M.a,{className:e.header,children:"\u041f\u043b\u044e\u0441\u044b \u0447\u0430\u0441\u0442\u043d\u044b\u0445 \u0443\u0440\u043e\u043a\u043e\u0432 \u0432\u043e\u0436\u0434\u0435\u043d\u0438\u044f"}),Object(h.jsx)("div",{className:"".concat(e.cardRow," ").concat(t&&e.cardColumn),children:ae.map((function(t){return Object(h.jsx)(q,{className:e.box,img:t.img,textImg:t.text})}))})]})},le=Object(r.a)((function(){return{root:{display:"flex",flexDirection:"column",alignItems:"center",background:"#1b2957",padding:"20px 0"},header:{fontSize:"20px",color:"white"},title:{fontSize:"17px",marginTop:"5px",marginBottom:"25px",color:"white"},button:{background:"#FF7618"}}})),se=function(){var e=le(),t=z(),n=Object(v.a)(t,2),c=(n[0],n[1]);return Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsx)(M.a,{className:e.header,children:"\u0425\u043e\u0447\u0435\u0448\u044c \u043d\u0430\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u0432\u043e\u0434\u0438\u0442\u044c?"}),Object(h.jsx)(M.a,{className:e.title,children:"\u041a\u043b\u0438\u043a\u0430\u0439 \u043f\u043e \u043d\u043e\u043c\u0435\u0440\u0443 \u0438 \u0437\u0432\u043e\u043d\u0438 \u0412\u0438\u0442\u0430\u043b\u0438\u044e"}),Object(h.jsx)(k,{text:F,onClick:function(){return c(F)},style:e.button})]})},xe=Object(r.a)((function(){return{root:{display:"flex",flexDirection:"column",alignItems:"center",padding:"3% 0",background:"#1b2957",color:"#30D171"},header:{marginBottom:"30px",fontSize:"22px"},contacts:{display:"flex",justifyContent:"space-between",width:"50%"},contactBox:{display:"flex",flexDirection:"column",alignItems:"center"},button:{background:"#FF7618"},buttonBigScreen:{fontSize:"20px",height:"50px"},buttonMobile:{fontSize:"10px",height:"20px",display:"flex",alignSelf:"flex-start"},mailButton:{color:"white",textTransform:"none"},mailButtonBigScreen:{fontSize:"20px",height:"50px"},mailButtonMobile:{fontSize:"12px",height:"20px"},textBigScreen:{fontSize:"20px"},textMobile:{fontSize:"13px"}}})),ue=function(){var e=xe(),t=z(),n=Object(v.a)(t,2),c=(n[0],n[1]),o="ivanov@gmail.com",i=Object(p.useMediaQuery)({query:"(max-width: 1224px)"});return Object(h.jsxs)("div",{id:"contacts",className:e.root,children:[Object(h.jsx)(M.a,{className:e.header,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b \u0430\u0432\u0442\u043e\u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u0430"}),Object(h.jsxs)("div",{className:e.contacts,children:[Object(h.jsxs)("div",{className:e.contactBox,children:[Object(h.jsx)(M.a,{className:"".concat(i?e.textMobile:e.textBigScreen),children:"\u0421\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441\u043e \u043c\u043d\u043e\u0439 \u043f\u043e \u043d\u043e\u043c\u0435\u0440\u0443"}),Object(h.jsx)(k,{text:F,style:"".concat(e.button," ").concat(i?e.buttonMobile:e.buttonBigScreen),onClick:function(){return c(F)}})]}),Object(h.jsxs)("div",{className:e.contactBox,children:[Object(h.jsx)(M.a,{className:"".concat(i?e.textMobile:e.textBigScreen),children:"\u041c\u043e\u044f \u043f\u043e\u0447\u0442\u0430"}),Object(h.jsx)(f.a,{className:"".concat(e.mailButton," ").concat(i?e.mailButtonMobile:e.mailButtonBigScreen),onClick:function(){return c(o)},children:o})]})]})]})},de=Object(r.a)((function(){return{root:{background:"#1C2128","& header.MuiAppBar-root":{width:"100%",jystifyContent:"center"},"& header.MuiAppBar-positionFixed":{right:"auto"},"& header.MuiPaper-elevation4":{boxShadow:"unset"}},introBack:{padding:"2% 10% 0 10%",background:"#20262E",opacity:.85},intro:{marginBottom:"2%"},content:{margin:"0 10%",background:"#20262E"}}}));var be=function(){var e=de();return Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsx)(N,{}),Object(h.jsxs)("div",{className:e.content,children:[Object(h.jsx)(I,{className:e.intro}),Object(h.jsx)(oe,{}),Object(h.jsx)(K,{}),Object(h.jsx)(A,{}),Object(h.jsx)(se,{}),Object(h.jsx)(re,{})]}),Object(h.jsx)(ue,{})]})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,96)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),i(e),a(e)}))};a.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(be,{})}),document.getElementById("root")),me()}},[[64,1,2]]]);
//# sourceMappingURL=main.f80581d0.chunk.js.map