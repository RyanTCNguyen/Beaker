import React, { useState, useEffect } from 'react'
import '../Styles/LearnMore.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import EditIcon from '@mui/icons-material/Edit'
import { Link } from 'react-router-dom'
import NavFormat from '../Components/NavFormat'

function AboutStudentProfile({ match, students }) {
    const [student, setStudent] = useState({})
    const id = match.params.memberId

    useEffect(() => {
        //send the network request to retrieve data for this student
        const selected = students.filter((student) => student.key === id)[0]
        setStudent(selected)
    }, [id, students])

    return (
        <NavFormat>
            <div style={{ margin: '20px' }}>
                <Link to="/dashboard">
                    <ArrowBackIosIcon></ArrowBackIosIcon>
                </Link>

                {student && (
                    <div className="about-container">
                        <div className="column-left">
                            <img
                                style={{
                                    width: 500,
                                    height: 750,
                                    clipPath: 'circle()',
                                    paddingTop: '0%',
                                }}
                                src={student.image}
                                alt="student.first"
                                // height="200"
                            />
                        </div>

                        <div className="column-right">
                            <div style={{ fontSize: '50px' }}>
                                {student.first} {student.middle} {student.last}
                            </div>
                            <div
                                style={{ fontSize: '25px', fontWeight: '200' }}
                            >
                                {student.major}{' '}
                            </div>
                            <div
                                style={{ fontSize: '25px', fontWeight: '200' }}
                            >
                                {student.minor}
                            </div>
                            <div style={{ fontSize: '15px', color: 'grey' }}>
                                {student.softskills}
                            </div>
                            <div
                                style={{ fontSize: '15px', maxWidth: '600px' }}
                            >
                                {' '}
                                {student.bio}{' '}
                            </div>
                            <div
                                style={{ fontSize: '15px', maxWidth: '600px' }}
                            >
                                {' '}
                                {student.portfolioLink}{' '}
                            </div>
                        </div>
                    </div>
                )}
                <Link to="/editstudentprofile">
                    <EditIcon></EditIcon>
                </Link>
            </div>
        </NavFormat>
    )
}

export default AboutStudentProfile
