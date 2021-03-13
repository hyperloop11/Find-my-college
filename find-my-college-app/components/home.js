import React, { useState }  from 'react';
import { Button, StyleSheet, Text, View,Image , ScrollView,TouchableOpacity,ImageBackground,Dimensions,SafeAreaView } from 'react-native';
import Entypo  from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HeaderHeightContext } from 'react-navigation-stack';


export default function home({navigation}) {
  const auth=navigation.getParam('loggedin') || false ;
  const user=navigation.getParam('user');
  return (
    <SafeAreaView style={styles.container}>
      {/* search bar */}
      <TouchableOpacity onPress={() => {navigation.navigate("College")} }  style={styles.search}>
        <View style={ {flexDirection: 'row'} } >
          <Icon name="search"  style={ {padding:5,color:'#fff'} } />
          <Text style={{ color:'#fff' }} >Search College</Text>
        </View>   
        </TouchableOpacity>
      <ScrollView>

        {/* header */}
        <View style={styles.cardContainer}>
            <View style={styles.headerContainer}>
        <View style={styles.coverContainer}>
          <ImageBackground
            source={require('./img/homeimg.png')}
            style={styles.coverImage}
          >
             
          </ImageBackground>
        </View>
      </View>
            </View>
        
        
        {/* get started */}
        <View style={styles.getstart} >
        <View style={styles.row} >
               <TouchableOpacity style={[styles.item,  ]} onPress={() => {navigation.navigate("College")} }  >
               <Icon name="search" size={20}  style={ {padding:5} } color="#f03c02"  />
               <Text style={styles.itemtext} >
                     Search
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity style={[styles.item,  ]}>
               <Entypo name="star-outlined" size={20} style={ {padding:5} } color="#f03c02" />
                  <Text style={styles.itemtext} >
                     Rate
                  </Text>
               </TouchableOpacity>
             </View>
             <View style={styles.row} >
               <TouchableOpacity style={[styles.item,  ]}  >
               <FontAwesome5 name="pen-nib" size={20} color="#f03c02" />
                  <Text style={styles.itemtext} >
                   Reviews
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity style={[styles.item]}>
               <Ionicons name="people-sharp" size={20} color="#f03c02" />
                  <Text style={styles.itemtext} >
                  Discuss
                  </Text>
               </TouchableOpacity>
             </View>
             
        </View>
        <ImageBackground
            source={require('./img/tem.jpg')}
            style={{ height:140, width:'100%' }}
          ></ImageBackground>
       </ScrollView>
       {
          !auth &&
          <View style={{flexDirection:'row',justifyContent:'center',alignSelf:'center' }} >
            <TouchableOpacity onPress={() => {navigation.navigate("Login")} }
           style={styles.bottombtn} >
            <Text style={{ color:'#fff',justifyContent:'center',alignSelf:'center' }}>
            Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate("Signup")} }
           style={styles.bottombtn} >
            <Text style={{ color:'#fff',justifyContent:'center',alignSelf:'center' }}>
            Signup
            </Text>
          </TouchableOpacity>
          </View>
        }
        {
          auth &&
          <TouchableOpacity onPress={() => {navigation.navigate("Profile" ,{user:user} )} }
           style={styles.bottombtn} >
            <Text style={{ color:'#fff',justifyContent:'center',alignSelf:'center' }}>
            Profile
            </Text>
          </TouchableOpacity>
        }
    </SafeAreaView>
  );
}
home.navigationOptions = ({ navigation }) => {
  return {
      title: 'Find My College',
      headerStyle:{ backgroundColor:'#000'},
      headerTitleStyle:{ color:"#fff" },
      headerShown: false
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    backgroundColor: '#ECECEC',
    fontFamily: "Cochin",
  },
  cardContainer: {
    flex: 1,
    top:0,
    margin:0,
  },
  coverContainer: {
    position: 'relative',
  },
  coverImage: {
    height: Dimensions.get('window').width * (3 / 5),
    width: Dimensions.get('window').width,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  scroll: {
    backgroundColor: '#FFF',
    flex: 1,
    marginBottom: 55,
  },
  search: {
    paddingLeft:5,
    margin:7,
    borderRadius:15,
    backgroundColor:"#f03c02",
    paddingVertical:5,
  },
  getstart:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#ECECEC",
  },
  row:{
    flexDirection: 'row',
    width:'100%',
  },
  itemtext:{
    alignItems: "center",
		justifyContent: "center",
    fontSize:15,
    color:"#000",
  },
  item: {
		flex: 1,
		padding: 16,
    margin:7,
    alignItems: "center",
		justifyContent: "center",
    borderRadius:7,
    backgroundColor:'#fff',
    width:'100%',
	},
	bottombtn: { backgroundColor:'#f03c02', 
  margin: 10 , 
  width: 100 ,  
   padding:10, 
   borderRadius:7, 
   justifyContent:'center',
   alignSelf:'center'}
});
