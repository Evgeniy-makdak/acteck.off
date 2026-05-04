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

  // Fix iframe demo backgrounds - add default light background and dark text
  // to srcdoc iframes that don't have explicit body styling
  const iframes = document.querySelectorAll('iframe[srcdoc]');
  iframes.forEach(iframe => {
    // Wait for iframe to load
    iframe.addEventListener('load', function() {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        if (iframeDoc) {
          const body = iframeDoc.body;
          if (body) {
            // Check if body already has a background-color set
            const bodyBg = iframeDoc.defaultView.getComputedStyle(body).backgroundColor;
            // If background is transparent or rgba(0,0,0,0), set a light background
            if (bodyBg === 'transparent' || bodyBg === 'rgba(0, 0, 0, 0)' || bodyBg === '') {
              body.style.backgroundColor = '#ffffff';
            }
            // Check if body has a color set
            const bodyColor = iframeDoc.defaultView.getComputedStyle(body).color;
            // If color is the default (usually rgb(0,0,0) or similar dark), ensure it's visible
            // Only set if it seems like the default black on dark bg
            if (bodyColor === 'rgb(0, 0, 0)' || bodyColor === '#000000' || bodyColor === 'black') {
              // Only override if background is dark
              const computedBg = iframeDoc.defaultView.getComputedStyle(body).backgroundColor;
              if (isDarkColor(computedBg)) {
                body.style.color = '#ffffff';
              }
            }
          }
        }
      } catch(e) {
        // Silently fail - cross-origin issues shouldn't happen with srcdoc
      }
    });
    
    // If iframe is already loaded, trigger manually
    if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
      iframe.dispatchEvent(new Event('load'));
    }
  });
});

/**
 * Check if a CSS color string represents a dark color
 */
function isDarkColor(colorStr) {
  if (!colorStr || colorStr === 'transparent' || colorStr === 'rgba(0, 0, 0, 0)') {
    return true; // transparent is effectively dark on our dark page
  }
  
  // Parse rgb/rgba values
  const rgbMatch = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (rgbMatch) {
    const r = parseInt(rgbMatch[1]);
    const g = parseInt(rgbMatch[2]);
    const b = parseInt(rgbMatch[3]);
    // Calculate perceived brightness
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  }
  
  // Check named colors and hex
  return false; // Can't determine, assume light
}
