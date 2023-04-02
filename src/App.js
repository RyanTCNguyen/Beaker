import React, { useState, useEffect } from 'react'
// import firebase from './firebase'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import studsidebaritems from './studsidebaritems'
import sidebaritems from './sidebaritems'

import Projectspage from './Pages/Projectspage'

import StudentProfile from './Pages/StudentProfile'
import FacultyStaffProfile from './Pages/FacultyStaffProfile'

import AboutProject from './Pages/AboutProject'
import AboutMember from './Pages/AboutMember'
import AboutStudentProfile from './Pages/AboutStudentProfile'
import Dashboard from './Pages/Dashboard'
import About from './Pages/About'

import BookmarkedProjects from './Pages/BookmarkedProjects'
import CreateProject from './Pages/CreateProject'
import EditProject from './Pages/EditProject'
import FacultyProjectDetails from './Pages/FacultyProjectDetails'
import { useAuth0 } from '@auth0/auth0-react'
import ForgotPassword from './Pages/ForgotPassword'
import { listFunction } from './EngineFunctions/ProjectsFetch'
import BeakerSignUp from './Pages/BeakerSignUp'

function App() {
    const {
        isAuthenticated,
        user: auth0user,
    } = useAuth0()
    const [isStudent, ] = useState(true)
    const [members, ] = useState([])
    const [projects, setProjects] = useState([])
    const [engineUser, setEngineUser] = useState([])
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
                    <Route path="/createproject">
                        <CreateProject user={engineUser[0]}/>
                    </Route>
                        
                    <Route
                        path="/facultystaffprofile"
                        exact
                        component={FacultyStaffProfile}
                    />
                    <Route
                        path="/forgotPassword"
                        exact
                        component={ForgotPassword}
                    />
                    <Route path="/about" exact component={About} />

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
                        path="/aboutmember/:memberId"
                        exact
                        render={(props) => (
                            <AboutMember {...props} members={members} />
                        )}
                    />
                    <Route
                            path="/dashboard"
                            exact
                            render={(props) => (
                                <Dashboard
                                    user={engineUser[0]}
                                    projects={projects}
                                    isAuthenticated={isAuthenticated}
                                />
                            )}
                    />
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
