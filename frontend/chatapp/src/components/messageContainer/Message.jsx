import React from 'react'

const Message = () => {
    return (
        <>
            <div className=' chat chat-end mb'>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt='Bubble component'
                            src='https://img.daisyui.com/images/profile/demo/kenobee@192.webp' />
                    </div>
                </div>
                <div className="chat-header">
                    You
                    <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble bg-gray-500 text-[15px]">You were the Chosen One!</div>
            </div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="bubble component"
                            src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                        />
                    </div>
                </div>
                <div className="chat-header">
                    Anakin
                    <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble bg-gray-500 text-[15px]">I hate you!</div>
            </div>
        </>
    )
}

export default Message