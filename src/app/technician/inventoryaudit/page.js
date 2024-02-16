
"use client";
import PageLayout from '@/app/components/pagelayout/pagelayout'
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import Link from "next/link";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Checkbox } from "primereact/checkbox";
import 'primeicons/primeicons.css';
import Viewpopup from '@/app/components/popup/viewpopup';

export default function Index() {
  const [visibleRight, setVisibleRight] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [rowClick, setRowClick] = useState(true);
  const [filters, setFilters] = useState(null);
  const [checked, setChecked] = useState(false);

  // Data table
  const products = [
    {
      Index: "1",
      image: "Avatar1",
      Title: "Asset Audit_20220107",
      Designation: "Principal",
      CreatedDate: "29-02-2023",
      Status: "Complete",
      Activate: "",
    },
    {
      Index: "2",
      image: "Avatar2",
      Title: "Asset Audit_20220106",
      Designation: "Principal",
      CreatedDate: "29-02-2023",
      Status: "Sheduled",
      Activate: "",
    },
    {
      Index: "3",
      image: "Avatar3",
      Title: "Asset Audit_20220105",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "In Progress",
      Activate: "",
    },
    {
      Index: "4",
      image: "Avatar3",
      Title: "Asset Audit_20220104",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "Complete",
      Activate: "",
    },

    {
      Index: "5",
      image: "Avatar3",
      Title: "Asset Audit_20220103",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "Sheduled",
      Activate: "",
    },
    {
      Index: "6",
      image: "Avatar3",
      Title: "Asset Audit_20220102",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "In Progress",
      Activate: "",
    },
    {
      Index: "7",
      image: "Avatar3",
      Title: "Asset Audit_20220101",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "Sheduled",
      Activate: "",
    },
    {
      Index: "8",
      image: "Avatar3",
      Title: "Asset Audit_202101012",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "Complete",
      Activate: "",
    },
    {
      Index: "9",
      image: "Avatar3",
      Title: "Asset Audit_202101011",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "Complete",
      Activate: "",
    },
    {
      Index: "10",
      image: "Avatar3",
      Title: "Asset Audit_202101010",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "In Progress",
      Activate: "",
    },
    {
      Index: "11",
      image: "Avatar3",
      Title: "Asset Audit_202101009",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "Complete",
      Activate: "",
    },
  ];




  //Table Image 
  const TableImage = (rowData) => {
    console.log("rowData.image", rowData.image);
    return (
      <div>
        <img
          src={`./assets/images/svg/${rowData.image}.svg`}
          className="w-7 h-7 xl:w-[1.667vw] xl:h-[1.667vw]"
          width={48}
          height={48}
          alt="avatar"
        />
      </div>
    );
  };

  // SearchFilterTemplate

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
          <div className="flex flex-col xl:gap-[0.625vw] gap-2">
            {categories.map((category) => {
              return (
                <div key={category.key} className="flex items-center">
                  <Checkbox
                    inputId={category.key}
                    name="category"
                    value={category}
                    onChange={onCategoryChange}
                    checked={selectedCategories.some(
                      (item) => item.key === category.key
                    )}
                    className="cutsm_checkbox"
                  />
                  <label htmlFor={category.key} className="ml-2">
                    {category.name}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  //ActivateBody

  const ActivateBody = (rowData) => {
    return (
      <>
        <div className="flex w-full">
          {" "}
          <Checkbox
            onChange={(e) => setChecked(e.checked)}
            checked={checked}
          ></Checkbox>
        </div>
      </>
    );
  };

  //actionBodyTemplate

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <div className="flex justify-center text-[16px] gap-[10px] xl:gap-[1.042vw] w-full">
          <Link
            href="#"
            onClick={() => {
              setVisibleRight(true), setShow(true);
            }}
            
          >
            {" "}
            <i className="asetsmng-eye"></i>
          </Link>
          <Link href="" onClick={() => setVisibleRight(true)}>
            {" "}
            <i className="asetsmng-edit-rounded-box"></i>
          </Link>
          <Link href="" onClick={() => setDeleteuserpopup(true)}>
            {" "}
            <i className="asetsmng-trash"></i>
          </Link>
          <Link href="" onClick={() => setResetpassowrdpopup(true)}>
            {" "}
            <i className="cgupod-security-safe"></i>
          </Link>
        </div>
      </>
    );
  };

  const statusBodyTemplate = (rowData) => {
    console.log("rowData.Status",rowData.Status );
    if (rowData.Status === "Complete") {
      return (
        <div className="inline-flex items-center rounded-lg  border-[#18B557] bg-[#D1FAE4] dark:bg-[#18B557] text-[#18B557] dark:text-white text-[12px] font-medium py-[4px] xl:py-[0.208vw] px-[12px] xl:px-[0.625vw]">
          completed
        </div>
      );
    } else if (rowData.Status === "Sheduled") {
      return (
        <div className="inline-flex items-center rounded-lg  bg-[#FDE8E8] dark:bg-[#18B557] text-[#18B557] dark:text-white text-[12px] font-medium py-[4px] xl:py-[0.208vw] px-[12px] xl:px-[0.625vw]">
          Scheduled
        </div>
      );
    } else if (rowData.Status === "In Progress") {
      return (
        <div className="inline-flex items-center rounded-lg  bg-[#FDF2C8] dark:bg-[#18B557] text-[#18B557] dark:text-white text-[12px] font-medium py-[4px] xl:py-[0.208vw] px-[12px] xl:px-[0.625vw]">
          In Progress
        </div>
      );
    } 
  
    
  }

  const categories = [
    { name: "Option 1", key: "A" },
    { name: "Option 2", key: "M" },
    { name: "Option 3", key: "P" },
    { name: "Option 4", key: "R" },
    { name: "Option 5", key: "R" },
  ];

  const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

  const onCategoryChange = (e) => {
    let _selectedCategories = [...selectedCategories];

    if (e.checked) _selectedCategories.push(e.value);
    else
      _selectedCategories = _selectedCategories.filter(
        (category) => category.key !== e.value.key
      );

    setSelectedCategories(_selectedCategories);
  };

  return (
    <PageLayout pageTitle="Dashboard">
      

        <div className="mt-[16px] xl:mt-[0.833vw]">
          <div className="bg-white border border-[#F2EEEE] rounded-lg xl:rounded-[0.521vw] dark:bg-[#13161B] dark:border-[#1F2A37]">
            <div className="flex items-center justify-between xl:px-[1.042vw] px-4 xl:pt-[1.042vw] pt-4 xl:pb-[0.990vw] pb-4 border-b border-b-[#F2EEEE] dark:border-b-[#1F2A37]">
              <div className="flex flex-wrap items-center xl:gap-[0.521vw] gap-2">
                <div className="text-[#262626] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5 dark:text-[#fff]">
                  Manage Assets
                </div>
                <div className="text-[#888888] xl:text-[0.625vw] text-xs font-medium xl:leading-[0.938vw] leading-5 bg-[#FCF5F6] xl:rounded-[0.938vw] rounded-2xl xl:px-[0.729vw] px-3 xl:py-[0.313vw] py-1 dark:bg-[#1C2026] dark:text-[#818181]">
                  Display 1 to 10 of 150
                </div>
              </div>
              <div className="flex flex-wrap items-center xl:gap-[1.250vw] gap-5">
                <div className="custom_search">
                  <span className="p-input-icon-left custm-search p-input-icon-right flex justify-center">
                    <i className="pi pi-search xl:text-[0.833vw] text-xs text-[#888888] cursor-pointer " />
                    <InputText
                      placeholder="Search"
                      className=" border p-inputtext p-component xl:h-[2.083vw] h-[36px] xl:w-[16.927vw] placeholder:text-[#888888] placeholder:font-normal placeholder:xl:text-[0.833vw] "
                    />

                    <i className="pi pi-times xl:text-[0.677vw] text-xs text-[#888888] cursor-pointer" />
                  </span>
                </div>
                <div className="flex items-center xl:gap-[0.521vw] gap-2">
                  <Link
                    href={""}
                    className="text-[#888888] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#EAE0E0] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg dark:bg-[#13161B]  dark:border-[#374151] dark:text-[#AAAAAA]"
                  >
                    <i className="asetsmng-plus-rounded-box mr-2"></i>
                    <span>Add Inventory Audit</span>
                  </Link>
                  <Link
                    href={""}
                    className="text-[#888888] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#EAE0E0] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg dark:bg-[#13161B]  dark:border-[#374151] dark:text-[#AAAAAA]"
                  >
                    <i className="asetsmng-import mr-2 "></i>
                    <span>Import</span>
                  </Link>
                  <Link
                    href={""}
                    className="text-[#888888] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#EAE0E0] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg dark:bg-[#13161B] dark:border-[#374151] dark:text-[#AAAAAA]"
                  >
                    <i className="pi pi-sign-out mr-2 rotated-icon-expot"></i>
                    <span>Export</span>
                  </Link>
                  <Link
                    href={""}
                    className="text-[#888888] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#EAE0E0] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg dark:bg-[#13161B]  dark:border-[#374151] dark:text-[#AAAAAA]"
                  >
                    <i className="asetsmng-map-view"></i>
                    
                  </Link>

                 
                  <Link
                    href={""}
                    className="text-[#888888] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#EAE0E0] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg dark:bg-[#13161B] dark:border-[#374151] dark:text-[#AAAAAA]"
                  >
                    <i className="asetsmng-grid-outline font-light"></i>
                    
                  </Link>

                
                </div>
              </div>
            </div>

            <DataTable
              value={products}
              className="custTable tableCust custCheckBox"
              scrollable
              responsiveLayout="scroll"
              style={{ width: "100%" }}
              paginator
              paginatorTemplate="CurrentPageReport RowsPerPageDropdown PrevPageLink PageLinks NextPageLink custmpaginator"
              currentPageReportTemplate="Rows per page  {first}-{last} of {totalRecords}"
              rowsPerPageOptions={[5, 10, 25, 50]}
              rows={10}
              onSelectionChange={(e) => setSelectedProducts(e.value)}
              selectionMode={rowClick ? null : "checkbox"}
              selection={selectedProducts}
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
              <Column
                selectionMode="multiple"
                style={{ minWidth: '1rem', maxWidth: '1rem' }}
              ></Column>
              {/* <Column
                field="image"
                header=""
                body={TableImage}
                style={{ minWidth: "3rem" }}
              ></Column> */}
              <Column
                field="Index"
                header="Index"
                sortable
                style={{ minWidth: "8rem" }}
              ></Column>
              <Column
                field="Title"
                header="Title"
                sortable
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                // filter
                // filterElement={SearchFilterTemplate}
                style={{ minWidth: "26rem" }}
              ></Column>

              <Column
                field="Status"
                header="Status"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "12rem" }}
                body={statusBodyTemplate}
              ></Column>


              <Column
                field="action"
                header="Actions"
                className="action-shadow-table"
                frozen
                alignFrozen="right"
                align="center"
                style={{ minWidth: "10rem" }}
                body={actionBodyTemplate}
              ></Column>
            </DataTable>
          </div>
        </div>

        <Viewpopup
        visible={visibleRight}
        position="right"
        onHides={() => setVisibleRight(false)}
        
        
        />

      
    </PageLayout>
  )
}
