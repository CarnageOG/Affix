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

  window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    userModal.classList.add('hidden');
  }
  });

// ბურგერ მენიუ
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
}
document.addEventListener('click', function(event) {
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.querySelector('.menu-toggle');

  if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
    sidebar.classList.remove('open');
  }
});