async function generate() {
    const imageInput = document.getElementById('imageUpload');
    const adLink = document.getElementById('adLink').value;
    const result = document.getElementById('generatedLink');

    if (!imageInput.files[0] || !adLink) {
        alert("Please upload image and enter link");
        return;
    }

    // Host image (free solution)
    const imageUrl = await uploadToImgur(imageInput.files[0]);
    
    // Encode parameters
    const encodedImage = btoa(imageUrl);
    const encodedUrl = btoa(adLink);
    
    // Generate safe link
    const safeLink = `${window.location.origin}/api/redirect?image=${encodedImage}&url=${encodedUrl}`;
    result.value = safeLink;
}

// Free image hosting using Imgur (create free account)
async function uploadToImgur(file) {
    const formData = new FormData();
    formData.append('image', file);

    try {
        const response = await fetch('https://api.imgur.com/3/image', {
            method: 'POST',
            headers: {
                Authorization: 'Client-ID ce837a14e49290e'
            },
            body: formData
        });
        const data = await response.json();
        return data.data.link;
    } catch (error) {
        alert('Image upload failed');
        return null;
    }
}

function copyLink() {
    const copyText = document.getElementById('generatedLink');
    copyText.select();
    document.execCommand('copy');
}
