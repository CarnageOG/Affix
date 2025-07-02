// გახსნა დახურვა

document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll(".history-table-row");

  rows.forEach(row => {
    const arrow = row.querySelector(".media-arrow");
    const arrowImg = row.querySelector(".arrow-down");
    const hiddenItems = row.querySelectorAll(".div-history:not(:first-child), .button-hiden");

    arrow.addEventListener("click", () => {
      if (window.innerWidth > 1024) return;

      const isOpen = row.classList.contains("open-row");
      arrowImg.classList.toggle("rotated");

      if (!isOpen) {
        hiddenItems.forEach(item => {
          item.style.display = "flex";
        });

        requestAnimationFrame(() => {
          const fullHeight = row.scrollHeight;
          row.style.height = fullHeight + "px";
          row.style.transition = "height 0.4s ease";
          row.classList.add("open-row");

          hiddenItems.forEach((item, i) => {
            item.style.opacity = "0";
            item.style.transform = "translateY(10px)";
            item.style.transition = "opacity 0.3s ease, transform 0.3s ease";
            item.style.transitionDelay = `${i * 40}ms`;

            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            }, 20);
          });

          setTimeout(() => {
            row.style.height = "auto";
          }, 400);
        });

      } else {
        const currentHeight = row.scrollHeight;
        row.style.height = currentHeight + "px";
        row.style.transition = "height 0.3s ease";

        requestAnimationFrame(() => {
          hiddenItems.forEach((item, i) => {
            item.style.transitionDelay = `${i * 15}ms`;
            item.style.opacity = "0";
            item.style.transform = "translateY(10px)";
          });

          setTimeout(() => {
            const baseHeight = row.querySelector(".div-flex-arrow").offsetHeight;
            row.style.height = baseHeight + "px";

            setTimeout(() => {
              hiddenItems.forEach(item => {
                item.style.display = "none";
              });
              row.classList.remove("open-row");
              row.style.transition = "";
              row.style.height = "";
            }, 200);
          }, 150);
        });
      }
    });
  });
});