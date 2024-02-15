"use client";
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { InputText } from "primereact/inputtext";
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
     <div className="xl:mt-[1.198vw] mt-5">
     <Tabs className={'custTavbview'}>
      <div className='flex flex-wrap items-center justify-between gap-y-3 xl:pb-[0.833vw] pb-4'>
        <div>
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
    </div>
    <div>
    <div className="p-input-icon-right custInputsearch">
    <i className="asetsmng-search-big text-[#84878D] xl:text-[1.042vw]" />
    <InputText placeholder="Quick Search" className='placeholder:text-[#84878D] placeholder:xl:text-[0.833vw] placeholder:text-sm placeholder:font-normal' />
    </div>
    </div>
    </div>
    <div>
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
    </div>
  </Tabs>
     </div>
    </PageLayout>
  )
}
