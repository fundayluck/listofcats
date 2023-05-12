import axios from "axios"
import { useEffect, useState } from "react"

export const useFetchCats = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [messageError, setMessageError] = useState(null)

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            try {
                const response = await axios.get('https://api.thecatapi.com/v1/breeds?limit=10')
                setData(response.data)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setMessageError(error.message);
            }
        }
        getData()
    }, [])

    return { data, loading, messageError }
}

export const useHandleDetail = () => {
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
    return { expandedIndex, handleClick }
}