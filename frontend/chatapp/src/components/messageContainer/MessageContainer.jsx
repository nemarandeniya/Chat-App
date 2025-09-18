import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'
const MessageContainer = () => {
    const noChatSelected = true
    return (
        <div className='md:min-w-[450px] flex flex-col ms-10'>
            {noChatSelected ? <NoChatSelected /> : (
                <>
                    {/* header */}
                    <div className="px-4 py-2 mb-2 flex gap-3 items-center font-bold">
                        <div>
                            <img src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" className="w-10 rounded-full" />
                        </div>
                        <span className='text-gray-800'>Anakin</span>
                    </div>

                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    )
}

export default MessageContainer

const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-grey-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome Alex❤️</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-4xl text-center' />
            </div>
        </div>
    )
}