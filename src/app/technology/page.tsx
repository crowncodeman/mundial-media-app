import type { Metadata } from 'next'
import TechnologyHeader from '@/components/TechnologyHeader'

export const metadata: Metadata = {
  title: 'Technology | Mundial Media',
  description:
    'Discover our cutting-edge technology solutions that power digital experiences and drive innovation in sports and entertainment media.',
}

const TechnologyPage = () => {
  return (
    <main className="flex-1">
      <TechnologyHeader />

      {/* Additional technology page content will go here */}
    </main>
  )
}

export default TechnologyPage
