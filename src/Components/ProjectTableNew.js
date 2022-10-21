import React, { useEffect, useMemo } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import MaterialTable from 'material-table'
import 'firebase/firestore'
import { db } from '../firebase'
import { Link } from 'react-router-dom'
import { TablePagination } from '@material-ui/core'

function ProjectTableNew({ projects }) {
    const projectsCollectionRef = useMemo(() => collection(db, 'projects'), [])
    const getProjects = async () => {
        const data = await getDocs(projectsCollectionRef)
        projects = data.docs.map((doc) => ({ ...doc.data(), key: doc.id }))
    }

    const getProjectsv2 = async () => {
        //const data = await getDocs(projectsCollectionRef)
        fetch(
            'https://link-den.ent.us-central1.gcp.cloud.es.io/api/as/v1/engines/posts-engine/documents',
            {
                body: `[{"applicants": [], "creator": "", "description": "Test Numerous blah blah", "groupMembers": [], "image": "", "incentives": ["funding", "internship credit"], "members": 8, "major": ["Art History", "Archeology"], "status": "open", "timeline": "3 years", "title": "Archeological Dig in Turkey","year":["Graduate"]}]`,
                headers: {
                    Authorization: 'Bearer private-9y3dvrtw7jda17d2cqv23um7',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            }
        )
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                projects = data.docs.map((doc) => ({
                    ...doc.data(),
                    key: doc.id,
                }))
            })
    }

    useEffect(() => {
        getProjects()
    }, [projects])

    //const [firstLoad, setFirstLoad] = React.useState()
    const columns = [
        {
            field: 'image',
            render: (project) => (
                <Link to={`/aboutproject/${project.key}`}>
                    <img
                        alt="project"
                        src={project.image}
                        style={{
                            display: 'inline-block',
                            position: 'relative',
                            width: 50,
                            height: 50,
                            overflow: 'hidden',
                            borderRadius: 50,
                        }}
                    />{' '}
                </Link>
            ),
        },
        { title: 'Title', field: 'title' },
        { title: 'Desired Major', field: 'major' },
        { title: 'Desired Year', field: 'year' },
        { title: 'Incentives', field: 'incentives' },
        { title: 'Status', field: 'status' },
        { title: 'Owner' },
    ]

    return (
        <div>
            <MaterialTable
                title="Find your match!"
                data={projects}
                columns={columns}
                components={{
                    Pagination: (props) => (
                        <TablePagination
                            {...props}
                            rowsPerPageOptions={[5, 10, 30, 40, 50]}
                        />
                    ),
                }}
                options={{
                    headerStyle: {
                        fontWeight: 'bold',
                        backgroundColor: '#01579b',
                        color: '#FFF',
                    },
                    rowStyle: {
                        backgroundColor: '#EEE',
                    },
                    exportButton: true,
                }}
                detailPanel={(project) => {
                    return (
                        <div
                            style={{
                                padding: 10,
                                fontSize: 17,
                                textAlign: 'center',
                                color: 'grey',
                                backgroundColor: 'white',
                            }}
                        >
                            {project.description}
                        </div>
                    )
                }}
            />
        </div>
    )
}

export default ProjectTableNew
