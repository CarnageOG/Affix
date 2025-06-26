// ისარი
document.addEventListener("DOMContentLoaded", function () {
  const arrowImg = document.getElementById("arrowImg");

  arrowImg.addEventListener("click", () => {
    arrowImg.classList.toggle("rotated");
  });
});