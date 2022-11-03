export const getProjects = () => {
    const AUTHKEY = process.env.ELASTIC_PRIVATE_API_KEY
    const params =  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic '+btoa('elastic:XyUFHX0uvoRKuBWnqYnwsGWD'),
        },
        mode: 'cors',
        body: JSON.stringify({
            data: 1
        }),
    }
    return fetch(`https://beaker.ent.us-central1.gcp.cloud.es.io/api/as/v1/engines/posts-engine/documents`,params).then((data)=>{return data.json()}).then((data)=>{console.log(data)})
}