import { useState } from "react"

export const useHandleDetail = () => {
    const [expandedIndex, setExpandedIndex] = useState(-1)

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