navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)||(document.write('<canvas id="snowdown" style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:100;pointer-events:none"></canvas>'),window&&(()=>{let s={flakeCount:50,minDist:150,color:"255, 255, 255",size:2,speed:.5,opacity:.2,stepsize:.5};const r=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},h=(window.requestAnimationFrame=r,document.getElementById("snowdown")),w=h.getContext("2d"),l=s.flakeCount;let m=-100,c=-100,p=[];h.width=window.innerWidth,h.height=window.innerHeight;const v=()=>{w.clearRect(0,0,h.width,h.height);var t=s.minDist;for(let e=0;e<l;e++){var i=p[e];const v=m,n=c,o=i.x,a=i.y,d=Math.sqrt((v-o)*(v-o)+(n-a)*(n-a));if(d<t){const s=(v-o)/d,r=(n-a)/d,h=t/(d*d)/2;i.velX-=h*s,i.velY-=h*r}else i.velX*=.98,i.velY<i.speed&&.01<i.speed-i.velY&&(i.velY+=.01*(i.speed-i.velY)),i.velX+=Math.cos(i.step+=.05)*i.stepSize;w.fillStyle="rgba("+s.color+", "+i.opacity+")",i.y+=i.velY,i.x+=i.velX,(i.y>=h.height||i.y<=0)&&M(i),(i.x>=h.width||i.x<=0)&&M(i),w.beginPath(),w.arc(i.x,i.y,i.size,0,2*Math.PI),w.fill()}r(v)},M=e=>{e.x=Math.floor(Math.random()*h.width),e.y=0,e.size=3*Math.random()+2,e.speed=+Math.random()+.5,e.velY=e.speed,e.velX=0,e.opacity=.5*Math.random()+.3};document.addEventListener("mousemove",e=>{m=e.clientX,c=e.clientY}),window.addEventListener("resize",()=>{h.width=window.innerWidth,h.height=window.innerHeight});for(let e=0;e<l;e++){const t=Math.floor(Math.random()*h.width),i=Math.floor(Math.random()*h.height),l=3*Math.random()+s.size,n=+Math.random()+s.speed,o=.5*Math.random()+s.opacity;p.push({speed:n,velX:0,velY:n,x:t,y:i,size:l,stepSize:Math.random()/30*s.stepsize,step:0,angle:180,opacity:o})}v()})());