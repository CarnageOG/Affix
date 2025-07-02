// ღილაკები

document.querySelectorAll('.card-btn').forEach(button => {
  const img = button.querySelector('img');
  if (!img) return;

  if (img.alt === 'Star') {
    button.addEventListener('click', () => {
      document.querySelectorAll('.card-btn').forEach(btn => {
        const innerImg = btn.querySelector('img');
        if (innerImg && innerImg.alt === 'Star') {
          btn.classList.remove('star-active');
        }
      });

      button.classList.add('star-active');
    });
  }

  if (img.alt === 'Delete') {
    button.addEventListener('click', () => {
      button.classList.toggle('delete-active');
    });
  }
});