import React from 'react'
import { ColorPropType, View, Text, StyleSheet } from 'react-native'
import PropsTypes from "prop-types";
export default function Avatar({size , backgroundColor , initials}) {
    const style = {
        width:size,
        height:size,
        backgroundColor,
        borderRadius:size / 2
    }
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>{initials}</Text>
        </View>
    )
}

Avatar.prototype = {
    initials: PropsTypes.string.isRequired,
    backgroundColor: ColorPropType.isRequired,
    size : PropsTypes.number.isRequired
}
const styles =StyleSheet.create({
    container :{
        justifyContent:'center',
        alignItems:'center'
    },
    text :{
       color : 'white'
    }
});
