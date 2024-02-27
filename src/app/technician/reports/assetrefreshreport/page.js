"use client";
import React, { useState } from 'react';
import PageLayout from '@/app/components/pagelayout/pagelayout';
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import Link from 'next/link';

export default function Index() {
    const [rowClick, setRowClick] = useState(true);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [filters, setFilters] = useState(null);
    const products = [
        {
            Type: "Hardware",
            Assetcode: "AC - 95826",
            Serialnumber: "SR - 5318",
            Model: 'Acer - 11223',
            Manufacturer: 'Acer',
            Category: 'Laptop',
            Campus: 'Allison',
            CreatedDate: '22/11/2016',
            ExpiryDate: '22/12/2023',
            DayslefttoExpire: '31',
            EstimatedReplacementCost: '$4,500',
        },
        {
            Type: "Hardware",
            Assetcode: "AC - 95826",
            Serialnumber: "SR - 5318",
            Model: 'Acer - 11223',
            Manufacturer: 'Acer',
            Category: 'Laptop',
            Campus: 'Allison',
            CreatedDate: '22/11/2016',
            ExpiryDate: '22/12/2023',
            DayslefttoExpire: '1',
            EstimatedReplacementCost: '$4,500',
        },
        {
            Type: "Hardware",
            Assetcode: "AC - 95826",
            Serialnumber: "SR - 5318",
            Model: 'Acer - 11223',
            Manufacturer: 'Acer',
            Category: 'Laptop',
            Campus: 'Allison',
            CreatedDate: '22/11/2016',
            ExpiryDate: '22/12/2023',
            DayslefttoExpire: '101',
            EstimatedReplacementCost: '$4,500',
        },
        {
            Type: "Hardware",
            Assetcode: "AC - 95826",
            Serialnumber: "SR - 5318",
            Model: 'Acer - 11223',
            Manufacturer: 'Acer',
            Category: 'Laptop',
            Campus: 'Allison',
            CreatedDate: '22/11/2016',
            ExpiryDate: '22/12/2023',
            DayslefttoExpire: '31',
            EstimatedReplacementCost: '$4,500',
        },
        {
            Type: "Hardware",
            Assetcode: "AC - 95826",
            Serialnumber: "SR - 5318",
            Model: 'Acer - 11223',
            Manufacturer: 'Acer',
            Category: 'Laptop',
            Campus: 'Allison',
            CreatedDate: '22/11/2016',
            ExpiryDate: '22/12/2023',
            DayslefttoExpire: '31',
            EstimatedReplacementCost: '$4,500',
        },
        {
            Type: "Hardware",
            Assetcode: "AC - 95826",
            Serialnumber: "SR - 5318",
            Model: 'Acer - 11223',
            Manufacturer: 'Acer',
            Category: 'Laptop',
            Campus: 'Allison',
            CreatedDate: '22/11/2016',
            ExpiryDate: '22/12/2023',
            DayslefttoExpire: '31',
            EstimatedReplacementCost: '$4,500',
        },
        {
            Type: "Hardware",
            Assetcode: "AC - 95826",
            Serialnumber: "SR - 5318",
            Model: 'Acer - 11223',
            Manufacturer: 'Acer',
            Category: 'Laptop',
            Campus: 'Allison',
            CreatedDate: '22/11/2016',
            ExpiryDate: '22/12/2023',
            DayslefttoExpire: '31',
            EstimatedReplacementCost: '$4,500',
        },
        {
            Type: "Hardware",
            Assetcode: "AC - 95826",
            Serialnumber: "SR - 5318",
            Model: 'Acer - 11223',
            Manufacturer: 'Acer',
            Category: 'Laptop',
            Campus: 'Allison',
            CreatedDate: '22/11/2016',
            ExpiryDate: '22/12/2023',
            DayslefttoExpire: '31',
            EstimatedReplacementCost: '$4,500',
        },
        {
            Type: "Hardware",
            Assetcode: "AC - 95826",
            Serialnumber: "SR - 5318",
            Model: 'Acer - 11223',
            Manufacturer: 'Acer',
            Category: 'Laptop',
            Campus: 'Allison',
            CreatedDate: '22/11/2016',
            ExpiryDate: '22/12/2023',
            DayslefttoExpire: '31',
            EstimatedReplacementCost: '$4,500',
        },
        {
            Type: "Hardware",
            Assetcode: "AC - 95826",
            Serialnumber: "SR - 5318",
            Model: 'Acer - 11223',
            Manufacturer: 'Acer',
            Category: 'Laptop',
            Campus: 'Allison',
            CreatedDate: '22/11/2016',
            ExpiryDate: '22/12/2023',
            DayslefttoExpire: '31',
            EstimatedReplacementCost: '$4,500',
        },
        {
            Type: "Hardware",
            Assetcode: "AC - 95826",
            Serialnumber: "SR - 5318",
            Model: 'Acer - 11223',
            Manufacturer: 'Acer',
            Category: 'Laptop',
            Campus: 'Allison',
            CreatedDate: '22/11/2016',
            ExpiryDate: '22/12/2023',
            DayslefttoExpire: '31',
            EstimatedReplacementCost: '$4,500',
        },
        {
            Type: "Hardware",
            Assetcode: "AC - 95826",
            Serialnumber: "SR - 5318",
            Model: 'Acer - 11223',
            Manufacturer: 'Acer',
            Category: 'Laptop',
            Campus: 'Allison',
            CreatedDate: '22/11/2016',
            ExpiryDate: '22/12/2023',
            DayslefttoExpire: '31',
            EstimatedReplacementCost: '$4,500',
        },
        {
            Type: "Hardware",
            Assetcode: "AC - 95826",
            Serialnumber: "SR - 5318",
            Model: 'Acer - 11223',
            Manufacturer: 'Acer',
            Category: 'Laptop',
            Campus: 'Allison',
            CreatedDate: '22/11/2016',
            ExpiryDate: '22/12/2023',
            DayslefttoExpire: '31',
            EstimatedReplacementCost: '$4,500',
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

    const DayslefttoExpireBody = (rowData) => {
        return (
            <>
                <div className={`${rowData.DayslefttoExpire >= 100 ? 'bg-[#D1FAE4]' : rowData.DayslefttoExpire >= 10 ? 'bg-[#E6DDA2]' : 'bg-[#815C27] text-[#E4E4E4]'}  text-[#3A3E49] font-medium  rounded-md px-[8px] lg:px-[8px] 3xl:px-[0.417vw] py-[2px] inline-block`}>
                    {rowData.DayslefttoExpire}
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
        <PageLayout topTab={true} pageTitle={'Asset Refresh Report'} parentPageName={["Reports", "Standard Reports"]} pageName={'Asset Refresh Report'}>
            <div className="3xl:mt-[1.25vw] mt-6">
                <div className="bg-white border border-[#F2EEEE] rounded-lg 3xl:rounded-[0.521vw]">
                    <div className="flex flex-wrap items-center justify-between 3xl:px-[1.042vw] px-4 3xl:pt-[1.042vw] pt-4 3xl:pb-[0.990vw] pb-4">
                        <div className="flex flex-wrap items-center 3xl:gap-[0.521vw] gap-2">
                            <div className="text-[#3A3E49] 3xl:text-[0.833vw] text-sm font-medium 3xl:leading-[1.042vw] leading-5">
                                Asset Refresh Report
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
                                        className="text-[#84878D] font-normal 3xl:text-[0.729vw] text-xs bg-white border border-[#D3D3CE] 3xl:py-[0.521vw] py-2 3xl:px-[0.833vw] px-3 3xl:rounded-[0.521vw] rounded-lg flex items-center 3xl:gap-[0.521vw] gap-2 h-[33px] 3xl:h-[1.875vw] hover:text-[#4169E1] hover:border-[#4169E1]"
                                    >
                                        <i className="asetsmng-export"></i>
                                        <span>Export</span>
                                    </Link>
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
                            field="Type"
                            header="Type"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
                            style={{ minWidth: "9rem" }}
                        ></Column>
                        <Column
                            field="Model"
                            header="Model"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="Manufacturer"
                            header="Manufacturer"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
                            style={{ minWidth: "9rem" }}
                        ></Column>
                        <Column
                            field="Category"
                            header="Category"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
                            style={{ minWidth: "12rem" }}
                        ></Column>
                        <Column
                            field="Campus"
                            header="Campus"
                            showFilterMatchModes={false}
                            showFilterMenuOptions={false}
                            showClearButton={false}
                            showApplyButton={false}
                            filter
                            filterElement={SearchFilterTemplate}
                            style={{ minWidth: "12rem" }}
                        ></Column>
                        <Column
                            field="CreatedDate"
                            header="Created Date"
                            sortable
                            style={{ minWidth: "12rem" }}
                        ></Column>
                        <Column
                            field="ExpiryDate"
                            header="Expiry Date"
                            sortable
                            style={{ minWidth: "12rem" }}
                        ></Column>
                        <Column
                            field="DayslefttoExpire"
                            header="Days left to Expire"
                            sortable
                            style={{ minWidth: "12rem" }}
                            body={DayslefttoExpireBody}
                        ></Column>
                        <Column
                            field="EstimatedReplacementCost"
                            header="Estimated Replacement Cost"
                            sortable
                            style={{ minWidth: "15rem" }}
                        ></Column>


                    </DataTable>
                </div>
            </div>
        </PageLayout>
    )
}
