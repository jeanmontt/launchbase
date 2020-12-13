const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", () => {
        const urlID = card.id;

        window.location.href = `/conteudos/${urlID}`;
    });
}