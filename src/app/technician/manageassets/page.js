import React from 'react'
import PageLayout from '@/app/components/pagelayout/pagelayout';
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
      <Quickadd />
      <CheckoutTansfer />
      <Checkin />
      <FinancialAnalysis />
      <ChangeStatus />
      <MarketAlerts />
      <InventoryAudit />
     </div>
    </PageLayout>
  )
}
