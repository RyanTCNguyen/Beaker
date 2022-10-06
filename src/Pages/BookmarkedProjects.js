import Layout from '../Components/Layout'
import React, { useState, useEffect } from 'react'

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
    return (
        <Layout>
            {/* <Side sidebaritems={studsidebaritems}> */}
            {/* <div>
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
            </div> */}
            {/* </Side> */}
        </Layout>
    )
}

export default BookmarkedProjects
