import React from 'react'
import { Provider, connect } from 'react-redux'

import { Text } from 'react-native'
import Counter from './counter.js'

import configureStore from './store.js'

function testAction () {
  return {
    type: 'TEST'
  }
}

const store = configureStore()

function App ({count, addOne}) {
  return <Counter addOne={addOne} count={count} />
}
function mapStateToProps (state) {
  return {
    count: state.count
  }
}
function mapDispatchToProps (dispatch) {
  return {
    addOne: () => dispatch(testAction())
  }
}
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default class ProvidedApp extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    )
  }
}
