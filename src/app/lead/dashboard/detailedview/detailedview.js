import React, { useState } from "react";
import Link from 'next/link';
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from 'primereact/tag';
import { Checkbox } from "primereact/checkbox";


export default function detailedview() {
  const [logincoordinates, setlogincoordinates] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [rowClick, setRowClick] = useState(true);
  const [filters, setFilters] = useState(null);

  const products = [
    {
      sno: '1',
      Technicianname: 'Tech 1',
      Technicianid: 'E101221',
      Technicianemail: 'mail@domain',
      Totalticket: '100',
      Resolved: '40(40%)',
      Resolvedwithinsla: '20(20%)',
      Resolvedoutsidesla: '20(20%)',
      Avgtimetoresolveticketsdays: '4.5',
      Numberofunopnedtickets: '10(10%)',
      Numberofclosedtickets: '5(5%)',
      Numberofrerouteform: '20',
      Numberofrerouteto: '10',
      Averagetechnicianrating: '3',
    },
    {
      sno: '2',
      Technicianname: 'Tech 2',
      Technicianid: 'E101221',
      Technicianemail: 'mail@domain',
      Totalticket: '100',
      Resolved: '40(40%)',
      Resolvedwithinsla: '20(20%)',
      Resolvedoutsidesla: '20(20%)',
      Avgtimetoresolveticketsdays: '4.5',
      Numberofunopnedtickets: '10(10%)',
      Numberofclosedtickets: '5(5%)',
      Numberofrerouteform: '20',
      Numberofrerouteto: '10',
      Averagetechnicianrating: '3',
    },
    {
      sno: '3',
      Technicianname: 'Tech 3',
      Technicianid: 'E101221',
      Technicianemail: 'mail@domain',
      Totalticket: '100',
      Resolved: '40(40%)',
      Resolvedwithinsla: '20(20%)',
      Resolvedoutsidesla: '20(20%)',
      Avgtimetoresolveticketsdays: '4.5',
      Numberofunopnedtickets: '10(10%)',
      Numberofclosedtickets: '5(5%)',
      Numberofrerouteform: '20',
      Numberofrerouteto: '10',
      Averagetechnicianrating: '3',
    },
    {
      sno: '4',
      Technicianname: 'Tech 4',
      Technicianid: 'E101221',
      Technicianemail: 'mail@domain',
      Totalticket: '100',
      Resolved: '40(40%)',
      Resolvedwithinsla: '20(20%)',
      Resolvedoutsidesla: '20(20%)',
      Avgtimetoresolveticketsdays: '4.5',
      Numberofunopnedtickets: '10(10%)',
      Numberofclosedtickets: '5(5%)',
      Numberofrerouteform: '20',
      Numberofrerouteto: '10',
      Averagetechnicianrating: '3',
    },
    {
      sno: '5',
      Technicianname: 'Tech 5',
      Technicianid: 'E101221',
      Technicianemail: 'mail@domain',
      Totalticket: '100',
      Resolved: '40(40%)',
      Resolvedwithinsla: '20(20%)',
      Resolvedoutsidesla: '20(20%)',
      Avgtimetoresolveticketsdays: '4.5',
      Numberofunopnedtickets: '10(10%)',
      Numberofclosedtickets: '5(5%)',
      Numberofrerouteform: '20',
      Numberofrerouteto: '10',
      Averagetechnicianrating: '3',
    },
    {
      sno: '6',
      Technicianname: 'Tech 6',
      Technicianid: 'E101221',
      Technicianemail: 'mail@domain',
      Totalticket: '100',
      Resolved: '40(40%)',
      Resolvedwithinsla: '20(20%)',
      Resolvedoutsidesla: '20(20%)',
      Avgtimetoresolveticketsdays: '4.5',
      Numberofunopnedtickets: '10(10%)',
      Numberofclosedtickets: '5(5%)',
      Numberofrerouteform: '20',
      Numberofrerouteto: '10',
      Averagetechnicianrating: '3',
    },
    {
      sno: '7',
      Technicianname: 'Tech 7',
      Technicianid: 'E101221',
      Technicianemail: 'mail@domain',
      Totalticket: '100',
      Resolved: '40(40%)',
      Resolvedwithinsla: '20(20%)',
      Resolvedoutsidesla: '20(20%)',
      Avgtimetoresolveticketsdays: '4.5',
      Numberofunopnedtickets: '10(10%)',
      Numberofclosedtickets: '5(5%)',
      Numberofrerouteform: '20',
      Numberofrerouteto: '10',
      Averagetechnicianrating: '3',
    },
    {
      sno: '8',
      Technicianname: 'Tech 8',
      Technicianid: 'E101221',
      Technicianemail: 'mail@domain',
      Totalticket: '100',
      Resolved: '40(40%)',
      Resolvedwithinsla: '20(20%)',
      Resolvedoutsidesla: '20(20%)',
      Avgtimetoresolveticketsdays: '4.5',
      Numberofunopnedtickets: '10(10%)',
      Numberofclosedtickets: '5(5%)',
      Numberofrerouteform: '20',
      Numberofrerouteto: '10',
      Averagetechnicianrating: '3',
    },
    {
      sno: '9',
      Technicianname: 'Tech 9',
      Technicianid: 'E101221',
      Technicianemail: 'mail@domain',
      Totalticket: '100',
      Resolved: '40(40%)',
      Resolvedwithinsla: '20(20%)',
      Resolvedoutsidesla: '20(20%)',
      Avgtimetoresolveticketsdays: '4.5',
      Numberofunopnedtickets: '10(10%)',
      Numberofclosedtickets: '5(5%)',
      Numberofrerouteform: '20',
      Numberofrerouteto: '10',
      Averagetechnicianrating: '3',
    },
    {
      sno: '10',
      Technicianname: 'Tech 10',
      Technicianid: 'E101221',
      Technicianemail: 'mail@domain',
      Totalticket: '100',
      Resolved: '40(40%)',
      Resolvedwithinsla: '20(20%)',
      Resolvedoutsidesla: '20(20%)',
      Avgtimetoresolveticketsdays: '4.5',
      Numberofunopnedtickets: '10(10%)',
      Numberofclosedtickets: '5(5%)',
      Numberofrerouteform: '20',
      Numberofrerouteto: '10',
      Averagetechnicianrating: '3',
    },
    {
      sno: '11',
      Technicianname: 'Tech 11',
      Technicianid: 'E101221',
      Technicianemail: 'mail@domain',
      Totalticket: '100',
      Resolved: '40(40%)',
      Resolvedwithinsla: '20(20%)',
      Resolvedoutsidesla: '20(20%)',
      Avgtimetoresolveticketsdays: '4.5',
      Numberofunopnedtickets: '10(10%)',
      Numberofclosedtickets: '5(5%)',
      Numberofrerouteform: '20',
      Numberofrerouteto: '10',
      Averagetechnicianrating: '3',
    }, 
  ];

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const clearInput = () => {
    setInputValue('');
  };

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

  const SearchFilterTemplate = (options) => {
    return (
      <>
        <div className="SearchFilter 3xl:p-[0.729vw] p-3 3xl:rounded-[0.521vw] rounded-lg bg-white boxshadow01 3xl:space-y-[0.625vw] space-y-3">
          <span className="p-input-icon-left custm-td-filterserach">
            <i
              className="asetsmng-td-search"
              style={{ color: "#9CA1AB", fontSize: "0.8rem" }}
            />
            <InputText
              placeholder="Search"
              className="3xl:h-[1.875vw] h-[36px] placeholder:font-normal placeholder:text-[#9CA1AB] placeholder:3xl:text-[0.729vw] placeholder:text-sm"
              style={{}}
            />
          </span>
          <div className="flex flex-col 3xl:gap-[0.625vw] gap-2">
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
                  <label
                    htmlFor={category.key}
                    className="ml-2 font-medium text-[#374151] 3xl:text-[0.833vw] text-sm"
                  >
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

  const LastlogincoordinatesTemplate = (rowData) => {
    return (
      <>
        <div className="text-[#3A3E49] 3xl:text-[0.729vw] text-xs font-normal" onClick={() => setlogincoordinates(true)}>
          37.0902° N, 95.7129° W
        </div>
      </>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        <div className="flex items-center 3xl:gap-[0.833vw] gap-3 text-[#888888] 3xl:text-[0.938vw] text-sm">
          <Link href={""}>
            <i className="asetsmng-eye"></i>
          </Link>
          <Link href={""}>
            <i className="asetsmng-edit-rounded-box"></i>
          </Link>
        </div>
      </>
    );
  };

  const statusBodyTemplate = (product) => {
    return <Tag value={product.Status} severity={getSeverity(product)}></Tag>;
  };

  const getSeverity = (product) => {
    switch (product.Status) {
      case 'Active':
        return 'success';

      case 'Inactive':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-[#13161B] border border-[#F2EEEE] dark:border-[#1F2A37] rounded-lg 3xl:rounded-[0.521vw]">
        <div className="flex flex-wrap items-center justify-between 3xl:px-[1.042vw] px-4 3xl:pt-[1.042vw] pt-4 3xl:pb-[0.990vw] pb-4">
          <div className="flex flex-wrap items-center 3xl:gap-[0.521vw] gap-2">
            <div className="text-[#3A3E49] dark:text-white 3xl:text-[0.833vw] text-sm font-medium 3xl:leading-[1.042vw] leading-5">
              Detailed View
            </div>
            <div className="text-[#84878D] 3xl:text-[0.625vw] text-xs font-medium 3xl:leading-[0.938vw] leading-5 bg-[#F9F9FC] dark:bg-[#1C2026] 3xl:rounded-[0.938vw] rounded-2xl 3xl:px-[0.729vw] px-3 3xl:py-[0.313vw] py-1">
              Display 1 to 10 of 150
            </div>
          </div>
          <div className="flex flex-wrap items-center 3xl:gap-[0.833vw] gap-4">
            <div className="flex flex-wrap items-center 3xl:gap-[1.25vw] gap-5">
              <div>
                <span className="p-input-icon-left custm-tdsearch p-input-icon-right">
                  <i className="asetsmng-td-search 3xl:text-[0.833vw] text-base text-[#84878D] cursor-pointer w-fit" />
                  <InputText
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Search"
                    className="p-inputtext p-component 3xl:h-[1.875vw] h-[33px] w-[300px] 3xl:w-[16.927vw] placeholder:text-[#888888] placeholder:font-normal placeholder:3xl:text-[0.833vw] "
                  />
                  {inputValue && (
                    <i onClick={clearInput} className="asetsmng-cross 3xl:text-[0.521vw] text-xs w-3 h-4 flex items-center justify-center text-[#84878D] cursor-pointer" />
                  )}
                </span>
              </div>
              <div className="flex flex-wrap items-center 3xl:gap-[0.521vw] gap-2">
                {/* <Link
                    href={""}
                    className="text-[#4169E1] font-normal 3xl:text-[0.729vw] text-xs bg-white border border-[#4169E1] 3xl:py-[0.521vw] py-2 3xl:px-[0.833vw] px-3 3xl:rounded-[0.521vw] rounded-lg flex items-center 3xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] 3xl:h-[1.875vw]"
                  >
                    <i className="asetsmng-plus-rounded-box"></i>
                    <span>Add Assets</span>
                  </Link> */}
                {/* <Link
                    href={""}
                    className="text-[#84878D] font-normal 3xl:text-[0.729vw] text-xs bg-white border border-[#D3D3CE] 3xl:py-[0.521vw] py-2 3xl:px-[0.833vw] px-3 3xl:rounded-[0.521vw] rounded-lg flex items-center 3xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] 3xl:h-[1.875vw] hover:text-[#4169E1] hover:border-[#4169E1]"
                  >
                    <i className="asetsmng-import"></i>
                    <span>Import</span>
                  </Link> */}
                <Link
                  href={""}
                  className="text-[#84878D] font-normal 3xl:text-[0.729vw] text-xs bg-white border border-[#EAE0E0] p-[9px] xl:p-[0.469vw] 3xl:rounded-[0.521vw] rounded-lg flex items-center 3xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] 3xl:h-[1.875vw] hover:text-[#4169E1] hover:border-[#4169E1]"
                >
                  <i className="asetsmng-export"></i>
                  <span>Export</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center 3xl:gap-[0.417vw] gap-1.5">
              <Link
                href={""}
                className="bg-white rounded-lg border border-[#EAE0E0] text-[#424242] text-[18px] 3xl:text-[0.938vw] flex items-center justify-center p-[9px] xl:p-[0.469vw] 3xl:rounded-[0.417vw] "
              >
                <i className="asetsmng-arrow-left-think"></i>
              </Link>
              <Link
                href={""}
                className="bg-white rounded-lg border border-[#EAE0E0] text-[#424242] text-[18px] 3xl:text-[0.938vw] flex items-center justify-center p-[9px] xl:p-[0.469vw] 3xl:rounded-[0.417vw]"
              >
                <i className="asetsmng-arrow-right-think"></i>
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
            "Type",
            "Assetcode",
            "representative.Serialnumber",
            "District",
            "School",
          ]}
          dataKey="id"
        >
          <Column
            field="sno"
            header="S.No"
            footer="Overall"
            sortable
            style={{ minWidth: "15rem" }}
          ></Column>
          <Column
            field="Technicianname"
            header="Technician Name"
            sortable
            style={{ minWidth: "15rem" }}
          ></Column>
          <Column
            field="Technicianid"
            header="Technician ID"
            sortable
            style={{ minWidth: "16rem" }}
          ></Column>
          <Column
            field="Technicianemail"
            header="Technician Email"
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "20rem" }}
          ></Column>
          <Column
            field="Totalticket"
            header="Total Ticket"
            footer="10000"
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "18rem" }}
          ></Column>
          <Column
            field="Resolved"
            header="Resolved"
            footer="600"
            filter
            filterElement={SearchFilterTemplate}
            style={{ minWidth: "18rem" }}
          ></Column>
          <Column
            field="Resolvedwithinsla"
            header="Resolved (within SLA)"
            footer="400"
            sortable
            style={{ minWidth: "18rem" }}
          ></Column>
          <Column
            field="Resolvedoutsidesla"
            header="Resolved (outside SLA)"
            footer="500"
            sortable
            style={{ minWidth: "19rem" }}
          ></Column>
          <Column
            field="Avgtimetoresolveticketsdays"
            header="Avg Time to Resolve Tickets(Days)"
            footer="3"
            sortable
            style={{ minWidth: "27rem" }}
          ></Column>
          <Column
            field="Numberofunopnedtickets"
            header="Number of Unopned Tickets"
            footer="90"
            sortable
            style={{ minWidth: "25rem" }}
          ></Column>
          <Column
            field="Numberofclosedtickets"
            header="Number of Closed Tickets"
            footer="80"
            sortable
            style={{ minWidth: "24rem" }}
          ></Column>
          <Column
            field="Numberofrerouteform"
            header="Number of Re-Route Form"
            sortable
            style={{ minWidth: "20rem" }}
          ></Column>
          <Column
            field="Numberofrerouteto"
            header="Number of Re-Route To"
            sortable
            style={{ minWidth: "22rem" }}
          ></Column>
          <Column
            field="Averagetechnicianrating"
            header="Average Technician Rating"
            footer="3"
            sortable
            style={{ minWidth: "20rem" }}
          ></Column>
          
        </DataTable>
      </div>

      {/* <LogincoordinatesMap
        visible={logincoordinates}
        onHides={() => setlogincoordinates(false)}
      /> */}
    </>
  )
}
