import { View, SafeAreaView, FlatList, ActivityIndicator, StyleSheet, Text, TextInput } from 'react-native'
import CatsCard from '../components/CatsCard'
import { WIDTH } from '../helper/Dimension'
import useFetchCats from '../hooks/useFetchCats'
import { useEffect, useState } from 'react'
import useFetchCatsByFilter from '../hooks/useFetchCatsByFilter'
import Icon from 'react-native-vector-icons/AntDesign'

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [onfilter, setOnFilter] = useState(false)
    console.log('search', onfilter);
    const { filterData, error } = useFetchCatsByFilter(searchTerm)
    const { data, isLoading, isError, hasNextPage, fetchNextPage, isFetchingNextPage } =
        useFetchCats();

    useEffect(() => {
        if (searchTerm.length >= 1) {
            setOnFilter(true)
        } else if (searchTerm.length < 1) {
            setOnFilter(false)
        }
    }, [])

    if (isError || error) return <View style={
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

    const filtereddata = filterData.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))

    const loadNext = () => {
        if (hasNextPage) {
            fetchNextPage();
        }
    };



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    paddingHorizontal: 10,
                    flexDirection: 'row'
                }}
            >
                <Icon name='search1' style={{ alignSelf: 'center' }} size={18} />
                <TextInput
                    style={{ width: '100%' }}
                    placeholder='search by name'
                    value={searchTerm}
                    onChangeText={text => setSearchTerm(text)}
                />
            </View>
            <FlatList
                keyExtractor={(item) => item.id}
                data={onfilter ? filtereddata : flattenData}
                renderItem={({ item }) =>
                    <CatsCard
                        cat={item}
                    />
                }

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