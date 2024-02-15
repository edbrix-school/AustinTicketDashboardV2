import React from 'react'
import { InputText } from "primereact/inputtext";
import Link from 'next/link'
function Finacialanalysis() {
    return (
        <>
            <div className='grid grid-cols-5 gap-[20px] xl:gap-[1.042vw] '>
                <div className='col-span-1 '>
                    <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC] pl-[16px] xl:pl-[0.833vw]'>
                        <div className='text-[#20232E] text-[16px] xl:text-[0.866vw] py-[12px]  xl:py-[0.625vw] ' >Total Value of All Assets</div>
                        <div className='border border-[#E4E7EC] px-[12px] py-[6px] xl:px-[0.625vw] xl:py-[0.313vw] text-[#20232E] text-[12px] xl:text-[0.625vw] font-medium bg-[#E4E7EC] rounded-[6px] inline-block'>
                            Assets Value
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='my-[12px] xl:my-[0.625vw]'>
                                <div className='text-[#3A3E49] text-[36px] xl:text-[1.875vw] font-medium '>$3M</div>
                                <div className='text-[#84878D] text-[12px] xl:text-[0.625vw]  '>Total Value</div>
                            </div>
                            <div className='m-[16px] xl:m-[0.866vw]'>
                                <div className='flex items-center '>
                                    <div className='text-[#20232E] text-[16px] font-medium xl:text-[0.866vw] mr-[6px] xl:mr-[0.313vw]'>2%</div>
                                    <div><i className='asetsmng-arrow-up-circle-fill text-[16px]  text-[#057A55]'></i></div>
                                </div>

                                <div className='text-[#84878D] text-[12px] xl:text-[0.625vw] '>by last period</div>
                                <div className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 '>
                    <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC] pl-[16px] xl:pl-[0.833vw]'>
                        <div className='text-[#20232E] text-[16px] xl:text-[0.866vw] py-[12px]  xl:py-[0.625vw] ' >Assets Expiring in 7 Days</div>
                        <div className='border border-[#E4E7EC] px-[12px] py-[6px] xl:px-[0.625vw] xl:py-[0.313vw] text-[#20232E] text-[12px] xl:text-[0.625vw] font-medium bg-[#E4E7EC] rounded-[6px] inline-block'>
                            Short-Term
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='my-[12px] xl:my-[0.625vw]'>
                                <div className='text-[#3A3E49] text-[36px] xl:text-[1.875vw] font-medium '>102</div>
                                <div className='text-[#84878D] text-[12px] xl:text-[0.625vw]  '>Total Expiring</div>
                            </div>
                            <div className='m-[16px] xl:m-[0.866vw]'>
                                <div className='flex items-center '>
                                    <div className='text-[#20232E] text-[16px] font-medium xl:text-[0.866vw] mr-[6px] xl:mr-[0.313vw]'>2%</div>
                                    <div><i className='asetsmng-arrow-up-circle-fill text-[16px]  text-[#057A55]'></i></div>
                                </div>

                                <div className='text-[#84878D] text-[12px] xl:text-[0.625vw] '>by last period</div>
                                <div className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 '>
                    <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC] pl-[16px] xl:pl-[0.833vw]'>
                        <div className='text-[#20232E] text-[16px] xl:text-[0.866vw] py-[12px]  xl:py-[0.625vw] ' >Total Cost of Replacement</div>
                        <div className='border border-[#E4E7EC] px-[12px] py-[6px] xl:px-[0.625vw] xl:py-[0.313vw] text-[#20232E] text-[12px] xl:text-[0.625vw] font-medium bg-[#E4E7EC] rounded-[6px] inline-block'>
                            Short-Term Expiring Assets
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='my-[12px] xl:my-[0.625vw]'>
                                <div className='text-[#3A3E49] text-[36px] xl:text-[1.875vw] font-medium '>$340M</div>
                                <div className='text-[#84878D] text-[12px] xl:text-[0.625vw]  '>Total Cost</div>
                            </div>
                            <div className='m-[16px] xl:m-[0.866vw]'>
                                <div className='flex items-center '>
                                    <div className='text-[#20232E] text-[16px] font-medium xl:text-[0.866vw] mr-[6px] xl:mr-[0.313vw]'>2%</div>
                                    <div><i className='asetsmng-arrow-up-circle-fill text-[16px]  text-[#057A55]'></i></div>
                                </div>

                                <div className='text-[#84878D] text-[12px] xl:text-[0.625vw] '>by last period</div>
                                <div className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 '>
                    <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC] pl-[16px] xl:pl-[0.833vw]'>
                        <div className='text-[#20232E] text-[16px] xl:text-[0.866vw] py-[12px]  xl:py-[0.625vw] ' >Assets Expiring in Current Quarter</div>
                        <div className='border border-[#E4E7EC] px-[12px] py-[6px] xl:px-[0.625vw] xl:py-[0.313vw] text-[#20232E] text-[12px] xl:text-[0.625vw] font-medium bg-[#E4E7EC] rounded-[6px] inline-block'>
                            Long-Term
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='my-[12px] xl:my-[0.625vw]'>
                                <div className='text-[#3A3E49] text-[36px] xl:text-[1.875vw] font-medium '>230</div>
                                <div className='text-[#84878D] text-[12px] xl:text-[0.625vw]  '>Total Expiring</div>
                            </div>
                            <div className='m-[16px] xl:m-[0.866vw]'>
                                <div className='flex items-center '>
                                    <div className='text-[#20232E] text-[16px] font-medium xl:text-[0.866vw] mr-[6px] xl:mr-[0.313vw]'>2%</div>
                                    <div><i className='asetsmng-arrow-up-circle-fill text-[16px]  text-[#057A55]'></i></div>
                                </div>

                                <div className='text-[#84878D] text-[12px] xl:text-[0.625vw] '>by last period</div>
                                <div className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 '>
                    <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC] pl-[16px] xl:pl-[0.833vw]'>
                        <div className='text-[#20232E] text-[16px] xl:text-[0.866vw] py-[12px]  xl:py-[0.625vw] ' >Total Cost of Replacement</div>
                        <div className='border border-[#E4E7EC] px-[12px] py-[6px] xl:px-[0.625vw] xl:py-[0.313vw] text-[#20232E] text-[12px] xl:text-[0.625vw] font-medium bg-[#E4E7EC] rounded-[6px] inline-block'>
                            Long-Term Expiring Assets
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='my-[12px] xl:my-[0.625vw]'>
                                <div className='text-[#3A3E49] text-[36px] xl:text-[1.875vw] font-medium '>$560M</div>
                                <div className='text-[#84878D] text-[12px] xl:text-[0.625vw]  '>Total Cost</div>
                            </div>
                            <div className='m-[16px] xl:m-[0.866vw]'>
                                <div className='flex items-center '>
                                    <div className='text-[#20232E] text-[16px] font-medium xl:text-[0.866vw] mr-[6px] xl:mr-[0.313vw]'>2%</div>
                                    <div><i className='asetsmng-arrow-up-circle-fill text-[16px]  text-[#057A55]'></i></div>
                                </div>

                                <div className='text-[#84878D] text-[12px] xl:text-[0.625vw] '>by last period</div>
                                <div className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className='border borde-[#E4E7EC] shadow-sm shadow-[#00000014] rounded-lg'>

                <div className='py-[22px] xl:py-[1.146vw]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <div className='text-[#3A3E49] text-[16px] xl:text-[0.866vw] font-medium'>Manage Assets</div>
                            <div className='bg-[#F9F9FC] rounded-[16px] xl:rounded-[0.866vw] py-[4px] px-[12px] xl:px-[0.625vw] xl:py-[0.208vw]'>
                                <div className='text-[#84878D] text-[12px] xl:text-[0.625vw] '>Display 1 to 10 of 150</div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <diV>
                                <span className="p-input-icon-right">
                                    <i className="pi pi-search" />
                                    <InputText placeholder="Search" />
                                </span>
                            </diV>

                            <Link href="#" className='border border-[#4169E1] text-[#4169E1] text-[12px] xl:text-[0.625vw] py-[10px] px-[16px] xl:py-[0.521vw] rounded-[8px] xl:px[0.866vw] mx-[8px] xl:mx-[0.417vw]'>
                                <i className='asetsmng-plus-rounded-box text-[14px] xl:text-[0.729vw] mr-[8px] xl:mr-[0.417vw]'></i>
                                Add Assets
                            </Link>

                            <Link href="#" className='text-[#84878D] border border-[#84878D] text-[12px] xl:text-[0.625vw] py-[10px] px-[16px] xl:py-[0.521vw] rounded-[8px] xl:px[0.866vw] mr-[8px] xl:mr-[0.417vw]'>
                                <i className='asetsmng-open-folder mr-[8px] xl:mr-[0.417vw] text-14px xl:text-[0.729vw] text-[#84878D]'></i>
                                Supporting Documnets</Link>
                            <Link href="#" className='text-[#84878D] border border-[#84878D] text-[12px] xl:text-[0.625vw] py-[10px] px-[16px] xl:py-[0.521vw] rounded-[8px] xl:px[0.866vw] mr-[8px] xl:mr-[0.417vw]'>
                                <i className='asetsmng-import mr-[8px] xl:mr-[0.417vw] text-14px xl:text-[0.729vw] text-[#84878D]'></i>
                                Import</Link>
                            <Link href="#" className='text-[#84878D] border border-[#84878D] text-[12px] xl:text-[0.625vw] py-[10px] px-[16px] xl:py-[0.521vw] rounded-[8px] xl:px[0.866vw] mr-[8px] xl:mr-[0.417vw]'>
                                <i className='asetsmng-export mr-[8px] xl:mr-[0.417vw] text-14px xl:text-[0.729vw] text-[#84878D]'></i>
                                Export</Link>
                            <Link href="#" className='text-[#84878D] border border-[#84878D] text-[12px] xl:text-[0.625vw] py-[10px] px-[9px] xl:py-[0.521vw] rounded-[8px] xl:px[0.469vw] mr-[8px] xl:mr-[0.417vw]'>
                                <i className='asetsmng-map-view  text-14px xl:text-[0.729vw] text-[#84878D]'></i>
                            </Link>
                            <Link href="#" className='text-[#ffffff] bg-[#4169E1] border border-[#4169E1] text-[12px] xl:text-[0.625vw] py-[10px] px-[9px] xl:py-[0.521vw] rounded-[8px] xl:px[0.469vw] mr-[8px] xl:mr-[0.417vw]'>
                                <i className='asetsmng-map-view  text-14px xl:text-[0.729vw] text-[#ffffff]'></i>
                            </Link>
                            <Link href="#" className='text-[#84878D] border border-[#EAE0E0] text-[12px] xl:text-[0.625vw] py-[10px] px-[9px] xl:py-[0.521vw] rounded-[8px] xl:px[0.469vw] mr-[8px] xl:mr-[0.417vw]'>
                                <i className='asetsmng-arrow-left-think  text-14px xl:text-[0.729vw] text-[#84878D]'></i>
                            </Link>
                            <Link href="#" className='text-[#84878D] border border-[#EAE0E0] text-[12px] xl:text-[0.625vw] py-[10px] px-[9px] xl:py-[0.521vw] rounded-[8px] xl:px[0.469vw] mr-[8px] xl:mr-[0.417vw]'>
                                <i className='asetsmng-arrow-right-think  text-14px xl:text-[0.729vw] text-[#84878D]'></i>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Finacialanalysis
