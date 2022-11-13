export const postFunction = (data, engine) => {
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
        `https://beaker.ent.us-central1.gcp.cloud.es.io/api/as/v1/engines/${engine}/documents`,
        params
    )
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            console.log(data)
        })
}

export const listFunction = (engine) => {
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
        `https://beaker.ent.us-central1.gcp.cloud.es.io/api/as/v1/engines/${engine}/documents/list`,
        params
    )
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            return data?.results
        })
}

export const getFunction = (engine, id) => {
    const USER = process.env.REACT_APP_ELASTIC_USERNAME
    const PASSWORD = process.env.REACT_APP_ELASTIC_PASSWORD
    const jsonData = { query: id }
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + btoa(`${USER}:${PASSWORD}`),
        },
        mode: 'cors',
        body: JSON.stringify(jsonData),
    }
    return fetch(
        `https://beaker.ent.us-central1.gcp.cloud.es.io/api/as/v1/engines/${engine}/search`,
        params
    )
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            console.log(data)
        })
}

// export const putFunction = ({data, engine, id}) => {
//     const USER = process.env.REACT_APP_ELASTIC_USERNAME
//     const PASSWORD = process.env.REACT_APP_ELASTIC_PASSWORD
//     const params = {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: 'Basic ' + btoa(`${USER}:${PASSWORD}`),
//         },
//         mode: 'cors',
//         body: JSON.stringify(data),
//     }
//     return fetch(
//         `https://beaker.ent.us-central1.gcp.cloud.es.io/api/as/v1/engines/${engine}/documents/${id}`,
//         params
//     )
//         .then((data) => {
//             return data.json()
//         })
//         .then((data) => {
//             console.log(data)
//         })
// }
//not working
export const deleteFunction = (engine, id) => {
    const USER = process.env.REACT_APP_ELASTIC_USERNAME
    const PASSWORD = process.env.REACT_APP_ELASTIC_PASSWORD
    const jsonData = { query: id }
    const params = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + btoa(`${USER}:${PASSWORD}`),
        },
        method: 'cors',
        body: JSON.stringify(jsonData),
    }
    return fetch(
        `https://beaker.ent.us-central1.gcp.cloud.es.io/api/as/v1/engines/${engine}/documents/search`,
        params
    )
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            console.log(data)
        })
}
