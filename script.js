const textareaEl = document.getElementById('textarea');
const totalContainerEl = document.getElementById('total-counter');
const remainingContainerEl = document.getElementById('remaining-counter');

textareaEl.addEventListener('input', () => {
    updateCounter();
});

updateCounter()

function updateCounter() {
    totalContainerEl.textContent = textareaEl.value.length;
    remainingContainerEl.textContent = textareaEl.maxLength - textareaEl.value.length;
}