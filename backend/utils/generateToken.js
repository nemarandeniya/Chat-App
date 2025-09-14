import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId, res) => {
    //generate token
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d"
    });

    //save it as a cookie
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,//expires after 15days
        httpOnly: true,//JavaScript in the browser cannot read the cookie, only the server can.
        sameSite: "strict",//Browser won’t send this cookie when the request comes from another site (CSRF protection).
        secure: process.env.NODE_ENV !== "development"
    })
}

export default generateTokenAndSetCookie