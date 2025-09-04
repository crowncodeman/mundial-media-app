import React, { ReactNode } from 'react'
import { getStoryblokApi } from './index'

interface StoryblokProviderProps {
  children: ReactNode
}

const StoryblokProvider = ({ children }: StoryblokProviderProps) => {
  getStoryblokApi()
  return <>{children}</>
}

export default StoryblokProvider
