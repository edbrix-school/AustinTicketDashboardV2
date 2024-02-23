"use client";

import React, { useState } from "react";
import PageLayout from "@/app/components/pagelayout/pagelayout";
import FilterComponent from "@/app/components/filtercomponent";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import Link from "next/link";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import AdvancedSearchPopup from "@/app/components/popup/advancedsearch";
import Docspopup from "@/app/components/popup/docspopup";

const page = () => {
  const [pageName, setPageName] = useState("E-Library");
  const [inputValue, setInputValue] = useState("");
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [documentPopup, setDocumentPopup] = useState(false);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const [orderBy, setOrderBy] = useState(null);
  const [groupSchool, setGroupSchool] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [filters, setFilters] = useState(null);
  const [checked, setChecked] = useState(false);
  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <div className="flex justify-start text-[16px] gap-[10px] xl:gap-[1.042vw] w-full">
          <Link href="">
            {" "}
            <i className="asetsmng-edit-rounded-box text-[#84878D]"></i>
          </Link>
          <Link href="">
            {" "}
            <i className="asetsmng-printer text-[#84878D]"></i>
          </Link>
          <Link
            href="#"
          >
            {" "}
            <i className="asetsmng-share text-[#84878D]"></i>
          </Link>
          <Link href="">
            {" "}
            <i className="asetsmng-trash text-[#84878D]"></i>
          </Link>

        </div>
      </>
    );
  };
  // Data table
  const products = [
    {
      id: "1100",
      Index: "Doc - 100",
      image: "Avatar1",
      Title: "22/11/2023",
      Designation: "Principal",
      CreatedDate: "29-02-2023",
      Type: "Doc",
      Size: "100 KB",
      Activate: "",
    },
    {
      id: "1101",
      Index: "Doc - 101",
      image: "Avatar2",
      Title: "22/11/2023",
      Designation: "Principal",
      CreatedDate: "29-02-2023",
      Status: "Sheduled",
      Type: "PDF",
      Size: "1 MB",
      Activate: "",
    },
    {
      id: "1102",
      Index: "Doc - 102",
      image: "Avatar3",
      Title: "22/11/2023",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "In Progress",
      Size: "1.5 MB",
      Type: "Doc",
      Activate: "",
    },
    {
      id: "1103",
      Index: "Doc - 103",
      image: "Avatar3",
      Title: "22/11/2023",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "Complete",
      Size: "100 KB",
      Type: "CSV",
      Activate: "",
    },

    {
      id: "1104",
      Index: "Doc - 104",
      image: "Avatar3",
      Title: "22/11/2023",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "Sheduled",
      Size: "1 MB",
      Type: "Doc",
      Activate: "",
    },
    {
      id: "1105",
      Index: "Doc - 105",
      image: "Avatar3",
      Title: "22/11/2023",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "In Progress",
      Size: "1.2 MB",
      Type: "Doc",
      Activate: "",
    },
    {
      id: "1106",
      Index: "Doc - 106",
      image: "Avatar3",
      Title: "22/11/2023",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "Sheduled",
      Size: "100 KB",
      Type: "PDF",
      Activate: "",
    },
    {
      id: "1107",
      Index: "Doc - 107",
      image: "Avatar3",
      Title: "22/11/2023",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "Complete",
      Type: "CSV",
      Size: "1 MB",
      Activate: "",
    },
    {
      id: "1108",
      Index: "Doc - 108",
      image: "Avatar3",
      Title: "22/11/2023",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "Complete",
      Size: "1 MB",
      Type: "Doc",
      Activate: "",
    },
    {
      id: "1109",
      Index: "Doc - 109",
      image: "Avatar3",
      Title: "22/11/2023",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "In Progress",
      Type: "Doc",
      Size: "1 MB",
      Activate: "",
    },
    {
      id: "1110",
      Index: "Doc - 110",
      image: "Avatar3",
      Title: "22/11/2023",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "Complete",
      Type: "PDF",
      Size: "1 MB",
      Activate: "",
    },
  ];
  const DocPopup = (rowData) => {
    return (
      <div onClick={() => setDocumentPopup(true)}>{rowData.Index}</div>
    )
  }

  return (
    <PageLayout topTab={true} pageTitle="E-Library" pageName={pageName}>
      <FilterComponent />
      <div className="grid gap-[12px] 3xl:gap-[0.625vw]">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-[8px] 3xl:gap-[0.417vw]">
            <div className="flex gap-[10px] 3xl:gap-[0.521vw]">
              <span className="p-input-icon-left custm-tdsearch p-input-icon-right">
                <i className="asetsmng-td-search 3xl:text-[0.833vw] text-xs text-[#84878D] cursor-pointer w-fit" />
                <InputText
                  value={inputValue}
                  onChange={handleChange}
                  placeholder="Search"
                  className="p-inputtext p-component 3xl:h-[1.875vw] h-[33px] w-[300px] 3xl:w-[16.927vw] placeholder:text-[#888888] placeholder:font-normal placeholder:3xl:text-[0.833vw] "
                />
                <i className="asetsmng-cross 3xl:text-[0.521vw] text-[10px] leading-4 text-[#84878D] cursor-pointer" />
              </span>
              <div className="bg-[#4169e1] flex justify-center items-center w-[35px] 3xl:w-[1.823vw] rounded-lg">
                <i className="asetsmng-td-search 3xl:text-[0.833vw] text-xs text-[#FFF] cursor-pointer w-fit" />
              </div>
            </div>
            <div
              onClick={() => setAdvancedSearch(true)}
              className="text-[#4169e1] text-[14px] 3xl:text-[0.729vw] font-medium leading-4 cursor-pointer"
            >
              Advanced Search
            </div>
          </div>
          <div className="flex gap-[12px] 3xl:gap-[0.625vw]">
            <div className="custDropdownBox">
              <Dropdown
                value={orderBy}
                onChange={(e) => setOrderBy(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Order by"
                className="w-full md:w-14rem border 3xl:h-[2.083vw] h-[36px]"
              />
            </div>

            <div className="custDropdownBox">
              <Dropdown
                value={groupSchool}
                onChange={(e) => setGroupSchool(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Group by School"
                className="w-full md:w-14rem border 3xl:h-[2.083vw] h-[36px]"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[16px] xl:gap-[0.833vw]">
            <i className="asetsmng-home text-[16px] 3xl:text-[0.833vw] text-[#84878d]"></i>
            <div className="text-[#84878d] text-[14px] 3xl:text-[0.729vw]">
              Home
            </div>
            <i className="asetsmng-arrow-right text-[12px] 3xl:text-[0.625vw] text-[#84878d]"></i>
            <Link href={"/technician/elibrary"} className="text-[#3a3e49] text-[14px] 3xl:text-[0.729vw]">
              District 1
            </Link>
            <i className="asetsmng-arrow-right text-[12px] 3xl:text-[0.625vw] text-[#84878d]"></i>
            <Link href={"/technician/elibrary/allison"} className="text-[#3a3e49] text-[14px] 3xl:text-[0.729vw]">
              Allison
            </Link>
            <i className="asetsmng-arrow-right text-[12px] 3xl:text-[0.625vw] text-[#84878d]"></i>
            <Link href={"/technician/elibrary/allison/computer"} className="text-[#3a3e49] text-[14px] 3xl:text-[0.729vw]">
              Computer
            </Link>
            <i className="asetsmng-arrow-right text-[12px] 3xl:text-[0.625vw] text-[#84878d]"></i>
            <Link href={""} className="text-[#3A3E49] text-[14px] 3xl:text-[0.729vw]">
              SR - 113
            </Link>
          </div>
          <div className="flex gap-[16px] 3xl:gap-[0.833vw]">
            <div className="flex flex-wrap items-center 3xl:gap-[0.521vw] gap-2">
              <Link
                href="/technician/elibrary/adddocument"
                className="text-[#4169E1] font-normal 3xl:text-[0.729vw] text-xs bg-white border border-[#4169E1] 3xl:py-[0.521vw] py-2 3xl:px-[0.833vw] px-3 3xl:rounded-[0.521vw] rounded-lg flex items-center 3xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] 3xl:h-[1.875vw]"
              >
                <i className="asetsmng-text-doc"></i>
                <span>Add Documents</span>
              </Link>
              <Link
                href={""}
                className="text-[#84878D] font-normal 3xl:text-[0.729vw] text-xs bg-white border border-[#D3D3CE] 3xl:py-[0.521vw] py-2 3xl:px-[0.833vw] px-3 3xl:rounded-[0.521vw] rounded-lg flex items-center 3xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] 3xl:h-[1.875vw] hover:text-[#4169E1] hover:border-[#4169E1]"
              >
                <i className="asetsmng-export"></i>
                <span>Export</span>
              </Link>
            </div>
            <div className="flex items-center 3xl:gap-[0.417vw] gap-1.5">
              <Link
                href={""}
                className="bg-white rounded border border-[#D3D3CE] text-[#84878D] 3xl:text-[1.042vw] flex items-center justify-center text-base 3xl:p-[0.417vw] p-2 3xl:h-[1.875vw] h-[33px] 3xl:rounded-[0.417vw] hover:bg-[#4169E1] hover:text-white hover:border-[#4169E1]"
              >
                <i className="asetsmng-menu 3xl:text-[0.625vw] text-[12px]"></i>
              </Link>
              <Link
                href={""}
                className="bg-[#4169E1] rounded border text-white 3xl:text-[1.042vw] flex items-center justify-center text-base 3xl:p-[0.417vw] p-2 3xl:h-[1.875vw] h-[33px] 3xl:rounded-[0.417vw]"
              >
                <i className="asetsmng-grid-outline"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid xl:mt-[1.250vw] mt-6 xl:gap-[1.250vw] gap-5">
        <div className="border border-[#E4E7EC] rounded-lg">
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
              style={{ minWidth: "1rem", maxWidth: "1rem" }}
            ></Column>
            <Column
              field="Index"
              header="File Name"
              style={{ minWidth: "8rem" }}
              body={DocPopup}
            ></Column>
            <Column
              field="Title"
              header="Date Modified"
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column field="Type" header="Type"></Column>
            <Column field="Size" header="Size"></Column>
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
      <AdvancedSearchPopup
        visible={advancedSearch}
        onHides={() => setAdvancedSearch(false)}
      />
      <Docspopup
        visible={documentPopup}
        onHides={() => setDocumentPopup(false)} />
    </PageLayout>
  );
};

export default page;
