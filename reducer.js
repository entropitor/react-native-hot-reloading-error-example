const initialState = {
  count: 0
}
export default function reducer (state = initialState, action) {
  if (action.type === 'TEST') {
    return {
      ...state,
      count: state.count + 1
    }
  } else {
    return state
  }
}
