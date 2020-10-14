import {getEntertainBlog} from '../contentful';
import {useEffect,useState} from "react";

const proise = getEntertainBlog();

export default function useEntPost(){

    const [posts,setPosts]= useState([]);
    const [isLoading,setLoading] = useState(true)

    useEffect(()=>{
        proise.then(blogPosts=>{
            setPosts(blogPosts)
            setLoading(false)
        })
    },[])

    return [posts,isLoading]
}