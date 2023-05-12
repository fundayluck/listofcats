import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { useHandleDetail } from './hooks'
import Rating from './Rating';

const CatsCard = ({ cat }) => {
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
            {isExpanded &&
                <Card style={{ marginVertical: 10 }} key={cat.id}>
                    <Card.Cover style={{ marginHorizontal: 10, marginVertical: 10 }} source={{ uri: `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg` }} />
                    <Card.Content>
                        <Text variant="titleLarge">{cat.name}</Text>
                        <Text style={{ marginBottom: 10 }} variant="bodyMedium">{cat.description}</Text>
                        <Text style={{ marginBottom: 10 }} variant="bodyMedium">{cat.temperament}</Text>
                        <Text style={{ marginBottom: 10 }} variant="bodyMedium">Affection Level</Text>
                        <Rating str={cat.affection_level} />
                        <Text style={{ marginBottom: 10, marginTop: 10 }} variant="bodyMedium">Adaptability</Text>
                        <Rating str={cat.adaptability} />
                        <Text style={{ marginBottom: 10, marginTop: 10 }} variant="bodyMedium">Child Friendly</Text>
                        <Rating str={cat.child_friendly} />
                        <Text style={{ marginBottom: 10, marginTop: 10 }} variant="bodyMedium">Dog Friendly</Text>
                        <Rating str={cat.dog_friendly} />
                        <Text style={{ marginBottom: 10, marginTop: 10 }} variant="bodyMedium">Energy Level</Text>
                        <Rating str={cat.energy_level} />
                        <Text style={{ marginBottom: 10, marginTop: 10 }} variant="bodyMedium">Health Issues</Text>
                        <Rating str={cat.health_issues} />
                        <Text style={{ marginBottom: 10, marginTop: 10 }} variant="bodyMedium">Intelligence</Text>
                        <Rating str={cat.intelligence} />
                        <Text style={{ marginBottom: 10, marginTop: 10 }} variant="bodyMedium">Shedding Level</Text>
                        <Rating str={cat.shedding_level} />
                        <Text style={{ marginBottom: 10, marginTop: 10 }} variant="bodyMedium">Stranger Friendly</Text>
                        <Rating str={cat.stranger_friendly} />
                        <Text style={{ marginBottom: 10, marginTop: 10 }} variant="bodyMedium">Vocalisation</Text>
                        <Rating str={cat.vocalisation} />
                    </Card.Content>

                </Card>

            }
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