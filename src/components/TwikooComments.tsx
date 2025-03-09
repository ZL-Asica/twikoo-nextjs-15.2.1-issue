'use client'

import { useEffect } from 'react'

interface TwikooCommentsProperties {
  environmentId: string
}

const TwikooComments = ({ environmentId }: TwikooCommentsProperties) => {
  useEffect(() => {
    // @ts-expect-error add Twikoo to window
    import('twikoo')
      .then((twikoo: { init: (config: { envId: string, el: string }) => void }) => {
        // eslint-disable-next-line no-console
        console.info(`Twikoo:`, twikoo)
        twikoo.init({
          envId: environmentId,
          el: '#twikoo-comments',
        })
      })
      .catch((error) => {
        console.error('Failed to load Twikoo:', error)
      })
  }, [environmentId])

  return (
    <div
      id="twikoo-comments"
      className="font-sans"
    />
  )
}

export default TwikooComments
