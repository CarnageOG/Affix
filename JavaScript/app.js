// საიდბარის ჩამშლა
function toggleDropdown(event) {
  event.preventDefault();
  const container = event.currentTarget.parentElement;
  container.classList.toggle('open');
}

// უზერ მოდალი
const userBtn = document.querySelectorAll('.icon-btn')[1];
  const userModal = document.getElementById('user-modal');

  userBtn.addEventListener('click', () => {
    userModal.classList.toggle('hidden');
  });

  document.addEventListener('click', (event) => {
    if (!userBtn.contains(event.target) && !userModal.contains(event.target)) {
      userModal.classList.add('hidden');
    }
  });