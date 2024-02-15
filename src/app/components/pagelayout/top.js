import React, { useRef } from "react";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Gelasio } from "next/font/google";

const myGelasio = Gelasio({
    weight: ['400', '500', '600', '700', ],
    subsets: ['latin'],
    display: "swap",
})

export default function Top({ ...pageProps }) {
    const notificatio = useRef(null);

    return (
        <header className="sticky top-0 z-[3]">
            <div className={`${ pageProps.topTab ? 'xl:min-h-[4.27vw] min-h-[82px] pb-[12px] xl:pb-[0.625vw]' : 'xl:min-h-[5.96vw] min-h-[114px] pb-[44px] xl:pb-[2.299vw]'} bg-white flex items-center justify-between pt-[20px] xl:pt-[1.04vw] pb-[12px] xl:pb-[0.625vw] pr-4 xl:pr-[1.667vw] pl-[118px] xl:pl-[128px] dark:bg-[#191A1E] `}>
                <div className="">
                    <div className="flex items-center gap-2 text-[12px] xl:text-[0.625vw] text-[#888] mb-1 xl:mb-[0.208vw]">
                        <div className="cursor-pointer">Teacher Management</div>
                        <i className="cgupod-right-arrow text-[8px] xl:text-[0.417vw]"></i>
                        <div className="text-[#262626] dark:text-[#888]">{pageProps.pageName}</div>
                    </div>
                    <div className={`${myGelasio.className} text-[#262626] xl:text-[1.250vw] text-[24px] leading-7 dark:text-[#fff]`}>{pageProps.pageTitle}</div>
                </div>
                <div className="flex items-center gap-2">
                    <button className="xl:px-[0.625vw] px-[12px] xl:py-[0.417vw] py-[8px] border border-[#F2EEEE] rounded-lg dark:border-[#1F2A37]" title="Search">
                        <i className="cgupod-search text-[#9CA1AB]"></i>
                    </button>
                    {/* <Link href={''} className="xl:p-[0.625vw]" title="Message"><Image src={'/assets/images/svg/messages.svg'} width={24} height={28} alt="Message" /></Link>
                    <Link href={''} className="xl:p-[0.625vw]" onClick={(e) => notificatio.current.toggle(e)} title="Notification"><Image src={'/assets/images/svg/notificatio-bell.svg'} width={24} height={28} alt="Notification" /></Link> */}
                </div>
            </div>

            <OverlayPanel ref={notificatio} className="notificatio_popup">
                <div className=''>
                    <div className="w-full min-w-[418px] origin-top-right bg-white dark:bg-[#24262D] box-shadow">
                        <div className="flex items-center justify-between">
                            <div className="text-[#293141] dark:text-[#FFFFFF] text-sm lg:text-md 2xl:text-lg font-bold">Notifications</div>
                        </div>
                        <SimpleBar className="pr-4" style={{ maxHeight: '300px', }}>
                            <div className="mt-5 divide-y divide-solid divide-[#D8D8D8] dark:divide-[#2A2C32] list-space" data-simplebar>
                                <div className="flex items-start py-2">
                                    <div className="flex items-center justify-between w-full">
                                        <div>
                                            <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                                            <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                                            <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-[#D73F09]"></div>
                                    </div>
                                </div>
                                <div className="flex items-start py-2">
                                    <div className="flex items-center justify-between w-full">
                                        <div>
                                            <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">End Customer has requested for discount on</div>
                                            <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Product A</div>
                                            <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start py-2">
                                    <div className="flex items-center justify-between w-full">
                                        <div>
                                            <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                                            <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                                            <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-[#D73F09]"></div>
                                    </div>
                                </div>
                                <div className="flex items-start py-2">
                                    <div className="flex items-center justify-between w-full">
                                        <div>
                                            <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                                            <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                                            <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-[#D73F09]"></div>
                                    </div>
                                </div>
                                <div className="flex items-start py-2">
                                    <div className="flex items-center justify-between w-full">
                                        <div>
                                            <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                                            <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                                            <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-[#D73F09]"></div>
                                    </div>
                                </div>
                                <div className="flex items-start py-2">
                                    <div className="flex items-center justify-between w-full">
                                        <div>
                                            <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">End Customer has requested for discount on</div>
                                            <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Product A</div>
                                            <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                        </div>
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
