const btn=document.getElementById('theme-toggle');
const load=()=>{const t=localStorage.getItem('theme')||'dark';if(t==='light')document.body.classList.add('light');btn.textContent=document.body.classList.contains('light')?'☀️ Light Mode':'🌙 Dark Mode';};
const toggle=()=>{document.body.classList.toggle('light');localStorage.setItem('theme',document.body.classList.contains('light')?'light':'dark');btn.textContent=document.body.classList.contains('light')?'☀️ Light Mode':'🌙 Dark Mode';};
window.addEventListener('load',load);
btn.addEventListener('click',toggle);
