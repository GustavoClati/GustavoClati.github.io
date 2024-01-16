document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const mobile = document.getElementById("menu--mobile");

  mobile.addEventListener("click", function () {
    toggleMenu();
  });

  window.addEventListener("scroll", function () {
    if (window.innerWidth <= 500 && menu.style.transform === "translateY(0%)") {
      toggleMenu();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 500) {
      restoreMenuIcon();
      menu.style.transform = "none";
    }
  });

  function toggleMenu() {
    if (menu.style.transform === "translateY(0%)") {
      menu.style.transform = "translateY(-100%)";
    } else {
      menu.style.transform = "translateY(0%)";
    }
    toggleMenuIcon();
  }

  function toggleMenuIcon() {
    const spans = mobile.getElementsByTagName("span");

    if (mobile.classList.contains("menu-opened")) {
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    } else {
      spans[0].style.transform = "rotate(-45deg) translate(-8px, 6px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(45deg) translate(-8px, -6px)";
    }

    mobile.classList.toggle("menu-opened");
  }

  function restoreMenuIcon() {
    const spans = mobile.getElementsByTagName("span");

    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";

    mobile.classList.remove("menu-opened");
  }
});
