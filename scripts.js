// Função para filtrar os produtos quando um botão de categoria é clicado
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-buttons .btn');
    const productItems = document.querySelectorAll('.product-item');

    // Verifica se existem botões de filtro na página
    if (filterButtons.length > 0) {
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove a classe 'active' de todos os botões
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Adiciona a classe 'active' ao botão clicado
                this.classList.add('active');

                const filter = this.getAttribute('data-filter');

                // Itera sobre cada item de produto para mostrar ou esconder
                productItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block'; // Mostra o item
                    } else {
                        item.style.display = 'none'; // Esconde o item
                    }
                });
            });
        });

        // Inicia mostrando todos os produtos e ativa o botão "Todos" por padrão
        filterButtons[0].classList.add('active');
    }
});
