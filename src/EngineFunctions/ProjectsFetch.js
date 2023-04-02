const AppSearchClient = require('@elastic/app-search-node')

const baseURLFn = () => {
    return process.env.REACT_APP_ENDPOINT_BASE + "/"
}
//const baseURLFn = process.env.REACT_APP_ENDPOINT_BASE
const client = new AppSearchClient(
    undefined,
    process.env.REACT_APP_API_KEY,
    baseURLFn
)

export const postFunction = async (engine, data) => {
    await client.indexDocuments(engine, data)
}

export const listFunction = async (engine) => {
    const ApiKey = process.env.REACT_APP_API_KEY
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ApiKey}`,
        },
        mode: 'cors',
    }
    return fetch(
        process.env.REACT_APP_ENDPOINT_BASE +
            `/engines/${engine}/documents/list`,
        params
    )
        .then((data) => {
            if (data?.ok) {
                return data.json()
            }
        })
        .then((data) => {
            return data?.results
        })
}

export const getFunction = async (engine, docID) => {
    const ApiKey = process.env.REACT_APP_API_KEY
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ApiKey}`,
        },
        mode: 'cors',
    }
    return fetch(
        process.env.REACT_APP_ENDPOINT_BASE +
            `/engines/${engine}/documents?ids%5B%5D=${docID}`,
        params
    )
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            console.log(data)
        })
}

export const updateFunction = async (engine, data) => {
    client.updateDocuments(engine, data)
}

export const updateUserFunction = async (data, docID) => {
    const userUpdate = {
        ID: data.ID,
        firstname: data.firstname,
        middlename: data.middlename,
        email: data.email,
        lastname: data.lastname,
        nickname: data.nickname,
        major: data.major,
        minor: data.minor,
        resume: data.resume,
        softskills: data.softskills,
        bio: data.bio,
        year: data.year,
        bookmarked: data.bookmarked.push(docID),
        pronouns: data.pronouns,
        student: data.student,
    }
    client.updateDocuments('profiles-engine', userUpdate)
}

export const deleteFunction = async (engine, docID) => {
    const ApiKey = process.env.REACT_APP_API_KEY
    const params = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ApiKey}`,
        },
        mode: 'cors',
        body: JSON.stringify([docID]),
    }
    return await fetch(
        process.env.REACT_APP_ENDPOINT_BASE + `/engines/${engine}/documents`,
        params
    )
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            console.log(data)
        })
}

export const verifyEmail = async (user) => {
    const ApiKey = process.env.REACT_APP_VERIFY_KEY
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ApiKey}`,
        },
        mode: 'cors',
        body: JSON.stringify([user]),
    }
    return await fetch(
        process.env.REACT_APP_AUTH0_API + 'jobs/verification-email',
        params
    )
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            console.log(data)
        })
}
