import FilterComponent from '@/app/components/filtercomponent'
import PageLayout from '@/app/components/pagelayout/pagelayout'
import React from 'react'

export default function Index() {
  return (
    <PageLayout topTab={true} pageTitle="Dashboard">
      <FilterComponent />
     <div className="bg-[#333333] p-[15px] text-white text-[10px] sm:text-[18px] lg:text-[24px] 3xl:text-[2.604vw]">Page content [body]</div>
    </PageLayout>
  )
}
