import { useMemo } from "react"

export const usePagination = (totalPages) => {
    const createPagesArray = useMemo(() => {
        const pagesArray = []
        for (let i = 0; i < totalPages; i++) {
            pagesArray.push(i + 1)
        }
        console.log('usePagination');

        return pagesArray;
    }, [totalPages])

    return createPagesArray
}