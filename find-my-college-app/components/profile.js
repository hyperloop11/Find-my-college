import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View ,TouchableOpacity, ScrollView,ImageBackground,Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Entypo  from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-elements';
import Separator from './Separator';

let username='Kritika Arora';
export default function profile({navigation}) {
  const auth=navigation.getParam('loggedin') || false ;
  const user=navigation.getParam('user');
  const wishlist=[{
    name :"Indian Institute of Technology(ISM) DHANABD",
  },
  {
    name :"Indian Institute of Technology Madras",
  },
  {
    name :"Indian Institute of Technology Delhi",
  },
  {
    name :"Indian Institute of Technology Bombay",
  }];
  username=user.username;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Card containerStyle={styles.cardContainer}>
            
            {/* header */}
            <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          source={require('./img/profile_pic_ex.jpg')}
        >
          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={require('./img/profile_pic_ex.jpg')}
            />
          </View>
        </ImageBackground>
      </View>
      {Separator()}

      {/* introduction */}
      <View style={styles.intro} >
      <Text style={{ fontSize:18, fontWeight:'bold' }} >
         {user.username}
      </Text>
      <Text style={{ fontSize:14, }} >
         {user.college}
      </Text>
      <Text style={{ fontSize:14, }} >
         2019-2023 Acedmic Year
      </Text>
      </View>
      {Separator()}

      {/* wishlist */}
      <View style={styles.wishlist }>
      <Text style={{ fontSize:20, fontWeight:'bold', color:'#f03c02'}} >
         Wishlist
      </Text>
      {
          wishlist.map((item,index) => {
              return (
                  <View key={index} >
                      <View style={styles.review_row} >
                        <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                        <Text style={{ fontSize:15, fontWeight:'bold' }} >
                        {item.name}
                        </Text>
                        <TouchableOpacity >
                        <AntDesign name="arrowright" size={20}   />
                        </TouchableOpacity>
                    
                        </View>
                        <Text>
                        This college is an educational institution or a constituent part of one. A college may be a degree-awarding tertiary educational institution, a part of a collegiate or federal university, an institution offering vocational education, or a secondary school.
                        </Text>
                        <Text style={{color:'#2a9df4',}} >
                          Know More
                        </Text>
                      </View>
                  </View>
              )
          })
      }
      </View>

          </Card>
        </View>
      </ScrollView>
    </View>
  );
}
profile.navigationOptions = ({ navigation }) => {
  return {
      title: username,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  intro: {
    padding: 7,
  },
  cardContainer: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  emailContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 45,
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: 'transparent',
    alignItems: 'center',
        elevation: 1,
        marginTop: -1,
  },
  placeIcon: {
    color: 'white',
    fontSize: 26,
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },
  userCityText: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  userImage: {
    borderColor: '#f03c02',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
  wishlist:{
    padding:10,
  },
});
