import { apiPlugin, storyblokInit, getStoryblokApi } from '@storyblok/react/rsc'

// Initialize Storyblok once at module load so getStoryblokApi is available
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'eu',
  },
})

export const fetchData = async () => {
  const storyblokApi = getStoryblokApi()
  return await storyblokApi.get(`cdn/stories/home`, {
    version: 'draft',
  })
}

export { getStoryblokApi }
