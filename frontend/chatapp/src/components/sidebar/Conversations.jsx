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
                console.log(conversations);

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
            <Conversation />
            <Conversation />
            <Conversation />
        </div>
    )
}

export default Conversations