function toggleDropdown(event) {
  event.preventDefault();
  const container = event.currentTarget.parentElement;
  container.classList.toggle('open');
}