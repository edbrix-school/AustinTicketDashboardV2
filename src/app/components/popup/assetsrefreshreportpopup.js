import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";

export default function AssetsRefreshPopup(props) {
  return <Sidebar
      visible={props.visible}
      position="right"
      blockScroll={true}
      onHide={props.onHides}
      className="w-[922px] lg:w-[922px] 3xl:w-[48.021vw] custmSidebar  rounded-lg"
    >
      <div className="relative ">
        <div className="h-full">
        <div className="bg-[#F9F9FC] px-[24px] 3xl:px-[1.25vw] py-[38px] 3xl:py-[1.979vw]">
            <div className="text-[24px] lg:text-[24px] 3xl:text-[1.25vw] font-normal text-[#20232E]">
            Generate Report for <span className="font-semibold">“Asset Refresh Report”</span>
            </div>
        </div>
        <div className=" mt-[40px] 3xl:mt-[2.083vw] px-[24px] 3xl:px-[1.25vw]">
            <div className="grid grid-cols-2 gap-[24px] 3xl:gap-[1.25vw]">
                <div>
                    <div className="text-[#262626] text-[14px] 3xl:text-[0.729vw] font-medium">Expiring From Date</div>
                </div>
                <div>
                    <div className="text-[#262626] text-[14px] 3xl:text-[0.729vw] font-medium">Expiring To Date</div>
                </div>
            </div>
        </div>
        </div>
        <div className="absolute bottom-0">
            5555
        </div>
      </div>
    </Sidebar>
  
}
