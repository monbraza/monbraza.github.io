document.addEventListener('DOMContentLoaded', function() {
  const tocDetails = document.querySelector('.toc details');
  
  if (tocDetails && window.innerWidth < 1024) {
    // Ensure closed on mobile load
    tocDetails.removeAttribute('open');
    
    // Add smooth animation
    const tocContent = tocDetails.querySelector('.border-s');
    if (tocContent) {
      tocContent.style.transition = 'max-height 0.3s ease';
      
      tocDetails.addEventListener('toggle', function() {
        if (this.open) {
          tocContent.style.maxHeight = tocContent.scrollHeight + 'px';
        } else {
          tocContent.style.maxHeight = '0px';
        }
      });
    }
  }
});