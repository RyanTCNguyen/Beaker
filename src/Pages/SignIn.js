import React from 'react'
import '../Styles/SignIn.css'
import Button from '@mui/material/Button'
import beaker from '../Images/blackLinedBeakerBgRemoved.png'
import { useState, useEffect, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import 'firebase/compat/auth'
import { signIn } from '../authActions'
import { FormControl, Alert, TextField } from '@mui/material'
import LoginButton from '../Components/LoginButton'
import { useAuth0 } from '@auth0/auth0-react'
import { Box } from '@mui/system'
function SignIn() {
    return (
        // <div className="sign-in">
        //     <div className="top-signin">
        //         <img src={beaker} alt="logo" />
        //         <p className="signin">Login</p>
        //         <div></div>
        //         <input
        //             type="text"
        //             className="email-address"
        //             placeholder="LMU/LLS email"
        //         />
        //         <div></div>
        //         <br></br>
        //         <input
        //             type="text"
        //             className="password"
        //             placeholder="password"
        //         />
        //         <div></div>
        //         <br></br>
        //         <div className="button1">
        //             <Button
        //                 className="btn1"
        //                 size="large"
        //                 variant="outlined"
        //                 color="primary"
        //             >
        //                 Sign In
        //             </Button>
        //         </div>
        //         <div></div>
        //         <br></br>
        //         <div className="button2">
        //             <Button className="btn2" size="medium" color="secondary">
        //                 Forgot Password?
        //             </Button>
        //         </div>
        //         <br></br>
        //         <br></br>
        //         <div className="button3">
        //             <Link className="button-link" to="./newuserstudent">
        //                 <Button className="btn3" size="medium" color="error">
        //                     New Here?
        //                 </Button>
        //             </Link>
        //         </div>
        //     </div>
        // </div>

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
            <h2 className="sign-in">Sign In</h2>

            {/* {JSON.stringify({ currentUser })} */}

            {/* <FormControl
                    type="email"
                    inputRef={emailRef}
                    // required
                />
                <div className="email-text-field">
                    <TextField
                        type="text"
                        className="email-address"
                        placeholder="Email (example@lion.lmu.edu)"
                        inputRef={emailRef}
                        required
                        style={{ width: '20em', marginBottom: '1em' }}
                    />
                </div>
                <FormControl
                    type="password"
                    inputRef={passwordRef}
                    // required
                />
                <div className="password-text-field">
                    <TextField
                        type="password"
                        className="password"
                        placeholder="Password"
                        inputRef={passwordRef}
                        required
                        style={{
                            width: '20em',
                            marginBottom: '2em',
                        }}
                    />
<<<<<<< HEAD
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
                        Sign In
                    </Button>
                </div>
                <div className="forgot-password">
                    <Link to="./forgotpassword"> Forgot Password </Link>
                </div>
                <div className="new-here">
                    <Link to="./newuserstudent">New Here? Sign Up! </Link>
                </div>
            </form>
=======
                </div> */}
            <div className="sign-in-button">
                <LoginButton></LoginButton>
            </div>
            <div className="forgot-password">
                <Link to="./forgotpassword">Forgot Password </Link>
            </div>
            <div className="new-here">
                <Link to="./newuserstudent">New Here? </Link>
            </div>
>>>>>>> 5da86aa8d791b76bd98343d8e2f02d51312c27af
        </div>

        // <>
        //     <Card>
        //         <CardContent>
        //             <h2 className="sign-in">Sign In</h2>
        //             {JSON.stringify({ currentUser })}
        //             {error && <Alert variant="danger">{error}</Alert>}
        //             <form onSubmit={handleSubmit}>
        //                 <FormControl
        //                     type="email"
        //                     inputRef={emailRef}
        //                     // required
        //                 />
        //                 <TextField
        //                     type="text"
        //                     className="email-address"
        //                     placeholder="example@lion.lmu.edu"
        //                     inputRef={emailRef}
        //                     required
        //                 />
        //                 <FormLabel>Password</FormLabel>
        //                 <FormControl
        //                     type="password"
        //                     inputRef={passwordRef}
        //                     // required
        //                 />
        //                 <TextField
        //                     type="text"
        //                     className="password"
        //                     placeholder="password"
        //                     inputRef={passwordRef}
        //                     required
        //                 />
        //                 <div className="button1">
        //                     <Button
        //                         disabled={loading}
        //                         className="w-100"
        //                         type="submit"
        //                         className="btn1"
        //                         size="medium"
        //                         variant="outlined"
        //                         color="secondary"
        //                     >
        //                         Sign In
        //                     </Button>
        //                 </div>
        //                 <div className="button3">
        //                     <Link to="./newuserstudent">New Here? </Link>
        //                 </div>
        //                 {/* <Button
        //                             className="btn3"
        //                             size="medium"
        //                             color="error"
        //                         >
        //                             Sign Up?
        //                         </Button> */}
        //             </form>
        //         </CardContent>
        //     </Card>
        // </>
    )
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         signIn: (creds) => dispatch(signIn(creds)),
//     }
// }
export default SignIn
