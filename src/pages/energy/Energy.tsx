import './energy.scss'
import DataTable from "../../components/dataTable/DataTable"
import Add from '../../components/add/add'
import { energyTypes } from "../../data";
import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "name",
        type: "string",
        headerName: "Name",
        width: 250,
    },
    {
        field: "category",
        type: "string",
        headerName: "Category",
        width: 150,
    },
    {
        field: "efficiencyRating",
        type: "string",
        headerName: "EfficiencyRating",
        width: 200,
    },
    {
        field: "carbonEmission",
        headerName: "CarbonEmission",
        type: "string",
        width: 200,
    },
    {
        field: "energyDensity",
        headerName: "Energy Density",
        width: 200,
        type: "string",
    },
];

function Energy() {
    const [open, setOpen] = useState(false);

    // TEST THE API

    // const { isLoading, data } = useQuery({
    //     queryKey: ["allproducts"],
    //     queryFn: () =>
    //         fetch("http://localhost:8800/api/energy").then(
    //             (res) => res.json()
    //         ),
    // });
    return (
        <div className='energy'>
            <div className="info">
                <h1>Energy</h1>
                <button onClick={() => { setOpen(true) }}>Add New Energy</button>
            </div>
            <DataTable slug="energyTypes" columns={columns} rows={energyTypes} />
            {/* TEST THE API */}

            {/* {isLoading ? (
                "Loading..."
            ) : (
                    <DataTable slug="energyTypes" columns={columns} rows={energyTypes} />
            )}
            {open && <Add slug="energyTypes" columns={columns} setOpen={setOpen} />} */}
        </div>
    )
}

export default Energy