import React from 'react'
//import { connect } from 'react-redux'

import { Text, View } from 'react-native'

export default function Counter ({count, addOne}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>My Counter:</Text>
      <Text onPress={addOne}>{count}</Text>
    </View>
  )
}
