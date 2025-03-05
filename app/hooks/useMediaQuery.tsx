'use client'
import { useEffect, useState } from "react"

const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState<boolean>(false);
    useEffect(() => {
        const handleChange = () => {
            const _matches = window.matchMedia(query).matches;
            if (_matches !== matches) {
                setMatches(_matches);
            }
        }
        window.addEventListener('change', handleChange);
        return () => window.removeEventListener('change', handleChange);
    }, [query])
    return matches;
}

export default useMediaQuery;
