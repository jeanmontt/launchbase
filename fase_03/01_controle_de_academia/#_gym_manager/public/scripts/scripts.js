const currentPage = location.pathname;
const menuItems =document.querySelectorAll("header .links a");

for (item of menuItems) {
  if (currentPage.includes(item.getAttribute("href"))) {
    item.classList.add("active");
  }
}

const formDelete = document.querySelector("#form_delete");

formDelete.addEventListener("submit", (event) => {
  const confirmation = confirm("Deseja deletar?");

  if (!confirmation) {
    event.preventDefault();
  }
});