navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)||window&&(()=>{let s={flakeCount:50,minDist:150,color:"255, 255, 255",size:2,speed:.5,opacity:.2,stepsize:.5};const r=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},h=(window.requestAnimationFrame=r,document.getElementById("snowdown")),l=h.getContext("2d"),w=s.flakeCount;let m=-100,c=-100,p=[];h.width=window.innerWidth,h.height=window.innerHeight;const v=()=>{l.clearRect(0,0,h.width,h.height);var t=s.minDist;for(let e=0;e<w;e++){var i=p[e];const v=m,o=c,n=i.x,a=i.y,d=Math.sqrt((v-n)*(v-n)+(o-a)*(o-a));if(d<t){const s=(v-n)/d,r=(o-a)/d,h=t/(d*d)/2;i.velX-=h*s,i.velY-=h*r}else i.velX*=.98,i.velY<i.speed&&.01<i.speed-i.velY&&(i.velY+=.01*(i.speed-i.velY)),i.velX+=Math.cos(i.step+=.05)*i.stepSize;l.fillStyle="rgba("+s.color+", "+i.opacity+")",i.y+=i.velY,i.x+=i.velX,(i.y>=h.height||i.y<=0)&&M(i),(i.x>=h.width||i.x<=0)&&M(i),l.beginPath(),l.arc(i.x,i.y,i.size,0,2*Math.PI),l.fill()}r(v)},M=e=>{e.x=Math.floor(Math.random()*h.width),e.y=0,e.size=3*Math.random()+2,e.speed=+Math.random()+.5,e.velY=e.speed,e.velX=0,e.opacity=.5*Math.random()+.3};document.addEventListener("mousemove",e=>{m=e.clientX,c=e.clientY}),window.addEventListener("resize",()=>{h.width=window.innerWidth,h.height=window.innerHeight});for(let e=0;e<w;e++){const t=Math.floor(Math.random()*h.width),i=Math.floor(Math.random()*h.height),w=3*Math.random()+s.size,o=+Math.random()+s.speed,n=.5*Math.random()+s.opacity;p.push({speed:o,velX:0,velY:o,x:t,y:i,size:w,stepSize:Math.random()/30*s.stepsize,step:0,angle:180,opacity:n})}v()})();