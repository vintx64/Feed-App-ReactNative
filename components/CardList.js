import React, { Component } from 'react'
import {FlatList} from 'react-native'
import Card from "./card";
import { getImageByID } from "../services/imageApi";
import PropTypes from "prop-types";

const keyExtractor = ({id}) => id.toString();
export default class CardList extends Component {
    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape({
            id : PropTypes.number.isRequired,
            author : PropTypes.string.isRequired,
        }),
        ).isRequired,
        };
        //function
        _renderItem = ({item : {id , author}}) =>{
            return (<Card
                        fullname={author}
                        image={{uri : getImageByID(id)}}
                        />)
        }

    render() {
        const {items} = this.props;
        return (
            <FlatList
                data={items}
                renderItem={this._renderItem}
                keyExtractor={keyExtractor}
            />
        )
    }
}


