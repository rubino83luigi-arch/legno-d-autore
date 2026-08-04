// =======================================
// LEGNO D'AUTORE
// script.js
// =======================================

// Scorrimento fluido dei link del menu

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destinazione = document.querySelector(this.getAttribute("href"));

        if(destinazione){

            destinazione.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// Animazione comparsa sezioni

const osservatore = new IntersectionObserver((elementi)=>{

    elementi.forEach(elemento=>{

        if(elemento.isIntersecting){

            elemento.target.classList.add("visibile");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll("section").forEach(sezione=>{

    osservatore.observe(sezione);

});
// Pulsante Torna su
// =======================================

const topButton = document.querySelector(".top-button");

if (topButton) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topButton.style.opacity = "1";
            topButton.style.pointerEvents = "auto";

        } else {

            topButton.style.opacity = "0";
            topButton.style.pointerEvents = "none";

        }

    });

}


// =======================================
// Messaggio di benvenuto
// =======================================

window.addEventListener("load", () => {

    console.log("Legno d'Autore - Sito caricato correttamente.");

});


// =======================================
// Evidenzia la scheda prodotto selezionata
// =======================================

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


// =======================================
// Fine script
// =======================================