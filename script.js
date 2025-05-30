// Hamburger ve menüyü seç
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');


// Hamburger tıklandığında çalışacak olan fonksiyon
toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');        // hamburger animasyonu
  nav.classList.toggle('show');           // menü görünür/gizli
});


// "Get Started" butonuna tıklandığında içerik kısmına yumuşak kaydırma
document.querySelector('#scrollBtn').addEventListener('click', () => {
  const target = document.querySelector('#content');
  const offset = 460;

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
});

