// Script for accordion
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.closest('.accordion-item');
        const collapse = accordionItem.querySelector('.accordion-collapse');

        // Toggle active class for the current accordion item
        accordionItem.classList.toggle('active');
    });
});

// Script Dark/Light mode
document.getElementById('toggle-colors').addEventListener('click', function () {
    document.body.classList.toggle('inverted');
});
