(this["webpackJsonpimage-carousel"]=this["webpackJsonpimage-carousel"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(6),o=a.n(c);a(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(1),l=a(2),s=a(4),m=a(3),d=(a(13),a(14),a(15),function(e){var t=e.source||{},a=t.url,n=t.caption,c=t.id;return a?i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{loading:"lazy",src:"".concat("/image-carousel","/assets/images/").concat(a),alt:"",className:"img",id:"img".concat(c),onClick:e.openModal}),i.a.createElement("div",{className:"img-caption"},n)):null}),u=(a(16),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).nextSlide=function(t){e.props.nextSlide(t)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=document.getElementById("img-modal");t.style.display="block",document.getElementsByClassName("modal-close")[0].onclick=function(){t.style.display="none",e.props.onClose()}}},{key:"render",value:function(){var e=this,t=this.props,a=t.source,n=t.children,c=a||{},o=c.url,r=c.caption;return i.a.createElement("div",{id:"img-modal",className:"modal"},i.a.createElement("span",{className:"modal-close"},"\xd7"),i.a.createElement("img",{loading:"lazy",className:"modal-content",id:"img01",src:"".concat("/image-carousel","/assets/images/").concat(o),alt:""}),n,i.a.createElement("div",{className:"modal-caption"},r),i.a.createElement("div",{className:"arrow-container"},i.a.createElement("div",{className:"prev",onClick:function(){return e.nextSlide(-1)}},"\u276e"),i.a.createElement("div",{className:"next",onClick:function(){return e.nextSlide(1)}},"\u276f")))}}]),a}(n.Component)),p=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).nextSlide=function(e){n.showSlides(n.state.activeIndex+e)},n.showSlides=function(e){var t=n.props.images,a=e;e>=t.length&&(a=0),e<0&&(a=t.length-1),n.setState({activeIndex:a})},n.state={viewModal:!1,activeIndex:0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.showSlides(this.state.activeIndex)}},{key:"render",value:function(){var e=this,t=this.state,a=t.viewModal,c=t.activeIndex,o=this.props.images;return i.a.createElement(n.Fragment,null,a&&i.a.createElement(u,{source:o[c],onClose:function(){e.setState({viewModal:!1})},nextSlide:this.nextSlide}),i.a.createElement("div",{className:"slideshow-container"},Array.isArray(o)&&o.map((function(t,a){return i.a.createElement("div",{className:"my-slides fade",style:c===a?{display:"block"}:{display:"none"},key:t.id},i.a.createElement(d,{source:t,openModal:function(){e.setState({viewModal:!0})}}))})),i.a.createElement("div",{className:"arrow-container"},i.a.createElement("div",{className:"prev",onClick:function(){return e.nextSlide(-1)}},"\u276e"),i.a.createElement("div",{className:"next",onClick:function(){return e.nextSlide(1)}},"\u276f"))),i.a.createElement("br",null),i.a.createElement("div",{className:"dot-container"},Array.isArray(o)&&o.map((function(t,a){return i.a.createElement("span",{key:t.id,className:"".concat(c===a?"active":""," dot"),onClick:function(){return e.showSlides(a)}})}))))}}]),a}(n.Component),v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={images:[{url:"img_nature_wide.jpg",id:"1",caption:"Caption"},{url:"img_snow_wide.jpg",id:"2",caption:"Caption"},{url:"img_mountains_wide.jpg",id:"3",caption:"Caption"},{url:"dp.png",id:"4",caption:"Caption"},{url:"2.png",id:"5",caption:"Caption"},{url:"3.png",id:"6",caption:"Caption"}]},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"header"}),i.a.createElement("div",{className:"container"},i.a.createElement(p,{images:this.state.images})))}}]),a}(n.Component);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.5ae72105.chunk.js.map