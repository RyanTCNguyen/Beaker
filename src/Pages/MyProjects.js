import ProjectCards from '../Components/ProjectCards'
import dayjs from 'dayjs'
import React from 'react'




function MyProjects({projects, user}) {

    return (
        <div>
                                {
                                    <div
                                        style={{
                                            paddingLeft: '25vw',
                                            paddingTop: '5vh',
                                        }}
                                    >
                                        <h1 className='subTitle'>
                                            Owned Projects
                                        </h1>
                                        <ProjectCards
                                            projects={projects?.filter(
                                                (project) =>
                                                    project.creator?.includes(
                                                        user?.id
                                                    )
                                            )}
                                        />
                                        <h1 className='subTitle'>
                                            My Projects
                                        </h1>
                                        <ProjectCards
                                            projects={[{
                                                applicants: [],
                                                creator: 'me',
                                                createdby:'',
                                                description: 'test!!',
                                                groupmembers: ['123213'],
                                                image: '',
                                                incentives: [],
                                                members: 1,
                                                major: [],
                                                status: 'Open',
                                                timeline: [dayjs(),dayjs()],
                                                title: 'TEST',
                                                year: [],
                                                id: 2
                                            },
                                            {
                                                applicants: [],
                                                creator: 'me',
                                                createdby:'',
                                                description: 'join today?',
                                                groupmembers: ['123213'],
                                                image: 'data:image/jpeg;base64,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',
                                                incentives: [],
                                                members: 1,
                                                major: [],
                                                status: 'Open',
                                                timeline: [dayjs(),dayjs()],
                                                title: 'AI Task Force',
                                                year: [],
                                                id: 1
                                            },
                                            {
                                                applicants: [],
                                                creator: 'me',
                                                createdby:'',
                                                description: 'uh oh',
                                                groupmembers: ['123213'],
                                                image: '',
                                                incentives: [],
                                                members: 1,
                                                major: [],
                                                status: 'Open',
                                                timeline: [dayjs(),dayjs()],
                                                title: 'Umm',
                                                year: [],
                                                id: 3
                                            },{
                                                applicants: [],
                                                creator: 'me',
                                                createdby:'',
                                                description: 'something like this maybe. Is this too long?',
                                                groupmembers: ['123213'],
                                                image: 'https://lmulions.com/images/logos/site/site.png',
                                                incentives: [],
                                                members: 1,
                                                major: [],
                                                status: 'Open',
                                                timeline: [dayjs(),dayjs()],
                                                title: 'LMU team',
                                                year: [],
                                                id: 4
                                            }]}
                                        />
                                    </div>
                                }
                            </div>
    )
}

export default MyProjects
