const formDelete = document.querySelector("#form_delete");

formDelete.addEventListener("submit", (event) => {
  const confirmation = confirm("Deseja deletar?");

  if (!confirmation) {
    event.preventDefault();
  }
});