// === ADMIN MODE via URL PARAM ===
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const isAdmin = params.get('admin') === 'true';

  function renderKeranjang() {
    const keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
    if (keranjang.length === 0) {
      dataList.innerHTML = '<p>Tidak ada data pelanggan.</p>';
    } else {
      dataList.innerHTML = keranjang.map((data, index) => `
        <div style="margin-bottom:15px; border-bottom:1px solid #ddd; padding-bottom:10px;">
          <strong>Invoice: ${data.invoice ? data.invoice : '(tidak ada)'} (No: ${index + 1})</strong><br>
          🏷️ Tipe Joki: ${data.tipeJoki ? (data.tipeJoki === 'akun' ? 'Joki Akun' : 'Joki Gendong') : '-'}<br>
          ${data.tipeJoki === 'akun' ? '🏆 Rank: ' + (data.rank || '-') + '<br>' : ''}
          ${data.tipeJoki === 'akun' ? 'Dari Rank: ' + (data.fromRank || '-') + '<br>' : ''}
          ${data.tipeJoki === 'akun' ? 'Ke Rank: ' + (data.toRank || '-') + '<br>' : ''}
          ${data.tipeJoki === 'akun' ? 'Bintang: ' + (data.starCount || '-') + '<br>' : ''}
          ${data.tipeJoki === 'akun' ? 'Harga: ' + (data.harga || '-') + '<br>' : ''}
          🆔 ID Server: ${data.idServer}<br>
          🎮 Nick ML: ${data.nickML}<br>
          📱 WhatsApp: ${data.whatsapp}<br>
          <button data-index="${index}" class="hapus-btn" style="margin-top:8px; background:#e53935; color:#fff; border:none; border-radius:4px; padding:4px 10px; cursor:pointer;">Hapus</button>
        </div>
      `).join('');
      // Tambahkan event listener hapus
      dataList.querySelectorAll('.hapus-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          const idx = parseInt(btn.getAttribute('data-index'));
          keranjang.splice(idx, 1);
          localStorage.setItem('keranjang', JSON.stringify(keranjang));
          renderKeranjang();
        });
      });
    }
  }

  if (isAdmin) {
    const adminSection = document.getElementById('adminSection');
    const dataList = document.getElementById('dataList');
    adminSection.style.display = 'block';
    renderKeranjang();
  }
});
