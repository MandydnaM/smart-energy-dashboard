import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import Tooltip from '@mui/material/Tooltip';
import './repairmap.scss'

// 德国地图 GeoJSON 数据 URL（你也可以改为本地文件）
const geoUrl = "/de.geo.json";

interface RepairLocation {
    id: number;
    coordinates: [number, number]; // 明确指定元组类型
    count: number;
}

const repairLocations: RepairLocation[] = [
    { id: 1, coordinates: [10.0, 51.0], count: 5 },
    { id: 2, coordinates: [13.4, 52.5], count: 3 },
    { id: 3, coordinates: [9.2, 48.8], count: 8 },
    { id: 4, coordinates: [11.2, 50.2], count: 16 },
];
const RepairMap = () => {
    const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

    return (
        <div className="demap">
            <ComposableMap
                data-tip=""
                projection="geoAlbers"
                projectionConfig={{
                    scale: 5000,
                    center: [110, 50], // 德国的中心位置
                    // rotate: [0, 0, 50]
                }
                }
                viewBox={"-200 0 1900 800"}
            >
                <defs>
                    <filter id="sparkle-filter" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                        <feColorMatrix in="blur" type="matrix"
                            values="1 0 0 0 0 
                      0 1 0 0 0 
                      0 0 1 0 0 
                      0 0 0 12 -4" />
                        <feBlend in="SourceGraphic" in2="glow" mode="screen" />
                    </filter>
                </defs>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="#f6fcf2"
                                stroke="#2aa515"
                            />
                        ))
                    }
                </Geographies>
                {repairLocations.map((location) => (
                    <Marker key={location.id} coordinates={location.coordinates}>
                        <Tooltip
                            title={`Total Orders: ${location.count}`}
                            open={activeTooltip === location.id}
                            onOpen={() => setActiveTooltip(location.id)}
                            onClose={() => setActiveTooltip(null)}
                            placement="top"
                            arrow

                        >
                            {/* 使用分组应用动画 */}
                            <g className="spark-marker">
                                <circle
                                    className="sparkle-filter"
                                    r={Math.sqrt(location.count) * 3}
                                    fill="#FF5722"
                                    stroke="#FFF"
                                    strokeWidth={1.5}
                                    style={{
                                        cursor: "pointer",
                                        transition: "r 0.2s",
                                    }}
                                />
                                {/* 光晕层 */}
                                <circle
                                    className="sparkle-aura"
                                    r={Math.sqrt(location.count) * 6}
                                    fill="transparent"
                                    strokeWidth={20}
                                />
                            </g>
                        </Tooltip>
                    </Marker>
                ))}
            </ComposableMap>

        </div>
    );
};

export default RepairMap;

