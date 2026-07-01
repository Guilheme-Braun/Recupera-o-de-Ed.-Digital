// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Funcionalidade do Modo Escuro (Dark Mode)
    const themeToggle = document.getElementById('theme-toggle');
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    });

    // 2. Funcionalidade do Validador do Quiz
    const quizForm = document.getElementById('quiz-form');
    const resultBox = document.getElementById('quiz-result');

    quizForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede a página de recarregar
        
        // Pega a resposta selecionada
        const answer = document.querySelector('input[name="q1"]:checked').value;
        
        // Remove classes anteriores
        resultBox.classList.remove('hidden', 'success', 'error');
        
        // Valida se está correto
        if (answer === 'certo') {
            resultBox.textContent = '¶ Parabéns! Você é um cidadão digital consciente. Sempre cheque as fontes.';
            resultBox.classList.add('success');
        } else {
            resultBox.textContent = '❌ Atenção! Compartilhar sem checar espalha desinformação. Tente novamente!';
            resultBox.classList.add('error');
        }
    });
});
