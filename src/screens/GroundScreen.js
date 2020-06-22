import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const GroundScreen = ()=>{
    return <View style={styles.container}>

    <View style={{ height: 150, width:325 }}>

        
        <View style={styles.card}>

            <View style={{flex:1, justifyContent:'center'}}>
                <Text style={{fontSize:16, width: 150, marginLeft: 15, color: '#525151'}}>Classic Leather Arm Chair</Text>

                <View style={styles.priceTag}>
                    <Text>$56</Text>
                </View>
            </View>

            <Image source={require('../../assets/Item_1.png')} style={styles.imageStyle} />

            
        </View>

        <View style={styles.extendedBorder}>

        </View>

    </View>

    </View>
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card:{
        position:'absolute',
        zIndex:0,
        height: 150,
        width: 323,
        backgroundColor: '#fff',
        elevation: 3,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent:'flex-end'
    },
    imageStyle:{
        width: 170, 
        height: 170,
        position: 'absolute',
        top: -30
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
        zIndex: -10,
        height: 150,
        width: 325,
        backgroundColor: '#4287f5',
        borderRadius: 25
    }
});

export default GroundScreen;