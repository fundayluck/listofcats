import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

const Rating = ({ str = 0 }) => {
    const totalStars = 5;
    const activeStars = str;
    return (
        <View style={{ flexDirection: 'row' }}>
            {[...new Array(totalStars)].map((arr, index) => {
                return index < activeStars ?
                    <Icon name="star" size={30} color="#900" key={index} />
                    : <Icon name="staro" size={30} color="#900" key={index} />;
            })}
        </View>
    )
}

export default Rating