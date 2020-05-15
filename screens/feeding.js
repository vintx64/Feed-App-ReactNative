import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ViewPropTypes, SafeAreaView } from 'react-native';
import { fetchImages } from '../services/imageApi';
import CardList from "../components/CardList";
export default class Feeding extends Component {

    static propTypes = {
        style: ViewPropTypes.style,
    };

    static defaultProps = {
        style: null,
    };

    state = {
        loading: true,
        error: false,
        items: [],
    };
async componentDidMount() {
    try {
        const items = await fetchImages();

        this.setState({
            loading: false,
            items,
        });
    } catch (e) {
        this.setState({
            loading: false,
            error: true,
        });
    }
}
    render() {
        const { style } = this.props;
        const { loading, error, items } = this.state;

        if (loading) {
            return <ActivityIndicator size="large" />;
        }

        if (error) {
            return <Text>Error...</Text>;
        }

        return (
            <SafeAreaView style={style}>
                <CardList items={items} />
            </SafeAreaView>
        );
    }
}
