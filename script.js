function verificarSenha() {
    let senha = document.getElementById("senha").value;
    let mensagemErro = document.getElementById("mensagem-erro");
    if (senha === "sorriso") {  // Escolha a senha que quiser
        window.location.href = "pagina2.html";
    } else {
        mensagemErro.style.display = "block";  // Torna a mensagem visível
        mensagemErro.textContent = "Senha incorreta! Tente novamente.";
    }
}

//JavaScript da pagina 2
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}

showSlides(); // Inicia o carrossel

// Função para controlar o carrossel com as setas
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

prev.addEventListener("click", function() {
    slideIndex--;
    if (slideIndex < 0) slideIndex = document.getElementsByClassName("slide").length - 1;
    showSlidesManual();
});

next.addEventListener("click", function() {
    slideIndex++;
    if (slideIndex >= document.getElementsByClassName("slide").length) slideIndex = 0;
    showSlidesManual();
});

function showSlidesManual() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";  
}

document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelector(".slides");
    let index = 0;

    setInterval(() => {
        index = (index + 1) % 3; // Altera entre 0, 1 e 2 (três imagens)
        slides.style.transform = `translateX(-${index * 300}px)`;
    }, 3000); // Troca a cada 3 segundos
});


