import React from "react";
import Productlist from "./productlist";
import Recentsearches from "./recentsearches";
import Marketalertspopup from "./marketalertspopup";
import Marketalertspopupheader from "./marketalertspopupheader";
import Marketalertspopupbody from "./marketalertspopupbody";

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
    </>
  );
}
