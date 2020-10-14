import { useEffect, useState } from 'react'

import { getmySingleBlog } from '../contentful'

export default function useBlogSingle(slug) {
  const promise = getmySingleBlog(slug)

  const [post, setPost] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    promise.then(result => {
      setPost(result[1].fields)
      setLoading(false)
    })
    .catch(console.error)
  }, [])

  return [post, isLoading]
}
