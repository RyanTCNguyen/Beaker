import React, { useState, useEffect, useMemo } from 'react'
// import firebase from './firebase'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import studsidebaritems from './studsidebaritems'
import sidebaritems from './sidebaritems'

import Projectspage from './Pages/Projectspage'
import NewUserStudent from './Pages/NewUser'

import StudentProfile from './Pages/StudentProfile'
import EditStudentProfile from './Pages/EditStudentProfile'
import FacultyStaffProfile from './Pages/FacultyStaffProfile'
import EditFacultyStaffProfile from './Pages/EditFacultyStaffProfile'

import AboutProject from './Pages/AboutProject'
import AboutMember from './Pages/AboutMember'
import AboutStudentProfile from './Pages/AboutStudentProfile'
import AboutFacultyStaffProfile from './Pages/AboutFacultyStaffProfile'
import Dashboard from './Pages/Dashboard'
import About from './Pages/About'

import BookmarkedProjects from './Pages/BookmarkedProjects'

import UserProfile from './Pages/UserProfile'
import CreateProject from './Pages/CreateProject'
import EditProject from './Pages/EditProject'
import FacultyProjectDetails from './Pages/FacultyProjectDetails'
import { useAuth0 } from '@auth0/auth0-react'
import ForgotPassword from './Pages/ForgotPassword'
import { listFunction, postFunction } from './EngineFunctions/ProjectsFetch'

function App() {
    const {
        loginWithRedirect,
        isAuthenticated,
        isLoading,
        logout,
        user: auth0user,
    } = useAuth0()
    const [isStudent, setIsStudent] = useState(true)
    const [members, setMembers] = useState([])
    const [projects, setProjects] = useState([])
    const [user, setUser] = useState([])
    useEffect(() => {
        listFunction('posts-engine').then((data) => {
            if (data) {
                setProjects(data)
            }
        })

        if (auth0user?.name) {
            //uncomment below once profile engine has an example
            //listFunction('profile-engine').then((users)=>{console.log(users.filter((engineUser)=>engineUser?.name == user.name))})
            //setUser
            setUser({
                ...auth0user,
                friends: user.friends,
                projects: user.projects,
            })
        }
    }, [auth0user])

    useEffect(() => {
        console.log(user)
        //postFunction({...user, ...}, 'profile-engine')
    }, [user])

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={About} />
                    <Route
                        path="/projectspage"
                        exact
                        render={(props) => (
                            <Projectspage {...props} projects={projects} />
                        )}
                    />

                    <Route
                        path="/newuserstudent"
                        exact
                        component={NewUserStudent}
                    />
                    <Route
                        path="/studentprofile"
                        exact
                        render={(props) => (
                            <StudentProfile
                                {...props}
                                setMembers={setMembers}
                            />
                        )}
                    />
                    <Route
                        path="/createproject"
                        exact
                        component={CreateProject}
                    />
                    <Route
                        path="/facultystaffprofile"
                        exact
                        // render={(props) => (
                        //     <FacultyStaffProfile
                        //         {...props}
                        //         setFSMembers={setFSMembers}
                        //     />
                        // )}
                        component={FacultyStaffProfile}
                    />
                    <Route
                        path="/forgotPassword"
                        exact
                        component={ForgotPassword}
                    />
                    <Route path="/about" exact component={About} />

                    <Route
                        path="/aboutproject/:projectId"
                        exact
                        render={(props) => (
                            <AboutProject {...props} projects={projects} />
                        )}
                    />
                    <Route
                        path="/editproject/:projectId"
                        exact
                        render={(props) => (
                            <EditProject {...props} projects={projects} />
                        )}
                    />
                    <Route
                        path="/projectdetails/:projectId"
                        exact
                        render={(props) => (
                            <FacultyProjectDetails
                                {...props}
                                projects={projects}
                            />
                        )}
                    />
                    <Route
                        path="/editstudentprofile/:memberId"
                        exact
                        render={(props) => (
                            <EditStudentProfile {...props} members={members} />
                        )}
                    />
                    <Route
                        path="/aboutmember/:memberId"
                        exact
                        render={(props) => (
                            <AboutMember {...props} members={members} />
                        )}
                    />
                    <Route
                        path="/dashboard"
                        exact
                        render={(props) => <Dashboard user={1} />}
                    />
                    {/* <Route
                                path="/studentdashboard"
                                exact
                                render={(props) => (
                                    <StudentDashboard
                                        sidebaritems={
                                            isStudent
                                                ? studsidebaritems
                                                : sidebaritems
                                        }
                                    />
                                )}
                            /> */}
                    <Route
                        path="/bookmarkedprojects"
                        exact
                        render={(props) => (
                            <BookmarkedProjects
                                {...props}
                                projects={projects}
                                sidebaritems={
                                    isStudent ? studsidebaritems : sidebaritems
                                }
                            />
                        )}
                    />
                    <Route path="/userprofile" exact component={UserProfile} />

                    <Route
                        path="/aboutproject/:projectId"
                        exact
                        render={(props) => (
                            <AboutProject {...props} projects={projects} />
                        )}
                    />
                    <Route
                        path="/aboutmember/:memberId"
                        exact
                        render={(props) => (
                            <AboutMember {...props} members={members} />
                        )}
                    />
                    <Route
                        path="/aboutstudentprofile/:memberId"
                        exact
                        render={(props) => (
                            <AboutStudentProfile {...props} members={members} />
                        )}
                    />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route
                        path="/bookmarkedprojects"
                        exact
                        render={(props) => (
                            <BookmarkedProjects
                                {...props}
                                projects={projects}
                            />
                        )}
                    />
                    <Route path="/userprofile" exact component={UserProfile} />
                </Switch>
            </Router>
        </>
    )
}

export default App
