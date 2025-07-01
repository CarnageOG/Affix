// Modal 
const passwordModal = document.getElementById("passwordModal");
const emailModal = document.getElementById("emailModal");
const phoneModal = document.getElementById("phoneModal");

// Input
const currentInput = document.getElementById("current-password");
const newInput = document.getElementById("new-password");
const confirmInput = document.getElementById("confirm-password");
const emailInput = document.getElementById("email-input");
const phoneInput = document.getElementById("phone-input");

// Display 
const emailDisplay = document.getElementById("emailDisplay");
const phoneDisplay = document.getElementById("phoneDisplay");
const passwordDisplay = document.getElementById("passwordDisplay");

// Error 
const currentError = document.getElementById("current-error");
const newError = document.getElementById("new-error");
const confirmError = document.getElementById("confirm-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");

// Open modal functions
function openModal(e) {
  e.stopPropagation();
  passwordModal.style.display = "flex";
}
function openEmailModal(e) {
  e.stopPropagation();
  emailModal.style.display = "flex";
}
function openPhoneModal(e) {
  e.stopPropagation();
  phoneModal.style.display = "flex";
}

// მოდალის დახურვა 
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    [passwordModal, emailModal, phoneModal].forEach(m => m.style.display = "none");
  }
});

[passwordModal, emailModal, phoneModal].forEach(modal => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});

document.querySelectorAll('.close-button').forEach(button => {
  button.addEventListener('click', () => {
    [passwordModal, emailModal, phoneModal].forEach(m => m.style.display = "none");
  });
});

// Validation functions
function isValidPassword(pwd) {
  return /^(?=.*\d)(?=.*[!@#$%&]).{8,}$/.test(pwd);
}
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidPhone(phone) {
  return /^[\d\s]{9,15}$/.test(phone);
}

// Input validation listeners
currentInput.addEventListener("input", () => {
  currentError.style.display = "none";
});
newInput.addEventListener("input", () => {
  newError.style.display = !isValidPassword(newInput.value.trim()) ? "block" : "none";
});
confirmInput.addEventListener("input", () => {
  confirmError.style.display = confirmInput.value.trim() !== newInput.value.trim() ? "block" : "none";
});
emailInput.addEventListener("input", () => {
  emailError.style.display = !isValidEmail(emailInput.value.trim()) ? "block" : "none";
});
phoneInput.addEventListener("input", () => {
  phoneError.style.display = !isValidPhone(phoneInput.value.trim()) ? "block" : "none";
});

// Loading
function setupButtonLoading(btnId, spinnerId, textId, modalRef, callback) {
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

      if (typeof callback === "function") callback();
    }, 2000);
  });
}

// ცვლილების დამახსოვრება
setupButtonLoading("submitBtn", "btnSpinner", "btnText", passwordModal, () => {
  if (
    isValidPassword(newInput.value.trim()) &&
    confirmInput.value.trim() === newInput.value.trim()
  ) {
    passwordDisplay.innerText = "•••••••"; 
  }
});

setupButtonLoading("emailSubmit", "emailSpinner", "emailBtnText", emailModal, () => {
  const newEmail = emailInput.value.trim();
  if (isValidEmail(newEmail)) {
    emailDisplay.innerText = newEmail;
  }
});

setupButtonLoading("phoneSubmit", "phoneSpinner", "phoneBtnText", phoneModal, () => {
  const newPhone = phoneInput.value.trim();
  if (isValidPhone(newPhone)) {
    phoneDisplay.innerText = newPhone;
  }
});
