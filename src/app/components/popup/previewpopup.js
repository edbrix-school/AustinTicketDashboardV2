import { Sidebar } from "primereact/sidebar";
import React, { useState } from "react";

export default function PreviewPopup(props) {
    return(
        <div>
             <Sidebar
        visible={props.visible}
        position="right"
        onHide={() => props.onHides(false)}
        className="sidebarwidth custmSidebar rounded-l-xl "
        title={props.title}
      >
sdsdsd
      </Sidebar>
        </div>
    )
}