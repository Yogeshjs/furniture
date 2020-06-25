import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import {MaterialIcons} from "react-native-vector-icons";
import {SimpleLineIcons} from "react-native-vector-icons";

const ProductDetails = ({title, pic})=>{
    return <View style={styles.container}>
        <View style={styles.productStyles}>

            <View style={styles.productImage}>

                <View style={styles.imageBackground}>
                    <Image source={pic} style={{ width: 250, height: 250, position: 'absolute', top: -20 }} />
                </View>

            </View>

            <View style={styles.productDescription}>

                <Text style={{fontSize: 18, color:'#696766', marginLeft: 15, marginBottom: 10}}>{title}</Text>
                <Text style={{fontSize: 16, fontWeight: "bold" ,color:'#ebc034', marginLeft:15, marginBottom: 10}}>$56</Text>
                <Text style={{ paddingHorizontal: 15, color: '#979998'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</Text>

            </View>

        </View>
        <View style={styles.bottomContainer}>

            <View style={styles.addToCart}>
                
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <MaterialIcons name='chat-bubble-outline' size={20} color="#fff"/>
                    <Text style={{color: '#fff', paddingLeft:10}}>Chat</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <SimpleLineIcons name='handbag' size={20} color="#fff"/>
                    <Text style={{color: '#fff', paddingLeft:10}}>Add to Cart</Text>
                </View>
                
            </View>

        </View>
    </View>
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#3486eb'
    },
    productStyles:{
        flex: 3,
        backgroundColor: '#F5F5F5',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    bottomContainer:{
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -30
    },
    productImage:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    productDescription:{
        flex: 1
    },
    imageBackground:{
        width: 240,
        height: 240,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#fff',
        borderRadius: 150,
        
    },
    addToCart:{
        flex: 0.9,
        height: 60,
        backgroundColor: '#ebc034',
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});

export default ProductDetails;