import { useEffect, useRef, useState } from "react"

const MovieCardHook = (options) =>{
    const containerRef = useRef(null)
    const [isvisible, setIsvisible] = useState(false)

    //callback function for the intersectionObserver paramater
    const callBackFunction = (entries) =>{
        const [entry] = entries
        setIsvisible(entry.isIntersecting)
    }

    useEffect(()=>{
        const observer = new IntersectionObserver(callBackFunction, options)
        if(containerRef.current) observer.observe(containerRef.current)
        
        return ()=>{
            if(containerRef.current) observer.unobserve(containerRef.current)
        }
    },[containerRef, options])

    return [containerRef, isvisible]
}

export default MovieCardHook