"use client";
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PageLayout from '@/app/components/pagelayout/pagelayout';
import ManageAssets from './manageassets/manageassets';
import Quickadd from './quickadd/quickadd';
import CheckoutTansfer from './checkouttansfer/checkouttansfer';
import Checkin from './checkin/checkin';
import FinancialAnalysis from './financialanalysis/financialanalysis';
import ChangeStatus from './changestatus/changestatus';
import MarketAlerts from './marketalerts/marketalerts';
import InventoryAudit from "./inventoryaudit/inventoryaudit"

export default function Index() {
  return (
    <PageLayout pageTitle="Manage Assets">
     <div className="">
     <Tabs>
    <TabList>
      <Tab>Manage Assets</Tab>
      <Tab>Quick Add</Tab>
      <Tab>Checkout/Tansfer</Tab>
      <Tab>Checkin</Tab>
      <Tab>Financial Analysis</Tab>
      <Tab>Change Status</Tab>
      <Tab>Market Alerts</Tab>
      <Tab>Inventory Audit</Tab>
    </TabList>

    <TabPanel>
    <ManageAssets />
    </TabPanel>
    <TabPanel>
    <Quickadd />
    </TabPanel>
    <TabPanel>
    <CheckoutTansfer />
    </TabPanel>
    <TabPanel>
    <Checkin />
    </TabPanel>
    <TabPanel>
    <FinancialAnalysis />
    </TabPanel>
    <TabPanel>
    <ChangeStatus />
    </TabPanel>
    <TabPanel>
    <MarketAlerts />
    </TabPanel>
    <TabPanel>
    <InventoryAudit />
    </TabPanel>
  </Tabs>
     </div>
    </PageLayout>
  )
}
