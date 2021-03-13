import { StatusBar } from 'expo-status-bar';
import React , { useState }   from 'react';
import { Button, StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo  from "react-native-vector-icons/Entypo";

export default function home({navigation}) {
    const [details,setDetails]=useState(navigation.getParam('details'));
  return (
    <View style={styles.container}>
      {
          details.reviews.map((item,index) => {
              return (
                  <View key={index} >
                      <View style={styles.review_row} >
                        <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                        <Text style={{ fontSize:15, fontWeight:'bold' }} >
                        {item.author}
                        </Text>
                        <TouchableOpacity >
                        <Entypo name="dots-three-vertical" size={20}  />
                        </TouchableOpacity>
                    
                        </View>
                        <Text>
                          {item.text}
                        </Text>
                      </View>
                  </View>
              )
          })
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  review_row: {
      padding:5,
      marginVertical:6,
  } ,
});
