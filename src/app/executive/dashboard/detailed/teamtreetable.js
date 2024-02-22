import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Column } from "primereact/column";
import { TreeTable } from 'primereact/treetable';
import { DetailsTree } from './treetabledata';

export default function TeamtreetableComponent() {
const [nodes, setNodes] = useState([]);

useEffect(() => {
DetailsTree.getTreeTableNodes().then((data) => setNodes(data));
}, []);
return (
<>
    <TreeTable value={nodes} tableStyle={{ minWidth: '100%' }} 
    className="custTable tableCust custCheckBox"
    paginator
    paginatorTemplate="CurrentPageReport RowsPerPageDropdown PrevPageLink PageLinks NextPageLink custmpaginator"
    currentPageReportTemplate="Rows per page  {first}-{last} of {totalRecords}"
    rowsPerPageOptions={[5, 10, 25, 50]}
    rows={10}>
    <Column field="teamname" header="Team Name" expander sortable style={{ width: "10rem" }} expanderIcon="asetsmng-minus"></Column>
    <Column field="totalticket" header="Total Ticket" sortable style={{ width: "10rem" }}></Column>
    <Column field="resolved" header="Resolved" sortable style={{ width: "10rem" }}></Column>
    <Column field="avgtimeresolveticketsdays" header="Avg Time to Resolve Tickets (Days)" style={{ width: "15rem" }} sortable></Column>
    <Column field="numberunopenedtickets" header="Number of Unopened Tickets" style={{ width: "12rem" }} sortable></Column>
    <Column field="numberclosedtickets" header="Number of Closed Tickets" style={{ width: "12rem" }} sortable></Column>
    <Column field="numberreroutefrom" header="Number of Re-Route From" style={{ width: "12rem" }} sortable></Column>
    <Column field="numberrerouteto" header="Number of Re-Route To" style={{ width: "12rem" }} sortable></Column>
    <Column field="averageteamrating" header="Average Team Rating" style={{ width: "12rem" }} sortable></Column>
    </TreeTable>
</>
)
}