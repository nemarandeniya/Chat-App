import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { useLocation } from 'react-router-dom'
import useLogOut from '../../hooks/useLogOut.js'

const LogoutButton = () => {

    const { loading, logout } = useLogOut()
    return (
        <div className='mt-auto'>
            {loading ? (
                <div className="flex justify-center mt-10">
                    <div className="w-10 h-10 border-4 border-white border-dashed rounded-full animate-spin"></div>
                    <span className="ml-3 text-white text-xl">Signing you up...</span>
                </div>
            ) : (
                <BiLogOut className='w-5 h-5 text-white cursor-pointer' onClick={logout} />
            )}
        </div>
    )
}

export default LogoutButton