import React from "react";
import Productlist from "./productlist";
import Recentsearches from "./recentsearches";
import Marketalertspopup from "./marketalertspopup";

export default function MarketAlerts() {
  return (
    <>
      <div className="w-full max-w-[1144px] 3xl:max-w-[59.583vw] mx-auto">
        <Productlist />
        <Recentsearches />
        <Marketalertspopup />
      </div>
    </>
  );
}
