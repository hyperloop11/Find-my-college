import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react';
import { Button, StyleSheet, Text, View,Image , ScrollView,TouchableOpacity,ImageBackground, Dimensions} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Entypo  from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Icon from 'react-native-vector-icons/FontAwesome';
import PhotoButton from './PhotoButton';
import Separator from './Separator';

let name='Default' ;
export default function institute({navigation}) {
  const [details,setDetails]=useState(navigation.getParam('college'));
  name=details.name;

  //for review section
  let reviews=[];
  let reviewNo=2;
  if(details.reviews.length<2) reviewNo=details.reviews.length;
  for(let i = 0; i < reviewNo ; i++){
    reviews.push(
     <View style={styles.review_row} key={i} >
       <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
      <Text style={{ fontSize:15, fontWeight:'bold' }} >
      {details.reviews[i].author}
      </Text>
      <TouchableOpacity >
      <Entypo name="dots-three-vertical" size={20}  />
      </TouchableOpacity>
  
      </View>
       <Text>
         {details.reviews[i].text}
       </Text>
     </View>
   )
   }
  
//for rate
const [israted,setrated]=useState(false);

const [title,setTitle]=useState(false);
const titlehadler=(bol) => {
  setTitle(!bol);
};
    return(
    
      <View style={styles.container} >
        <ScrollView style={styles.scroll}>

          {/* top image */}
          <View>
            <View style={styles.cardContainer}>
            <View style={styles.headerContainer}>
        <View style={styles.coverContainer}>
          <ImageBackground
            source={require('./img/iitism.jpg')}
            style={styles.coverImage}
          >
             {
               title && <PhotoButton title='Added' titlehadler={titlehadler} cur={title}  />
             }
             {
               !title && <PhotoButton title='Add to List' titlehadler={titlehadler} cur={title}  />
             }
          </ImageBackground>
        </View>
      </View>
            </View>
      <Text style={styles.title} >
         {details.name}
      </Text>

      <View style={styles.tags}>
        <Text style={{color:'#666666'}} >
        <AirbnbRating
            count={5}
            showRating={false}
            isDisabled={false}
            defaultRating={details.rating}
            size={10}
            ratingColor='#f03c02'
            reviewColor='#f03c02'
            selectedColor='#f03c02'
        />
        </Text>
        <Entypo name="dot-single" size={20} style={{justifyContent: 'center',color:'#666666'}}  />
        <Text style={{color:'#666666'}} >
          {details.reviews.length} reviews
        </Text>
      </View>
          </View>
          {Separator()}
      
      {/* description */}
      <View style={styles.desc} >
      <Text style={{ fontSize:15, fontWeight:'bold'}} >
         Description
      </Text>
        <Text>
          {details.description}
        </Text>
      </View>
      {Separator()}

      {/* category based rating */}
      <View style={styles.cat_rating} >
      <Text style={{ fontSize:15, fontWeight:'bold' }} >
         Category based Rating
      </Text>
      <View >
      {
          details.category.map((item,index) => {
            return (
              <View style={styles.cat_row} key={index} >
                <Text>
                {item.name} :
                </Text>
                <Text style={styles.rate_val} >
                {item.rating}
                </Text>
              </View>
            )
          }
        )
      }
      </View>
      <TouchableOpacity style={{alignItems: 'flex-end', justifyContent: 'flex-end',}}  >
       <Text style={{ color:'#2a9df4', paddingRight:5, paddingBottom:5, }} >
         Add a rating!
       </Text>
      </TouchableOpacity>
      </View>
      {Separator()}

      {/* Review Section */}
      <View style={styles.review}> 
      <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
      <Text style={{ fontSize:15, fontWeight:'bold' }} >
         Reviews
      </Text>
      <TouchableOpacity onPress={() => {navigation.navigate("Reviews",{ details:details })} } >
      <AntDesign name="arrowright" size={20}   />
      </TouchableOpacity>
  
      </View>
        {reviews}
      </View>
      <TouchableOpacity style={{alignItems: 'flex-end', justifyContent: 'flex-end',}}  >
       <Text style={{ color:'#2a9df4', paddingRight:5, paddingBottom:5, }} >
         Add a review!
       </Text>
      </TouchableOpacity>
      {Separator()}

      {/* rate college */}
      <View style={styles.rate_cllg}>
      <Text style={{ fontSize:15, fontWeight:'bold' }} >
         Rate {details.name}
      </Text>
        <AirbnbRating
            count={5}
            showRating={false}
            defaultRating={3}
            size={20}
            ratingColor='#f03c02'
            reviewColor='#f03c02'
            selectedColor='#f03c02'
            onFinishRating={ () => {
              setrated(true)
            } }
        />
        {
          israted &&
          <TouchableOpacity style={{ backgroundColor:'#f03c02', padding:5, borderRadius:7, justifyContent:'center',alignSelf:'center', width:'30%'}} >
            <Text style={{ color:'#fff',justifyContent:'center',alignSelf:'center' }}>
              Submit
            </Text>
          </TouchableOpacity>
        }
        
      </View>
        
        </ScrollView>
      </View>
    )
}
institute.navigationOptions = ({ navigation }) => {
  return {
      title: name,
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    backgroundColor: '#fff',
  },
  cardContainer: {
    flex: 1,
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
  text: {
    color: "#fff",
    fontSize: 14,
    borderRadius:5,
    textAlign: "center",
    bottom:0,
    right:0,
    backgroundColor: "#f03c02",
    width:'40%',
  },
  top:{
    height:'38%',
    backgroundColor: '#fff',
    marginBottom:5,
    paddingBottom:3,
  },
  title: {
      fontSize: 17,
      padding:5,
      fontWeight:'bold',
  },
  img: {
    width:'100%',
    height:'50%',
  },
  tags: {
    flexDirection:'row',
    padding:5,
  },
  desc:{
    marginTop:5,
    marginBottom:5,
    padding:5,
    backgroundColor:'#fff',
  }, 
  cat_rating: {
    backgroundColor:'#fff',
    marginTop:5,
    marginBottom:5,
    padding:5,
  },
  cat_row: {
    flexDirection:'row',
    padding:5,
  },
  rate_val:{
    paddingRight:3,
  },
  review: {
    backgroundColor:'#fff',
    marginTop:5,
    marginBottom:5,
    padding:5,
  },
  review_row: {
    marginVertical:6,
  },
  rate_cllg:{
    backgroundColor:'#fff',
    marginTop:5,
    marginBottom:5,
    padding: 5,
  } ,
});
