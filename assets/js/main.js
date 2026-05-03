// ============================================
// acteck.off - Main JavaScript
// Author: Evgeniy Acteck
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  // Update copyright year dynamically
  const copyrightEls = document.querySelectorAll('.copyright-year');
  const currentYear = new Date().getFullYear();
  copyrightEls.forEach(el => {
    el.textContent = currentYear;
  });
});
