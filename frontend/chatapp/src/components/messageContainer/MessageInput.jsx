import React from 'react'
import { BsSend } from 'react-icons/bs'
const MessageInput = () => {
    return (
        <form className='px-4 my-3'>
            <div className='w-full relative'>
                <input type='text' className=' text-sm rounded-lg block w-full shadow-lg bg-gray-400 py-3 text-black' placeholder='Send a message' />
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'><BsSend className='' /></button>
            </div>
        </form>
    )
}

export default MessageInput