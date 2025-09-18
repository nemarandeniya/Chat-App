import React from 'react'

const Conversation = () => {
    return (
        <>
            <div className="flex gap-8 items-center hover:bg-blue-400 rounded p-2 py-1 cursor-pointer">
                <div className="avatar avatar-online">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className='font-bold text-gray-200'>Alexandra Saint</p>
                        <span className='text-xl'>😶‍🌫️</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Conversation