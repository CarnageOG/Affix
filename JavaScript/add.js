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
  const cardSelector = document.getElementById('cardSelector');
  const cardModal = document.getElementById('cardModal');
  const arrowIcon = document.getElementById('arrowIcon');

  let isOpen = false;

  cardSelector.addEventListener('click', () => {
    if (!isOpen) {
      cardModal.style.display = 'block';
      cardModal.style.height = 'auto';

      const contentHeight = cardModal.scrollHeight;
      const finalHeight = Math.max(contentHeight, 270);

      cardModal.style.height = '0px';
      cardModal.style.opacity = '0';
      cardModal.offsetHeight;

      cardModal.classList.add('showing');
      cardModal.style.height = finalHeight + 'px';
      cardModal.style.opacity = '1';
      cardModal.style.padding = '15px';
      cardModal.style.pointerEvents = 'auto';

      arrowIcon.classList.add('rotate');
    } else {
      cardModal.style.height = '0px';
      cardModal.style.opacity = '0';
      cardModal.style.padding = '0 15px';
      cardModal.style.pointerEvents = 'none';

      arrowIcon.classList.remove('rotate');

      setTimeout(() => {
        cardModal.classList.remove('showing');
        cardModal.style.display = 'none';
      }, 500);
    }

    isOpen = !isOpen;
  });
});