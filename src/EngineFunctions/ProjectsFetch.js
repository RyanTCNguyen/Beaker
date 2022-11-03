export const getProjects = () => {
    const data = {
        applicants: [],
        creator: '',
        description: 'Test Numerous blah blah',
        groupMembers: [],
        image: '',
        incentives: ['funding', 'internship credit'],
        members: 8,
        major: ['Art History', 'Archeology'],
        status: 'open',
        timeline: '3 years',
        title: 'Archeological Dig in Turkey',
        year: ['Graduate'],
    }

    const AUTHKEY = process.env.REACT_APP_ELASTIC_API_KEY
    const USER = process.env.REACT_APP_ELASTIC_USERNAME
    const PASSWORD = process.env.REACT_APP_ELASTIC_PASSWORD
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + btoa('elastic:XyUFHX0uvoRKuBWnqYnwsGWD'),
        },
        mode: 'cors',
        body: JSON.stringify({
            data: 1,
        }),
    }
    return fetch(
        `https://beaker.ent.us-central1.gcp.cloud.es.io/api/as/v1/engines/posts-engine/documents`,
        params
    )
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            console.log(data)
        })
}
