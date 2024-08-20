interface fileReducerAction {
    type:string
}


const defaultState = {

}

export default function fileReducer(state = defaultState, action:fileReducerAction) {
    switch (action.type) {

        default:
            return state
    }
}