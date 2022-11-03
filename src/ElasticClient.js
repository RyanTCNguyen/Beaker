const AppSearchClient = require('@elastic/app-search-node')
const apiKey = process.env.ELASTIC_PRIVATE_API_KEY
const baseUrlFn = () =>
    'https://beaker.ent.us-central1.gcp.cloud.es.io/api/as/v1/'
const client = new AppSearchClient(undefined, apiKey, baseUrlFn)

const engineName = 'posts-engine'
const posts = [
    {
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
    },
]

client
    .indexDocuments(engineName, posts)
    .then((response) => console.log(response))
    .catch((error) => console.log(error))

//https://github.com/elastic/app-search-node#usage
