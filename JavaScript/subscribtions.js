// გახსნა დახურვა

document.addEventListener("DOMContentLoaded", function () {
  const rows = document.querySelectorAll(".subscribtions-table-row");

  rows.forEach(row => {
    const arrow = row.querySelector(".media-arrow");
    const arrowImg = row.querySelector(".arrow-down");
    const hiddenItems = row.querySelectorAll(".div-subscribtions:not(:first-child), .a-arrow-sub");

    arrow.addEventListener("click", () => {
      if (window.innerWidth > 550) return;

      const isOpen = row.classList.contains("open-row");
      arrowImg.classList.toggle("rotated");

      if (!isOpen) {
        row.classList.add("open-row");

        hiddenItems.forEach((item, i) => {
          item.style.display = "flex";
          item.style.opacity = "0";
          item.style.transform = "translateY(10px)";
          item.style.transitionDelay = `${i * 40}ms`;

          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
          }, 10);
        });

      } else {
        hiddenItems.forEach((item, i) => {
          item.style.transitionDelay = `${i * 25}ms`;
          item.style.opacity = "0";
          item.style.transform = "translateY(10px)";
        });

        const hideDelay = hiddenItems.length * 25 + 250;

        setTimeout(() => {
          hiddenItems.forEach(item => {
            item.style.display = "none";
          });
          row.classList.remove("open-row");
        }, hideDelay);
      }
    });
  });
});