import React, { useState } from "react";
import Link from 'next/link'
import { Tag } from 'primereact/tag';
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import LogincoordinatesMap from "./logincoordinates";

export default function LocationHistoryTable() {
    // Data table
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [filters, setFilters] = useState(null);
    const products = [
        {
          Index: "1",
          Date: "08/12/2023",
          Time: "04:00 PM",
          IPAddress: "124.123.66.112",
          Coordinates:'33.8766,-118.2987',
          ZipCode:'91101',
        },
        {
            Index: "1",
            Date: "08/12/2023",
            Time: "04:00 PM",
            IPAddress: "124.123.66.112",
            Coordinates:'33.8766,-118.2987',
            ZipCode:'91101',
          },
          {
            Index: "1",
            Date: "08/12/2023",
            Time: "04:00 PM",
            IPAddress: "124.123.66.112",
            Coordinates:'33.8766,-118.2987',
            ZipCode:'91101',
          },
          {
            Index: "1",
            Date: "08/12/2023",
            Time: "04:00 PM",
            IPAddress: "124.123.66.112",
            Coordinates:'33.8766,-118.2987',
            ZipCode:'91101',
          },
          {
            Index: "1",
            Date: "08/12/2023",
            Time: "04:00 PM",
            IPAddress: "124.123.66.112",
            Coordinates:'33.8766,-118.2987',
            ZipCode:'91101',
          },
          {
            Index: "1",
            Date: "08/12/2023",
            Time: "04:00 PM",
            IPAddress: "124.123.66.112",
            Coordinates:'33.8766,-118.2987',
            ZipCode:'91101',
          },
          {
            Index: "1",
            Date: "08/12/2023",
            Time: "04:00 PM",
            IPAddress: "124.123.66.112",
            Coordinates:'33.8766,-118.2987',
            ZipCode:'91101',
          },
          {
            Index: "1",
            Date: "08/12/2023",
            Time: "04:00 PM",
            IPAddress: "124.123.66.112",
            Coordinates:'33.8766,-118.2987',
            ZipCode:'91101',
          },
          {
            Index: "1",
            Date: "08/12/2023",
            Time: "04:00 PM",
            IPAddress: "124.123.66.112",
            Coordinates:'33.8766,-118.2987',
            ZipCode:'91101',
          },
          {
            Index: "1",
            Date: "08/12/2023",
            Time: "04:00 PM",
            IPAddress: "124.123.66.112",
            Coordinates:'33.8766,-118.2987',
            ZipCode:'91101',
          },
      ];
    
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
                  style={{ }}
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

    
      /*---Table End--*/

      const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const clearInput = () => {
    setInputValue('');
  };

  return (
    <>
    <div className="bg-white dark:bg-[#13161B] border border-[#F2EEEE] dark:border-[#1F2A37] rounded-lg 3xl:rounded-[0.521vw]">
            <div className="flex flex-wrap items-center justify-between 3xl:px-[1.042vw] px-4 3xl:pt-[1.042vw] pt-4 3xl:pb-[0.990vw] pb-4">
              <div className="flex flex-wrap items-center 3xl:gap-[0.521vw] gap-2">
                <div className="text-[#3A3E49] dark:text-white 3xl:text-[0.833vw] text-sm font-medium 3xl:leading-[1.042vw] leading-5">
                Location History
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
                "Index",
                "Date",
                "representative.Time",
                "IPAddress",
                "Coordinates",
              ]}
              dataKey="id"
            >
              <Column
                selectionMode="multiple"
                style={{ width: "2rem" }}
              ></Column>
              <Column
                field="Index"
                header="Index"
                sortable
                style={{ minWidth: "5rem" }}
              ></Column>
              <Column
                field="Date"
                header="Date"
                sortable
                style={{ minWidth: "10rem" }}
              ></Column>
              <Column
                field="Time"
                header="Time"
                sortable
                style={{ minWidth: "10rem" }}
              ></Column>
              <Column
                field="IPAddress"
                header="IP Address"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "10rem" }}
              ></Column>
              <Column
                field="Coordinates"
                header="Coordinates"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "9rem" }}
              ></Column>
              <Column
                field="ZipCode"
                header="Zip Code"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "8rem" }}
              ></Column>
            </DataTable>
          </div>
    </>
  );
}
