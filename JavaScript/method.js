// მოდალი
const addCardBtn = document.querySelector(".add-site-btn");
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