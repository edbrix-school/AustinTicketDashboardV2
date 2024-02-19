import React from "react";
import Productlist from "./productlist";
import Recentsearches from "./recentsearches";


export default function MarketAlerts() {

  return (
    <>
      <div className="w-full max-w-[1144px] 3xl:max-w-[59.583vw] mx-auto">
      <Productlist />
      <Recentsearches />
      </div>
    </>
  );
}
