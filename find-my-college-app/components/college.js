import React, { Component,useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
const KEYS_TO_FILTERS = ['name'];
export default function college({navigation}) {
  const [collegelist, setColleges] = useState([ 
  {name :'Indian Institute of Technology,IIT(ISM) Dhanbad',
  id:1,
  rating:4.3,
  description: ' This college is an educational institution or a constituent part of one. A college may be a degree-awarding tertiary educational institution, a part of a collegiate or federal university, an institution offering vocational education, or a secondary school.' ,
  prof:[ { name:"Prof1", id:1,rating:4 },{ name:"Prof2", id:2,rating:4.2 },{ name:"Prof3", id:3,rating:3.9 } ],
  reviews: [{ author:"Arin Ferreira", text:"I really love this app, it's taught me lots of stuff, and its the most fun and engaging language app I've used! I'm doing the Japanese course, and learning hiragana and katakana was very fun and easy. It gets a little more complex after that, new grammar, words, and kanji are introduced way too quic"  },
  { author:"Cassie Phan", text:"A full screen ad that's 15 seconds long after every, single, lesson is a bit much. Let me pay for an ad free version that isn't attached to the regular subscription because I don't want those other features or have another subscription to deal with. I'd happily pay $30 to remove ads permantly even i"  },
  { author:"Jodi Stanton", text:"I really enjoy the daily work and the format the lessons use! It's easy to follow! They give you reminders and hints so that you can still get through if you can't remember what a word means. I'm excited to be renewing my Japanese from h.s. and learning even more. It's actually more accurate and cur"  },
  { author:"Kartik Arora", text:"This is an amazing app. I'm currently learning French, and it's very helpful and easy (as in easy to get to learn different languages), and simple. I love this app. But, once I run out of hearts and try and do practice, it always says there is an error. Also, when I do a listening exercise, sometime"  } ],
  category: [
    { name:'Acedemic',rating: 4.3, id:1 },
    { name:'Campus',rating: 4.1, id:2  },
    { name:'Messfood',rating: 4, id:3  },
     { name:'Safety',rating: 3.9 , id:4 },
     { name:'Clubs',rating: 4.1 , id:5 },
     { name:'Hostel',rating: 4.2, id:6  },
     { name:'Coding Culture',rating: 4, id:7  },
     { name:'Hostels',rating: 4, id:8  },
    { name:'Profs',rating: 4.1 , id:9 },
     { name:'Student Life',rating: 4.2, id:10 },
    { name:'Senior Junior',rating: 4 , id:11 },
     { name:'Placements',rating: 3.9 , id:12 },
  ],
  },
  { name:'Indian Institute of Technology,IIT Dhrivad',id:2},
  { name:'Indian Institute of Technology,IIT Bombay',id:3},
  { name:'Indian Institute of Technology,IIT Delhi',id:4},
  { name:'Indian Institute of Technology,IIT Madras',id:5},
  { name:'Indian Institute of Technology,IIT Dhrivad',id:6},
  { name:'Indian Institute of Technology,IIT Dhrivad',id:7},
  { name:'Indian Institute of Technology,IIT Dhrivad',id:8},
  { name:'Indian Institute of Technology,IIT Dhrivad',id:9},
  { name:'Indian Institute of Technology,IIT Dhrivad',id:10},
  { name:'Indian Institute of Technology,IIT Dhrivad',id:11},
  { name:'Indian Institute of Technology,IIT Dhrivad',id:12},
  { name:'Indian Institute of Technology,IIT Dhrivad',id:13},
  { name:'Indian Institute of Technology,IIT Dhrivad',id:14},
  { name:'Indian Institute of Technology,IIT Dhrivad',id:15},
  { name:'Indian Institute of Technology,IIT Dhrivad',id:16},
  { name:'Indian Institute of Technology,IIT Dhrivad',id:17},
  { name:'Indian Institute of Technology,IIT Dhrivad',id:18}]);
  const [term,setTerm]=useState('');
  const filteredEmails = collegelist.filter(createFilter(term, KEYS_TO_FILTERS));

  return (
    <View style={styles.container}>
        <SearchInput 
          onChangeText={text => setTerm(text)}
          style={styles.searchInput}
          placeholder="Search College"
          />
        <ScrollView>
          {filteredEmails.map(item => {
            return (
              <TouchableOpacity onPress={() => {navigation.navigate("Institute", {college:item})} } key={item.id} style={styles.listitem}>
                <View>
                  <Text>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-start'
    },
    listitem:{
      borderBottomWidth: 0.5,
      borderColor: 'rgba(0,0,0,0.3)',
      padding: 10
    },
    listsubject: {
      color: 'rgba(0,0,0,0.5)'
    },
    searchInput:{
      padding: 10,
      borderColor: '#CCC',
      borderWidth: 1
    }
  });