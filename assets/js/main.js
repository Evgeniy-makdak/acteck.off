// ============================================
// acteck.off - Main JavaScript
// Author: Evgeniy Acteck
// ============================================

(function() {
  const STORAGE_LOCALE_KEY = 'acteck.locale';

  function detectPathLocale() {
    const match = window.location.pathname.match(/\/(ru|en)(?=\/)/i);
    return match ? match[1].toLowerCase() : null;
  }

  function replaceLocaleInHref(href, targetLocale) {
    if (!href || typeof href !== 'string') {
      return href;
    }

    if (
      href.startsWith('#') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('javascript:') ||
      /^[a-z]+:/i.test(href)
    ) {
      return href;
    }

    // Replace locale in paths like /ru/some/path or ../../ru/some/path
    return href.replace(/\/(ru|en)(?=\/|$)/i, '/' + targetLocale);
  }

  const pathLocale = detectPathLocale();
  const storedLocale = localStorage.getItem(STORAGE_LOCALE_KEY);
  const preferredLocale = storedLocale || pathLocale || 'ru';

  // Set initial lang attribute and UI state as soon as possible
  document.documentElement.lang = preferredLocale;
  
  // No more need for the 'locale-init-style' hack as we fixed the HTML files
  // but we keep the logic for any potential dynamic content

  if (!storedLocale && pathLocale) {
    localStorage.setItem(STORAGE_LOCALE_KEY, pathLocale);
  }

  // Handle immediate redirect if locale doesn't match preference
  if (pathLocale && preferredLocale !== pathLocale) {
    const localizedPath = replaceLocaleInHref(window.location.pathname, preferredLocale);
    window.location.replace(localizedPath + window.location.search + window.location.hash);
    return;
  }

  // Call syncLanguageUi early to try and fix UI before DOMContentLoaded if possible
  // This will handle buttons that are already in the HTML
  if (document.body) {
    syncLanguageUi(preferredLocale);
  }

  function syncLanguageUi(activeLocale) {
    const switchButtons = document.querySelectorAll('.lang-switch .lang-btn');

    switchButtons.forEach(btn => {
      const buttonLocale = btn.textContent.trim().toLowerCase();
      const isActive = buttonLocale === activeLocale;
      btn.classList.toggle('active', isActive);
      
      // Update the link itself to point to the correct version of current page
      const currentPath = window.location.pathname;
      const targetPath = replaceLocaleInHref(currentPath, buttonLocale);
      btn.setAttribute('href', targetPath + window.location.search + window.location.hash);

      btn.addEventListener('click', function() {
        localStorage.setItem(STORAGE_LOCALE_KEY, buttonLocale);
      });
    });

    // Remove the temporary styles that were hiding the active state
    const initStyle = document.getElementById('locale-init-style');
    if (initStyle) {
      initStyle.remove();
    }
  }

  function normalizeInternalLinks(activeLocale) {
    const links = document.querySelectorAll('a[href]');

    links.forEach(link => {
      if (link.closest('.lang-switch')) {
        return;
      }

      const href = link.getAttribute('href');
      const normalizedHref = replaceLocaleInHref(href, activeLocale);

      if (normalizedHref && normalizedHref !== href) {
        link.setAttribute('href', normalizedHref);
      }
    });
  }

  // Intercept all clicks to handle links that might be added dynamically 
  // or weren't normalized yet
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a[href]');
    if (!link) return;

    if (!link.closest('.lang-switch')) {
      const href = link.getAttribute('href');
      const normalizedHref = replaceLocaleInHref(href, preferredLocale);
      if (normalizedHref !== href) {
        link.setAttribute('href', normalizedHref);
      }
    }
  }, { capture: true });

  document.addEventListener('DOMContentLoaded', function() {
    // Wrap tables for horizontal scroll on mobile
    document.querySelectorAll('table').forEach(function(table) {
      // Skip tables already inside a wrapper or inside iframes
      if (table.closest('.table-wrapper') || table.closest('iframe')) {
        return;
      }
      var wrapper = document.createElement('div');
      wrapper.className = 'table-wrapper';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });

    // Initial sync
    syncLanguageUi(preferredLocale);
    normalizeInternalLinks(preferredLocale);

    // Some pages might have dynamically generated content or late-rendered buttons
    // Run sync again to be sure
    setTimeout(() => syncLanguageUi(preferredLocale), 0);
    setTimeout(() => syncLanguageUi(preferredLocale), 100);

    // Update copyright year dynamically
    const copyrightEls = document.querySelectorAll('.copyright-year');
    const currentYear = new Date().getFullYear();
    copyrightEls.forEach(el => {
      el.textContent = currentYear;
    });

    // Fix iframe demo backgrounds
    const iframes = document.querySelectorAll('iframe[srcdoc]');
    iframes.forEach(iframe => {
      iframe.addEventListener('load', function() {
        try {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
          if (iframeDoc) {
            const body = iframeDoc.body;
            if (body) {
              const bodyBg = iframeDoc.defaultView.getComputedStyle(body).backgroundColor;
              if (bodyBg === 'transparent' || bodyBg === 'rgba(0, 0, 0, 0)' || bodyBg === '') {
                body.style.backgroundColor = '#ffffff';
              }
              const bodyColor = iframeDoc.defaultView.getComputedStyle(body).color;
              if (bodyColor === 'rgb(0, 0, 0)' || bodyColor === '#000000' || bodyColor === 'black') {
                const computedBg = iframeDoc.defaultView.getComputedStyle(body).backgroundColor;
                if (isDarkColor(computedBg)) {
                  body.style.color = '#ffffff';
                }
              }
            }
          }
        } catch(e) {}
      });
      
      if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
        iframe.dispatchEvent(new Event('load'));
      }
    });
  });
})();

/**
 * Check if a CSS color string represents a dark color
 */
function isDarkColor(colorStr) {
  if (!colorStr || colorStr === 'transparent' || colorStr === 'rgba(0, 0, 0, 0)') {
    return true;
  }
  
  const rgbMatch = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (rgbMatch) {
    const r = parseInt(rgbMatch[1]);
    const g = parseInt(rgbMatch[2]);
    const b = parseInt(rgbMatch[3]);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  }
  
  return false;
}
