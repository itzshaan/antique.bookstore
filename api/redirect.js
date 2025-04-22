export default function handler(req, res) {
    const { image, url } = req.query;

    if (!image || !url) {
        return res.status(400).send('Missing parameters');
    }

    // Decode parameters
    const decodedImage = Buffer.from(image, 'base64').toString('ascii');
    const decodedUrl = Buffer.from(url, 'base64').toString('ascii');

    // HTML with Open Graph tags
    const html = `
    <!DOCTYPE html>
    <html prefix="og: https://ogp.me/ns#">
    <head>
        <meta property="og:title" content="watch now">
        <meta property="og:image" content="${decodedImage}">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:description" content="Click to view">
        <meta property="og:url" content="${decodedUrl}">
        <meta http-equiv="refresh" content="0; url=${decodedUrl}">
    </head>
    <body>
        Redirecting...
    </body>
    </html>
    `;

    res.setHeader('Content-Type', 'text/html');
    res.send(html);
}
