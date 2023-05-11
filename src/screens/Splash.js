import { View, Text } from 'react-native'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { WIDTH } from '../helper/Dimension'

const Splash = () => {
    const navigation = useNavigation()

    const init = async () => {
        await new Promise(resolve =>
            setTimeout(() => {
                resolve(true)
            }, 2000),
        )

        navigation.navigate('Home')
    }

    useEffect(() => {
        init()
    })

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: '#FEFEFE'
            }}
        >
            <Text
                style={{
                    alignSelf: 'center',
                    textAlign: 'center',
                    fontSize: 40,
                    marginHorizontal: WIDTH * 0.03
                }}
            >
                get ready to see how cute cats are!
            </Text>
        </View>
    )
}

export default Splash