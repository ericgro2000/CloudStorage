interface userReducerAction {
    type:string
}

const defaultState = {
    currentUser: {},
    isAuth: false
}

export default function userReducer(state = defaultState, action:userReducerAction) {
    switch (action.type) {

        default:
            return state
    }
}