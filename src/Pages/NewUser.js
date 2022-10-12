import React from 'react'
import '../Styles/SignIn.css'
import Button from '@mui/material/Button'
import firebase from 'firebase/compat/app'
import UserForm from '../Components/UserForm'
import RequiredDialog from '../Components/RequiredDialog'

import { FormControl, Box } from '@mui/material'
import beaker from '../Images/blackLinedBeakerBgRemoved.png'
import { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase'
import 'firebase/compat/auth'
import { useAuth } from '../Contexts/authContext'
import { TextField } from '@mui/material'

import { useAuthState } from 'react-firebase-hooks/auth'

import { registerWithEmailAndPassword } from '../authActions'

function NewUserStudent() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [displayName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [name, setName] = useState('')
    const [user, loading, error] = useAuthState(auth)
    const [activeStep, setActiveStep] = useState(0)
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const checkAllRequiredValid = (reqValues) => {
        let invalid = reqValues.filter((x) => x.length === 0 || x === undefined)
        if (invalid.length >= 1) {
            setOpen(true)
            return false
        }
        return true
    }

    const { signup, currentUser } = useAuth()
    // const [users, setUsers] = useState([])
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const history = useHistory()
    const [uid, setUid] = useState('')
    const [student, isStudent] = useState(false)
    const firestore = firebase.firestore()

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const register = () => {
        let valid = checkAllRequiredValid([
            displayName,
            lastName,
            email,
            password,
            confirmPassword
        ])
        if (!valid | !validateEmail(email) | confirmPassword !== password | password.length < 6) return
        registerWithEmailAndPassword(displayName, lastName, email, password, String(email).includes('@lion.'))
        if (String(email).includes('@lion.')) {
            history.push('/studentprofile')
        } else {
            history.push('/facultystaffprofile')
        }
        console.log(currentUser)
        console.log('currentUser is' + JSON.stringify({ currentUser }))
    }

    return (
        <div>
            <div className="top-signin">
                <Box
                    component="img"
                    sx={{
                        height: 60,
                        width: 60,
                    }}
                    alt="logo"
                    src={beaker}
                />
                <h1>New User</h1>
                <h2 className="sign-up">Sign Up</h2>

                <div></div>
                <FormControl type="name" />
                <div className="email-text-field">
                    <TextField
                        type="text"
                        className="email-address"
                        placeholder="First Name"
                        defaultValue={displayName}
                        label="First Name"
                        onChange={(e) => {
                            setFirstName(e.target.value)
                        }}
                        required
                        style={{
                            width: '20em',
                            marginBottom: '1em',
                        }}
                    />
                </div>
                <FormControl type="name" />
                <div className="email-text-field">
                    <TextField
                        type="text"
                        className="email-address"
                        placeholder="Last Name"
                        label="Last Name"
                        defaultValue={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value)
                        }}
                        required
                        style={{
                            width: '20em',
                            marginBottom: '1em',
                        }}
                    />
                </div>
                <FormControl type="email" />
                <div className="email-text-field">
                    <TextField
                        type="text"
                        className="email-address"
                        placeholder="example@lion.lmu.edu"
                        label="Email"
                        defaultValue={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        style={{
                            width: '20em',
                            marginBottom: '1em',
                        }}
                    />
                </div>
                <FormControl type="password" />
                <div className="password-text-field">
                    <TextField
                        type="password"
                        className="password"
                        placeholder="at least 6 character password"
                        label="Password"
                        defaultValue={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        style={{
                            width: '20em',
                            marginBottom: '1em',
                        }}
                        required
                    />
                </div>
                <FormControl type="password"/>
                <div className="password-text-field">
                    <TextField
                        type="password"
                        className="password"
                        placeholder="at least 6 character password"
                        label="Confirm Password"
                        // inputRef={passwordRef}
                        defaultValue={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value)
                        }}
                        style={{
                            width: '20em',
                            marginBottom: '1em',
                        }}
                        required
                    />
                </div>
                <div className="continue-to-profile-button">
                    <Button
                        className="btn1"
                        size="medium"
                        variant="outlined"
                        color="secondary"
                        onClick={register}
                    >
                        Continue To Profile
                    </Button>
                </div>
            </div>
            <RequiredDialog
                onClickState={open}
                onClose={handleClose}
                fields={['First Name, Last Name, Email, Password']}
            />
        </div>
    )
}

export default NewUserStudent
