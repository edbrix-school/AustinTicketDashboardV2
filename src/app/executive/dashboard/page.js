"use client";
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { InputText } from "primereact/inputtext";
import PageLayout from '@/app/components/pagelayout/pagelayout';
import FilterComponent from '@/app/components/filtercomponent';

export default function Index() {
    const [pageTitle, setPageTitle] = useState('Summary');

    return (
        <PageLayout topTab={true} pageTitle={pageTitle} pageName={'Dashboard'}>
            <div className="xl:mt-[1.198vw] mt-5">
                <Tabs className={'custTavbview'}>
                    <div className='flex flex-wrap items-center justify-between gap-y-3'>
                        <div>
                            <TabList>
                                <Tab onClick={() => { setPageTitle("Summary") }}>Summary</Tab>
                                <Tab onClick={() => { setPageTitle("Comparision") }}>Comparision</Tab>
                                <Tab onClick={() => { setPageTitle("Drildown") }}>Drildown</Tab>
                                <Tab onClick={() => { setPageTitle("Detailed") }}>Detailed</Tab>
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
                            1
                        </TabPanel>
                        <TabPanel>
                            2
                        </TabPanel>
                        <TabPanel>
                            3
                        </TabPanel>
                        <TabPanel>
                            4
                        </TabPanel>

                    </div>
                </Tabs>
            </div>
        </PageLayout>
    )
}
