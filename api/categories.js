export default axios => ({
    get(){
        return axios.get('categories')
    },
    getById(id){
        return axios.get(`categories/${id}`)
    }
})