function generateImage() {
    const prompt = document.getElementById('prompt').value;
    const loadingText = document.getElementById('loading');
    const generatedImage = document.getElementById('generatedImage');
    
    // Show loading text
    loadingText.style.display = 'block';
    generatedImage.style.display = 'none';
    
    // API URL
    const apiUrl = `https://www.samirxpikachu.run.place/mageDef?prompt=${encodeURIComponent(prompt)}`;
    
    fetch(apiUrl)
        .then(response => response.blob())
        .then(blob => {
            const imageUrl = URL.createObjectURL(blob);
            generatedImage.src = imageUrl;
            generatedImage.style.display = 'block';
            loadingText.style.display = 'none';
        })
        .catch(error => {
            console.error('Error:', error);
            loadingText.style.display = 'none';
        });
}
