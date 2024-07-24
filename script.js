document.getElementById('saveButton').addEventListener('click', function() {
    var textInput = document.getElementById('textInput').value;
    var savedText = document.getElementById('savedText');
    
    if (textInput.trim() === '') {
        savedText.textContent = 'No text saved yet.';
    } else {
        savedText.textContent = textInput;
    }
});
