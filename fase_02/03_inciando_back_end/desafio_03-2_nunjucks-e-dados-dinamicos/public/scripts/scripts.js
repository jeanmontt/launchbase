const modalOverlay = document.querySelector('.modal_overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", () => {
        const urlID = card.id;

        modalOverlay.classList.add("active");
        modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${urlID}`;
    })
}

modalOverlay.querySelector('.close_modal').addEventListener("click", () => {
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector('iframe').src = "";
})