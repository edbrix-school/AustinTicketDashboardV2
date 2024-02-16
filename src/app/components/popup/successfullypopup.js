import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';

export default function successfullypopup() {
    const [visibleRight, setVisibleRight] = useState(false);
  return (
    <>
     <div>
                <Sidebar visible={visibleRight} position="right" 
                className="successfully w-[550px] xl:w-[28.646vw]" onHide={() =>setVisibleRight(false)} >
                <div className="xl:px-[2.604vw] px-10 xl:space-y-[1.875vw] space-y-8">
                    <div className="flex justify-center items-center">
                    <div>     <Image src={'/assets/images/successfully_image.png'} alt="successfully popup" width={499} height={485} className="xl:w-[25.99vw] xl:h-[25.26vw]" /></div>
                   </div>
                    <div className="">
                    <div className="text-center text-[#312C49] xl:text-[1.042vw] text-[20px] font-medium xl:leading-[1.25vw] leading-[24px] ">Your Audit Inventory details has been Successfully created !!!</div>
                    </div>
                    <div className="flex items-center justify-center"><Link href={''} className="text-[#FFFFFF] font-normal leading-[18px] xl:leading-[0.938vw] text-[14px] xl:text-[0.729vw] py-[10px] xl:py-[0.521vw] px-[12px] xl:px-[0.625vw] bg-[#1570EF] rounded-lg">Done</Link></div>
                </div>
                
                </Sidebar>
            </div>
    </>
  )
}
