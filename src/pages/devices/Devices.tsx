import './Devices.scss'
import { devices } from "../../data";
import DataTable from "../../components/dataTable/DataTable"
// import Add from '../../components/add/add'
// import { products } from "../../data";
import { GridColDef } from "@mui/x-data-grid";
// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "img",
        headerName: "Image",
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />;
        },
    },
    {
        field: "deviceNumber",
        type: "string",
        headerName: "deviceNumber",
        width: 250,
    },
    {
        field: "type",
        type: "string",
        headerName: "type",
        width: 150,
    },
    {
        field: "status",
        type: "string",
        headerName: "status",
        width: 200,
    },
    {
        field: "location",
        headerName: "location",
        type: "string",
        width: 200,
    },
    {
        field: "manufacturer",
        headerName: "manufacturer",
        width: 200,
        type: "string",
    },
    {
        field: "installationDate",
        headerName: "In installation Date",
        width: 150,
        type: "boolean",
    },
];

function Devices() {
    // const [open, setOpen] = useState(false);

    // TEST THE API

    // const { isLoading, data } = useQuery({
    //     queryKey: ["allproducts"],
    //     queryFn: () =>
    //         fetch("http://localhost:8800/api/products").then(
    //             (res) => res.json()
    //         ),
    // });
    return (
        <div className='devices'>
            <div className="info">
                <h1>Devices</h1>
                <button
                // onClick={() => { setOpen(true) }}
                >Add New Devices</button>
            </div>
            <DataTable slug="devices" columns={columns} rows={devices} />
            {/* TEST THE API */}

            {/* {isLoading ? (
                "Loading..."
            ) : (
                <DataTable slug="products" columns={columns} rows={data} />
            )}
            {open && <Add slug="products" columns={columns} setOpen={setOpen} />} */}
        </div>
    )
}

export default Devices