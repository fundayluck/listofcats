import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useHandleDetail } from './hooks'

const CatsCard = ({ cat }) => {
    console.log(cat);
    const { expandedIndex, handleClick } = useHandleDetail()
    const isExpanded = cat.id === expandedIndex
    return (
        <View>
            <TouchableOpacity style={styles.row}
                onPress={() => handleClick(cat.id)}
            >
                <Image source={{ uri: `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg` }} style={styles.pic} />
                <View style={styles.nameContainer}>
                    <Text style={styles.nameTxt}>{cat.name}</Text>
                </View>
            </TouchableOpacity>
            {isExpanded && <Text>Text</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#DCDCDC",
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        padding: 10,
    },
    pic: {
        borderRadius: 30,
        width: 60,
        height: 60,
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    nameTxt: {
        marginLeft: 15,
        fontWeight: "600",
        color: "#222",
        fontSize: 18,
    },
});

export default CatsCard