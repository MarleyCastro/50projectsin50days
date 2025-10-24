const testimonials = [
    {
        name: "Marlk",
        photoUrl: "img/people_1.png",
        text: "Este produto mudou minha vida! Altamente recomendado."
    },
    {
        name: "João Pereira",
        photoUrl: "img/people_2.png",
        text: "Excelente qualidade e atendimento ao cliente."
    },
    {
        name: "João",
        photoUrl: "img/people_3.png",
        text: "Muito satisfeito com a compra. Voltarei a comprar novamente."
    }
];

const imgEl = document.querySelector("#testimonial img");
const textEl = document.querySelector("#testimonial p");
const usernameEl = document.querySelector("#testimonial .username");
const container = document.querySelector("#testimonial");

let idx = 0;

function updateTestimonial() {
    const { name, photoUrl, text } = testimonials[idx];
    container.classList.remove("fade");

    // Atualiza o conteúdo
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;

    // Animação de fade
    setTimeout(() => container.classList.add("fade"), 100);

    // Próximo
    idx = (idx + 1) % testimonials.length;
}

// Atualiza a cada 5 segundos
setInterval(updateTestimonial, 5000);

// Inicializa
updateTestimonial();