import React from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';
import AuthorRow from "./authorRow";
import PropTypes from "prop-types";
export default class Card extends React.Component {
static propTypes ={
    fullname : PropTypes.string.isRequired,
    linkText : PropTypes.string,
    onPressLinkText : PropTypes.func,
    image: Image.propTypes.source.isRequired,
};
static defaultProps = {
    linkText: '',
    onPressLinkText: () => { },
};

state = { loading: true,
 };

handleLoad = ()=>{
    this.setState({loading :false});
};

    render() {
        const { fullname, linkText, onPressLinkText, image } = this.props;
        const { loading } = this.state;
        return (
        <View>
       <AuthorRow
    fullname={fullname}
    linkText={linkText}
    onPressLinkText={onPressLinkText}/>            
                <View style={styles.image}>
                    {loading && (
                    <ActivityIndicator
                     size={'large'} 
                     style={StyleSheet.absoluteFill} 
                     />
                    )}
                    <Image style={StyleSheet.absoluteFill} 
                    source={image}
                    onLoad={this.handleLoad}/>
                </View>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    image: {
            aspectRatio:1,
            backgroundColor: 'rgba(0,0,20,0.02)',
        },
}); 
    

