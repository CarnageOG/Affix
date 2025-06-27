// მოდალის გახსნა
const addBtn = document.querySelector('.add-site-btn');
const modal = document.getElementById('siteModal');

addBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// მონიშვნა

const siteTypeCards = document.querySelectorAll('.site-type');

siteTypeCards.forEach(card => {
  card.addEventListener('click', () => {
    siteTypeCards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
  });
});

// ლოადინგი

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

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("siteModal");
  setupButtonLoading("addSiteBtn", "addSiteSpinner", "addSiteBtnText", modal, () => {
    console.log("Site added");
  });
});


