
"use client";
import PageLayout from '@/app/components/pagelayout/pagelayout'
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import Link from "next/link";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Checkbox } from "primereact/checkbox";

import Viewpopup from "@/app/components/popup/viewpopup";
import AddInventoryPopup from "@/app/components/popup/addinventoryauditpopup"

export default function InventoryAudit() {
  const [visibleRight, setVisibleRight] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [rowClick, setRowClick] = useState(true);
  const [filters, setFilters] = useState(null);
  const [checked, setChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [addInventory, setAddInventory] = useState(false);

  
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const clearInput = () => {
    setInputValue('');
  };

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
          <button
            onClick={() => {
              setVisibleRight(true)
            }}
            
          >
            {" "}
            <i className="asetsmng-eye"></i>
          </button>
          <button onClick={() => setVisibleRight(true)}>
            {" "}
            <i className="asetsmng-edit-rounded-box"></i>
          </button>
          <button onClick={() => setDeleteuserpopup(true)}>
            {" "}
            <i className="asetsmng-trash"></i>
          </button>
        </div>
      </>
    );
  };

  const statusBodyTemplate = (rowData) => {
    if (rowData.Status === "Complete") {
      return (
        <div className="inline-flex items-center rounded-lg  border-[#18B557] bg-[#D1FAE4] text-[#075E43] text-[12px] font-medium py-[4px] xl:py-[0.208vw] px-[12px] xl:px-[0.625vw]">
          completed
        </div>
      );
    } else if (rowData.Status === "Sheduled") {
      return (
        <div className="inline-flex items-center rounded-lg  bg-[#FDE8E8] text-[#C81E1E] text-[12px] font-medium py-[4px] xl:py-[0.208vw] px-[12px] xl:px-[0.625vw]">
          Scheduled
        </div>
      );
    } else if (rowData.Status === "In Progress") {
      return (
        <div className="inline-flex items-center rounded-lg  bg-[#FDF2C8] text-[#D67309] text-[12px] font-medium py-[4px] xl:py-[0.208vw] px-[12px] xl:px-[0.625vw]">
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
    <>
    <div>
    <div className="mt-[16px] xl:mt-[0.833vw]">
          <div className="bg-white border border-[#F2EEEE] rounded-lg xl:rounded-[0.521vw] dark:bg-[#13161B] dark:border-[#1F2A37]">
             <div className="flex flex-wrap items-center justify-between 3xl:px-[1.042vw] px-4 3xl:pt-[1.042vw] pt-4 3xl:pb-[0.990vw] pb-4">
              <div className="flex flex-wrap items-center 3xl:gap-[0.521vw] gap-2">
                <div className="text-[#3A3E49] dark:text-white 3xl:text-[0.833vw] text-sm font-medium 3xl:leading-[1.042vw] leading-5">
                Manage Assets
                </div>
                <div className="text-[#84878D] 3xl:text-[0.625vw] text-xs font-medium 3xl:leading-[0.938vw] leading-5 bg-[#F9F9FC] dark:bg-[#1C2026] 3xl:rounded-[0.938vw] rounded-2xl 3xl:px-[0.729vw] px-3 3xl:py-[0.313vw] py-1">
                  Display 1 to 10 of 150
                </div>
              </div>
              <div className="flex flex-wrap items-center 3xl:gap-[0.833vw] gap-4">
                <div className="flex flex-wrap items-center 3xl:gap-[1.25vw] gap-5">
                <div>
                  <span className="p-input-icon-left custm-tdsearch p-input-icon-right">
                    <i className="asetsmng-td-search 3xl:text-[0.833vw] text-xs text-[#84878D] cursor-pointer w-fit" />
                    <InputText
                    value={inputValue}
                    onChange={handleChange}
                      placeholder="Search"
                      className="p-inputtext p-component 3xl:h-[1.875vw] h-[33px] 3xl:w-[16.927vw] placeholder:text-[#888888] placeholder:font-normal placeholder:3xl:text-[0.833vw] "
                    />
                    {inputValue && (
                    <i onClick={clearInput} className="asetsmng-cross 3xl:text-[0.521vw] text-[10px] leading-4 text-[#84878D] cursor-pointer" />
                    )}  
                  </span>
                </div>
                <div className="flex flex-wrap items-center 3xl:gap-[0.521vw] gap-2">
                <div
                    onClick={()=>setAddInventory(true)}
                    className="text-[#4169E1] font-normal 3xl:text-[0.729vw] text-xs bg-white border border-[#4169E1] 3xl:py-[0.521vw] py-2 3xl:px-[0.833vw] px-3 3xl:rounded-[0.521vw] rounded-lg flex items-center 3xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] 3xl:h-[1.875vw] cursor-pointer"
                  >
                    <i className="asetsmng-plus-rounded-box"></i>
                    <span>Add Inventory Audit </span>
                    
                  </div>
                  <div
                    className="text-[#84878D] font-normal 3xl:text-[0.729vw] text-xs bg-white border border-[#D3D3CE] 3xl:py-[0.521vw] py-2 3xl:px-[0.833vw] px-3 3xl:rounded-[0.521vw] rounded-lg flex items-center 3xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] 3xl:h-[1.875vw] hover:text-[#4169E1] hover:border-[#4169E1] cursor-pointer"
                  >
                    <i className="asetsmng-import"></i>
                    <span>Import</span>
                  </div>
                  <div
                    className="text-[#84878D] font-normal 3xl:text-[0.729vw] text-xs bg-white border border-[#D3D3CE] 3xl:py-[0.521vw] py-2 3xl:px-[0.833vw] px-3 3xl:rounded-[0.521vw] rounded-lg flex items-center 3xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] 3xl:h-[1.875vw] hover:text-[#4169E1] hover:border-[#4169E1] cursor-pointer"
                  >
                    <i className="asetsmng-export"></i>
                    <span>Export</span>
                  </div>
                </div>
                </div>
                <div className="flex items-center 3xl:gap-[0.417vw] gap-1.5">
                <div
                  className="bg-white rounded border border-[#D3D3CE] text-[#84878D] 3xl:text-[1.042vw] flex items-center justify-center text-base 3xl:p-[0.417vw] p-2 3xl:h-[1.875vw] h-[33px] 3xl:rounded-[0.417vw] hover:bg-[#4169E1] hover:text-white hover:border-[#4169E1] cursor-pointer"
                >
                  <i className="asetsmng-map-view"></i>
                </div>
                <div
                  className="bg-[#4169E1] rounded border text-white 3xl:text-[1.042vw] flex items-center justify-center text-base 3xl:p-[0.417vw] p-2 3xl:h-[1.875vw] h-[33px] 3xl:rounded-[0.417vw] cursor-pointer"
                >
                  <i className="asetsmng-grid-outline"></i>
                </div>
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
                style={{ minWidth: "20rem" }}
                body={statusBodyTemplate}
              ></Column>


              <Column
                field="action"
                header="Actions"
                className="action-shadow-table"
                frozen
                alignFrozen="right"
                align="center"
                style={{ minWidth: "1rem" }}
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

        <AddInventoryPopup
        visible={addInventory}
        position="right"
        onHides={() => setAddInventory(false)}

        />
    </div>
    </>
  );
}
