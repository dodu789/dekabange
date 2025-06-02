window.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('welcomeModal');
  const closeBtn = modal.querySelector('.close');

  // Tampilkan modal setiap reload
  modal.style.display = 'block';

  // Tutup modal jika klik tombol close
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});
