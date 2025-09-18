import { React, useState } from 'react'
import { data, Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useAuthContext } from '../../context/AuthContext'

const Signup = () => {
    const [loading, setLoading] = useState(false)
    const [inputs, setInputs] = useState({
        fullname: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })
    const { setAuthUser } = useAuthContext() //useContext(AuthContext)

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs({ ...inputs, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const success = handleInputErrors()
        if (!success) return
        setLoading(true)
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', inputs)
            console.log(response.data);
            toast.success("Successfully registered")
            localStorage.setItem("chat-user", JSON.stringify(response.data))
            setAuthUser(response.data)
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    const handleInputErrors = () => {

        const { fullname, username, password, confirmPassword } = inputs

        if (!fullname || !username || !password || !confirmPassword) {
            toast.error("Please Fill all the fields")
            return false
        }
        if (password !== confirmPassword) {
            toast.error("Passwords do not match")
            return false
        }
        if (password.length < 6) {
            toast.error("Passwords must be atleast 6 characters")
            return false
        }
        return true
    }
    return (

        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className=" w-full p-6 bg-blue-300/10 rounded-md shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm ">
                <h1 className='text-3xl font-semibold text-center text-gray-100'>Sign up</h1>
                {loading ? (
                    <div className="flex justify-center mt-10">
                        <div className="w-10 h-10 border-4 border-white border-dashed rounded-full animate-spin"></div>
                        <span className="ml-3 text-white text-xl">Signing you up...</span>
                    </div>
                ) : (
                    <form className='mt-7 mb-10 flex flex-col gap-6' onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <div className='w-full form-control mb-6'>
                                <label className="label me-6">
                                    <span className=' label-text font-semibold text-gray-800  w-36'>FullName :</span>
                                </label>
                                <input type="text" placeholder="Enter Fullname" className="input input-md  w-[300px]" name='fullname' value={inputs.fullname} onChange={handleChange} />
                            </div >
                            <div className='w-full form-control mb-6'>
                                <label className="label me-6">
                                    <span className=' label-text font-semibold text-gray-800  w-36'>Username :</span>
                                </label>
                                <input type="text" placeholder="Enter username" className="input input-md  w-[300px]" name='username' value={inputs.username} onChange={handleChange} />
                            </div>
                            <div className='w-full form-control mb-8'>
                                <label className="label me-[28px]">
                                    <span className=' label-text font-semibold text-gray-800 w-36'>Password :</span>
                                </label>
                                <input type="password" placeholder="Enter Password" className="input input-md w-[300px]" name='password' value={inputs.password} onChange={handleChange} />
                            </div>
                            <div className='w-full form-control mb-8'>
                                <label className="label me-[28px]">
                                    <span className=' label-text font-semibold text-gray-800  w-36'>Confirm password :</span>
                                </label>
                                <input type="password" placeholder="Enter password again" className="input input-md w-[300px]" name='confirmPassword' value={inputs.confirmPassword} onChange={handleChange} />
                            </div>
                            <div className='flex w-full form-control mb-8'>
                                <label className="label me-[28px]">
                                    <span className=' label-text font-semibold text-gray-800 w-36'>Gender :</span>
                                </label>
                                <div className='me-6'>
                                    <span className='text-gray-800'>Male</span> <input type="radio" name="gender" className="radio radio-info" value="male" checked={inputs.gender === "male"} onChange={handleChange} />
                                </div>
                                <div>
                                    <span className='text-gray-800'>Female</span> <input type="radio" name="gender" className="radio radio-info" value="female" checked={inputs.gender === "female"} onChange={handleChange} />
                                </div>
                            </div>
                        </div >
                        <Link to='/login' className='text-sm hover:underline hover:text-blue-800 inline-block' >
                            Already have an account?
                        </Link>
                        <div>
                            <button className="btn bg-[#26a5d3] border-none  block w-full">Sign up</button>
                        </div>

                    </form >
                )}
            </div >
        </div >
    )
}

export default Signup