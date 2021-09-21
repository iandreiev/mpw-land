export default {
    GET_CATEGORIES: async ({commit}) => {
        await $nuxt.$api.categories.get()
        .then(res=>{
            commit('SET_CATEGORIES', res.data)
        })
    },
}