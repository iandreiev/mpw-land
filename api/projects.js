export default axios => ({
    get(){
        return axios.get('projects')
    },
    getById(id){
        return axios.get(`projects/${id}`)
    }
})