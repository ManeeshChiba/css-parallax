!function(){this.ssparallax=function(){this.trackScroll()},ssparallax.prototype.trackScroll=function(){window.addEventListener("scroll",function(){var t=document.body,e=document.documentElement,l=Math.max(t.scrollHeight,t.offsetHeight,e.clientHeight,e.scrollHeight,e.offsetHeight),o=Math.max(document.documentElement.clientHeight,window.innerHeight||0),n=l-o;scrollValue=Math.floor(window.scrollY/n*100),document.body.style.setProperty("--ssparallax",scrollValue)})}}();