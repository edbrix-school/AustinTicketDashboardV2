import React, { useState } from "react";
import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ExecutivedetailedteamTableView from "./executivedetailedteamtable"

export default function DetailedTeamView() {
return (
<>
<div>
<Tabs className={'executiveTableInnerTab'}>
    <div className="3xl:py-[0.417vw] py-2 3xl:px-[1.042vw] px-5">
    <TabList>
      <Tab>All</Tab>
      <Tab>Monthly</Tab>
      <Tab>Weekly</Tab>
    </TabList>
    </div>
    <div>
    <TabPanel>
      <ExecutivedetailedteamTableView />
    </TabPanel>
    <TabPanel>
    <ExecutivedetailedteamTableView />
    </TabPanel>
    <TabPanel>
    <ExecutivedetailedteamTableView />
    </TabPanel>
    </div>
  </Tabs>
</div>
</>
)
}