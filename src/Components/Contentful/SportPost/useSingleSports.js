import { useEffect, useState } from 'react'

import { getSingleSport } from '../contentful'

export default function useSingleSports(slug) {
  const promise = getSingleSport(slug)

  const [post, setPost] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    promise.then(result => {
      setPost(result[0].fields)
      setLoading(false)
    })
    .catch(console.error)
  }, [])

  return [post, isLoading]
}
