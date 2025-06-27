// პაროლის მოდალი

const modal = document.getElementById("passwordModal");
const emailModal = document.getElementById("emailModal");
const phoneModal = document.getElementById("phoneModal");
const correctCurrentPassword = "123456";

function openModal(e) {
  e.stopPropagation();
  modal.style.display = "flex";
}
function openEmailModal(e) {
  e.stopPropagation();
  emailModal.style.display = "flex";
}
function openPhoneModal(e) {
  e.stopPropagation();
  phoneModal.style.display = "flex";
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
    emailModal.style.display = "none";
    phoneModal.style.display = "none";
  }
});

[modal, emailModal, phoneModal].forEach(m => {
  m.addEventListener("click", (e) => {
    if (e.target === m) m.style.display = "none";
  });
});

function isValidPassword(pwd) {
  const regex = /^[A-Za-z0-9!@#$%^&*]{6,}$/;
  return regex.test(pwd);
}
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
function isValidPhone(phone) {
  return /^[\d\s]{9,15}$/.test(phone);
}

const currentInput = document.getElementById("current-password");
const newInput = document.getElementById("new-password");
const confirmInput = document.getElementById("confirm-password");
const emailInput = document.getElementById("email-input");
const phoneInput = document.getElementById("phone-input");

currentInput.addEventListener("input", () => {
  const current = currentInput.value.trim();
  const error = document.getElementById("current-error");
  error.style.display = current !== correctCurrentPassword ? "block" : "none";
});
newInput.addEventListener("input", () => {
  const value = newInput.value.trim();
  const error = document.getElementById("new-error");
  error.style.display = !isValidPassword(value) ? "block" : "none";
});
confirmInput.addEventListener("input", () => {
  const confirm = confirmInput.value.trim();
  const newVal = newInput.value.trim();
  const error = document.getElementById("confirm-error");
  error.style.display = confirm !== newVal ? "block" : "none";
});
emailInput.addEventListener("input", () => {
  const emailVal = emailInput.value.trim();
  const error = document.getElementById("email-error");
  error.style.display = !isValidEmail(emailVal) ? "block" : "none";
});
phoneInput.addEventListener("input", () => {
  const phoneVal = phoneInput.value.trim();
  const error = document.getElementById("phone-error");
  error.style.display = !isValidPhone(phoneVal) ? "block" : "none";
});

function setupButtonLoading(btnId, spinnerId, textId, modalRef) {
  const btn = document.getElementById(btnId);
  const spinner = document.getElementById(spinnerId);
  const text = document.getElementById(textId);

  btn.addEventListener("click", () => {
    spinner.style.display = "inline-block";
    text.style.display = "none";
    btn.disabled = true;

    setTimeout(() => {
      spinner.style.display = "none";
      text.style.display = "inline";
      btn.disabled = false;
      modalRef.style.display = "none";
    }, 2000);
  });
}

setupButtonLoading("submitBtn", "btnSpinner", "btnText", modal);
setupButtonLoading("emailSubmit", "emailSpinner", "emailBtnText", emailModal);
setupButtonLoading("phoneSubmit", "phoneSpinner", "phoneBtnText", phoneModal);