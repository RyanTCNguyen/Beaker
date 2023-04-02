import React from 'react'
import Layout from '../Components/Layout'
import Side from '../Components/Side'
import '../Styles/Sidebar.css'
import { useState } from 'react'
import StudentProfile from './StudentProfile'
import FacultyStaffProfile from './FacultyStaffProfile'
import ProjectCards from '../Components/ProjectCards'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import AddCircleIcon from '@mui/icons-material/AddCircle'

function Dashboard({ user, projects, isAuthenticated }) {
    const devMode = false
    const [page, setPage] = useState('Profile')
    const sidebaritems = [
        { page: 'Profile', value: 'My Profile', key: 0 },
        { page: 'MyProjects', value: 'My Projects', key: 1 },
        { page: 'Bookmarks', value: 'BookMarked Projects', key: 2 },
        { page: 'Discover', value: 'Discover Projects', key: 3 },
    ]
    return (
        <Layout>
            <Side sidebaritems={sidebaritems} setPage={setPage} page={page}>
                {user || devMode ? (
                    <>
                        {page === 'MyProjects'?
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
                            
                        </div> :
                        <></>
                        }
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
                            <div>
                                {
                                    <div
                                        style={{
                                            paddingLeft: '25vw',
                                            paddingTop: '5vh',
                                        }}
                                    >
                                        <h1 className='subTitle'>
                                            Owned Projects
                                        </h1>
                                        <ProjectCards
                                            projects={projects?.filter(
                                                (project) =>
                                                    project.groupmembers?.includes(
                                                        user.email
                                                    )
                                            )}
                                        />
                                        <h1 className='subTitle'>
                                            My Projects
                                        </h1>
                                        <ProjectCards
                                            projects={[{
                                                applicants: [],
                                                creator: 'me',
                                                createdby:'',
                                                description: 'test!!',
                                                groupmembers: ['123213'],
                                                image: '',
                                                incentives: [],
                                                members: 1,
                                                major: [],
                                                status: 'Open',
                                                timeline: [dayjs(),dayjs()],
                                                title: 'TEST',
                                                year: [],
                                                id: 2
                                            },
                                            {
                                                applicants: [],
                                                creator: 'me',
                                                createdby:'',
                                                description: 'join today?',
                                                groupmembers: ['123213'],
                                                image: 'data:image/jpeg;base64,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',
                                                incentives: [],
                                                members: 1,
                                                major: [],
                                                status: 'Open',
                                                timeline: [dayjs(),dayjs()],
                                                title: 'AI Task Force',
                                                year: [],
                                                id: 1
                                            },
                                            {
                                                applicants: [],
                                                creator: 'me',
                                                createdby:'',
                                                description: 'uh oh',
                                                groupmembers: ['123213'],
                                                image: 'data:image/jpeg;base64,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',
                                                incentives: [],
                                                members: 1,
                                                major: [],
                                                status: 'Open',
                                                timeline: [dayjs(),dayjs()],
                                                title: 'Umm',
                                                year: [],
                                                id: 3
                                            },{
                                                applicants: [],
                                                creator: 'me',
                                                createdby:'',
                                                description: 'something like this maybe. Is this too long?',
                                                groupmembers: ['123213'],
                                                image: 'https://lmulions.com/images/logos/site/site.png',
                                                incentives: [],
                                                members: 1,
                                                major: [],
                                                status: 'Open',
                                                timeline: [dayjs(),dayjs()],
                                                title: 'LMU team',
                                                year: [],
                                                id: 4
                                            }]}
                                        />
                                    </div>
                                }
                            </div>
                        ) : (
                            <></>
                        )}
                        {page === 'Bookmarks' ? (
                            <div>
                                {
                                    <div
                                        style={{
                                            paddingLeft: '25vw',
                                            paddingTop: '5vh',
                                        }}
                                    >
                                        <h1 className='subTitle'>
                                            Bookmarked Projects
                                        </h1>
                                        <ProjectCards
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
                        {page === 'Discover' ? (
                            <div>
                                {
                                    <div
                                        style={{
                                            paddingLeft: '25vw',
                                            paddingTop: '5vh',
                                        }}
                                    >
                                        <h1 className='subTitle'>
                                            Discover Projects
                                        </h1>
                                        <ProjectCards
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
        </Layout>
    )
}

export default Dashboard
