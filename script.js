const textInput = document.getElementById('textInput');
const submitButton = document.getElementById('submitButton');

textInput.addEventListener('input', () => {
    const digits = textInput.value.replace(/\D/g, 'D'); // Remove non-digit characters
    digitcount.textcontent = digits;
});