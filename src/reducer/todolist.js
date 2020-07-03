const defaultState = {
    inputValue: "吃饭",
    list: []
}
export default (state = defaultState, action) => {
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === 'addList') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === 'deleteItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value, 1)
        return newState
    }
    return state
}