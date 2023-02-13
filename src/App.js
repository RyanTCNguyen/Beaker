import React, { useState, useEffect, useMemo } from 'react'
// import firebase from './firebase'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import studsidebaritems from './studsidebaritems'
import sidebaritems from './sidebaritems'

import Projectspage from './Pages/Projectspage'

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
import CreateProject from './Pages/CreateProject'
import EditProject from './Pages/EditProject'
import FacultyProjectDetails from './Pages/FacultyProjectDetails'
import { useAuth0 } from '@auth0/auth0-react'
import ForgotPassword from './Pages/ForgotPassword'
import { listFunction, postFunction } from './EngineFunctions/ProjectsFetch'
import BeakerSignUp from './Pages/BeakerSignUp'

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
    const [engineUser, setEngineUser] = useState([])
    const [user, setUser] = useState([])
    useEffect(() => {
        listFunction('posts-engine').then((data) => {
            if (data) {
                setProjects(data)
            }
        })
        console.log(auth0user)
        listFunction('profiles-engine').then((data) => {
            if (data && auth0user) {
                setEngineUser(
                    data.filter((usr) => usr.email === auth0user?.email)
                )
            }
        })
    }, [auth0user])

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={About} />
                    <Route path="/about" exact component={About} />
                    <Route
                        path="/projectspage"
                        exact
                        render={(props) => (
                            <Projectspage {...props} projects={projects} />
                        )}
                    />

                    <Route path="/studentprofile" exact>
                        <StudentProfile />
                    </Route>
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
                    {!isLoading && isAuthenticated && engineUser ? (
                        <Route
                            path="/dashboard"
                            exact
                            render={(props) => (
                                <Dashboard
                                    user={engineUser[0]}
                                    projects={projects}
                                />
                            )}
                        />
                    ) : (
                        <Route
                            path="/dashboard"
                            exact
                            render={(props) => (
                                <Dashboard
                                    user={engineUser[0]}
                                    projects={projects}
                                />
                            )}
                        />
                    )}
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

                    <Route
                        path="/aboutproject/:projectId"
                        exact
                        render={(props) => (
                            <AboutProject
                                {...props}
                                projects={projects}
                                user={engineUser[0]}
                            />
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
                    <Route
                        path="/beakersignup"
                        exact
                        render={(props) => <BeakerSignUp />}
                    />
                </Switch>
            </Router>
        </>
    )
}

export default App
