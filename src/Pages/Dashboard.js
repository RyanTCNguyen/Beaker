import React from 'react'
import Layout from '../Components/Layout'
import Side from '../Components/Side'
import '../Styles/Sidebar.css'
import {useState} from 'react'
import StudentProfile from './StudentProfile'
import { useEffect } from 'react'
import FacultyStaffProfile from './FacultyStaffProfile'
import MyProjects from './MyProjects'
import ProjectTableNew from '../Components/ProjectTableNew'

function Dashboard({ user, projects }) {
    console.log(user)
    const [page, setPage] = useState('Profile')
    const sidebaritems = [
        { page: 'Profile', value: 'My Profile', key: 0 },
        { page: 'MyProjects', value: 'My Projects', key: 1 },
        { page: 'Bookmarks', value: 'BookMarked Projects', key: 2 },
        { page: 'Discover', value: 'Discover Projects', key: 3 },
    ]
    useEffect(()=>{if (user?.student) {console.log(user)}},[user])
    return (
        <Layout>
            <Side sidebaritems={sidebaritems} setPage={setPage} page={page}>
            {user ? 
            <>
            {(page === 'Profile'  ) ? <>{user?.student !== "false" ? <StudentProfile type="Student" user={user} editing={true} redirect={false}/>: <FacultyStaffProfile type="Faculty" user={user} editing={true} redirect={false}/>}</>:<></>}
            {(page === 'MyProjects'  ) ? <div>{<div style={{paddingLeft: '25vw', paddingTop: '5vh'}}><h1 style={{fontSize: '3vh'}}>My Projects</h1><ProjectTableNew projects={projects?.filter((project)=>project.groupmembers?.includes(user.name))} /></div>}</div>:<></>}
            {(page === 'Bookmarks'  ) ? <div>{<div style={{paddingLeft: '25vw', paddingTop: '5vh'}}><h1 style={{fontSize: '3vh'}}>Bookmarked Projects</h1><ProjectTableNew projects={projects?.filter((project)=>user?.bookmarked?.includes(project.id))} /></div>}</div>:<></>}
            {(page === 'Discover'  ) ? <div>{<div style={{paddingLeft: '25vw', paddingTop: '5vh'}}><h1 style={{fontSize: '3vh'}}>Discover Projects</h1><ProjectTableNew projects={projects?.filter((project)=>user?.bookmarked?.includes(project.id))} /></div>}</div>:<></>}
            </>
            :
            <></>
            }
            </Side>
        </Layout>
    )
}

export default Dashboard
