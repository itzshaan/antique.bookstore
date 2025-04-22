async function generate() {
    const imageInput = document.getElementById('imageUpload');
    const adLink = document.getElementById('adLink').value;
    const result = document.getElementById('generatedLink');

    if (!imageInput.files[0] || !adLink) {
        alert("Please upload image and enter link");
        return;
    }

    // Convert image to Base64
    const reader = new FileReader();
    reader.onload = async function(e) {
        const base64Image = e.target.result;
        
        // Generate safe link
        const encodedImage = btoa(base64Image);
        const encodedUrl = btoa(adLink);
        const safeLink = `${window.location.origin}/api/redirect?image=${encodedImage}&url=${encodedUrl}`;
        
        result.value = safeLink;
    };
    reader.readAsDataURL(imageInput.files[0]);
}

function copyLink() {
    const copyText = document.getElementById('generatedLink');
    copyText.select();
    document.execCommand('copy');
}
