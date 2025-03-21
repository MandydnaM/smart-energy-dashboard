import './chartBox.scss'
import { regions } from '../../data';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useMemo, useState } from "react";


function ChartBox() {
    const [selectedRegion, setSelectedRegion] = useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedRegion(event.target.value as string);
    };

    // 通过 useMemo 避免不必要的计算
    const singleRegion = useMemo(() => {
        return regions.find((region) => region.name === selectedRegion) || null;
    }, [selectedRegion]);


    return (
        <div className="regionInfo">
            <h1>Region Info</h1>
            <div className="textInfo">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">region</InputLabel>
                    <Select
                        labelId="label"
                        id="select"
                        value={selectedRegion}
                        label="Region"
                        onChange={handleChange}
                    >
                        {regions.map((item) => (
                            <MenuItem value={item.name} key={item.id}>{item.name}</MenuItem>
                        ))}


                    </Select>
                </FormControl>
                <div className="line">
                    <span className='tag'>Address:</span>
                    {singleRegion ? <span>{singleRegion.address}</span> : <span>please choose a region</span>}
                </div>
                <div className="line">
                    <span className='tag'>Area:</span>
                    {singleRegion ? <span>{singleRegion.area}</span> : <span>please choose a region</span>}
                </div>
            </div>
            <div className="statistic">
                <div className="box">
                    <img src="device2.svg" alt="" />
                    <div className="text">
                        <p>Devices</p>
                        {singleRegion ? <span>{singleRegion.devices}</span> : <span>N/A</span>}
                    </div>
                </div>
                <div className="box">
                    <img src="measurement.svg" alt="" />
                    <div className="text">
                        <p>Testpoints</p>
                        {singleRegion ? <span>{singleRegion.measurementPoints}</span> : <span>N/A</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartBox