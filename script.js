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
