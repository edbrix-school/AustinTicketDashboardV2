"use client";
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Sidebar } from "primereact/sidebar";
import { useRouter } from "next/navigation";
import Marketalertspopupheader from "./marketalertspopupheader"
import Marketalertspopupbody from "./marketalertspopupbody"


function marketalertspopup() {
  const [visible, setVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const cities = [
    { name: "Acer Aspire 5 (A5 15-56-5", code: "NY", link: "#" },
    {
      name: "Acer Nitro 5 (A1 15-56-5",
      code: "RM",
      link: "/technician/assets",
    },
    { name: "Acer Aspire 7 (A5 14-54G", code: "LDN", link: "#" },
    { name: "Acer TravelMate P648-M-700F", code: "IST", link: "#" },
    { name: "Acer Aspire R3 131T-P9J9", code: "PRS", link: "#" },
  ];
  const District = [
    { name: "District 1" },
    { name: "District 2" },
    { name: "District 3" },
  ];


  const router = useRouter();

  function handleDropDownChange(e) {
    console.log("handleDropDownChange", e.value);
    setSelectedCity(e.value);

    if (e?.value?.code == "RM") {
      router.push("/technician/assets");
    } else {
      setVisible(true);
    }
    // setSelectedCity(e.value)
  }





  return (
    <div>
      <div className="p-input-icon-left">
        <Dropdown
          value={selectedCity}
          onChange={handleDropDownChange}
          options={cities}
          optionLabel="name"
          placeholder="Select a City"
          className="w-full md:w-14rem"
        />
      </div>
      <Sidebar
        position="right"
        className="custmSidebar marketAlertSidebar"
        Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <Marketalertspopupheader />
        <Marketalertspopupbody />
        
      </Sidebar>
    </div>
  );
}

export default marketalertspopup;
