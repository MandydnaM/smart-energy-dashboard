import './pieChartBox.scss'
import { Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const energyData = [
    { name: "Solar", value: 450, color: "#FFD700" },
    { name: "Wind", value: 350, color: "#00BFFF" },
    { name: "Hydro", value: 300, color: "#1E90FF" },
    { name: "Biomass", value: 200, color: "#32CD32" },
    { name: "Geothermal", value: 150, color: "#FF4500" },
    { name: "Natural Gas", value: 250, color: "#A52A2A" }
];


function PieChartBox() {
    return (
        <div className='pieChartBox'>
            <h1>Energy Composition</h1>
            <div className="chart">
                <ResponsiveContainer width="70%" height={200}>
                    <PieChart>
                        <Tooltip
                            contentStyle={{ background: "white", borderRadius: "5px" }} />
                        <Pie
                            data={energyData}
                            innerRadius={"60%"}
                            outerRadius={"90%"}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {energyData.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Pie>

                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="options">
                {energyData.map(item => (
                    <div className="option" key={item.name}>
                        <div className="title">
                            <div className="dot" style={{ backgroundColor: item.color }}></div>
                            <span>{item.name}</span>
                        </div>
                        <span>{item.value}</span>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default PieChartBox