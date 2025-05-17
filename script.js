    document.addEventListener("DOMContentLoaded", function () {
      const sidebarLinks = document.querySelectorAll(".contact a");
      sidebarLinks.forEach(link => {
        link.addEventListener("mouseover", () => link.style.opacity = "0.6");
        link.addEventListener("mouseout", () => link.style.opacity = "1");
      });
    });
