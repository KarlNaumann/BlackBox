// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuTrigger = document.querySelector('.mobile-menu__trigger');
  const mobileMenuDropdown = document.querySelector('.mobile-menu__dropdown');
  
  if (!mobileMenu || !mobileMenuTrigger || !mobileMenuDropdown) {
    return;
  }

  // Toggle mobile menu
  mobileMenuTrigger.addEventListener('click', function(e) {
    e.stopPropagation();
    mobileMenuDropdown.classList.toggle('open');
    
    // Simple swap between hamburger and X
    const hamburger = this.querySelector('.hamburger');
    if (mobileMenuDropdown.classList.contains('open')) {
      // Show X
      hamburger.innerHTML = '<span class="hamburger__x">✕</span>';
    } else {
      // Show hamburger bars
      hamburger.innerHTML = `
        <span class="hamburger__line"></span>
        <span class="hamburger__line"></span>
        <span class="hamburger__line"></span>
      `;
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!mobileMenu.contains(e.target)) {
      mobileMenuDropdown.classList.remove('open');
      
      // Reset to hamburger
      const hamburger = mobileMenuTrigger.querySelector('.hamburger');
      hamburger.innerHTML = `
        <span class="hamburger__line"></span>
        <span class="hamburger__line"></span>
        <span class="hamburger__line"></span>
      `;
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenuDropdown.classList.contains('open')) {
      mobileMenuDropdown.classList.remove('open');
      
      // Reset to hamburger
      const hamburger = mobileMenuTrigger.querySelector('.hamburger');
      hamburger.innerHTML = `
        <span class="hamburger__line"></span>
        <span class="hamburger__line"></span>
        <span class="hamburger__line"></span>
      `;
    }
  });

  // Close menu on window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      mobileMenuDropdown.classList.remove('open');
      
      // Reset to hamburger
      const hamburger = mobileMenuTrigger.querySelector('.hamburger');
      hamburger.innerHTML = `
        <span class="hamburger__line"></span>
        <span class="hamburger__line"></span>
        <span class="hamburger__line"></span>
      `;
    }
  });
}); 