import { Page, Card, DataTable } from "@shopify/polaris";
import './table.scss'
import React from "react";

const  Table = () => {
  const rows = [
    
  ];

  return (
      <Card>
        <DataTable
          columnContentTypes={[
            "text",
            "numeric",
            "text",
            "numeric",
            "text",
            "numeric",
          ]}
          headings={[
            "Product",
            "Code",
            "Image",
            "Price",
            "Description",
            "amount"
          ]}
          rows={rows}
         
        />
      </Card>
  );
}

export default Table