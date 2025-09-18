import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messageContainer/MessageContainer'

const Home = () => {
    return (
        <div className='flex w-auto p-6 rounded-md overflow-hidden shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm h-full '>
            <Sidebar />
            <div className="divider divider-vertical mx-3"></div>
            <MessageContainer className="flex-1" />
        </div>
    )
}

export default Home