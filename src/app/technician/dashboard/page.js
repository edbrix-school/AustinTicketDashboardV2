'use client'

import FilterComponent from '@/app/components/filtercomponent'
import PageLayout from '@/app/components/pagelayout/pagelayout'
import React, { useState } from "react";
;


export default function Index() {


  return (
    <PageLayout topTab={true} pageTitle="Dashboard">
      <FilterComponent />
      <div className='grid grid-cols-12 xl:grid-cols-5 gap-[20px] 3xl:gap-[1.042vw] mt-[24px] 3xl:mt-[1.25vw]'>
                <div className='col-span-12 sm:col-span-6  lg:col-span-4 xl:col-span-1 '>
                    <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC] pl-[16px] 3xl:pl-[0.833vw]'>
                        <div className='text-[#20232E] xl:text-[12px]  3xl:text-[0.866vw] py-[12px]  3xl:py-[0.625vw] ' >Total Tickets Assigned</div>
                       
                        <div className='flex justify-between items-center'>
                            <div className='my-[12px] 3xl:my-[0.625vw]'>
                                <div className='text-[#3A3E49] xl:text-[28px] text-[22px] 3xl:text-[1.875vw] font-medium '>1000</div>
                               
                            </div>
                            <div className='m-[16px] 3xl:m-[0.866vw]'>
                                <div className='flex items-center '>
                                    <div className='text-[#20232E] text-[16px] font-medium 3xl:text-[0.866vw] mr-[6px] 3xl:mr-[0.313vw]'>2%</div>
                                    <div><i className='asetsmng-arrow-up-circle-fill text-[16px]  text-[#057A55]'></i></div>
                                </div>

                                <div className='text-[#84878D] text-[12px] 3xl:text-[0.625vw] '>by last period</div>
                                <div className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-1 '>
                    <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC] pl-[16px] 3xl:pl-[0.833vw]'>
                        <div className='text-[#20232E] xl:text-[12px] text-sm 3xl:text-[0.866vw] py-[12px]  3xl:py-[0.625vw] ' >Tickets in Awaiting User Input</div>
                       
                        <div className='flex justify-between items-center'>
                            <div className='my-[12px] 3xl:my-[0.625vw]'>
                                <div className='text-[#3A3E49] flex items-end xl:text-[28px] text-[22px] 3xl:text-[1.875vw] font-medium '>80 <span className='text-[16px] 3xl:text-[1.042vw] font-normal leading-1'>(8%)</span></div>
                             
                            </div>
                            <div className='m-[16px] 3xl:m-[0.866vw]'>
                                <div className='flex items-center '>
                                    <div className='text-[#20232E] text-[16px] font-medium 3xl:text-[0.866vw] mr-[6px] 3xl:mr-[0.313vw]'>2%</div>
                                    <div><i className='asetsmng-arrow-up-circle-fill text-[16px]  text-[#057A55]'></i></div>
                                </div>

                                <div className='text-[#84878D] text-[12px] 3xl:text-[0.625vw] '>by last period</div>
                                <div className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-1 '>
                    <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC] pl-[16px] 3xl:pl-[0.833vw]'>
                        <div className='text-[#20232E] xl:text-[12px]  3xl:text-[0.866vw] py-[12px]  3xl:py-[0.625vw] ' >Ticket In-Progress</div>
                        
                        <div className='flex justify-between items-center'>
                            <div className='my-[12px] 3xl:my-[0.625vw]'>
                                <div className='text-[#3A3E49] xl:text-[28px] flex items-end text-[22px] 3xl:text-[1.875vw] font-medium '>560 <span className='text-[16px]  3xl:text-[1.042vw] font-normal'>(56%)</span></div>
                              
                            </div>
                            <div className='m-[16px] 3xl:m-[0.866vw]'>
                                <div className='flex items-center '>
                                    <div className='text-[#20232E] text-[16px] font-medium 3xl:text-[0.866vw] mr-[6px] 3xl:mr-[0.313vw]'>2%</div>
                                    <div><i className='asetsmng-arrow-up-circle-fill text-[16px]  text-[#057A55]'></i></div>
                                </div>

                                <div className='text-[#84878D] text-[12px] 3xl:text-[0.625vw] '>by last period</div>
                                <div className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-1 '>
                    <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC] pl-[16px] 3xl:pl-[0.833vw]'>
                        <div className='text-[#20232E] xl:text-[12px]  3xl:text-[0.866vw] py-[12px]  3xl:py-[0.625vw] ' >Tickets Resolved</div>
                        
                        <div className='flex justify-between items-center'>
                            <div className='my-[12px] 3xl:my-[0.625vw]'>
                                <div className='text-[#3A3E49] xl:text-[28px] text-[22px] flex items-end 3xl:text-[1.875vw] font-medium '>120 <span className='text-[16px]  3xl:text-[1.042vw] font-normal'>(12%)</span></div>
                      
                            </div>
                            <div className='m-[16px] 3xl:m-[0.866vw]'>
                                <div className='flex items-center '>
                                    <div className='text-[#20232E] text-[16px] font-medium 3xl:text-[0.866vw] mr-[6px] 3xl:mr-[0.313vw]'>2%</div>
                                    <div><i className='asetsmng-arrow-up-circle-fill text-[16px]  text-[#057A55]'></i></div>
                                </div>

                                <div className='text-[#84878D] text-[12px] 3xl:text-[0.625vw] '>by last period</div>
                                <div className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-1 '>
                    <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC] pl-[16px] 3xl:pl-[0.833vw]'>
                        <div className='text-[#20232E] xl:text-[12px]  3xl:text-[0.866vw] py-[12px]  3xl:py-[0.625vw] ' >Average Feedback Ratings</div>
                       
                        <div className='flex justify-between items-center'>
                            <div className='my-[12px] 3xl:my-[0.625vw]'>
                                <div className='text-[#3A3E49] xl:text-[28px] text-[22px] 3xl:text-[1.875vw] font-medium '>3.5</div>
                             
                            </div>
                            <div className='m-[16px] 3xl:m-[0.866vw]'>
                                <div className='flex items-center '>
                                    <div className='text-[#20232E] text-[16px] font-medium 3xl:text-[0.866vw] mr-[6px] 3xl:mr-[0.313vw]'>2%</div>
                                    <div><i className='asetsmng-arrow-up-circle-fill text-[16px]  text-[#057A55]'></i></div>
                                </div>

                                <div className='text-[#84878D] text-[12px] 3xl:text-[0.625vw] '>by last period</div>
                                <div className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


    </PageLayout>
  )
}
