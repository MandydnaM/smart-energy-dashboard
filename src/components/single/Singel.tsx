import './singel.scss'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';




type Props = {
    id: number;
    img?: string;
    title: string;
    info: object;
    chart?: {
        dataKeys: { name: string; color: string }[];
        data: object[];
    };
    activities?: { time: string; text: string }[];
};

const data = [
    {
        name: 'day',
        uv: 13,
        pv: 6,
        fill: '#8884d8',
    },
    {
        name: 'week',
        uv: 34,
        pv: 26,
        fill: '#d0ed57',
    },
    {
        name: 'month',
        uv: 100,
        pv: 83,
        fill: '#ffc658',
    },
];

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

function Singel(props: Props) {

    return (
        <div className='singel'>
            <div className="view">
                <div className="info">
                    <div className="topInfo">
                        {props.img && <img src={props.img} alt="" />}
                        <h1>{props.title}</h1>
                        <button>Update</button>
                    </div>
                    <div className="details">
                        {Object.entries(props.info).map(item => (
                            <div className="item" key={item[0]}>
                                <span className="itemTitle">{item[0]}</span>
                                <span className="itemValue">{item[1]}</span>
                            </div>
                        ))}

                    </div>
                </div>
                <h1>Progress</h1>
                {props.chart && <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={20} data={data}>
                            <RadialBar
                                // minAngle={15}
                                label={{ position: 'insideStart', fill: '#fff' }}
                                background
                                // clockWise
                                dataKey="uv"
                            />
                            <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                        </RadialBarChart>
                    </ResponsiveContainer>
                </div>}

            </div>
            <div className="activities">
                <h2>Latest tasks</h2>
                {props.activities && <ul>
                    {props.activities.map(activity => (
                        <li key={activity.text}>
                            <div>
                                <p>{activity.text}</p>
                                <time>{activity.time}</time>
                            </div>
                        </li>
                    ))}

                </ul>}
            </div>
        </div>
    )
}

export default Singel