import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, role, res) => {
    try {
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined");
        }

        const token = jwt.sign({ userId, role }, process.env.JWT_SECRET, { expiresIn: '15d' });

        // Set the cookie
        res.cookie('jwt', token, {
            maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
            httpOnly: true,                  // Prevents JavaScript access
            sameSite: 'Lax',                 // Suitable for same-origin or top-level navigation
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        });

        return token; 
    } catch (err) {
        console.error(`Error in generateTokenAndSetCookie:`, err);
        return res.status(500).json({ error: `Internal error - ${err.message}` });
    }
};

export default generateTokenAndSetCookie;
