import User from "../models/userModel.js";
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password don't match!" })
        }

        const user = await User.findOne({ username })
        if (user) {
            return res.status(400).json({ error: "Username already exists!" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })
        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res)
            console.log("Cookies set on response:", res.getHeaders()["set-cookie"])
            await newUser.save()
            return res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        } else {
            return res.status(400).json({ error: "Invalid user data!" })
        }
    } catch (error) {
        console.error(error)
        return res.status(400).json({ error: "Internal server error!" })
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username });
        const ispasswordCorrect = await bcrypt.compare(password, user.password)

        if (!user || !ispasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or passowrd!" })
        }

        generateTokenAndSetCookie(user._id, res)

        return res.status(200).json({
            success: true,
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ success: false, error: "Internal server error!" })
    }
}
export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logout Successfully" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error!" })
    }
}