export default {
    SET_PROJECTS: (state, projects) => {
        state.projects = projects
        state.sliced = projects.slice(0,3)
    },

}