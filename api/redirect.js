export default function handler(req, res) {
    const { to } = req.query;
    
    if (!to) {
        return res.status(400).send('Missing link parameter');
    }

    // Decode the link
    const decodedLink = Buffer.from(to, 'base64').toString('ascii');
    
    // Permanent redirect
    res.redirect(308, decodedLink);
}