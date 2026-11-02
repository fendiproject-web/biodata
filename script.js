// script.js
function toggleAccordion(id) {
  const content = document.getElementById(id);
  const parent = content.parentElement;
  
  // Tutup accordion lain jika ingin mode single collapse
  document.querySelectorAll('.accordion').forEach(item => {
    if (item !== parent) {
      item.classList.remove('active');
    }
  });

  // Toggle status aktif pada item yang diklik
  parent.classList.toggle('active');
}
