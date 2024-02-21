import React, { useState } from "react";
import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { InputText } from "primereact/inputtext";
import { Tag } from 'primereact/tag';
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Checkbox } from "primereact/checkbox";

export default function Detailed() {
const [inputValue, setInputValue] = useState('');
const handleChange = (event) => {
setInputValue(event.target.value);
};
const clearInput = () => {
setInputValue(''); 
};

const [teamVisible , setteamVisible ] = useState(true);
const [technicianVisible, settechnicianVisible] = useState(false);

const toggleVisibility = () => {
  setteamVisible (!teamVisible );
  settechnicianVisible(!technicianVisible);
};

const [teamtableVisible , setteamtableVisible ] = useState(true);
const [categoryVisible, setcategoryVisible] = useState(false);

const toggleVisibility2 = () => {
  setteamtableVisible (!teamtableVisible );
  setcategoryVisible(!categoryVisible);
};


 // Data table
 const [rowClick, setRowClick] = useState(true);
 const [selectedProducts, setSelectedProducts] = useState(null);
 const [filters, setFilters] = useState(null);
   const products = [
       {
        Teamname: "Routers",
        Totalticket: "AC - 95826",
        Serialnumber: "2SR - 5318",
        AvgtimeresolveticketsdDays: "Local District - Northeast",
        Numberofunopenedtickets:'Apperson ES',
        Numberofclosedtickets:'Active',
        Numberofreroutefrom: "8/6/2022, 10:06:00 AM",
        Numberofrerouteto: "37.0902° N, 95.7129° W",
        Averageteamrating:"37.0902° N, 95.7129° W",
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
     const actionNameTemplate = (rowData) => {
      return (
        <>
          <div className="flex items-center 3xl:gap-[0.833vw] gap-3 text-[#888888] 3xl:text-[0.938vw] text-sm cursor-pointer" onClick={toggleVisibility2}>
            <i className="asetsmng-plus"></i><span>Team 1</span>
          </div>
        </>
      );
    };
     /*---Table End--*/
return (
<>
<Tabs className={'executiveCustTavbview'}>
   <div className="bg-white dark:bg-[#13161B] border border-[#F2EEEE] dark:border-[#1F2A37] rounded-lg 3xl:rounded-[0.521vw]">
      <div className="flex flex-wrap items-center justify-between 3xl:px-[1.042vw] px-4 3xl:pt-[1.042vw] pt-4 3xl:pb-[0.990vw] pb-4 border-b border-[#E4E7EC]">
         <div className="flex flex-wrap items-center 3xl:gap-[0.521vw] gap-2">
            <TabList>
               <Tab onClick={toggleVisibility}>Team</Tab>
               <Tab onClick={toggleVisibility}>Technician</Tab>
            </TabList>
            {teamVisible  &&
            <>
            {teamtableVisible &&
            <div className="flex items-center gap-3 3xl:gap-[0.625vw]">
              <Link href={''} className="3xl:py-[0.417vw] py-2 3xl:pl-[0.833vw] pl-4 text-[#4B586E] flex items-center gap-1 3xl:gap-[0.208vw]"><i className="asetsmng-home"></i><span>Team</span></Link>
              <Link href={''} className="text-[#9CA1AB] text-xs"><i className="asetsmng-arrow-right"></i></Link>
              <Link href={''} className="text-[#1570EF]"><span>Team</span></Link>
            </div>
            }
            {categoryVisible &&
            <div className="flex items-center gap-3 3xl:gap-[0.625vw]">
            <Link href={''} className="3xl:py-[0.417vw] py-2 3xl:pl-[0.833vw] pl-4 text-[#4B586E] flex items-center gap-1 3xl:gap-[0.208vw]"><i className="asetsmng-home"></i><span>Team</span></Link>
            <Link href={''} className="text-[#9CA1AB] text-xs"><i className="asetsmng-arrow-right"></i></Link>
            <Link href={''} className="text-[#9CA1AB]" onClick={toggleVisibility2}><span>Team 1</span></Link>
            <Link href={''} className="text-[#9CA1AB] text-xs"><i className="asetsmng-arrow-right"></i></Link>
            <Link href={''} className="text-[#1570EF]"><span>Category</span></Link>
            </div>
            }
            
            </>
            }
            {technicianVisible &&
            <div className="bg-[#F9F9FC] rounded-2xl 3xl:rounded-[0.833vw] py-1 3xl:py-[0.208vw] px-3 3xl:px-[0.625vw] text-[#84878D] text-xs font-medium leading-[18px] 3xl:text-[0.625vw] 3xl:leading-[0.938vw]">
            Display 1 to 10 of 150
            </div>
            }
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
                     className="text-[#84878D] font-normal 3xl:text-[0.729vw] text-xs bg-white border border-[#D3D3CE] 3xl:py-[0.521vw] py-2 3xl:px-[0.833vw] px-3 3xl:rounded-[0.521vw] rounded-lg flex items-center 3xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] 3xl:h-[1.875vw] hover:text-[#4169E1] hover:border-[#4169E1]"
                     >
                  <i className="asetsmng-export"></i>
                  <span>Export</span>
                  </Link>
               </div>
            </div>
         </div>
      </div>
      <TabPanel>
      <div>
      <Tabs className={'executiveTableInnerTab'}>
      <div className="3xl:py-[0.417vw] py-2 3xl:px-[1.042vw] px-5">
      <TabList>
      <Tab>All</Tab>
      <Tab>Monthly</Tab>
      <Tab>Weekly</Tab>
      </TabList>
      </div>
      <div>
      <TabPanel>
      {teamtableVisible &&
      <>
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
                "Teamname",
                "Totalticket",
                "Serialnumber",
                "representative.resolved",
                "AvgtimeresolveticketsdDays",
                "Numberofunopenedtickets",
                "Numberofclosedtickets",
                "Numberofreroutefrom",
                "Numberofrerouteto",
                "Averageteamrating",
              ]}
              dataKey="id">
              <Column
                field="Teamname"
                header="Team Name"
                body={actionNameTemplate}
                sortable
                style={{ minWidth: "10rem" }}
              ></Column>
              <Column
                field="Totalticket"
                header="Total Ticket"
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
                field="AvgtimeresolveticketsdDays"
                header="Avg Time to Resolve Tickets (Days)"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="Numberofunopenedtickets"
                header="Number of Unopened Tickets"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="Numberofclosedtickets"
                header="Number of Closed Tickets"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="Numberofreroutefrom"
                header="Number of Re-Route From"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="Numberofrerouteto"
                header="Number of Re-Route To"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="Averageteamrating"
                header="Average Team Rating"
                style={{ minWidth: "10rem" }}
                sortable
              ></Column>
            </DataTable>
            </>
            }
            {categoryVisible &&
            <>
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
                "Teamname",
                "Totalticket",
                "Serialnumber",
                "representative.resolved",
                "AvgtimeresolveticketsdDays",
                "Numberofunopenedtickets",
                "Numberofclosedtickets",
                "Numberofreroutefrom",
                "Numberofrerouteto",
                "Averageteamrating",
              ]}
              dataKey="id">
              <Column field="Teamname"
                header="Category"
                sortable
                style={{ minWidth: "10rem" }}
              ></Column>
              <Column
                field="Totalticket"
                header="Total Ticket"
                sortable
                style={{ minWidth: "10rem" }}
              ></Column>
              <Column
                field="Serialnumber"
                header="Resolved"
                sortable
                style={{ minWidth: "10rem" }}
              ></Column>
              <Column
                field="AvgtimeresolveticketsdDays"
                header="Avg Time to Resolve Tickets (Days)"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="Numberofunopenedtickets"
                header="Number of Unopened Tickets"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="Numberofclosedtickets"
                header="Number of Closed Tickets"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="Numberofreroutefrom"
                header="Number of Re-Route From"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="Numberofrerouteto"
                header="Number of Re-Route To"
                showFilterMatchModes={false}
                showFilterMenuOptions={false}
                showClearButton={false}
                showApplyButton={false}
                filter
                filterElement={SearchFilterTemplate}
                style={{ minWidth: "12rem" }}
              ></Column>
              <Column
                field="Averageteamrating"
                header="Average Team Rating"
                style={{ minWidth: "10rem" }}
                sortable
              ></Column>
            </DataTable>
            </>
            }
            
      </TabPanel>
      <TabPanel>
      Monthly Table
      </TabPanel>
      <TabPanel>
      Weekly Table
      </TabPanel>
      </div>
      </Tabs>
      </div>
      </TabPanel>
      <TabPanel>
         Technician Table
      </TabPanel>
   </div>
</Tabs>
</>
)
}