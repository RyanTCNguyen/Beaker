import CardItems from './CardItems'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import React from 'react'

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '5vw',
        paddingRight: '5vw',
        paddingBottom: '5vw',
        paddingTop: '5vh'
    },
    links: {
        color: 'black',
        textDecoration: 'none',
    },
})

function ProjectCards({ projects }) {
    const classes = useStyles()
    return (
        <div>
            <Grid container justifyContent="flex-start" className={classes.gridContainer}>
                {projects.map((project) => {
                    return (
                        <Grid
                            className={classes.gridContainer}
                            item
                            xs={12}
                            sm={8}
                            md={4}
                            spacing={3}
                            key={project.id}
                        >
                            <Link
                                className={classes.links}
                                to={`/aboutproject/${project.id}`}
                            >
                                <CardItems project={project} />
                            </Link>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default ProjectCards
