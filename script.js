const $ = (s) => document.querySelector(s);
const nav = $('#nav'), menuBtn = $('#menuBtn');
menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');}));
const revealObserver = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
const guest = new URLSearchParams(location.search).get('to');
if(guest){$('#guestName').textContent=guest.replace(/[<>]/g,'').slice(0,90);}
const wa = '6285395822172';
$('#sendRsvp').addEventListener('click',()=>{const name=$('#rsvpName').value.trim();if(!name){$('#rsvpName').focus();alert('Silakan isi nama terlebih dahulu.');return;}const msg=`Assalamu'alaikum, saya ${name}. Konfirmasi undangan KAHFI & RIRIN: ${$('#rsvpStatus').value}. Jumlah tamu: ${$('#rsvpCount').value}.`;window.open(`https://wa.me/${wa}?text=${encodeURIComponent(msg)}`,'_blank','noopener');});
$('#sendWish').addEventListener('click',()=>{const name=$('#wishName').value.trim(),wish=$('#wishText').value.trim();if(!name||!wish){alert('Silakan isi nama dan ucapan terlebih dahulu.');return;}const msg=`Ucapan untuk KAHFI & RIRIN\nNama: ${name}\nUcapan: ${wish}`;window.open(`https://wa.me/${wa}?text=${encodeURIComponent(msg)}`,'_blank','noopener');});
$('#shareBtn').addEventListener('click',async()=>{const data={title:'Undangan KAHFI & RIRIN',text:'Dengan hormat, kami mengundang Anda ke pernikahan KAHFI & RIRIN.',url:location.href};try{if(navigator.share)await navigator.share(data);else if(navigator.clipboard){await navigator.clipboard.writeText(location.href);alert('Tautan undangan disalin.');}else{prompt('Salin tautan undangan ini:',location.href);}}catch(e){/* Pengguna dapat membatalkan dialog berbagi. */}});
