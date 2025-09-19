import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'
import toast from 'react-hot-toast'


const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState("")
    const { setAuthUser } = useAuthContext()


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const response = await axios.post('http://localhost:5000/api/auth/login', { username, password }, { withCredentials: true })

            if (response.data.error) {
                throw new Error(response.data.error)
            }
            console.log(response);
            toast.success("Successfully login")
            localStorage.setItem("chat-user", JSON.stringify(response.data))
            setAuthUser(response.data)
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.error || "login failed")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className=" w-full p-6 bg-blue-300/10 rounded-md shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm ">
                <h1 className='text-3xl font-semibold text-center text-gray-100'>Sign in</h1>
                {loading ? (
                    <div className="flex justify-center mt-10">
                        <div className="w-10 h-10 border-4 border-white border-dashed rounded-full animate-spin"></div>
                        <span className="ml-3 text-white text-xl">Logging you up...</span>
                    </div>
                ) : (
                    <form className='mt-7 mb-10' onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <div className='w-full form-control mb-6'>
                                <label className="label me-6">
                                    <span className=' label-text font-semibold text-gray-800'>Username :</span>
                                </label>
                                <input type="text" placeholder="Username" className="input input-md  w-[300px]" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className='w-full form-control mb-8'>
                                <label className="label me-[28px]">
                                    <span className=' label-text font-semibold text-gray-800'>Password :</span>
                                </label>
                                <input type="password" placeholder="Password" className="input input-md w-[300px]" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <Link to='/signup' className='text-sm hover:underline hover:text-blue-800 inline-block' >
                            Don't have an account?
                        </Link>
                        <div>
                            <button className="btn bg-[#26a5d3] border-none  block w-full">Sign in</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Login