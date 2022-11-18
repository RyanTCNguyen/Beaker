import React, { useRef, useState } from 'react'
import { useAuth } from '../Contexts/authContext'
import { FormControl, Alert, TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { Box } from '@mui/system'
import beaker from '../Images/blackLinedBeakerBgRemoved.png'
import '../Styles/SignIn.css'

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)

            await resetPassword(emailRef.current.value)

            setMessage('Link to password Reset sent to Email')
        } catch {
            setError('Failed to reset password')
        }

        setLoading(false)
    }

    return (
        <div className="forgot-password">
            <Box
                component="img"
                sx={{
                    height: 60,
                    width: 60,
                }}
                alt="logo"
                src={beaker}
            />
            <h2 className="sign-in">Password Reset</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handleSubmit}>
                <FormControl type="email" />
                <div className="email-text-field">
                    <TextField
                        type="text"
                        className="email-address"
                        placeholder="Email (example@lion.lmu.edu)"
                        inputRef={emailRef}
                        required
                        style={{ width: '20em', marginBottom: '2em' }}
                    />
                </div>
                <div className="sign-in-button">
                    <Button
                        disabled={loading}
                        className="signin-button"
                        type="submit"
                        size="large"
                        variant="contained"
                        color="primary"
                        style={{ marginBottom: '3em' }}
                    >
                        Reset Password
                    </Button>
                </div>
                <div className="new-here">
                    <Link to="./newuserstudent">New Here? </Link>
                </div>
            </form>
        </div>
    )
}
