import 'firebase/firestore'
import React from 'react'
import NavFormat from '../Components/NavFormat'
import { ListItemButton, ListItemText, Grid } from '@mui/material'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    smallerCards: {
        margin: '10px',
    },
    largeCards: {
        height: '10rem',
        width: '20rem',
        backgroundColor: 'rgba(196, 196, 196, 0.2)',
        boxShadow: 'none',
    },
    links: {
        color: 'black',
        textDecoration: 'none',
    },
})

function MyProjects() {
    const classes = useStyles()

    return (
        <NavFormat>
            <div>
                <h1> Dashboard </h1>
                <Grid container justify="center">
                    <Grid item xs={12} sm={8} md={4}>
                        <Card className={classes.largeCards}>
                            <Card className={classes.smallerCards}>
                                <ListItemButton>
                                    <ListItemText>
                                        {' '}
                                        project bookmarked{' '}
                                    </ListItemText>
                                </ListItemButton>{' '}
                            </Card>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={4}>
                        <Card className={classes.largeCards}>
                            <Card className={classes.smallerCards}>
                                <ListItemButton>
                                    <ListItemText> saved project </ListItemText>
                                </ListItemButton>{' '}
                            </Card>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={4}>
                        <Card className={classes.largeCards}>
                            <Card className={classes.smallerCards}>
                                <ListItemButton>
                                    <ListItemText> my projects </ListItemText>
                                </ListItemButton>{' '}
                            </Card>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={8} md={4}>
                        <Card className={classes.largeCards}>
                            <Card className={classes.smallerCards}>
                                <ListItemButton>
                                    <ListItemText>
                                        {' '}
                                        member bookmarked{' '}
                                    </ListItemText>
                                </ListItemButton>{' '}
                            </Card>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </NavFormat>
    )
}

export default MyProjects
