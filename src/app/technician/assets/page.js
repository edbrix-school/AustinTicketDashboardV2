"use client";
import React, { useState } from 'react';
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
import FilterComponent from '@/app/components/filtercomponent';

export default function Index() {
  const [pageName, setPageName] = useState('Manage Assets');
  const [pageTitle, setPageTitle] = useState('Manage Assets');
  const [bodyClass, setBodyClass] = useState('');

  const handleClick = () => {
    // Remove the class from the body
    document.body.classList.remove('expandFull');
    // Update state to reflect the change
    setBodyClass('');
  };

  return (
    <PageLayout topTab={true} pageTitle={pageTitle} parentPageName={["Assets"]} pageName={pageName}>
     <div className="xl:mt-[1.198vw] mt-5">
     <Tabs className={'custTavbview'}>
      <div className='flex flex-wrap items-center justify-between gap-y-3'>
        <div>
    <TabList>
      <Tab onClick={() => {setPageName("Manage Assets"), setPageTitle("Manage Assets")}}>Manage Assets</Tab>
      <Tab onClick={() => {setPageName("Quick Add"), setPageTitle("Quick Add") }}>Quick Add</Tab>
      <Tab onClick={() => {setPageName("Checkout/Tansfer"), setPageTitle("Checkout/Tansfer") }}>Checkout/Tansfer</Tab>
      <Tab onClick={() => {setPageName("Checkin"), setPageTitle("Checkin") }}>Checkin</Tab>
      <Tab onClick={() => {setPageName("Financial Analysis"), setPageTitle("Financial Analysis") }}>Financial Analysis</Tab>
      <Tab onClick={() => {setPageName("Change Status"), setPageTitle("Change Status") }}>Change Status</Tab>
      <Tab onClick={() => {setPageName("Market Alerts"), setPageTitle("Market Alerts"), setBodyClass(handleClick) }}>Market Alerts</Tab>
      <Tab onClick={() => {setPageName("Inventory Audit"), setPageTitle("Inventory Audit") }}>Inventory Audit</Tab>
    </TabList>
    </div>
    <div>
    <div className="p-input-icon-right custInputsearch">
    <i className="asetsmng-search-big text-[#84878D] xl:text-[1.042vw]" />
    <InputText placeholder="Quick Search" className='placeholder:text-[#84878D] placeholder:xl:text-[0.833vw] placeholder:text-sm placeholder:font-normal' />
    </div>
    </div>
    </div>
    <FilterComponent />
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
