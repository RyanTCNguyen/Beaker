import EditStudentProfile from './EditStudentProfile'
import EditFacultyStaffProfile from './EditFacultyStaffProfile'
import { Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { listFunction } from '../EngineFunctions/ProjectsFetch'
import { useAuth0 } from '@auth0/auth0-react'
export default function BeakerSignUp() {
    const { user, isAuthenticated, isLoading } = useAuth0()
    const [existingUser, setExistingUser] = useState(null)
    const [isStudent, setIsStudent] = useState(null)
    const [users, setUsers] = useState(null)
    useEffect(() => {
        if (isAuthenticated && !isLoading) {
            console.log(user.name)
            setIsStudent(user.name.includes('lion.lmu.edu'))
            listFunction('profiles-engine').then((data) => {
                console.log(data)
                console.log(data.filter((usr) => usr.email === user.name))

                if (data.filter((usr) => usr.email === user.name)?.length) {
                    setExistingUser(true)
                    setUsers(data)
                }
            })
        }
    }, [user])

    useEffect(() => {
        console.log(isStudent)
    }, [isStudent])

    return (
        <>
            {isAuthenticated &&
            !isLoading &&
            isStudent !== null &&
            users !== null ? (
                <>
                    {existingUser ? (
                        <Redirect to="/dashboard" replace={true} />
                    ) : (
                        <>
                            {isStudent ? (
                                <Redirect to="/StudentProfile" replace={true} />
                            ) : (
                                <Redirect
                                    to="/FacultyStaffProfile"
                                    replace={true}
                                />
                            )}
                        </>
                    )}
                </>
            ) : (
                <></>
            )}
        </>
    )
}
