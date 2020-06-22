import React, {useState} from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CardDetails = ({title, img, price})=>{

    //console.log(img);
    return <View style={{ height: 150, width:325, marginVertical: 13 }}>

        
        <View style={styles.card}>

            <View style={{flex:1, justifyContent:'center'}}>
                <Text style={{fontSize:16, width: 150, marginLeft: 15, color: '#82827f', marginBottom: 45}}>{title}</Text>

                <View style={styles.priceTag}>
                    <Text>${price}</Text>
                </View>
            </View>

            <Image source={img} style={styles.imageStyle} />

            
        </View>

        <View style={styles.extendedBorder}>

        </View>

    </View>
}

const styles = StyleSheet.create({
    
    card:{
        position:'absolute',
        zIndex:0,
        height: 130,
        width: 323,
        backgroundColor: '#fff',
        elevation: 3,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent:'flex-end',
    },
    imageStyle:{
        width: 170, 
        height: 170,
        position: 'absolute',
        top: -37
    },
    priceTag:{
        width:100,
        height: 35,
        backgroundColor: '#ebc034',
        justifyContent: 'center',
        alignItems:'center',
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 35,
        position:'absolute',
        bottom: 0
    },
    extendedBorder:{
        position:'absolute',
        right: -8,
        zIndex: 1,
        height: 130,
        width: 325,
        backgroundColor: '#03cefc',
        borderRadius: 25
    }
});

export default CardDetails;