import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connect to db");
    } catch (error) {
        console.log("error in connect to db");
    }
}

export default connectDb