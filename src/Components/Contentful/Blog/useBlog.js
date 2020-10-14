import { useEffect, useState } from 'react'

import { getMyBlog } from '../contentful';

const promise = getMyBlog()

export default function useBlog() {
  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    promise.then(blogPosts => {
      setPosts(blogPosts)
      setLoading(false)
    })
  }, [])

  return [posts, isLoading]
}
