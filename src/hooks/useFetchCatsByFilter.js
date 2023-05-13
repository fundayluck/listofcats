import axios from "axios";
import { useEffect, useState } from "react";


export default function useFetchCatsByFilter() {
    const [filterData, setFilterData] = useState([])
    const [error, setError] = useState(false)
    useEffect(() => {
        const getCats = async () => {
            try {
                const res = await axios.get(
                    `https://api.thecatapi.com/v1/breeds`
                )
                const data = res.data
                setFilterData(data)
            } catch (error) {
                setError(true)
            }
        };
        getCats()
    }, [])

    return { filterData, error }
} 