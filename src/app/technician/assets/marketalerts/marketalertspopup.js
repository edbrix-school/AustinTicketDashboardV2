"use client";
import React, { useState, useEffect } from "react";
import { Sidebar } from "primereact/sidebar";
import Marketalertspopupheader from "./marketalertspopupheader"
import Marketalertspopupbody from "./marketalertspopupbody"


function marketalertspopup(props) {
  const [visible, setVisible] = useState(false);

  useEffect(()=>{    
    if(props.isAlertPopupVisible){
      setVisible(true)
    }
  }),[]

  return (
    <div>
      <Sidebar
        position="right"
        className="custmSidebar marketAlertSidebar"
        Sidebar
        visible={visible}
        onHide={() => {
          setVisible(false)
          props.setAlertPopupVisible(false)
        }}
      >
        <Marketalertspopupheader />
        <Marketalertspopupbody />
        
      </Sidebar>
    </div>
  );
}

export default marketalertspopup;
