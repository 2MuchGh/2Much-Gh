import { useEffect, useState } from 'react'

import { getSportsBlog } from '../contentful';

const promise = getSportsBlog();

export default function useSport(){
    const [posts, setPosts]= useState([])
    const [isLoading, setLoading]   = useState(true)

    useEffect(()=>{
        promise.then(blogPosts=>{
            setPosts(blogPosts)
            setLoading(false)
        })
    },[])

    return [posts,isLoading]
}