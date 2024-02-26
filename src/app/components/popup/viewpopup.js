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
  const [show, setShow] = useState();


  const [displayButtons, setDisplayButtons] = useState(false);

  const handleClick = () => {

    if (displayButtons === false) {
      setDisplayButtons(true);

    } else {
      setDisplayButtons(false);

    }

  };


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

  const productstabletwo = [
    {
      Assetcode: "39235",
      Serial: "1012921097",
      Field: "Tablet",

    },
    {
      Assetcode: "421755",
      Serial: "1012921097",
      Field: "Deskstop",
    },
    {
      Assetcode: "421756",
      Serial: "1012921097",
      Field: "Tablet",
    },
    {
      Assetcode: "267400",
      Serial: "1012921097",
      Field: "Computer",
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
        blockScroll={true}
        onHide={() => props.onHides(false)}
        className="sidebarwidth custmSidebar rounded-l-xl "
        title={props.title}>
          <div className="relative">
        <div className="px-6 3xl:px-[1.25vw]">
        <div className="">

          <div className="py-[24px] xl:py-[1.25vw] text-[24px] text-[#20232E]">
            View Inventory Audit
          </div>

        </div>

        <div className="space-y-[20px] xl:space-y-[1.042vw] xl:mt-[1.042vw] mt-[20px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 xl:gap-[1.67vw] gap-y-4 xl:gap-y-[0.689vw]">

            <div className="custInput custInputBox">
              <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 ">
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
              <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 ">
                District<span className="text-[#FF0000]">*</span>
              </label>
              <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                placeholder="Select a City" className="w-full md:w-14rem border" />

            </div>

            <div className="flex flex-col  w-full custDropdownBox">
              <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 ">
                School<span className="text-[#FF0000]">*</span>
              </label>
              <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                placeholder="Select a City" className="w-full md:w-14rem border" />

            </div>



            <div className="custInput custInputBox">
              <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 ">
                Location
              </label>
              <InputText
                id="gender"
                aria-describedby="gender"
                placeholder="Location"
                className="w-full  border "
              />
            </div>

            <div className="custInput  customCalendar">
              <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 ">
                Start Date
              </label>
              <Calendar
                value={date}
                onChange={(e) => setDate(e.value)}
                showIcon
                placeholder="24/04/2023"
                className="w-full border rounded-lg "
              />
            </div>
            <div className="custInput customCalendar ">
              <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 ">
                End Date
              </label>
              <Calendar
                value={date}
                onChange={(e) => setDate(e.value)}
                showIcon
                placeholder="24/04/2023"
                className="w-full border rounded-lg customCalendar"
              />
            </div>
            <div className="custInput custInputBox">
              <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 ">
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
              <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 ">
                Status<span className="text-[#FF0000]">*</span>
              </label>
              <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                placeholder="Select a City" className="w-full md:w-14rem border" />

            </div>


            <div className="custInput custInputBox">
              <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 ">
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
              <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 ">
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
              <div className="border py-[10px] px-[12px] 3xl:py-[0.521vw] 3xl:px-[0.625vw] rounded-lg bg-[#1570EF] text-[#fff] cursor-pointer text-[14px] 3xl:text-[0.729vw]" id="btn1" >Expected Assets</div>

              <div className="border py-[10px] px-[12px] 3xl:py-[0.521vw] 3xl:px-[0.625vw] rounded-lg cursor-pointer text-[14px] 3xl:text-[0.729vw]" id="btn2" onClick={handleClick}>Scanned Assets</div>
              {displayButtons && (

                <div className="border py-[10px] px-[12px] 3xl:py-[0.521vw] 3xl:px-[0.625vw] rounded-lg  cursor-pointer text-[14px] 3xl:text-[0.729vw]" id="btn3" onClick={handleClick}>Scanned Assets</div>
              )}
            </div>
          </div>
        </div>

        <DataTable
          value={products}
          className="custTable tableCust custCheckBox mt-[32px] xl:mt-[1.667vw]"
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
          value={productstabletwo}
          className="custTable tableCust custCheckBox mt-[40px] xl:mt-[2.083vw]"
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
            field="Assetcode"
            header="Asset Code"
            sortable
            style={{ minWidth: "10rem" }}
          ></Column>
          <Column
            field="Serial"
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

        <div className="flex justify-end mt-[32px] xl:mt-[1.667vw]">
          <div className="border py-[10px] px-[12px] bg-[#1570EF] text-[#fff] text-[14px] 3xl:text-[0.729vw]">
            <i className="asetsmng-plus mr-[10px] text-[14px]"></i>
            Add
          </div>
        </div>
        </div>

        <div className="absolute left-0 right-0 flex justify-end mt-[32px] xl:mt-[1.667vw] gap-[8px] bg-[#F9F9FC] px-6 3xl:px-[1.25vw] py-[18px] 3xl:py-[0.938vw]">
          <div className="border py-[10px] px-[12px]  3xl:py-[0.521vw] 3xl:px-[0.625vw] text-[14px] 3xl:text-[0.729vw] rounded-lg cursor-pointer">
            Cancel
          </div>
          <div className="border py-[10px] px-[12px] 3xl:py-[0.521vw] 3xl:px-[0.625vw] bg-[#1570EF] text-[#fff] text-[14px] 3xl:text-[0.729vw] rounded-lg cursor-pointer">
            Save
          </div>
        </div>
        </div>
      </Sidebar>
    </>
  )
}
