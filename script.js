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

function openModal() {
  const modal = document.getElementById('qris-modal');
  const qrisImg = document.getElementById('qris-image-src');
  
  const activeSrc = qrisImg.currentSrc || qrisImg.src;
  
  document.getElementById('modal-img').src = activeSrc;
  modal.classList.add('show');
}

function closeModal() {
  const modal = document.getElementById('qris-modal');
  modal.classList.remove('show');
}
