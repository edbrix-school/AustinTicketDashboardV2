
'use client'

import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";



export default function Index() {

    const [visibleRight, setVisibleRight] = useState(false);
    return (
        <>
            <div className='mt-[200px] ' onClick={() => setVisibleRight(true)} >Popup</div>
            <div className='assetspoups'>

                <div className='assetspoups'>
                    <Sidebar visible={visibleRight} position="right" blockScroll={true} onHide={() => setVisibleRight(false)} className='assetspoups w-[922px] xl:w-[48.021vw] custmSidebar  rounded-lg'>
                        <div className=" ">
                            <div className="header pl-[15px] pt-[8px]  ">
                                <div className='text-[24px] font-semibold text-[#20232E] xl:text-[1.25vw] min-h-[20px] xl:min-h-[1.823vw]  '>Assets</div>
                                <div className='text-[16px] text-[#20232E] xl:text-[0.833vw] min-h-[20px] xl:min-h-[1.823vw'>Generate a report based on your selected fields.</div>
                            </div  >

                            <div className='space-y-3 p-4 pt-[24px]'>

                                <div className='grid gap-5 grid-cols-2  cursor-pointer'>
                                    <div className='border border-[#E4E7EC] rounded-lg p-3 hover:bg-[#E4E7EC] parent-div hover:border-[#d1d5db]'>
                                        <div className='text-[18px] text-[#3A3E49] xl:text-[0.938vw] min-h-[20px] xl:min-h-[1.042vw]  child-div'>Assets by Type/Status</div>
                                        <div className='text-[14px] text-[#84878D] xl:text-[0.729vw] min-h-[25px] xl:min-h-[1.302vw]'>  Generate a report for the assets to see their type/ status.</div>
                                    </div>
                                    <div className='border border-[#E4E7EC] rounded-lg p-3 hover:bg-[#E4E7EC] parent-div  hover:border-[#d1d5db]'>
                                        <div className='text-[18px] text-[#3A3E49] xl:text-[0.938vw] min-h-[20px] xl:min-h-[1.042vw] child-div '>Checked Out Assets</div>
                                        <div className='text-[14px] text-[#84878D] xl:text-[0.729vw] min-h-[25px] xl:min-h-[1.302vw]'>  Generate a report for the assets which are assigned to students/Employees</div>

                                    </div>
                                </div>

                                <div className='grid gap-5 grid-cols-2  cursor-pointer'>
                                    <div className='border border-[#E4E7EC] rounded-lg p-3 hover:bg-[#E4E7EC]  parent-div  hover:border-[#d1d5db]'>
                                        <div className='text-[18px] text-[#3A3E49] xl:text-[0.938vw] min-h-[20px]  xl:min-h-[1.042vw] child-div'>Assets by Checked Out to Location</div>
                                        <div className='text-[14px] text-[#84878D] xl:text-[0.729vw] min-h-[25px] xl:min-h-[1.302vw]'>  Generate report for the assets which are assigned to various Locations.</div>
                                    </div>
                                    <div className='border border-[#E4E7EC] rounded-lg p-3 hover:bg-[#E4E7EC] parent-div  hover:border-[#d1d5db]'>
                                        <div className='text-[18px] text-[#3A3E49] xl:text-[0.938vw] min-h-[20px] xl:min-h-[1.042vw] child-div'>Assets by Status</div>
                                        <div className='text-[14px] text-[#84878D] xl:text-[0.729vw] min-h-[25px] xl:min-h-[1.302vw]'>  Generate reports to see assets sorted by their status.</div>

                                    </div>
                                </div>

                                <div className='grid gap-5 grid-cols-2 cursor-pointer'>
                                    <div className='border border-[#E4E7EC] rounded-lg p-3 hover:bg-[#E4E7EC] parent-div  hover:border-[#d1d5db]'>
                                        <div className='text-[18px] text-[#3A3E49] xl:text-[0.938vw] min-h-[20px]  xl:min-h-[1.823vw] child-div'>Assets Logs</div>
                                        <div className='text-[14px] text-[#84878D] xl:text-[0.729vw] min-h-[25px] xl:min-h-[1.563vw]'> Generate a report to see assets history.</div>
                                    </div>
                                    <div className='border border-[#E4E7EC] rounded-lg p-3 hover:bg-[#E4E7EC] parent-div  hover:border-[#d1d5db]'>
                                        <div className='text-[18px] text-[#3A3E49] xl:text-[0.938vw] min-h-[20px] xl:min-h-[1.823vw] child-div'>Track Asset Fine</div>
                                        <div className='text-[14px] text-[#84878D] xl:text-[0.729vw] min-h-[25px] xl:min-h-[1.563vw]'>  Generate reports to see assets fine history.</div>

                                    </div>
                                </div>

                                <div className='grid gap-5 grid-cols-2 cursor-pointer'>
                                    <div className='border border-[#E4E7EC] rounded-lg p-3 hover:bg-[#E4E7EC] parent-div  hover:border-[#d1d5db]' >
                                        <div className='text-[18px] text-[#3A3E49] xl:text-[0.938vw] min-h-[20px] xl:min-h-[1.823vw] child-div '>Assets Not Checkedout</div>
                                        <div className='text-[14px] text-[#84878D] xl:text-[0.729vw] min-h-[25px] xl:min-h-[1.563vw]'> Generate reports to see assets not checked out yet.</div>
                                    </div>
                                    <div className='border border-[#E4E7EC] rounded-lg p-3 hover:bg-[#E4E7EC] parent-div  hover:border-[#d1d5db]'>
                                        <div className='text-[18px] text-[#3A3E49] xl:text-[0.938vw] min-h-[20px]  xl:min-h-[1.823vw] child-div '>Asset Geolocation</div>
                                        <div className='text-[14px] text-[#84878D] xl:text-[0.729vw] min-h-[25px] xl:min-h-[1.563vw]'> Generate report to see assets by their Geolocation`</div>

                                    </div>
                                </div>
                                <div className='grid gap-5 grid-cols-2 cursor-pointer'>
                                    <div className='border border-[#E4E7EC] rounded-lg p-3 hover:bg-[#E4E7EC] parent-div  hover:border-[#d1d5db]'>
                                        <div className='text-[18px] text-[#3A3E49] xl:text-[0.938vw] min-h-[20px] xl:min-h-[1.823vw] child-div'>Assets Refresh Report</div>
                                        <div className='text-[14px] text-[#84878D] xl:text-[0.729vw] min-h-[25px] xl:min-h-[1.563vw]'>Generate reports to see assets refresh Report</div>
                                    </div>

                                </div>


                            </div>

                        </div>

                    </Sidebar>
                </div>
            </div>

        </>
    )
}
