document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const mobile = document.getElementById("menu--mobile");

  // Adiciona um evento de clique ao elemento 'menu--mobile'
  mobile.addEventListener("click", function () {
    // Verifica se a largura da tela é menor ou igual a 500 pixels
    if (window.innerWidth <= 500) {
      // Altera a visibilidade do menu
      if (menu.style.transform === "translateY(0%)") {
        menu.style.transform = "translateY(-100%)";
        // Restaura o ícone do menu ao formato original (hambúrguer)
        restoreMenuIcon();
      } else {
        menu.style.transform = "translateY(0%)";
        // Transforma o ícone do menu para o formato de "X"
        transformMenuIcon();
      }
    }
  });

  function transformMenuIcon() {
    // Adiciona uma classe para controlar a cor dos spans
    mobile.classList.add("menu-opened");

    // Muda as propriedades dos spans para formar o "X"
    mobile.children[0].style.transform = "rotate(-45deg) translate(-8px, 6px)";
    mobile.children[1].style.opacity = "0";
    mobile.children[2].style.transform = "rotate(45deg) translate(-8px, -6px)";
  }

  function restoreMenuIcon() {
    // Remove a classe para voltar à cor original
    mobile.classList.remove("menu-opened");

    // Restaura as propriedades dos spans para o formato original (hambúrguer)
    mobile.children[0].style.transform = "none";
    mobile.children[1].style.opacity = "1";
    mobile.children[2].style.transform = "none";
  }

  // Adiciona um evento de rolagem para fechar o menu quando o usuário rolar pela página
  window.addEventListener("scroll", function () {
    // Verifica se o menu está aberto e o fecha
    if (window.innerWidth <= 500 && menu.style.transform === "translateY(0%)") {
      menu.style.transform = "translateY(-100%)";
      // Restaura o ícone do menu ao formato original (hambúrguer)
      restoreMenuIcon();
    }
  });
});
