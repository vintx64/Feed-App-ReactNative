import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from "prop-types";
import Avatar from "./avatar";
import getInitials from "../utilits/getinitName";
import getAvatarColor from "../utilits/getAvatarColor";
function AuthorRow({ fullname, linkText, onPressLinkText }) {
    return (
        <View style={styles.container}>
        <Avatar initials={getInitials(fullname)} 
        size={35}
        backgroundColor={getAvatarColor(fullname)}></Avatar>
          <Text style={styles.text}>{fullname}</Text>
        <TouchableOpacity onPress={onPressLinkText}>
          <Text numberOfLines={1}>{linkText}</Text>
        </TouchableOpacity>
    </View>
    );
}
AuthorRow.propTypes={
    fullname:PropTypes.string.isRequired,
    linkText:PropTypes.string.isRequired,
    onPressLinkText: PropTypes.func.isRequired
}
const styles = StyleSheet.create({
    container :{
         flexDirection:'row',
         paddingHorizontal : 10,
         height:50,
         alignItems:'center'
    },
    text :{
        flex:1,
        marginHorizontal:7,
        paddingHorizontal:1
    }
})

export default AuthorRow;