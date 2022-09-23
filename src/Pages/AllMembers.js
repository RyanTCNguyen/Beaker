import React, { useState, useEffect } from 'react'
import AllMembersCards from '../Components/AllMembersCards'
import Layout from '../Components/Layout'
import { Typography } from '@material-ui/core'
// import members from '../membersdata'
import { makeStyles } from '@material-ui/styles'
//import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    title: { textAlign: 'left' },
    mainTitle: { textAlign: 'left', fontSize: '55px', fontWeight: 'lighter' },
})

/* ! Not Implemented into the App yet ! */

function AllMembers({ members }) {
    const classes = useStyles()

    useEffect(() => {
        //fetch data from server
        //how can I get the information without filtering???
    }, [])

    return (
        <Layout>
            <div>
                <Typography className={classes.mainTitle}>
                    {' '}
                    Seeking Members{' '}
                </Typography>
            </div>
            <div>
                <AllMembersCards members={members} />
            </div>
            <div></div>
            <div></div>
        </Layout>
    )
}

export default AllMembers
