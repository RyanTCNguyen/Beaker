import ProjectCards from '../Components/ProjectCards'

function BookmarkedProjects({ projects, user }) {
    const filteredProjects = projects?.filter(
        (project) =>
            user?.bookmarked?.includes(
                project.id
            )
    )

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
                        Bookmarked Projects
                    </h1>
                    {filteredProjects?<ProjectCards
                        projects={filteredProjects}
                    />:<></>}
                </div>
            }
</div>
    )
}

export default BookmarkedProjects
