import { useEffect, useState } from 'react'

import { getPoliticBlog} from '../contentful';

const promise = getPoliticBlog()

export default function usePosts() {
  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(()=>{
      promise.then(blogPosts=>{
          setPosts(blogPosts)
          setLoading(false)
      })
  })

  return [posts, isLoading]
}
