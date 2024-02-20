import { Sidebar } from "primereact/sidebar";
import React, { useState } from "react";

export default function PreviewPopup(props) {
  return (
    <div>
      <Sidebar
        visible={props.visible}
        position="right"
        onHide={() => props.onHides(false)}
        className="sidebarwidth custmSidebar rounded-l-xl "
        title={props.title}
      >
        <div className="">
          <div className="py-[24px] xl:py-[1.25vw] text-[24px] text-[#20232E]">
            SR - 113
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
