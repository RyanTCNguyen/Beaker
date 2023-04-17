import React from 'react'
import NavFormat from '../Components/NavFormat'
import Side from '../Components/Side'
import '../Styles/Sidebar.css'
import { useState } from 'react'
import StudentProfile from './StudentProfile'
import FacultyStaffProfile from './FacultyStaffProfile'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import ProjectTable from '../Components/ProjectTable'
import MyProjects from './MyProjects'
import BookmarkedProjects from './BookmarkedProjects'

function Dashboard({ user, projects, isAuthenticated }) {
    const devMode = true
    const [page, setPage] = useState('Profile')
    const sidebaritems = [
        { page: 'Profile', value: 'My Profile', key: 0 },
        { page: 'MyProjects', value: 'My Projects', key: 1 },
        { page: 'Bookmarks', value: 'BookMarked Projects', key: 2 },
        { page: 'Discover', value: 'Discover Projects', key: 3 },
    ]
    return (
        <NavFormat>
            <Side sidebaritems={sidebaritems} setPage={setPage} page={page}>
                {user || devMode ? (
                    <>
                        {page === 'MyProjects' ? (
                            <div>
                                {isAuthenticated || devMode ? (
                                    <Link to="/createproject">
                                        <IconButton
                                            style={{
                                                position: 'absolute',
                                                right: '10vw',
                                                margin: '10px',
                                            }}
                                            aria-label="upload picture"
                                            component="span"
                                        >
                                            <AddCircleIcon
                                                style={{
                                                    color: 'rgba(16, 127, 183, 1)',
                                                    fontSize: '50px',
                                                }}
                                            />
                                        </IconButton>
                                    </Link>
                                ) : null}
                            </div>
                        ) : (
                            <></>
                        )}
                        {page === 'Profile' ? (
                            <>
                                {user?.student !== 'false' ? (
                                    <StudentProfile
                                        type="Student"
                                        user={user}
                                        editing={true}
                                        redirect={false}
                                    />
                                ) : (
                                    <FacultyStaffProfile
                                        type="Faculty"
                                        user={user}
                                        editing={true}
                                        redirect={false}
                                    />
                                )}
                            </>
                        ) : (
                            <></>
                        )}
                        {page === 'MyProjects' ? (
                            <MyProjects projects={projects} user={user}/>
                        ) : (
                            <></>
                        )}
                        {page === 'Bookmarks' ? (
                            <BookmarkedProjects project={projects} user={user}/>
                        ) : (
                            <></>
                        )}
                        {page === 'Discover' ? (
                            <div>
                                {
                                    <div
                                        style={{
                                            paddingLeft: '25vw',
                                            paddingTop: '5vh',
                                        }}
                                    >
                                        <h1 className="subTitle">
                                            Discover Projects
                                        </h1>
                                        <ProjectTable
                                            small={true}
                                            projects={projects?.filter(
                                                (project) =>
                                                    user?.bookmarked?.includes(
                                                        project.id
                                                    )
                                            )}
                                        />
                                    </div>
                                }
                            </div>
                        ) : (
                            <></>
                        )}
                    </>
                ) : (
                    <></>
                )}
            </Side>
        </NavFormat>
    )
}

export default Dashboard
