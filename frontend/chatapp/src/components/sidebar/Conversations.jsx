import React, { useEffect, useState } from 'react'
import Conversation from './Conversation'
import axios from 'axios'
import toast from 'react-hot-toast'

const Conversations = () => {
    const [loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState([])

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true)
            try {
                const response = await axios.get('http://localhost:5000/api/users', {
                    withCredentials: true, // ✅ include cookies
                })
                const data = response.data

                if (data.error) {
                    throw new Error(data.error)
                }
                setConversations(data)
                console.log(data);

            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }
        getConversations()
    }, [])
    return (
        <div className='py-2 flex flex-col overflow-auto gap-2'> {/* overflow-auto → Adds scrollbars only when content overflows the container. */}
            {conversations.map((conversation, index) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    lastIdx={index === conversations.length - 1}
                />
            ))}
            {loading ? (
                <div className="flex justify-center mt-10">
                    <div className="w-10 h-10 border-4 border-white border-dashed rounded-full animate-spin"></div>
                    <span className="ml-3 text-white text-xl">Logging you up...</span>
                </div>
            ) : null}
        </div>
    )
}

export default Conversations