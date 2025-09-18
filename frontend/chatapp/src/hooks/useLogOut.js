import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

const useLogOut = () => {
    const [loading, setloading] = useState(false)
    const { setAuthUser } = useAuthContext()


    const logout = async () => {
        setloading(true)
        try {
            const res = await axios.post('http://localhost:5000/api/auth/logout')
            localStorage.removeItem("chat-user")
            setAuthUser(null)
        } catch (error) {
            toast.error(error.message)
        } finally {
            setloading(false)
        }
    }
    return { loading, logout }
}

export default useLogOut