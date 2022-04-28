
export const auth = {
    state: ()=> {
        return {
            user: null
        }
    },
    actions: {
        setUser(state, payload) {
            state.user = payload
        }
    }
}