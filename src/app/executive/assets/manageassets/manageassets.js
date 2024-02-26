import React, { useState } from "react";
import Link from 'next/link'
import { Tag } from 'primereact/tag';
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import LogincoordinatesMap from "./logincoordinates";

export default function ManageAssets() {
  const [logincoordinates, setlogincoordinates] = useState(false);
    // Data table
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [filters, setFilters] = useState(null);
    const products = [
        {
          Type: "Routers",
          Assetcode: "AC - 95826",
          Serialnumber: "2SR - 5318",
          District: "Local District - Northeast",
          School:'Apperson ES',
          Status:'Active',
          Lastlogindatetime: "8/6/2022, 10:06:00 AM",
          Lastlogincoordinates: "37.0902° N, 95.7129° W",
        },
        {
            Type: "Computers",
            Assetcode: "AC - 95826",
            Serialnumber: "2SR - 5318",
            District: "Local District - Northeast",
            School:'Apperson ES',
            Status:'Active',
            Lastlogindatetime: "8/6/2022, 10:06:00 AM",
            Lastlogincoordinates: "37.0902° N, 95.7129° W",
          },
          {
            Type: "Computers",
            Assetcode: "AC - 95826",
            Serialnumber: "2SR - 5318",
            District: "Local District - Northeast",
            School:'Apperson ES',
            Status:'Active',
            Lastlogindatetime: "8/6/2022, 10:06:00 AM",
            Lastlogincoordinates: "37.0902° N, 95.7129° W",
          },
          {
            Type: "Computers",
            Assetcode: "AC - 95826",
            Serialnumber: "2SR - 5318",
            District: "Local District - Northeast",
            School:'Apperson ES',
            Status:'Active',
            Lastlogindatetime: "8/6/2022, 10:06:00 AM",
            Lastlogincoordinates: "37.0902° N, 95.7129° W",
          },
          {
            Type: "Computers",
            Assetcode: "AC - 95826",
            Serialnumber: "2SR - 5318",
            District: "Local District - Northeast",
            School:'Apperson ES',
            Status:'Active',
            Lastlogindatetime: "8/6/2022, 10:06:00 AM",
            Lastlogincoordinates: "37.0902° N, 95.7129° W",
          },
          {
            Type: "Computers",
            Assetcode: "AC - 95826",
            Serialnumber: "2SR - 5318",
            District: "Local District - Northeast",
            School:'Apperson ES',
            Status:'Active',
            Lastlogindatetime: "8/6/2022, 10:06:00 AM",
            Lastlogincoordinates: "37.0902° N, 95.7129° W",
          },
          {
            Type: "Computers",
            Assetcode: "AC - 95826",
            Serialnumber: "2SR - 5318",
            District: "Local District - Northeast",
            School:'Apperson ES',
            Status:'Active',
            Lastlogindatetime: "8/6/2022, 10:06:00 AM",
            Lastlogincoordinates: "37.0902° N, 95.7129° W",
          },
          {
            Type: "Computers",
            Assetcode: "AC - 95826",
            Serialnumber: "2SR - 5318",
            District: "Local District - Northeast",
            School:'Apperson ES',
            Status:'Active',
            Lastlogindatetime: "8/6/2022, 10:06:00 AM",
            Lastlogincoordinates: "37.0902° N, 95.7129° W",
          },
          {
            Type: "Computers",
            Assetcode: "AC - 95826",
            Serialnumber: "2SR - 5318",
            District: "Local District - Northeast",
            School:'Apperson ES',
            Status:'Active',
            Lastlogindatetime: "8/6/2022, 10:06:00 AM",
            Lastlogincoordinates: "37.0902° N, 95.7129° W",
          },
          {
            Type: "Computers",
            Assetcode: "AC - 95826",
            Serialnumber: "2SR - 5318",
            District: "Local District - Northeast",
            School:'Apperson ES',
            Status:'Active',
            Lastlogindatetime: "8/6/2022, 10:06:00 AM",
            Lastlogincoordinates: "37.0902° N, 95.7129° W",
          },
          {
            Type: "Computers",
            Assetcode: "AC - 95826",
            Serialnumber: "2SR - 5318",
            District: "Local District - Northeast",
            School:'Apperson ES',
            Status:'Active',
            Lastlogindatetime: "8/6/2022, 10:06:00 AM",
            Lastlogincoordinates: "37.0902° N, 95.7129° W",
          },
          {
            Type: "Computers",
            Assetcode: "AC - 95826",
            Serialnumber: "2SR - 5318",
            District: "Local District - Northeast",
            School:'Apperson ES',
            Status:'Active',
            Lastlogindatetime: "8/6/2022, 10:06:00 AM",
            Lastlogincoordinates: "37.0902° N, 95.7129° W",
          },
          {
            Type: "Computers",
            Assetcode: "AC - 95826",
            Serialnumber: "2SR - 5318",
            District: "Local District - Northeast",
            School:'Apperson ES',
            Status:'Active',
            Lastlogindatetime: "8/6/2022, 10:06:00 AM",
            Lastlogincoordinates: "37.0902° N, 95.7129° W",
          },
          {
            Type: "Computers",
            Assetcode: "AC - 95826",
            Serialnumber: "2SR - 5318",
            District: "Local District - Northeast",
            School:'Apperson ES',
            Status:'Active',
            Lastlogindatetime: "8/6/2022, 10:06:00 AM",
            Lastlogincoordinates: "37.0902° N, 95.7129° W",
          },
          {
            Type: "Computers",
            Assetcode: "AC - 95826",
            Serialnumber: "2SR - 5318",
            District: "Local District - Northeast",
            School:'Apperson ES',
            Status:'Active',
            Lastlogindatetime: "8/6/2022, 10:06:00 AM",
            Lastlogincoordinates: "37.0902° N, 95.7129° W",
          },
          {
            Type: "Computers",
            Assetcode: "AC - 95826",
            Serialnumber: "2SR - 5318",
            District: "Local District - Northeast",
            School:'Apperson ES',
            Status:'Active',
            Lastlogindatetime: "8/6/2022, 10:06:00 AM",
            Lastlogincoordinates: "37.0902° N, 95.7129° W",
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

      const LastlogincoordinatesTemplate = (rowData) => {
        return (
          <>
            <div className="text-[#3A3E49] 3xl:text-[0.729vw] text-xs font-normal" onClick={() => setlogincoordinates(true)}>
            37.0902° N, 95.7129° W
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
    <div className="bg-white border border-[#F2EEEE] rounded-lg 3xl:rounded-[0.521vw]">
            <div className="flex flex-wrap items-center justify-between 3xl:px-[1.042vw] px-4 3xl:pt-[1.042vw] pt-4 3xl:pb-[0.990vw] pb-4">
              <div className="flex flex-wrap items-center 3xl:gap-[0.521vw] gap-2">
                <div className="text-[#3A3E49] 3xl:text-[0.833vw] text-sm font-medium 3xl:leading-[1.042vw] leading-5">
                Manage Assets
                </div>
                <div className="text-[#84878D] 3xl:text-[0.625vw] text-xs font-medium 3xl:leading-[0.938vw] leading-5 bg-[#F9F9FC] 3xl:rounded-[0.938vw] rounded-2xl 3xl:px-[0.729vw] px-3 3xl:py-[0.313vw] py-1">
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
                <Link
                    href={""}
                    className="text-[#4169E1] font-normal 3xl:text-[0.729vw] text-xs bg-white border border-[#4169E1] 3xl:py-[0.521vw] py-2 3xl:px-[0.833vw] px-3 3xl:rounded-[0.521vw] rounded-lg flex items-center 3xl:gap-[0.521vw] gap-2 h-[33px] 3xl:h-[1.875vw]"
                  >
                    <i className="asetsmng-plus-rounded-box"></i>
                    <span>Add Assets</span>
                  </Link>
                  <Link
                    href={""}
                    className="text-[#84878D] font-normal 3xl:text-[0.729vw] text-xs bg-white border border-[#D3D3CE] 3xl:py-[0.521vw] py-2 3xl:px-[0.833vw] px-3 3xl:rounded-[0.521vw] rounded-lg flex items-center 3xl:gap-[0.521vw] gap-2 h-[33px] 3xl:h-[1.875vw] hover:text-[#4169E1] hover:border-[#4169E1]"
                  >
                    <i className="asetsmng-import"></i>
                    <span>Import</span>
                  </Link>
                  <Link
                    href={""}
                    className="text-[#84878D] font-normal 3xl:text-[0.729vw] text-xs bg-white border border-[#D3D3CE] 3xl:py-[0.521vw] py-2 3xl:px-[0.833vw] px-3 3xl:rounded-[0.521vw] rounded-lg flex items-center 3xl:gap-[0.521vw] gap-2  h-[33px] 3xl:h-[1.875vw] hover:text-[#4169E1] hover:border-[#4169E1]"
                  >
                    <i className="asetsmng-export"></i>
                    <span>Export</span>
                  </Link>
                </div>
                </div>
                <div className="flex items-center 3xl:gap-[0.417vw] gap-1.5">
                <Link
                  href={""}
                  className="bg-white rounded-lg border border-[#D3D3CE] text-[#84878D] 3xl:text-[1.042vw] flex items-center justify-center text-base 3xl:p-[0.417vw] p-2 3xl:h-[1.875vw] h-[33px] 3xl:rounded-[0.417vw] hover:bg-[#4169E1] hover:text-white hover:border-[#4169E1]"
                >
                  <i className="asetsmng-map-view"></i>
                </Link>
                <Link
                  href={""}
                  className="bg-[#4169E1] rounded-lg border text-white 3xl:text-[1.042vw] flex items-center justify-center text-base 3xl:p-[0.417vw] p-2 3xl:h-[1.875vw] h-[33px] 3xl:rounded-[0.417vw]"
                >
                  <i className="asetsmng-grid-outline"></i>
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
                selectionMode="multiple"
                style={{ maxWidth: "3rem" }}
              ></Column>
              <Column
                field="Type"
                header="Type"
                sortable
                style={{ minWidth: "5rem" }}
              ></Column>
              <Column
                field="Assetcode"
                header="Asset Code"
                sortable
                style={{ minWidth: "10rem" }}
              ></Column>
              <Column
                field="Serialnumber"
                header="Serial Number"
                sortable
                style={{ minWidth: "10rem" }}
              ></Column>
              <Column
                field="District"
                header="District"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "10rem" }}
              ></Column>
              <Column
                field="School"
                header="School"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "9rem" }}
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
                body={statusBodyTemplate}
                style={{ minWidth: "8rem" }}
              ></Column>
              <Column
                field="Lastlogindatetime"
                header="Last Login - Date/time"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="Lastlogincoordinates"
                header="Last login - coordinates"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "12rem" }}
                body={LastlogincoordinatesTemplate}
              ></Column>
              <Column
                field="Action"
                header="Action"
                style={{ minWidth: "5rem" }}
                align="center"
                body={actionBodyTemplate}
                frozen
                alignFrozen="right"
              ></Column>
            </DataTable>
          </div>

          <LogincoordinatesMap
        visible={logincoordinates}
        onHides={() => setlogincoordinates(false)}
      />
    </>
  );
}
