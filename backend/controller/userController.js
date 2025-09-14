import User from "../models/userModel.js";

export const getUsersForSideBar = async (req, res) => {
    try {
        const loggedinUserId = req.user._id
        //retrive all user data excepts logged in user's data while excluding password field from the results 
        const filteredUsers = await User.find({ _id: { $ne: loggedinUserId } }).select("-password")

        res.status(200).json(filteredUsers)
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ error: "Internal Server error" })
    }
}