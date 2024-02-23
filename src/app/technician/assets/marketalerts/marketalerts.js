import React from "react";
import Productlist from "./productlist";
import Recentsearches from "./recentsearches";
import Marketalertspopup from "./marketalertspopup";
import Marketalertspopupheader from "./marketalertspopupheader";
import Marketalertspopupbody from "./marketalertspopupbody";
import Link from "next/link";

export default function MarketAlerts() {
  return (
    <>
      <div className="marketAlertsListpage">
        <div className="w-full max-w-[1144px] 3xl:max-w-[59.583vw] mx-auto ">
          <Productlist />
          <div className="mt-[15px] lg:mt-[24px] xl:mt-[32px] 3xl:mt-[1.667vw]">
            <Recentsearches />
          </div>
          <Marketalertspopup />
        </div>
      </div>

      <div className="expandFullDiv">
        <div className="grid grid-cols-12 gap-[50px] 3xl:gap-[2.604vw]">
          <div className="col-span-8">
            <div className="bg-white rounded-[8px] 3xl:rounded-[0.417vw] boxShadow1">
              <Marketalertspopupheader />
              <Marketalertspopupbody />
            </div>
          </div>
          <div className="col-span-4">
            <Recentsearches />
          </div>
        </div>
      </div>

      <div className="hidden">
        <div className="grid grid-cols-12 gap-[50px] 3xl:gap-[2.604vw]">
          <div className="col-span-8">
            <div className="flex items-center justify-between">
              <div className="col">
                <div className="flex items-center gap-[10px] 3xl:gap-[0.521vw]">
                  <div className="text-[#3A3E49] text-[18px] 3xl:text-[0.938vw] font-medium">
                    Search Results
                  </div>
                  <div className="inline-block text-[#4169E1] text-[12px] 3xl:text-[0.625vw] font-medium bg-[#EDEDF7] rounded-full py-[4px] 3xl:py-[0.208vw] px-[12px] 3xl:px-[0.625vw]">
                    Showing 35 results
                  </div>
                </div>
              </div>
              <div className="col">
                <Link
                  href={""}
                  className="inline-block bg-white text-[#4B586E] text-[14px] 3xl:text-[0.729vw] border border-[#BECDE3] rounded-[4px] 3xl:rounded-[4px] p-[8px] 3xl:p-[0.417vw]"
                >
                  <i className="asetsmng-arrow-left-line mr-[8px] 3xl:mr-[0.417vw]"></i>{" "}
                  Back
                </Link>
              </div>
            </div>
            <div className="space-y-[20px] 3xl:space-y-[1.042vw]">
              <div className="bg-white rounded-[8px] 3xl:rounded-[0.417vw] boxShadow1 mt-[32px] 3xl:mt-[1.667vw]">
                <Marketalertspopupheader />
              </div>
              <div className="bg-white rounded-[8px] 3xl:rounded-[0.417vw] boxShadow1 mt-[32px] 3xl:mt-[1.667vw]">
                <Marketalertspopupheader />
              </div>
              <div className="bg-white rounded-[8px] 3xl:rounded-[0.417vw] boxShadow1 mt-[32px] 3xl:mt-[1.667vw]">
                <Marketalertspopupheader />
              </div>
              <div className="bg-white rounded-[8px] 3xl:rounded-[0.417vw] boxShadow1 mt-[32px] 3xl:mt-[1.667vw]">
                <Marketalertspopupheader />
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <Recentsearches />
          </div>
        </div>
      </div>
    </>
  );
}
