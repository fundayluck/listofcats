import { View, SafeAreaView, FlatList, ActivityIndicator, StyleSheet, Text, TextInput } from 'react-native'
import CatsCard from '../components/CatsCard'
import { WIDTH } from '../helper/Dimension'
import useFetchCats from '../hooks/useFetchCats'
import { useEffect, useState } from 'react'

const Home = () => {
    const [filter, setFilter] = useState('')

    const { data, isLoading, isError, hasNextPage, fetchNextPage, isFetchingNextPage } =
        useFetchCats();

    if (isError) return <View style={
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
                fontSize: 20,
                marginHorizontal: WIDTH * 0.03
            }}
        >An error occurred while fetching data</Text>
    </View >

    if (isLoading) return <View style={[style.container, style.horizontal]}>
        <ActivityIndicator
            size={'large'}
        />
    </View>

    const flattenData = data.pages.flatMap((page) => page.data);

    const loadNext = () => {
        if (hasNextPage) {
            fetchNextPage();
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={flattenData}
                renderItem={({ item }) =>
                    <CatsCard
                        cat={item}
                    />
                }
                onEndReachedThreshold={10}
                ListFooterComponent={isFetchingNextPage ?
                    <ActivityIndicator
                        size={'large'}
                    />
                    :
                    null
                }
                onEndReached={loadNext}
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