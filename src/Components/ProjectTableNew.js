import React from 'react'
import MaterialTable from 'material-table'
import { Link } from 'react-router-dom'
import { TablePagination } from '@material-ui/core'

function ProjectTableNew({ projects, small=false}) {
    const columns = [
        {
            field: 'image',
            render: (project) => (
                <Link to={`/aboutproject/${project.id}`}>
                    <img
                        alt="project"
                        src={project.image}
                        style={{
                            display: 'inline-block',
                            position: 'relative',
                            width: 80,
                            height: '100%',
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
        { title: 'Owner', field: 'creator' },
    ]

    return (
        <div style={{maxWidth:small?'60vw':'80vw',paddingLeft:small?'10vw':'0'}}>
            <MaterialTable
                title="Find your match!"
                data={projects}
                columns={columns}
                style={{backgroundColor: 'rgba(255,255,255,0.8)'}}
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
                        textTransform: 'uppercase',
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
                                color: ' dark grey',
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
