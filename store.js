import { createStore } from 'redux'
import reducer from './reducer.js'

const DEVELOPMENT = process.env.NODE_ENV === 'development' ? true : undefined
export default function configureStore (initialState) {
  const store = createStore(
    reducer,
    DEVELOPMENT && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  if (DEVELOPMENT && module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducer.js').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
