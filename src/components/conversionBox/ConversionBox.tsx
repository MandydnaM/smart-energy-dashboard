import './conversionBox.scss'
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

function ConversionBox() {
    return (
        <div className='conversionBox'>
            <h1>Consumption conversion</h1>
            <div className="content">
                <div className="type">
                    <p>carbon dioxide</p>
                    <div className="pic">
                        <img src="co2.svg" alt="" />
                    </div>
                    <div className="text">
                        <span>-29.16</span>
                        {' '}
                        T
                    </div>
                </div>
                <div className="type2">
                    <p>coal conversion</p>
                    <div className="pic">
                        <img src="coal.svg" alt="" />
                    </div>
                    <div className="text">
                        <span>-11.7</span>
                        {' '}
                        T
                    </div>
                </div>
                <ResponsiveContainer width="90%" height={100}>
                    <LineChart width={200} height={100} data={data}>
                        <Line type="monotone" dataKey="pv" stroke="#7dc5eb" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div >
    )
}

export default ConversionBox