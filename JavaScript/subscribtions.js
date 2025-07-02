// გახსნა დახურვა

document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll(".subscribtions-table-row");

  rows.forEach(row => {
    const arrow = row.querySelector(".media-arrow");
    const arrowImg = row.querySelector(".arrow-down-sub");
    const hiddenItems = row.querySelectorAll(".div-subscribtions:not(:first-child), .a-arrow-sub");

    arrow.addEventListener("click", () => {
      if (window.innerWidth > 550) return;

      const isOpen = row.classList.contains("open-row");
      arrowImg.classList.toggle("rotated");

      if (!isOpen) {
        hiddenItems.forEach(item => {
          item.style.display = "flex";
        });

        requestAnimationFrame(() => {
          const fullHeight = row.scrollHeight + "px";
          row.style.transition = "height 0.35s ease";
          row.style.height = fullHeight;
          row.classList.add("open-row");

          hiddenItems.forEach((item, i) => {
            item.style.opacity = "0";
            item.style.transform = "translateY(10px)";
            item.style.transition = "opacity 0.3s ease, transform 0.3s ease";
            item.style.transitionDelay = `${i * 30}ms`;

            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            }, 20);
          });

          setTimeout(() => {
            row.style.height = "auto";
          }, 350);
        });

      } else {
        const currentHeight = row.scrollHeight + "px";
        row.style.height = currentHeight;
        row.style.transition = "height 0.3s ease";

        hiddenItems.forEach((item, i) => {
          item.style.transitionDelay = `${i * 15}ms`;
          item.style.opacity = "0";
          item.style.transform = "translateY(10px)";
        });

        const baseHeight = row.querySelector(".media-arrow").offsetHeight + 16;
        setTimeout(() => {
          row.style.height = baseHeight + "px";
        }, 10);

        setTimeout(() => {
          hiddenItems.forEach(item => {
            item.style.display = "none";
          });
          row.classList.remove("open-row");
          row.style.height = "";
          row.style.transition = "";
        }, 350);
      }
    });
  });
});