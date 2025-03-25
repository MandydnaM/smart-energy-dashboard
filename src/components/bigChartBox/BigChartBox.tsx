import './bigChartBox.scss'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        time: "00:00",
        Solar: 50,
        Wind: 30,
        Hydro: 40
    },
    {
        time: "02:00",
        Solar: 20,
        Wind: 25,
        Hydro: 38
    },
    {
        time: "04:00",
        Solar: 5,
        Wind: 20,
        Hydro: 35
    },
    {
        time: "06:00",
        Solar: 15,
        Wind: 22,
        Hydro: 37
    },
    {
        time: "08:00",
        Solar: 80,
        Wind: 35,
        Hydro: 50
    },
    {
        time: "10:00",
        Solar: 150,
        Wind: 50,
        Hydro: 55
    },
    {
        time: "12:00",
        Solar: 200,
        Wind: 65,
        Hydro: 60
    },
    {
        time: "14:00",
        Solar: 180,
        Wind: 70,
        Hydro: 62
    },
    {
        time: "16:00",
        Solar: 120,
        Wind: 75,
        Hydro: 58
    },
    {
        time: "18:00",
        Solar: 60,
        Wind: 80,
        Hydro: 55
    },
    {
        time: "20:00",
        Solar: 20,
        Wind: 78,
        Hydro: 50
    },
    {
        time: "22:00",
        Solar: 10,
        Wind: 65,
        Hydro: 45
    }
];


function BigChartBox() {
    return (
        <div className='bigChartBox'>
            <h1>Energy Trend</h1>
            <div className="chart">

                <ResponsiveContainer width="99%" height="90%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >

                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Solar" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="Wind" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="Hydro" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BigChartBox