// პაროლის მოდალი

const modal = document.getElementById("passwordModal");
const correctCurrentPassword = "123456";

function openModal() {
  modal.style.display = "flex";
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

function isValidPassword(pwd) {
  const regex = /^[A-Za-z0-9!@#$%^&*]{6,}$/;
  return regex.test(pwd);
}

const currentInput = document.getElementById("current-password");
const newInput = document.getElementById("new-password");
const confirmInput = document.getElementById("confirm-password");

currentInput.addEventListener("input", () => {
  const current = currentInput.value.trim();
  const error = document.getElementById("current-error");
  if (current !== correctCurrentPassword) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
});

newInput.addEventListener("input", () => {
  const value = newInput.value.trim();
  const error = document.getElementById("new-error");
  if (!isValidPassword(value)) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
});

confirmInput.addEventListener("input", () => {
  const confirm = confirmInput.value.trim();
  const newVal = newInput.value.trim();
  const error = document.getElementById("confirm-error");
  if (confirm !== newVal) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
});

// Loading animation on submit
const submitBtn = document.getElementById("submitBtn");
const btnSpinner = document.getElementById("btnSpinner");
const btnText = document.getElementById("btnText");

submitBtn.addEventListener("click", () => {
  btnSpinner.style.display = "inline-block";
  btnText.style.display = "none";
  submitBtn.disabled = true;

  setTimeout(() => {
    btnSpinner.style.display = "none";
    btnText.style.display = "inline";
    submitBtn.disabled = false;
    modal.style.display = "none";
  }, 2000);
});