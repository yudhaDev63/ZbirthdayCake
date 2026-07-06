const f=document.querySelector('.flame');const s=document.querySelector('.smoke');const m=document.getElementById('birthdayMessage');const b=document.getElementById('progressBar');let t,i;
function start(){let p=0;i=setInterval(()=>{p+=100/30;b.style.width=p+'%';if(p>=100){clearInterval(i);f.style.display='none';s.style.display='block';m.style.opacity=1;if(window.launchFireworks)launchFireworks();}},100)}
function stop(){clearInterval(i);b.style.width='0'}
document.body.onmousedown=start;document.body.onmouseup=stop;document.body.ontouchstart=start;document.body.ontouchend=stop;