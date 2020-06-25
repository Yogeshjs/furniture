import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import ProductDetails from "../components/ProductDetails";
import Icon from "react-native-vector-icons/SimpleLineIcons";

const ProductScreen = ({navigation})=>{
    const title = navigation.getParam('title');
    const img = navigation.getParam('img');

    return <ProductDetails title={title} pic={img}/>
};

ProductScreen.navigationOptions = ({navigation})=>{
    return {
        headerRight: ()=> (
            <View style={{marginRight: 15}}>
                <Icon name="bag" size={25}/>
            </View>
        ),
        headerTitle: ()=> <Text>BACK</Text>,
        headerStyle: {
            backgroundColor: '#F5F5F5',
            elevation: 0
        }
    }
}



export default ProductScreen;