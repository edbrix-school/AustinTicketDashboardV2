import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function productinformationtab() {
  const products = [
    {
      name: "Graphics Controller Manufacturer",
      code: "Intel®",
    },
    {
      name: "Graphics Controller Model",
      code: "Iris Xe Graphics",
    },
    {
      name: "Graphics Memory Accessibility",
      code: "Shared",
    },
    {
      name: "Screen Size",
      code: "39.6 cm (15.6')",
    },
    {
      name: "Display Screen Type",
      code: "LCD",
    },
    {
      name: "Display Screen Technology",
      code: "ComfyView",
    },
    {
      name: "Backlight Technology",
      code: "LED",
    },
    {
      name: "Screen Resolution",
      code: "1920 x 1080",
    },
    {
      name: "Aspect Ratio",
      code: "16:9",
    },
  ];
  return (
    <>
      <div className="custaccordion">
        <Accordion activeIndex={0}>
          <AccordionTab header="Operating System">
            <DataTable value={products} stripedRows>
              <Column field="name" style={{ maxWidth: "10rem" }}></Column>
              <Column field="code"></Column>
            </DataTable>
          </AccordionTab>
          <AccordionTab header="Processor">
          <DataTable value={products} stripedRows>
              <Column field="name" style={{ maxWidth: "10rem" }}></Column>
              <Column field="code"></Column>
            </DataTable>
          </AccordionTab>
          <AccordionTab header="Display & Graphics">
          <DataTable value={products} stripedRows>
              <Column field="name" style={{ maxWidth: "10rem" }}></Column>
              <Column field="code"></Column>
            </DataTable>
          </AccordionTab>
        </Accordion>
      </div>
    </>
  );
}

export default productinformationtab;
