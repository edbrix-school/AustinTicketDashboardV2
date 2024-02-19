import React from "react";
import PageLayout from "@/app/components/pagelayout/pagelayout";

const page = () => {
  return (
    <PageLayout
      topTab={true}
      pageTitle="Add Document"
      pageName="Add Document"
      parentPageName="E-Library"
    >
      <div>
        <div className="flex justify-between items-center mt-[30px] 3xl:mt-[1.563vw]">
          <div className="bg-[#4169E1] rounded-lg text-[#FFF] flex items-center gap-[8px] 3xl:gap-[0.417vw] px-[12px] 3xl:px-[0.6vw] py-[8px] 3xl:py-[0.429vw] cursor-pointer">
            <span className="3xl:text-[0.729vw] text-[14px] font-normal leading-4 ">
              New Scan
            </span>
            <i className="asetsmng-plus 3xl:text-[0.629vw] text-[12px]"></i>
          </div>
          <div className="flex gap-[16px] 3xl:gap-[0.833vw]">
            <div className="bg-[#FFF] rounded-lg text-[#4b586e] border border-[#becde3] opacity-[30%] flex items-center gap-[8px] 3xl:gap-[0.417vw] px-[12px] 3xl:px-[0.6vw] py-[8px] 3xl:py-[0.429vw]">
              <span className="3xl:text-[0.729vw] text-[14px] font-normal leading-4 cursor-pointer">
                Save
              </span>
            </div>
            <div className="bg-[#FFF] rounded-lg text-[#4b586e] border border-[#becde3]/[0.3] hover:bg-[#AAA]/[0.3] flex items-center gap-[8px] 3xl:gap-[0.417vw] px-[12px] 3xl:px-[0.6vw] py-[8px] 3xl:py-[0.429vw]">
              <span className="3xl:text-[0.729vw] text-[14px] font-normal leading-4 cursor-pointer">
                Cancel
              </span>
            </div>
          </div>
        </div>
        <div className="text-[20px] 3xl:text-[1.042vw] font-medium leading-6 mt-[30px] 3xl:mt-[1.563vw]">
          Add Document
        </div>
        <div className="w-full justify-center items-center h-[700px] 3xl:h-[36.458vw] border-2 border-dashed mt-[30px] 3xl:mt-[1.563vw]">
          <div className="grid w-full h-full justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-[7px] 3xl:gap-[0.365vw]">
              <i className="asetsmng-upload text-[33px] 3xl:text-[1.719vw] text-[#3A3E49]"></i>
              <div className="text-[18px] 3xl:text-[0.938vw] leading-5 flex gap-[4px] 3xl:gap-[0.208vw]">
                <span className="font-normal">Click to upload or </span>
                <span className="font-semibold">drag</span>
                <span className="font-normal">and</span>
                <span className="font-semibold">drop</span>
              </div>
              <div className="text-[#888888] text-[12px] 3xl:text-[0.625vw] leading-4 font-semibold">
                Max. File Size: 30MB
              </div>
              <div className="bg-[#4169E1] rounded-lg text-[#FFF] flex items-center gap-[8px] 3xl:gap-[0.417vw] px-[12px] 3xl:px-[0.6vw] py-[8px] 3xl:py-[0.429vw] cursor-pointer mt-[16px] 3xl:mt-[0.833vw]">
                <i className="asetsmng-td-search 3xl:text-[0.629vw] text-[12px]"></i>
                <span className="3xl:text-[0.729vw] text-[14px] font-normal leading-4 ">
                  Browse File
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default page;
