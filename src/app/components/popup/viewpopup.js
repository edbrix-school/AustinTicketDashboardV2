import React, { useState } from "react";
import { Sidebar } from 'primereact/sidebar';
import { Calendar } from 'primereact/calendar';
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
export default function Viewpopup(props) {

    const [date, setDate] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [rowClick, setRowClick] = useState(true);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [filters, setFilters] = useState(null);
  const [checked, setChecked] = useState(false);

    const products = [
        {
          Count: "1",
          Field: "Scanned and expected",
          
        },
        {
            Count: "2",
            Field: "Scanned and not expected",
        },
        {
            Count: "3",
            Field: "Expected and not found",
        },
        {
            Count: "4",
            Field: "New",
        },
    
       
      ];


    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    const SearchFilterTemplate = (options) => {
        return (
          <>
            <div className="SearchFilter xl:p-[0.729vw] p-3 xl:rounded-[0.521vw] rounded-lg bg-white boxshadow01 xl:space-y-[0.625vw] space-y-3">
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                  placeholder="Search"
                  className="xl:h-[2.083vw] h-[36px]"
                  style={{
                    background: "#F5F6F8",
                    border: "1px solid #BECDE3",
                    borderRadius: "8px",
                  }}
                />
              </span>
              
            </div>
          </>
        );
      };

    return (
        <>
            <Sidebar visible={props.visible}
                position="right"
                onHide={() => props.onHides(false)}
                className="sidebarwidth"
                title={props.title}>

                <div className="">
                    <div>
                        <div className="">
                            View Inventory Audit
                        </div>
                    </div>
                </div>

                <div className="space-y-[20px] xl:space-y-[1.042vw] xl:mt-[1.042vw] mt-[20px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 xl:gap-[1.67vw] gap-y-4 xl:gap-y-[0.689vw]">

                        <div className="custInput custInputBox">
                            <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                                Audit Title<span className="text-[#FF0000]">*</span>
                            </label>
                            <InputText
                                id="gender"
                                aria-describedby="gender"
                                placeholder=" Audit Title"
                                className="w-full  border "
                            />
                        </div>
                        
                        <div className="flex flex-col  w-full custDropdownBox">
                            <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                                District<span className="text-[#FF0000]">*</span>
                            </label>
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                placeholder="Select a City" className="w-full md:w-14rem border" />

                        </div>

                        <div className="flex flex-col  w-full custDropdownBox">
                            <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                                School<span className="text-[#FF0000]">*</span>
                            </label>
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                placeholder="Select a City" className="w-full md:w-14rem border" />

                        </div>



                        <div className="custInput custInputBox">
                            <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                                Location
                            </label>
                            <InputText
                                id="gender"
                                aria-describedby="gender"
                                placeholder="Location"
                                className="w-full  border "
                            />
                        </div>

                        <div className="custInput custDropdownBox ">
                            <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                                Start Date
                            </label>
                            <Calendar
                                value={date}
                                onChange={(e) => setDate(e.value)}
                                showIcon
                                placeholder="24/04/2023"
                                className="w-full border"
                            />
                        </div>
                        <div className="custInput custDropdownBox">
                            <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                                End Date
                            </label>
                            <Calendar
                                value={date}
                                onChange={(e) => setDate(e.value)}
                                showIcon
                                placeholder="24/04/2023"
                                className="w-full border"
                            />
                        </div>
                        <div className="custInput custInputBox">
                            <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                                Assigned To<span className="text-[#FF0000]">*</span>
                            </label>
                            <InputText
                                id="gender"
                                aria-describedby="gender"
                                placeholder=" Audit Title"
                                className="w-full  border "
                            />
                        </div>

                        <div className="flex flex-col  w-full custDropdownBox">
                            <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                                Status<span className="text-[#FF0000]">*</span>
                            </label>
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                placeholder="Select a City" className="w-full md:w-14rem border" />

                        </div>


                        <div className="custInput custInputBox">
                            <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                                Actual Start Date<span className="text-[#FF0000]">*</span>
                            </label>
                            <InputText
                                id="gender"
                                aria-describedby="gender"
                                placeholder=" Audit Title"
                                className="w-full  border "
                            />
                        </div>

                         <div className="custInput custInputBox">
                            <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                                Actual End Date<span className="text-[#FF0000]">*</span>
                            </label>
                            <InputText
                                id="gender"
                                aria-describedby="gender"
                                placeholder=" Audit Title"
                                className="w-full  border "
                            />
                        </div>



                    </div>
                    <div className="flex justify-between items-center">
                        <div>Audit Result</div>
                        <div className="flex gap-[8px]">
                            <div className="border py-[10px] px-[12px] rounded-lg bg-[]">Expected Assets</div>
                            <div className="border py-[10px] px-[12px] rounded-lg ">Scanned Assets</div>
                        </div>
                    </div>
                </div>

                <DataTable
              value={products}
              className="custTable tableCust custCheckBox"
              scrollable
              responsiveLayout="scroll"
              style={{ width: "100%" }}
              
             
              
              filters={filters}
              globalFilterFields={[
                "Groupname",
                "Groupdescription",
                "representative.name",
                "Groupcreateddate",
                "Lastmodifieddate",
              ]}
              dataKey="id"
            >
              {/* <Column
                selectionMode="multiple"
                style={{ minWidth: '1rem', maxWidth: '1rem' }}
              ></Column> */}
             
              <Column
                field="Field"
                header="Field"
                sortable
                style={{ minWidth: "10rem" }}
              ></Column>
              <Column
                field="Count"
                header="Count"
               
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "10rem" }}
              ></Column>

             


              
            </DataTable>

            <DataTable
              value={products}
              className="custTable tableCust custCheckBox"
              scrollable
              responsiveLayout="scroll"
              style={{ width: "100%" }}
              
             
              
              filters={filters}
              globalFilterFields={[
                "Groupname",
                "Groupdescription",
                "representative.name",
                "Groupcreateddate",
                "Lastmodifieddate",
              ]}
              dataKey="id"
            >
              {/* <Column
                selectionMode="multiple"
                style={{ minWidth: '1rem', maxWidth: '1rem' }}
              ></Column> */}
             
              <Column
                field="Field"
                header="Asset Code"
                sortable
                style={{ minWidth: "10rem" }}
              ></Column>
              <Column
                field="Count"
                header="Serial "
               
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "10rem" }}
              ></Column>

              <Column
                field="Field"
                header="Field"
                sortable
                style={{ minWidth: "10rem" }}
              ></Column>
             


              
            </DataTable>


            </Sidebar>
        </>
    )
}
