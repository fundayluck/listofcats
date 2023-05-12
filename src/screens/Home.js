import { View, SafeAreaView, FlatList, ActivityIndicator, StyleSheet, Text } from 'react-native'
import { useFetchCats } from '../components/hooks'
import CatsCard from '../components/CatsCard'
import { WIDTH } from '../helper/Dimension'

const Home = () => {
    const { data, loading, messageError } = useFetchCats()

    if (messageError !== null) return <View style={
        [style.container, style.horizontal, {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',

        }]
    } >
        <Text
            style={{
                alignSelf: 'center',
                textAlign: 'center',
                fontSize: 10,
                marginHorizontal: WIDTH * 0.03
            }}
        >{messageError}</Text>
    </View >

    if (loading) return <View style={[style.container, style.horizontal]}>
        <ActivityIndicator
            size={'large'}
        />
    </View>

    return (
        <SafeAreaView>
            <FlatList
                keyExtractor={(item) => item.id}
                data={data}
                renderItem={({ item }) =>
                    <CatsCard
                        cat={item}
                    />
                }
            />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
})

export default Home