document.addEventListener("DOMContentLoaded", function() {
    const messages = [
        "Estarás tu pronto para esta nova aventura?",
        "O servidor de roleplay onde o limite é a tua imaginação!",
        "Vem fazer parte desta New Generation do Roleplay!",
        "Não percas a oportunidade de fazer a diferença! Junta-te a nós!",
        "A melhor experiência de Roleplay está a um clique!"
    ];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const shuffledMessages = shuffle(messages);
    const messageElement = document.querySelector('.main-content h3');

    if (messageElement) {
        messageElement.textContent = shuffledMessages[0];
    }
});