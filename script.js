// script.js
function toggleAccordion(id) {
  const content = document.getElementById(id);
  const parent = content.parentElement;
  
  document.querySelectorAll('.accordion').forEach(item => {
    if (item !== parent) {
      item.classList.remove('active');
    }
  });

  parent.classList.toggle('active');
}

// Modal View QRIS Jelas Dalam Halaman
function openModal() {
  const modal = document.getElementById('qris-modal');
  const qrisSrc = document.getElementById('qris-image-src').src;
  document.getElementById('modal-img').src = qrisSrc;
  modal.classList.add('show');
}

function closeModal() {
  const modal = document.getElementById('qris-modal');
  modal.classList.remove('show');
}
