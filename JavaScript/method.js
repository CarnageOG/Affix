// მოდალი
const addCardBtn = document.querySelector(".add-card-btn");
  const cardModal = document.getElementById("cardModal");

  addCardBtn.addEventListener("click", () => {
    cardModal.style.display = "flex";
  });

  cardModal.addEventListener("click", (e) => {
    if (e.target === cardModal) {
      cardModal.style.display = "none";
    }
  });

  const expiryInput = document.getElementById("expiry");
  expiryInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.slice(0, 2) + ' / ' + value.slice(2, 4);
    }
    e.target.value = value;
  });

  window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    cardModal.style.display = "none";
  }
});

// ლოადინგი

const form = document.querySelector(".payment-form");
  const spinner = document.getElementById("spinner");
  const submitText = document.getElementById("submitText");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    spinner.style.display = "inline-block";
    submitText.style.display = "none";

    setTimeout(() => {
      spinner.style.display = "none";
      submitText.style.display = "inline";
      alert("Card added successfully!");
      document.getElementById("cardModal").style.display = "none";
    }, 2000);
  });

  // ღილაკები

  document.querySelectorAll('.card-btn').forEach(button => {
    const img = button.querySelector('img');
    if (!img) return;

    if (img.alt === 'Star') {
      button.addEventListener('click', () => {
        button.classList.toggle('star-active');
      });
    }

    if (img.alt === 'Delete') {
      button.addEventListener('click', () => {
        button.classList.toggle('delete-active');
      });
    }
  });