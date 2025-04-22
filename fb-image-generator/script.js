function generate() {
    const imageInput = document.getElementById('imageUpload');
    const adLink = document.getElementById('adLink').value;
    const resultDiv = document.getElementById('result');

    if (!imageInput.files[0] || !adLink) {
        alert("Please fill all fields");
        return;
    }

    // Create safe Vercel link
    const encodedLink = btoa(adLink);
    const safeLink = `${window.location.origin}/api/redirect?to=${encodedLink}`;

    // Show result
    resultDiv.innerHTML = `
        <h3>Your Safe Link:</h3>
        <input type="text" value="${safeLink}" readonly>
        <p>Use this HTML code for Facebook:</p>
        <textarea readonly>&lt;a href="${safeLink}"&gt;&lt;img src="YOUR_IMAGE_URL"&gt;&lt;/a&gt;</textarea>
    `;
}