import React from 'react'
import Layout from '../Components/Layout'
import Side from '../Components/Side'
import '../Styles/Sidebar.css'

function Dashboard({ user }) {
    const sidebaritems = [
        { link: '/', value: 'My Profile', key: 3 },
        { link: '/', value: 'My Projects', key: 0 },
        { link: '/', value: 'BookMarked Projects', key: 1 },
        { link: '/', value: 'Discover Projects', key: 2 },
    ]
    return (
        <Layout>
            <Side sidebaritems={sidebaritems} />
        </Layout>
    )
}

export default Dashboard
