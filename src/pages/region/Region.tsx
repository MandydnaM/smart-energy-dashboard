import './region.scss'
import DataTable from "../../components/dataTable/DataTable"
import Add from '../../components/add/add'
import { regions } from "../../data";
import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "name",
        type: "string",
        headerName: "Name",
        width: 150,
    },
    {
        field: "address",
        type: "string",
        headerName: "Address",
        width: 150,
    },
    {
        field: "area",
        type: "number",
        headerName: "Area",
        width: 150,
    },
    {
        field: "devices",
        type: "number",
        headerName: "Devices",
        width: 200,
    },
    {
        field: "measurementPoints",
        type: "number",
        headerName: "Measurement Points",
        width: 200,
    },
];


function Region() {
    const [open, setOpen] = useState(false)

    // TEST THE API

    // const { isLoading, data } = useQuery({
    //     queryKey: ["allusers"],
    //     queryFn: () =>
    //         fetch("http://localhost:8800/api/regions").then(
    //             (res) => res.json()
    //         ),
    // });
    return (
        <div className='regions'>
            <div className="info">
                <h1>Regions</h1>
                <button onClick={() => { setOpen(true) }}>Add New Region</button>
            </div>
            <DataTable slug="users" columns={columns} rows={regions} />
            {/* TEST THE API */}

            {/* <div className="regionstable">
                {isLoading ? (
                    "Loading..."
                ) : (
                    <DataTable slug="regions" columns={columns} rows={data} />
                )}
                {open && <Add slug="region" columns={columns} setOpen={setOpen} />}
            </div> */}
        </div>
    )
}

export default Region