import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Icon } from 'react-native-elements'

const PhotoButton = ({title, titlehadler, cur}) => (
  <View style={{
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'flex-end',
  }}>
    <Button
      color="white"
      title={title}
      onPress={() => {titlehadler(cur)} }
      textStyle={{
        fontSize: 5,
        fontWeight: '200',
      }}
      buttonStyle={{
        backgroundColor: 'rgba(128,128,128, 0.7)',
        borderRadius: 5,
        borderWidth: 0,
        elevation: 0,
        paddingLeft: 10,
      }}
      containerStyle={{
        marginBottom: 15,
        marginRight: 15,
        padding: 0,
      }}
    />
  </View>
)

export default PhotoButton