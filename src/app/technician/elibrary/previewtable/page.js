import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useState } from "react";

const PreviewTable = () => {
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [filters, setFilters] = useState(null);
  const [checked, setChecked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  // Data table
  const products = [
    {
      Index: "Doc - 100",
      image: "Avatar1",
      Title: "22.03.2020, 04:00",
      Designation: "Principal",
      CreatedDate: "29-02-2023",
      Type: "PDF",
      Size: "10,000 KB",
      Activate: "",
    },
    {
      Index: "Doc - 101",
      image: "Avatar2",
      Title: "24.01.2020, 01:00",
      Designation: "Principal",
      CreatedDate: "29-02-2023",
      Status: "Sheduled",
      Type: "PDF",
      Size: "10,000 KB",
      Activate: "",
    },
    {
      Index: "Doc - 102",
      image: "Avatar3",
      Title: "14.04.2020, 10:00",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "In Progress",
      Size: "10,000 KB",
      Type: "PDF",
      Activate: "",
    },
    {
      Index: "Doc - 103",
      image: "Avatar3",
      Title: "28.01.2020, 07:00",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "Complete",
      Size: "10,000 KB",
      Type: "PDF",
      Activate: "",
    },

    {
      Index: "Doc - 104",
      image: "Avatar3",
      Title: "11.04.2020, 17:30",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "Sheduled",
      Size: "10,000 KB",
      Type: "PDF",
      Activate: "",
    },
    {
      Index: "Doc - 105",
      image: "Avatar3",
      Title: "13.04.2020, 11:00",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "In Progress",
      Size: "10,000 KB",
      Type: "PDF",
      Activate: "",
    },
    {
      Index: "Doc - 106",
      image: "Avatar3",
      Title: "22.05.2020, 13:00",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "Sheduled",
      Size: "10,000 KB",
      Type: "PDF",
      Activate: "",
    },
    {
      Index: "Doc - 107",
      image: "Avatar3",
      Title: "14.02.2020, 18:00",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "Complete",
      Type: "PDF",
      Size: "10,000 KB",
      Activate: "",
    },
    {
      Index: "Doc - 108",
      image: "Avatar3",
      Title: "14.02.2020, 18:00",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "Complete",
      Size: "10,000 KB",
      Type: "PDF",
      Activate: "",
    },
    {
      Index: "Doc - 109",
      image: "Avatar3",
      Title: "14.02.2020, 18:00",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "In Progress",
      Type: "PDF",
      Size: "10,000 KB",
      Activate: "",
    },
    {
      Index: "Doc - 110",
      image: "Avatar3",
      Title: "14.02.2020, 18:00",
      Designation: "Assistant Principal",
      CreatedDate: "29-02-2023",
      Status: "Complete",
      Type: "PDF",
      Size: "10,000 KB",
      Activate: "",
    },
  ];
  return (
    <div className="pt-[24px] 3xl:pt-[1.25vw] pr-[24px] 3xl:pr-[1.25vw]">
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
            field="Index"
            header="File Name"
            style={{ minWidth: "8rem" }}
          ></Column>
          <Column
            field="Title"
            header="Date Modified"
            style={{ minWidth: "12rem" }}
          ></Column>
          <Column field="Type" header="Type"></Column>
          <Column field="Size" header="Size"></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default PreviewTable;
