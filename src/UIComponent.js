import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import React from "react";

export  const dataTable = (products) => {

    return (
        <DataTable  value={products} showGridlines tableStyle={{ minWidth: '50rem' }}>
            <Column field="code" header="Code"/>
            <Column field="name" header="Name"/>
            <Column field="category" header="Category"/>
            <Column field="quantity" header="Quantity"/>
        </DataTable>
        )
}
