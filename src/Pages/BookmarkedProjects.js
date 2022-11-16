import Layout from '../Components/Layout'
import React, { useState, useEffect } from 'react'
import Side from '../Components/Side'
import ProjectCards from '../Components/ProjectCards'

function BookmarkedProjects({ projects, sidebaritems }) {
    const [bookmarks, setBookmarks] = useState([])

    useEffect(() => {
        //fetch data from server
        // fetchprojects();
        const bookmarked = projects.filter(
            (project) => project.type === 'bookmarked'
        )
        setBookmarks(bookmarked)
    }, [projects])
    const sidebaritemsAKAbookmarks = [
        { link: '/user/123012asdsad981d9w1lolxdxdxd11!!!11!', value: 'My Profile', key: 3 },
        { link: '/user/123012asdsad981d9w1lolxdxdxd11!!!11!/projects', value: 'My Projects', key: 0 },
        { link: '/user/bookmarkedprojects', value: 'BookMarked Projects', key: 1 },
        { link: '/discoverWithThePowerOfML/AI', value: 'Discover Projects', key: 2 }
    ];
    return (
        <Layout>
            <Side sidebaritems={sidebaritemsAKAbookmarks}>
            <div>
                <h1
                    style={{
                        color: 'rgba(16, 127, 183, 1)',
                        paddingLeft: '100px',
                        fontWeight: 'lighter',
                        textAlign: 'center',
                        fontSize: '40px',
                        paddingBottom: '20px',
                    }}
                >
                    {' '}
                    Bookmarked Projects{' '}
                </h1>
                <ProjectCards projects={bookmarks} />
            </div>
            </Side>
        </Layout>
    )
}

export default BookmarkedProjects
