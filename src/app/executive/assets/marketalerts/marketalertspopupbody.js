import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Manageassetstab from "./manageassetstab"
import Checkpricetrendtab from "./checkpricetrendtab"
import Productinformationtab from "./productinformationtab"

function marketalertspopupHeader() {
  return (
    <div>
      <div className="p-[24px] 3xl:p-[1.25vw]">
        <Tabs className={"custTavbview marketAlertTabs"}>
          <TabList>
            <Tab>Manage Assets</Tab>
            <Tab>Check Price Trend</Tab>
            <Tab>Product Information</Tab>
          </TabList>
          <div className="mt-[32px] 3xl:mt-[1.667vw]">
            <TabPanel>
              <Manageassetstab />
            </TabPanel>
            <TabPanel>
              <Checkpricetrendtab />
            </TabPanel>
            <TabPanel>
              <Productinformationtab />
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default marketalertspopupHeader;
