const $=s=>document.querySelector(s);
const params=new URLSearchParams(location.search);
const guest=params.get('to');
if(guest){$('#guestName').textContent=decodeURIComponent(guest.replace(/\+/g,' '));}
window.addEventListener('load',()=>setTimeout(()=>$('#loading').classList.add('hide'),450));
$('#openInvite').addEventListener('click',()=>{document.body.classList.add('opened');$('#salam').scrollIntoView({behavior:'smooth'});});
const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
const target=new Date('2026-11-25T10:00:00+08:00').getTime();
function countdown(){let d=target-Date.now();if(d<0)d=0;const vals={days:Math.floor(d/86400000),hours:Math.floor(d%86400000/3600000),minutes:Math.floor(d%3600000/60000),seconds:Math.floor(d%60000/1000)};for(const [k,v] of Object.entries(vals))$('#'+k).textContent=String(v).padStart(2,'0')}
countdown();setInterval(countdown,1000);
$('#wishForm').addEventListener('submit',e=>{e.preventDefault();const name=$('#wishName').value.trim(),text=$('#wishText').value.trim();if(!name||!text)return;const card=document.createElement('article');card.className='wish';const strong=document.createElement('strong');strong.textContent=name;const p=document.createElement('p');p.textContent=text;card.append(strong,p);$('#wishList').prepend(card);e.target.reset();});
const sections=[...document.querySelectorAll('section')];document.querySelectorAll('.bottom-nav a').forEach(a=>a.addEventListener('click',()=>{const target=document.querySelector(a.getAttribute('href'));if(target)target.scrollIntoView({behavior:'smooth'})}));
/* Musik: tambahkan file musik legal milik Anda di assets/music.mp3, lalu aktifkan src di bawah. */
const music=$('#bgMusic'); // music.src='assets/music.mp3';
$('#musicBtn').addEventListener('click',async()=>{if(!music.src){alert('Tambahkan musik milik Anda ke assets/music.mp3 dan aktifkan baris music.src di script.js.');return;}if(music.paused){try{await music.play();$('#musicBtn').innerHTML='♫ <span>Musik ON</span>'}catch(e){}}else{music.pause();$('#musicBtn').innerHTML='♫ <span>Musik</span>'}});
