function createStore(reducer, initialState) {
    let state = initialState
    let subscribers = []

    return {
        dispath: action => { state = reducer(state, action)},
        getState: () => state,
        subscribe: listener => {
            subscribers.push(listener)
            return  () => {
                let index = listeners.indexOf(listener)
                listeners.splice(index, 1)
            }
         }
    }
}
    