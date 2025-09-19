import React from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/usegetmessages'
import MessageSkelton from '../skeltons/MessageSkelton'

const Messages = () => {
    const { messages, loading } = useGetMessages()
    console.log("messages:", messages);

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {loading && [...Array(3)].map((_, idx) => <MessageSkelton key={idx} />)}

        </div>
    )
}

export default Messages