import React from 'react'
import useConversation from '../../zustand/useConversation'

const Conversation = ({ conversation, lastIdx }) => {
    const { selectedConversation, setSelectedConversation } = useConversation()

    const isSelected = selectedConversation?._id === conversation._id;//The ?. ensures it doesn’t break when selectedConversation is null

    return (
        <>
            <div className={`flex gap-8 items-center hover:bg-blue-400 rounded p-2 py-1 cursor-pointer
                ${isSelected ? "bg-sky-400" : ""}`} onClick={() => setSelectedConversation(conversation)}>
                <div className="avatar avatar-online">
                    <div className="w-12 rounded-full">
                        <img src={conversation.profilePic} />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className='font-bold text-gray-200'>{conversation.fullname}</p>
                        <span className='text-xl'>😶‍🌫️</span>
                    </div>
                </div>
            </div>
            {/* if not last index add divider */}
            {!lastIdx && <div className="divider my-0 py-0 h-1" />}
        </>
    )
}

export default Conversation