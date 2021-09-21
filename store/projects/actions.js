export default {
    GET_PROJECTS: async ({commit}) => {
        await $nuxt.$api.projects.get()
        .then(res=>{
            commit('SET_PROJECTS', res.data)
        })
    },
}