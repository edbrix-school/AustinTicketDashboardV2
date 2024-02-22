import React, { useState } from "react";
import Link from 'next/link'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";

export default function TechnicianMonthlyTable() {
    // Data table
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [filters, setFilters] = useState(null);
    
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


      const [sales] = useState([
        {
          product: '1',
          technicianname:'Tech 1',
          technicianID:'E101221',
          technicianemail:'mail@domain',
          totalticket: 100,
          resolved: '40 (40%)',
          resolvedwithinSLA: '20 (20%)',
          resolvedoutsideSLA: '20 (20%)',
          avgtimeresolveticketsdays:'4.5',
          numberunopenedtickets:'10 (10%)',
          numberclosedtickets:'5 (5%)',
          febtotalticket:'100',
          febresolved:'40 (40%)',
          febavgtimeresolvetickets:'4.5'
        },
        { 
          product: '2',
          technicianname:'Tech 2',
          technicianID:'E101221',
          technicianemail:'mail@domain',
          totalticket: 100,
          resolved: '40 (40%)',
          resolvedwithinSLA: '20 (20%)',
          resolvedoutsideSLA: '20 (20%)',
          avgtimeresolveticketsdays:'4.5',
          numberunopenedtickets:'10 (10%)',
          numberclosedtickets:'5 (5%)',
          febtotalticket:'100',
          febresolved:'40 (40%)',
          febavgtimeresolvetickets:'4.5'
         },
        { 
          product: '3',
          technicianname:'Tech 3',
          technicianID:'E101221',
          technicianemail:'mail@domain',
          totalticket: 100,
          resolved: '40 (40%)',
          resolvedwithinSLA: '20 (20%)',
          resolvedoutsideSLA: '20 (20%)',
          avgtimeresolveticketsdays:'4.5',
          numberunopenedtickets:'10 (10%)',
          numberclosedtickets:'5 (5%)',
          febtotalticket:'100',
          febresolved:'40 (40%)',
          febavgtimeresolvetickets:'4.5'
         },
        { 
          product: '4',
          technicianname:'Tech 4',
          technicianID:'E101221',
          technicianemail:'mail@domain',
          totalticket: 100,
          resolved: '40 (40%)',
          resolvedwithinSLA: '20 (20%)',
          resolvedoutsideSLA: '20 (20%)',
          avgtimeresolveticketsdays:'4.5',
          numberunopenedtickets:'10 (10%)',
          numberclosedtickets:'5 (5%)',
          febtotalticket:'100',
          febresolved:'40 (40%)',
          febavgtimeresolvetickets:'4.5'
         },
        { 
          product: '5',
          technicianname:'Tech 5',
          technicianID:'E101221',
          technicianemail:'mail@domain',
          totalticket: 100,
          resolved: '40 (40%)',
          resolvedwithinSLA: '20 (20%)',
          resolvedoutsideSLA: '20 (20%)',
          avgtimeresolveticketsdays:'4.5',
          numberunopenedtickets:'10 (10%)',
          numberclosedtickets:'5 (5%)',
          febtotalticket:'100',
          febresolved:'40 (40%)',
          febavgtimeresolvetickets:'4.5'
         },
        { 
          product: '6',
          technicianname:'Tech 6',
          technicianID:'E101221',
          technicianemail:'mail@domain',
          totalticket: 100,
          resolved: '40 (40%)',
          resolvedwithinSLA: '20 (20%)',
          resolvedoutsideSLA: '20 (20%)',
          avgtimeresolveticketsdays:'4.5',
          numberunopenedtickets:'10 (10%)',
          numberclosedtickets:'5 (5%)',
          febtotalticket:'100',
          febresolved:'40 (40%)',
          febavgtimeresolvetickets:'4.5'
         },
        { 
          product: '7',
          technicianname:'Tech 7',
          technicianID:'E101221',
          technicianemail:'mail@domain',
          totalticket: 100,
          resolved: '40 (40%)',
          resolvedwithinSLA: '20 (20%)',
          resolvedoutsideSLA: '20 (20%)',
          avgtimeresolveticketsdays:'4.5',
          numberunopenedtickets:'10 (10%)',
          numberclosedtickets:'5 (5%)',
          febtotalticket:'100',
          febresolved:'40 (40%)',
          febavgtimeresolvetickets:'4.5'
         },
        { 
          product: '8',
          technicianname:'Tech 8',
          technicianID:'E101221',
          technicianemail:'mail@domain',
          totalticket: 100,
          resolved: '40 (40%)',
          resolvedwithinSLA: '20 (20%)',
          resolvedoutsideSLA: '20 (20%)',
          avgtimeresolveticketsdays:'4.5',
          numberunopenedtickets:'10 (10%)',
          numberclosedtickets:'5 (5%)',
          febtotalticket:'100',
          febresolved:'40 (40%)',
          febavgtimeresolvetickets:'4.5'
         },
        { 
          product: '9',
          technicianname:'Tech 9',
          technicianID:'E101221',
          technicianemail:'mail@domain',
          totalticket: 100,
          resolved: '40 (40%)',
          resolvedwithinSLA: '20 (20%)',
          resolvedoutsideSLA: '20 (20%)',
          avgtimeresolveticketsdays:'4.5',
          numberunopenedtickets:'10 (10%)',
          numberclosedtickets:'5 (5%)',
          febtotalticket:'100',
          febresolved:'40 (40%)',
          febavgtimeresolvetickets:'4.5'
         },
        { 
          product: '10',
          technicianname:'Tech 10',
          technicianID:'E101221',
          technicianemail:'mail@domain',
          totalticket: 100,
          resolved: '40 (40%)',
          resolvedwithinSLA: '20 (20%)',
          resolvedoutsideSLA: '20 (20%)',
          avgtimeresolveticketsdays:'4.5',
          numberunopenedtickets:'10 (10%)',
          numberclosedtickets:'5 (5%)',
          febtotalticket:'100',
          febresolved:'40 (40%)',
          febavgtimeresolvetickets:'4.5'
         },
        { 
          product: '11',
          technicianname:'Tech 11',
          technicianID:'E101221',
          technicianemail:'mail@domain',
          totalticket: 100,
          resolved: '40 (40%)',
          resolvedwithinSLA: '20 (20%)',
          resolvedoutsideSLA: '20 (20%)',
          avgtimeresolveticketsdays:'4.5',
          numberunopenedtickets:'10 (10%)',
          numberclosedtickets:'5 (5%)',
          febtotalticket:'100',
          febresolved:'40 (40%)',
          febavgtimeresolvetickets:'4.5'
         }
    ]);

    

    const headerGroup = (
        <ColumnGroup>
            <Row>
                <Column colSpan={9} />
                <Column header="December 2023" colSpan={3}  align="center" headerClassName="custmheading first_position"  />
                <Column header="January 2024" colSpan={3}  align="center" headerClassName="centercustmheading center_position" />
                <Column header="February 2023" colSpan={3} align="center" headerClassName="custmheading last_position"  />
            </Row>
            
            <Row>
                <Column header="S.No" sortable  />
                <Column header="Technician Name" sortable  />
                <Column header="Technician ID" sortable  />
                <Column header="Technician Email" sortable />
                <Column header="Total Ticket" sortable field="totalticket" />
                <Column header="Resolved" sortable field="resolved" />
                <Column header="Avg Time to Resolve Tickets (Days)" sortable field="avgtimeresolveticketsdays" />
                <Column header="Number of Unopened Tickets" sortable field="numberunopenedtickets" />
                <Column header="Number of Closed Tickets" sortable field="numberclosedtickets" />

                <Column header="Total Ticket" sortable frozen alignFrozen="right"  field="febtotalticket" headerClassName="custmfrozem-subhead subheadigncustm" />
                <Column header="Resolved" sortable frozen alignFrozen="right" field="febresolved" headerClassName="subheadigncustm" />
                <Column header="Avg Time to Resolve Tickets" sortable frozen alignFrozen="right" field="febavgtimeresolvetickets" headerClassName="subheadigncustm" />
                <Column header="Total Ticket" sortable frozen alignFrozen="right" field="febtotalticket" />
                <Column header="Resolved" sortable frozen alignFrozen="right" field="febresolved" />
                <Column header="Avg Time to Resolve Tickets" sortable frozen alignFrozen="right" field="febavgtimeresolvetickets" />
                <Column header="Total Ticket" sortable frozen alignFrozen="right" field="febtotalticket" headerClassName="subheadigncustm" />
                <Column header="Resolved" sortable frozen alignFrozen="right" field="febresolved" headerClassName="subheadigncustm" />
                <Column header="Avg Time to Resolve Tickets" sortable frozen alignFrozen="right" field="febavgtimeresolvetickets" headerClassName="subheadigncustm" />
            </Row>
        </ColumnGroup>
    );

    const footerGroup = (
        <ColumnGroup>
            <Row>
                <Column footer="Totals:" style={{ minWidth: "10rem" }} />
                <Column  />
                <Column  />
                <Column  />
                <Column footer={'10000'} />
                <Column footer={'600'} />
                <Column footer={'400'} />
                <Column footer={'90'} />
                <Column footer={'80'} />
                
                <Column footer={'1000'} frozen alignFrozen="right" className="custmfrozem" />
                <Column footer={'40(40%)'} frozen alignFrozen="right" />
                <Column footer={'3'} frozen alignFrozen="right" className="cusmtb_right_br" />
                <Column footer={'1000'} frozen  alignFrozen="right"/>
                <Column footer={'40(40%)'} frozen  alignFrozen="right"/>
                <Column footer={'3'} frozen alignFrozen="right" className="cusmtb_right_br" />
                <Column footer={'1000'} frozen alignFrozen="right" />
                <Column footer={'40(40%)'} frozen alignFrozen="right" />
                <Column footer={'3'} frozen alignFrozen="right" />
            </Row>
        </ColumnGroup>
    );

  return (
    <>
            <DataTable value={sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup} tableStyle={{ minWidth: '100%' }} className="custTable tableCust custCheckBox" paginator
              paginatorTemplate="CurrentPageReport RowsPerPageDropdown PrevPageLink PageLinks NextPageLink custmpaginator"
              currentPageReportTemplate="Rows per page  {first}-{last} of {totalRecords}"
              rowsPerPageOptions={[5, 10, 25, 50]}  rows={10} scrollable
              responsiveLayout="scroll"
              style={{ width: "100%" }}>
                <Column field="product" style={{ minWidth: "10rem" }} />
                <Column field="technicianname" style={{ minWidth: "12rem" }}  />
                <Column field="technicianID" style={{ minWidth: "9rem" }} />
                <Column field="technicianemail" style={{ minWidth: "10rem" }}  />
                <Column field="totalticket"  style={{ minWidth: "9rem" }} />
                <Column field="resolved"  style={{ minWidth: "8rem" }} />
                <Column field="avgtimeresolveticketsdays" style={{ minWidth: "17rem" }} />
                <Column field="numberunopenedtickets"  style={{ minWidth: "15rem" }} />
                <Column field="numberclosedtickets"  style={{ minWidth: "14rem" }} />
                
                <Column field="febtotalticket" frozen alignFrozen="right" style={{ minWidth: "7rem" }} className="custmfrozem" />
                <Column field="febresolved"  frozen alignFrozen="right" style={{ minWidth: "7rem" }} />
                <Column field="febavgtimeresolvetickets" frozen alignFrozen="right" style={{ minWidth: "9rem" }} className="cusmtb_right_br" />
                <Column field="febtotalticket" frozen alignFrozen="right" style={{ minWidth: "7rem" }} />
                <Column field="febresolved"  frozen alignFrozen="right" style={{ minWidth: "7rem" }} />
                <Column field="febavgtimeresolvetickets" frozen alignFrozen="right" style={{ minWidth: "9rem" }} className="cusmtb_right_br" />
                <Column field="febtotalticket" frozen alignFrozen="right" style={{ minWidth: "7rem" }} />
                <Column field="febresolved"  frozen alignFrozen="right" style={{ minWidth: "7rem" }} />
                <Column field="febavgtimeresolvetickets" frozen alignFrozen="right" style={{ minWidth: "9rem" }} />
            </DataTable>
    </>
  );
}
