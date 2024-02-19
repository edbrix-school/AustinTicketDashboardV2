import React, { useRef } from "react";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { OverlayPanel } from 'primereact/overlaypanel';
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";

const myUnter = Inter({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
  });

export default function Top({ ...pageProps }) {
    const notificatio = useRef(null);


    return (
        <header className="sticky top-0 z-[3]">
            <div className={`${pageProps.topTab ? '3xl:min-h-[4.27vw] min-h-[82px] pb-[12px] 3xl:pb-[0.625vw]' : '3xl:min-h-[5.96vw] min-h-[114px] pb-[44px] 3xl:pb-[2.299vw]'} bg-white flex flex-wrap gap-2 items-center justify-between pt-[20px] 3xl:pt-[1.04vw] pb-[12px] 3xl:pb-[0.625vw] pr-[45px] 3xl:pr-[2.344vw] pl-[118px] 3xl:pl-[128px] dark:bg-[#191A1E] `}>
                <div className="">
                    <div className="flex items-center gap-3 text-[12px] 3xl:text-[0.625vw] text-[#84878D] mb-1 3xl:mb-[0.208vw]">
                        <div className="cursor-pointer">Home</div>
                        {pageProps.parentPageName?.map((elm) => {
                            return (
                                <>
                                    <i className="asetsmng-arrow-right text-[8px] 3xl:text-[0.417vw]"></i>
                                    <div className="cursor-pointer">{elm}</div>
                                </>
                            ); 
                        })} 

                        {pageProps.pageName &&
                            <>
                                <i className="asetsmng-arrow-right text-[8px] 3xl:text-[0.417vw]"></i>
                                <div className="text-[#3A3E49] dark:text-[#84878D]">{pageProps.pageName}</div>
                            </>
                        }

                    </div>
                    <div className={`text-[#3A3E49] 3xl:text-[1.250vw] text-[24px] font-medium leading-7 dark:text-[#fff]`}>{pageProps.pageTitle}</div>
                </div>
                <div className="flex items-center gap-[30px] 3xl:gap-[1.563vw]">
                    <Link href={''} className="3xl:p-[0.625vw] relative" title="shopping-cart">
                        <div className="bg-[#D92D20] rounded-full h-1.5 w-1.5 absolute 3xl:top-1 3xl:right-1 -top-[6px] -right-0"></div>
                        <Image src={'/assets/images/shopping-cart.svg'} width={24} height={28} alt="shopping-cart" />
                    </Link>
                    <Link href={''} className="3xl:p-[0.625vw]" title="Message">
                        <Image src={'/assets/images/messages.svg'} width={24} height={28} alt="Message" />
                    </Link>

                    {/* <i className="pi "></i> */}
                    <Link href={''} className="3xl:p-[0.625vw] relative" onClick={(e) => notificatio.current.toggle(e)} title="Notification">
                        <div className="bg-[#D92D20] rounded-full h-1.5 w-1.5 absolute 3xl:top-1 3xl:right-1 -top-[6px] -right-0"></div>
                        <Image src={'/assets/images/notificatio-bell.svg'} width={24} height={28} alt="Notification" />
                    </Link>
                </div>
            </div>

            <OverlayPanel ref={notificatio} className={`${myUnter.className} custSimplebar`}>
                <div className=''>
                    <div className="w-full min-w-[440px] origin-top-right bg-white dark:bg-[#24262D] box-shadow">
                        <div className="flex items-center justify-between px-[16px] 3xl:px-[0.833vw] py-[12px] 3xl:py-[0.625vw]">
                            <div className="flex items-center">
                            <div className="text-[#1A1F36] dark:text-[#FFFFFF] text-[14px] 3xl:text-[0.729vw] font-medium">Notifications <span className="text-[#9EA0AA] text-[12px] 3xl:text-[0.625vw] pl-2">All <i className="asetsmng-dropdown-arrow text-[0.317vw] pl-3"></i></span></div>

                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <div className="text-[#1A1F36] dark:text-[#FFFFFF] text-[14px] 3xl:text-[0.729vw] font-medium">Mark all as read</div>
                                <i className="asetsmng-right-tick-outline text-[16px] 3xl:text-[0.833vw]"></i>
                            </div>
                        </div>
                        <SimpleBar className="" style={{ maxHeight: '300px', }}>
                            <div className=" divide-y divide-solid divide-[#E4E8EE] dark:divide-[#2A2C32] list-space" data-simplebar>
                                <div className="grid grid-cols-12 gap-[16px] 3xl:gap-[0.833vw] py-4 px-4 3xl:px-[0.833vw] 3xl:py-[0.833vw] bg-[#F9F9FC] relative">
                                    <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#90CDF4] border border-[#4299E1]"></div>
                                    <div className="p-2 col-span-2">
                                        <Image src={'/assets/images/notification1.svg'} alt="notification" width={48} height={48} className="3xl:w-[2.5vw] w-[48px] h-auto" />
                                    </div>
                                    <div className="col-span-10 text-[14px] 3xl:text-[0.729vw]">
                                        <div className="text-[#3A3E49] font-medium">Acer Aspire 5 Gaming Laptop 13th Gen Intel Core i5 cost reduced to <span className="text-[#3A3E49] font-semibold">$3440</span> </div>

                                        <div className="text-[#84878D] dark:text-[#8A93A6] mt-2">Today at 9:42 AM</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-[16px] 3xl:gap-[0.833vw] py-4 px-4 3xl:px-[0.833vw] 3xl:py-[0.833vw] bg-[#F9F9FC] relative">
                                    <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#90CDF4] border border-[#4299E1]"></div>
                                    <div className="p-2 col-span-2">
                                        <Image src={'/assets/images/notification2.svg'} alt="notification" width={48} height={48} className="3xl:w-[2.5vw] w-[48px] h-auto" />
                                    </div>
                                    <div className="col-span-10 text-[14px] 3xl:text-[0.729vw]">
                                        <div className="text-[#3A3E49] font-medium">Dell G15 5520 Gaming Laptop cost reduced to <span className="text-[#3A3E49] font-semibold">$3440</span> </div>

                                        <div className="text-[#84878D] dark:text-[#8A93A6] mt-2">Today at 9:42 AM</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-[16px] 3xl:gap-[0.833vw] py-4 px-4 3xl:px-[0.833vw] 3xl:py-[0.833vw] bg-[#F9F9FC] relative">
                                    <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#90CDF4] border border-[#4299E1]"></div>
                                    <div className="p-2 col-span-2">
                                        <Image src={'/assets/images/notification3.svg'} alt="notification" width={48} height={48} className="3xl:w-[2.5vw] w-[48px] h-auto" />
                                    </div>
                                    <div className="col-span-10 text-[14px] 3xl:text-[0.729vw]">
                                        <div className="text-[#3A3E49] font-medium">HP Laptop 15s, 11th Gen Intel Core i5-1155G7 cost reduced to <span className="text-[#3A3E49] font-semibold">$3440</span> </div>
                                        <div className="flex items-center gap-2 mt-2">
                                            <button className="bg-[#1570EF] px-[12px] 3xl:px-[0.625vw] py-[6px] 3xl:py-[0.313vw] text-[#FFFFFF] text-[14px] 3xl:text-[0.729vw] font-normal rounded-[4px]">View Details</button>

                                            <button className="bg-[#FFFFFF] px-[12px] 3xl:px-[0.625vw] py-[6px] 3xl:py-[0.313vw] text-[#4B586E] text-[14px] 3xl:text-[0.729vw] font-normal rounded-[4px] border border-[#BECDE3]">Close</button>
                                        </div>
                                        <div className="text-[#84878D] dark:text-[#8A93A6] mt-2">Today at 9:42 AM</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-[16px] 3xl:gap-[0.833vw] py-4 px-4 3xl:px-[0.833vw] 3xl:py-[0.833vw] bg-[#FFFFFF] relative">
                                    <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#90CDF4] border border-[#4299E1]"></div>
                                    <div className="p-2 col-span-2">
                                        <Image src={'/assets/images/notification4.svg'} alt="notification" width={48} height={48} className="3xl:w-[2.5vw] w-[48px] h-auto" />
                                    </div>
                                    <div className="col-span-10 text-[14px] 3xl:text-[0.729vw]">
                                        <div className="text-[#3A3E49] font-medium">Acer Aspire 5 Gaming Laptop 13th Gen Intel Core i5 cost reduced to <span className="text-[#3A3E49] font-semibold">$3440</span> </div>

                                        <div className="text-[#84878D] dark:text-[#8A93A6] mt-2">Today at 9:42 AM</div>
                                    </div>
                                </div>

                            </div>
                        </SimpleBar>
                    </div>
                </div>
            </OverlayPanel>


        </header>
    );
}
