export const postFunction = (data) => {
    const USER = process.env.REACT_APP_ELASTIC_USERNAME
    const PASSWORD = process.env.REACT_APP_ELASTIC_PASSWORD
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + btoa(`${USER}:${PASSWORD}`),
        },
        mode: 'cors',
        body: JSON.stringify(data),
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

export const listFunction = () => {
    const USER = process.env.REACT_APP_ELASTIC_USERNAME
    const PASSWORD = process.env.REACT_APP_ELASTIC_PASSWORD
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + btoa(`${USER}:${PASSWORD}`),
        },
        mode: 'cors',
    }
    return fetch(
        `https://beaker.ent.us-central1.gcp.cloud.es.io/api/as/v1/engines/posts-engine/documents/list`,
        params
    )
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            console.log(data)
        })
}

//  GET: engine/documents/list
