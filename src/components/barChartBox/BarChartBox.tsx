import './barChartBox.scss'
import { Tooltip, BarChart, Bar, ResponsiveContainer } from 'recharts';


type Props = {
    title: string;
    color: string;
    dataKey: string;
    chartData: object[];
};

function BarChartBox(props: Props) {
    return (
        <div className='barChartBox'>
            <h1>{props.title}</h1>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart width={150} height={40} data={props.chartData}>
                    <Tooltip
                        contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                        labelStyle={{ display: "none" }}
                        cursor={{ fill: "none" }}
                    />
                    <Bar dataKey={props.dataKey} fill={props.color} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BarChartBox