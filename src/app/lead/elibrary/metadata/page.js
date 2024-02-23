"use client";
import React, { useState } from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import Image from "next/image";

const MetadataPage = () => {
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [filters, setFilters] = useState(null);
  // Data table
  const products = [
    {
      Index: "Letter 1",
      comment:"Lorem ipsum dolor sit amet consectetur.",
      Title: "Thursday, 06 July 2023",
      CreatedDate: "29-02-2023",
      representative:[
        { name: 'Robert Fox', image: 'robert.png' },
      ]
    },
    {
      Index: "Letter 2",
      comment:"Lorem ipsum dolor sit amet consectetur.",
      Title: "Thursday, 06 July 2023",
      Designation: "Principal",
      CreatedDate: "29-02-2023",
      representative:[
        { name: 'Eleanor Pena', image: 'roberttwo.png' },
      ]
    },
    {
      Index: "Letter 2",
      comment:"Lorem ipsum dolor sit amet consectetur.",
      Title: "Thursday, 06 July 2023",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      representative:[
        { name: 'Cody Fisher', image: 'robertthree.png' },
      ]
    },
    {
      Index: "Letter 2",
      comment:"Lorem ipsum dolor sit amet consectetur.",
      Title: "Thursday, 06 July 2023",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      representative:[
        { name: 'Eleanor Pena', image: 'robertfour.png' },
      ]
    },

    {
      Index: "Letter 2",
      comment:"Lorem ipsum dolor sit amet consectetur.",
      Title: "Thursday, 06 July 2023",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      representative:[
        { name: 'Courtney Henry', image: 'robertfive.png' },
      ]
    },
  ];
  const BodyTemplate = (rowData) => {
    const representative = rowData.representative;

    return (
        <div className="flex align-items-center gap-2">
            <Image alt={representative.name} src={`/assets/images/${representative[0].image}`} width={24} height={24}  />
            <span>{representative[0].name}</span>
        </div>
    );
};
  return (
    <div className="pt-[24px] 3xl:pt-[1.25vw] pr-[24px] 3xl:pr-[1.25vw]">
      <div className="border rounded-lg py-[12px] 3xl:py-[0.625vw] px-[16px] 3xl:px-[0.833vw] flex justify-between ">
        <div className="flex items-center gap-[20px] 3xl:gap-[1.042vw]">
          <div>
            <i className="asetsmng-folder-fill text-[50px] 3xl:text-[2.604vw] text-[#84878D]"></i>
          </div>
          <div className="grid gap-[8px] 3xl:gap-[0.417vw]">
            <div className="font-medium text-[16px] 3xl:text-[0.833vw] text-[#3A3E49] leading-5">
              SR - 113
            </div>
            <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
              <div>
                <i className="asetsmng-calendar-fill text-[16px] 3xl:text-[0.833vw] text-[#84878D]"></i>
              </div>
              <div className="text-[#84878D] text-[14px] 3xl:text-[0.729vw] leading-4 font-light">
                Modified: Thursday, 6 July 2023 18:51
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-end flex-col items-end gap-[8px] 3xl:gap-[0.417vw]">
            <div className="font-medium text-[16px] 3xl:text-[0.833vw] text-[#3A3E49] leading-5">
              Size: 29,8 GB
            </div>
            <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
              <div>
                <i className="asetsmng-id-fill text-[16px] 3xl:text-[0.833vw] text-[#84878D]"></i>
              </div>
              <div className="text-[#84878D] text-[14px] 3xl:text-[0.729vw] leading-4 font-light">
                Last Modified by: Paul Walker
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid w-full pt-[24px] 3xl:pt-[1.25vw]">
        <div className="text-[16px] 3xl:text-[0.833vw] font-medium leading-5 text-[#3A3E49] bg-[#F1F4FD] p-[8px] 3xl:p-[0.625vw] rounded-lg">
          General
        </div>
        <div className="flex justify-between items-center px-[16px] 3xl:px-[0.833vw] py-[10px] 3xl:py-[0.521vw] border-b">
          <div className="text-[14px] font-normal leading-4 3xl:text-[0.729vw]">
            Type
          </div>
          <div className="text-[14px] font-normal leading-4 3xl:text-[0.729vw]">
            Folder
          </div>
        </div>
        <div className="flex justify-between items-center px-[16px] 3xl:px-[0.833vw] py-[10px] 3xl:py-[0.521vw] border-b">
          <div className="text-[14px] font-normal leading-4 3xl:text-[0.729vw]">
            Size
          </div>
          <div className="text-[14px] font-normal leading-4 3xl:text-[0.729vw]">
            29.546.551.600 bytes (29,74 GB)
          </div>
        </div>
        <div className="flex justify-between items-center px-[16px] 3xl:px-[0.833vw] py-[10px] 3xl:py-[0.521vw] border-b">
          <div className="text-[14px] font-normal leading-4 3xl:text-[0.729vw]">
            Qtd Documents
          </div>
          <div className="text-[14px] font-normal leading-4 3xl:text-[0.729vw]">
            12.212
          </div>
        </div>
        <div className="flex justify-between items-center px-[16px] 3xl:px-[0.833vw] py-[10px] 3xl:py-[0.521vw] border-b">
          <div className="text-[14px] font-normal leading-4 3xl:text-[0.729vw]">
            Where
          </div>
          <div className="text-[14px] font-normal leading-4 3xl:text-[0.729vw]">
            Home &gt; District 1 &gt; Allison &gt; Computer &gt; SR -113
          </div>
        </div>
        <div className="flex justify-between items-center px-[16px] 3xl:px-[0.833vw] py-[10px] 3xl:py-[0.521vw] border-b">
          <div className="text-[14px] font-normal leading-4 3xl:text-[0.729vw]">
            Created in
          </div>
          <div className="text-[14px] font-normal leading-4 3xl:text-[0.729vw]">
            26 February 2022 05:05
          </div>
        </div>
        <div className="flex justify-between items-center px-[16px] 3xl:px-[0.833vw] py-[10px] 3xl:py-[0.521vw] border-b">
          <div className="text-[14px] font-normal leading-4 3xl:text-[0.729vw]">
            Last modified
          </div>
          <div className="text-[14px] font-normal leading-4 3xl:text-[0.729vw]">
            Thursday, 06 July 2023 18:51
          </div>
        </div>
      </div>
      <div className="pt-[24px] 3xl:pt-[1.25vw] grid w-full gap-[8px] 3xl:gap-[0.417vw]">
        <div className="text-[16px] 3xl:text-[0.833vw] font-medium leading-5 text-[#3A3E49] bg-[#F1F4FD] p-[8px] 3xl:p-[0.625vw] rounded-lg">
          Last modified
        </div>
        <div className="border border-[#E4E7EC] rounded-lg">
          <DataTable
            value={products}
            className="custTable tableCust custCheckBox"
            scrollable
            responsiveLayout="scroll"
            style={{ width: "100%" }}
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
              field="representative"
              header="Modified by"
              body={BodyTemplate}
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="Index"
              header="File Name"
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column field="Title" header="Date Modified"></Column>
            <Column field="comment" header="Comments"></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default MetadataPage;
