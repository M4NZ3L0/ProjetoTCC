let cards = document.querySelectorAll(".Accordion");

cards.forEach(card => {
    card.addEventListener("click", () => {
        let cardDesciption = card.querySelector(".Descripition");
        let expandIcon = card.querySelector("div svg")

        if(cardDesciption.classList.contains("Hidden"))
        {
            expandIcon.style.rotate = "180deg";
            cardDesciption.classList.remove("Hidden");
        }
        else
        {
            expandIcon.style.rotate = "0deg";
            cardDesciption.classList.add("Hidden");
        }
    })
});