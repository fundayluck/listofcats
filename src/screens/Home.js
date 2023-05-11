import { useEffect, useState } from 'react'
import { View, ScrollView, StatusBar } from 'react-native'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import axios from 'axios'
import { HEIGHT, WIDTH } from '../helper/Dimension';

const Home = () => {
    const [data, setData] = useState([])
    const [expandedIndex, setExpandedIndex] = useState(-1)
    console.log(expandedIndex);

    const handleClick = (nextIndex) => {
        setExpandedIndex((current) => {
            if (current === nextIndex) {
                return -1
            } else {
                return nextIndex
            }
        })
    }

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('https://api.thecatapi.com/v1/breeds?limit=10')
            setData(response.data);
        }
        getData()
    }, [])


    return (
        <>
            <StatusBar backgroundColor='black' />
            <View
                style={{
                    flex: 1,
                }}
            >
                <ScrollView

                >
                    {data.map((item, index) => {
                        const isExpanded = index === expandedIndex
                        return (

                            < Card
                                key={index}
                                style={{
                                    paddingHorizontal: WIDTH * 0.05,
                                    marginVertical: HEIGHT * 0.01
                                }}
                                onPress={() => handleClick(index)}
                            >
                                <Card.Cover
                                    style={{ paddingVertical: 11 }}
                                    source={{ uri: `https://cdn2.thecatapi.com/images/${item.reference_image_id}.jpg` }}
                                />
                                <Card.Content>
                                    <Text variant="titleLarge">{item.name}</Text>
                                    {isExpanded &&
                                        <>
                                            <Text variant="bodyMedium">{item.description}</Text>
                                            <Text variant="bodyMedium">{item.temperament}</Text>
                                        </>
                                    }
                                </Card.Content>
                            </Card>
                        )
                    })}
                </ScrollView>
            </View >
        </>
    )

}

export default Home