import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
    return (
        <div className='flex flex-col gap-2'>
            <SearchInput />
            <div className="divider px-3"></div>
            <Conversations className="flex-1  gap-2" />
            <LogoutButton />
        </div>
    )
}

export default Sidebar