'use client'
import React, { useState } from 'react'
import LeadLayout from '@/app/components/leadpagelayout/pagelayout';
import Image from 'next/image';
import AssetPopup from '@/app/components/popup/assetspopup';


function Index() {
    const [assetsPopupShow, setAssetsPopupShow] = useState(false)

    return (
        <>
            <LeadLayout topTab={true} pageTitle="Reports" parentPageName={["Reports"]} >
                <div className=''>
                    {/* <div className='text-[#131D32] text-[24px] font-medium xl:text-[1.25vw] pb-[42px] xl:pb-[2.188vw]  '>Standard Reports</div> */}
                    <div className='grid grid-cols-12 gap-[45px] xl:gap-[2.344vw] mt-[32px] xl:mt-[1.667vw]'>
                        <div onClick={() => setAssetsPopupShow(true)} className='col-span-12 md:col-span-6 xl:col-span-3 cursor-pointer'>
                            <div className='shadow-xl shadow-[#1018281A] bg-white  rounded-[4px]'>
                                <div className='flex items-center '>
                                    <div className='px-[25px] xl:px-[1.302vw]'>
                                        <div className='text-[#667085] text-[12px] xl:text-[0.625vw] uppercase'> Standard Reports</div>
                                        <div className='text-[#101828]  text-[24px] xl:text-[1.25vw] border border-[#C8CBD0] px-[12px] py-[8px] xl:px-[0.625vw] xl:py-[0.417vw] rounded-[4px] mt-[7px] xl:mt-[0.365vw]'> ASSETS</div>
                                    </div>
                                    <div className=''>
                                        <Image className='mt-5 mb-2 h-[110px] ' height={80} width={160} src={"/assets/images/assetsimg.png"} alt={"imgaes1"}></Image>
                                    </div>
                                </div>
                                <Image className='rounded-b-[4px] w-full   ' height={230} width={390} src={"/assets/images/reportImg.svg"} alt={"imgaes"}></Image>

                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6 xl:col-span-3 cursor-pointer'>
                            <div className='shadow-xl shadow-[#1018281A] bg-white  rounded-[4px]'>
                                <div className='flex items-center '>
                                    <div className='px-[25px] xl:px-[1.302vw]'>
                                        <div className='text-[#667085] text-[12px] xl:text-[0.625vw] uppercase'> Standard Reports</div>
                                        <div className='text-[#101828]  text-[24px] xl:text-[1.25vw] border border-[#C8CBD0] px-[12px] py-[8px] xl:px-[0.625vw] xl:py-[0.417vw] rounded-[4px] mt-[7px] xl:mt-[0.365vw] uppercase'> Software</div>
                                    </div>
                                    <div className=''>
                                        <Image className='mt-5 mb-2 h-[110px]' height={80} width={160} src={"/assets/images/softwareimg.svg"} alt={"softwareimg"}></Image>
                                    </div>
                                </div>
                                <Image className='rounded-b-[4px] w-full  ' height={230} width={390} src={"/assets/images/reportImg.svg"} alt={"imgaes"}></Image>

                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6 xl:col-span-3 cursor-pointer'>
                            <div className='shadow-xl shadow-[#1018281A] bg-white  rounded-[4px]'>
                                <div className='flex items-center '>
                                    <div className='px-[25px] xl:px-[1.302vw]'>
                                        <div className='text-[#667085] text-[12px] xl:text-[0.625vw] uppercase'> Standard Reports</div>
                                        <div className='text-[#101828]  text-[24px] xl:text-[1.25vw] border border-[#C8CBD0] px-[12px] py-[8px] xl:px-[0.625vw] xl:py-[0.417vw] rounded-[4px] mt-[7px] xl:mt-[0.365vw] uppercase'> Vendor</div>
                                    </div>
                                    <div className=''>
                                        <Image className='mt-5 mb-2 h-[110px]' height={80} width={160} src={"/assets/images/vendorimg.svg"} alt={"imgaes1"}></Image>
                                    </div>
                                </div>
                                <Image className='rounded-b-[4px] w-full  ' height={230} width={390} src={"/assets/images/reportImg.svg"} alt={"imgaes"}></Image>

                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6 xl:col-span-3 cursor-pointer'>
                            <div className='shadow-xl shadow-[#1018281A] bg-white  rounded-[4px]'>
                                <div className='flex items-center '>
                                    <div className='px-[25px] xl:px-[1.302vw]'>
                                        <div className='text-[#667085] text-[12px] xl:text-[0.625vw] uppercase'> Standard Reports</div>
                                        <div className='text-[#101828]  text-[24px] xl:text-[1.25vw] border border-[#C8CBD0] px-[12px] py-[8px] xl:px-[0.625vw] xl:py-[0.417vw] rounded-[4px] mt-[7px] xl:mt-[0.365vw] uppercase'> Users</div>
                                    </div>
                                    <div className=''>
                                        <Image className='mt-5 mb-2 h-[110px]' height={160} width={160} src={"/assets/images/Users.svg"} alt={"imgaes1"}></Image>
                                    </div>
                                </div>
                                <Image className='rounded-b-[4px] w-full  ' height={230} width={390} src={"/assets/images/reportImg.svg"} alt={"imgaes"}></Image>

                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6 xl:col-span-3 cursor-pointer'>
                            <div className='shadow-xl shadow-[#1018281A] bg-white  rounded-[4px] mt-[10px] xl:mt-[0.521vw]'>
                                <div className='flex items-center '>
                                    <div className='px-[25px] xl:px-[1.302vw]'>
                                        <div className='text-[#667085] text-[12px] xl:text-[0.625vw] uppercase'> Standard Reports</div>
                                        <div className='text-[#101828]  text-[24px] xl:text-[1.25vw] border border-[#C8CBD0] px-[12px] py-[8px] xl:px-[0.625vw] xl:py-[0.417vw] rounded-[4px] mt-[7px] xl:mt-[0.365vw] uppercase'>Locations</div>
                                    </div>
                                    <div className=''>
                                        <Image className='mt-5 mb-2 h-[110px]' height={50} width={160} src={"/assets/images/Mapimg.svg"} alt={"imgaes1"}></Image>
                                    </div>
                                </div>
                                <Image className='rounded-b-[4px] w-full  ' height={230} width={390} src={"/assets/images/reportImg.svg"} alt={"imgaes"}></Image>

                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6 xl:col-span-3 cursor-pointer'>
                            <div className='shadow-xl shadow-[#1018281A] bg-white  rounded-[4px] mt-[10px] xl:mt-[0.521vw]'>
                                <div className='flex items-center '>
                                    <div className='px-[25px] xl:px-[1.302vw]'>
                                        <div className='text-[#667085] text-[12px] xl:text-[0.625vw] uppercase'> Standard Reports</div>
                                        <div className='text-[#101828]  text-[24px] xl:text-[1.25vw] border border-[#C8CBD0] px-[12px] py-[8px] xl:px-[0.625vw] xl:py-[0.417vw] rounded-[4px] mt-[7px] xl:mt-[0.365vw] uppercase'> Tickets</div>
                                    </div>
                                    <div className=''>
                                        <Image className='mt-5 mb-2 h-[110px]' height={80} width={160} src={"/assets/images/ticketimg.svg"} alt={"imgaes1"}></Image>
                                    </div>
                                </div>
                                <Image className='rounded-b-[4px] w-full  ' height={230} width={390} src={"/assets/images/reportImg.svg"} alt={"imgaes"}></Image>

                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6 xl:col-span-3 cursor-pointer'>
                            <div className='shadow-xl shadow-[#1018281A] bg-white  rounded-[4px] mt-[10px] xl:mt-[0.521vw]'>
                                <div className='flex items-center '>
                                    <div className='px-[25px] xl:px-[1.302vw]'>
                                        <div className='text-[#667085] text-[12px] xl:text-[0.625vw] uppercase'> Standard Reports</div>
                                        <div className='text-[#101828]  text-[24px] xl:text-[1.25vw] border border-[#C8CBD0] px-[12px] py-[8px] xl:px-[0.625vw] xl:py-[0.417vw] rounded-[4px] mt-[7px] xl:mt-[0.365vw] uppercase'>Invoices</div>
                                    </div>
                                    <div className=''>
                                        <Image className='mt-5 mb-2 h-[110px]' height={80} width={160} src={"/assets/images/innvoiceimg.svg"} alt={"imgaes1"}></Image>
                                    </div>
                                </div>
                                <Image className='rounded-b-[4px] w-full  ' height={230} width={390} src={"/assets/images/reportImg.svg"} alt={"imgaes"}></Image>

                            </div>
                        </div>
                        <div className='col-span-12 md:col-span-6 xl:col-span-3 cursor-pointer'>
                            <div className='shadow-xl shadow-[#1018281A] bg-white  rounded-[4px] mt-[10px] xl:mt-[0.521vw]'>
                                <div className='flex items-center '>
                                    <div className='px-[25px] xl:px-[1.302vw]'>
                                        <div className='text-[#667085] text-[12px] xl:text-[0.625vw] uppercase'> Standard Reports</div>
                                        <div className='text-[#101828]  text-[24px] xl:text-[1.25vw] border border-[#C8CBD0] px-[12px] py-[8px] xl:px-[0.625vw] xl:py-[0.417vw] rounded-[4px] mt-[7px] xl:mt-[0.365vw] uppercase'>Payments</div>
                                    </div>
                                    <div className=''>
                                        <Image className='mt-5 mb-2 h-[110px]' height={80} width={160} src={"/assets/images/Payments.svg"} alt={"imgaes1"}></Image>
                                    </div>
                                </div>
                                <Image className='rounded-b-[4px] w-full  ' height={230} width={390} src={"/assets/images/reportImg.svg"} alt={"imgaes"}></Image>

                            </div>
                        </div>
                    </div>
                </div>

                <AssetPopup visible={assetsPopupShow} onHide={() => setAssetsPopupShow(false)} />
            </LeadLayout>

        </>
    )
}

export default Index