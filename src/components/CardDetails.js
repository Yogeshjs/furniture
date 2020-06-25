import React, {useState} from "react";
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, Animated, Easing } from "react-native";
import { withNavigation } from "react-navigation";

const CardDetails = ({title, img, price, borderColor, navigation})=>{

    let scaleValue = useState(new Animated.Value(0))[0];

    const imageScale = scaleValue.interpolate({
        inputRange:[0, 0.5, 1 ],
        outputRange:[1, 1.1, 1.2]
    })

    let transformStyle = {...styles.imageStyle, transform: [{scale: imageScale}]}

    
    return <TouchableWithoutFeedback onPressIn= {()=>{
        scaleValue.setValue(0);

        Animated.timing(scaleValue, {
            toValue: 1,
            duration: 250,
            easing: Easing.linear,
            useNativeDriver: true
        }).start();

        
    }} onPressOut={()=>{

        Animated.timing(scaleValue, {
            toValue: 0,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true
        }).start();

        navigation.navigate('Product', {title, img, price});
        
    }}>
    
    <View style={{ height: 150, width:325, marginVertical: 13 }}>

        
        <View style={styles.card}>

            <View style={{flex:1, justifyContent:'center'}}>
                <Text style={{fontSize:16, width: 150, marginLeft: 15, color: '#82827f', marginBottom: 45}}>{title}</Text>

                <View style={styles.priceTag}>
                    <Text>${price}</Text>
                </View>
            </View>

            <Animated.Image source={img} style={transformStyle} />

            
        </View>

        <View style={[{backgroundColor: borderColor},styles.extendedBorder]}>

        </View>

    </View>

    </TouchableWithoutFeedback>
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
        borderRadius: 25
    }
});

export default withNavigation(CardDetails);