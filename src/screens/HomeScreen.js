import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet, FlatList, Dimensions, TouchableOpacity, ScrollView, Animated } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {Feather} from "react-native-vector-icons";
import CardDetails from "../components/CardDetails";

const HomeScreen = ()=>{

    const navItems = [
        {
          id: '1',
          name: 'All'
        },
        {
          id: '2',
          name: 'Sofa'
        },
        {
          id: '3',
          name: 'Park bench'
        },
        {
          id: '4',
          name: 'Chair'
        }
    ];

    const products = [
      {
        id: '1',
        title: 'Classic Leather Arm Chair',
        Img: require('../../assets/Item_1.png'),
        price: '56'
      },
      {
        id: '2',
        title: 'Poppy Plastic Tube Chair',
        Img: require('../../assets/Item_2.png'),
        price: '56'
      },
      {
        id: '3',
        title: 'Bar Stool Chair',
        Img: require('../../assets/Item_3.png'),
        price: '56'
      }
    ]

    const scrollY = useState(new Animated.Value(0))[0];



    return <View style={{flex:1}}>
    
    
    <View style={styles.container}>

        <View style={styles.notificationBar}>
            <Text style={{fontSize: 18, color:'white'}}>Dashboard</Text>
            <Icon name='ios-notifications-outline' size={30} color="white"/>
        </View>

        <View style={styles.searchBar}>

            <Feather name='search' style={styles.iconStyle}/>

            <TextInput 
            placeholder="Search" 
            placeholderTextColor= '#fff'
            style={styles.inputStyle} 
            autoCapitalize='none' 
            autoCorrect={false}/>

        </View>

        <FlatList style={{marginVertical:10}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={navItems}
        keyExtractor={ (itm)=>{ return itm.id} }
        renderItem={ ({item})=>{
            return (
            <TouchableOpacity>
            <Text style={ {color:'#fff', fontSize:16, marginHorizontal: 30} }>{item.name}</Text>
            </TouchableOpacity>
            )
        } }

        />

        <View style={styles.bottomContainer}></View>

    </View>

    <Animated.ScrollView style={styles.productStyles} 
    showsVerticalScrollIndicator = {false}
    contentContainerStyle={{
      paddingTop: 20,
      paddingBottom: 100
    }} 
    onScroll={Animated.event(
      [{nativeEvent: {contentOffset: {y: scrollY}}}],
      {useNativeDriver: true}
    )} >

    

    <CardDetails title='Classic Leather Arm Chair' img={require('../../assets/Item_1.png')} price='56' borderColor="#03cefc" />
    <CardDetails title='Poppy Plastic Tube Chair' img={require('../../assets/Item_2.png')} price='56' borderColor="#edc811" />
    <CardDetails title='Bar Stool Chair' img={require('../../assets/Item_3.png')} price='56' borderColor="#03cefc" />

    

    </Animated.ScrollView>

   

  </View>
}

HomeScreen.navigationOptions = ()=>{
  return {
      headerShown: false
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3486eb',
      justifyContent: 'flex-end',
      paddingTop: 30
    },
    bottomContainer:{
      height: 450,
      width: Math.round(Dimensions.get('window').width) ,
      backgroundColor: '#fff',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50
    },
    notificationBar:{
      height: 55,
      marginHorizontal: 15,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
    },
    searchBar:{
      height: 50,
      borderRadius: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      flexDirection:'row',
      marginHorizontal: 15,
      marginVertical: 10
    },
    iconStyle:{
      fontSize: 35,
      color:'#fff',
      marginHorizontal: 15,
      alignSelf: 'center'
    },
    inputStyle:{
      flex:1,
      fontSize: 16
    },
    productStyles:{
      position:'absolute', 
      bottom: -25,
      left: 12,
      width: Math.round(Dimensions.get('window').width),
      height: 550
    }
  });

export default HomeScreen;