// თვე და წელი
  const expiryInput = document.getElementById("expiry");
  expiryInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.slice(0, 2) + ' / ' + value.slice(2, 4);
    }
    e.target.value = value;
  });

// გახსნა დახურვა

document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('[data-target]');

  toggles.forEach(toggle => {
    const modalSelector = toggle.getAttribute('data-target');
    const arrowSelector = toggle.getAttribute('data-arrow');

    const modal = document.querySelector(modalSelector);
    const arrow = document.querySelector(arrowSelector);

    toggle.addEventListener('click', () => {
      const isCurrentlyOpen = modal.classList.contains('showing');

      if (!isCurrentlyOpen) {
        modal.style.display = 'block';
        modal.style.height = 'auto';

        const contentHeight = modal.scrollHeight;
        const minHeight = parseInt(modal.dataset.minHeight) || 150;
        const finalHeight = Math.max(contentHeight, minHeight);

        modal.style.height = '0px';
        modal.style.opacity = '0';
        modal.offsetHeight;

        modal.classList.add('showing');
        modal.style.height = finalHeight + 'px';
        modal.style.opacity = '1';
        modal.style.pointerEvents = 'auto';

        arrow?.classList.add('rotate');
      } else {
        modal.style.height = '0px';
        modal.style.opacity = '0';
        modal.style.padding = '0 15px';
        modal.style.pointerEvents = 'none';

        arrow?.classList.remove('rotate');

        setTimeout(() => {
          modal.classList.remove('showing');
          modal.style.display = 'none';
        }, 500);
      }
    });
  });
});