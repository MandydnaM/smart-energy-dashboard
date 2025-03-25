import './team.scss'
import Dispatch from '../../../public/Dispatch.svg'
import Maintenance from '../../../public/Maintenance.svg'
import Security from '../../../public/Security.svg'

const data = [
    {
        id: 1,
        img: Dispatch,
        name: "Dispatch Team",
        leader: "Stella Manning",
        progress: 93,
    }, {
        id: 2,
        img: Maintenance,
        name: "Maintenance Team",
        leader: "Eula Hubbard",
        progress: 58,
    }, {
        id: 3,
        img: Security,
        name: "Security Team",
        leader: "Mary Greer",
        progress: 72,
    },
]

const Team = () => {
    return (
        <div className='team'>
            {data.map((item) => (
                <div className="card" key={item.id}>
                    <div className="icon">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="team-title">
                        <h1>{item.name}</h1>
                        <p>{item.leader}</p>
                    </div>
                    <div className="progress">
                        <div className="pro-title"><span>progress</span><span>{item.progress}%</span></div>
                        <div className="bar">
                            <div style={{ width: `${item.progress}%` }}></div>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default Team