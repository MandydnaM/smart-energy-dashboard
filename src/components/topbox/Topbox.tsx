import './topbox.scss';
import { energyRankingData } from "../../data.ts";

function Topbox() {


    return (
        <div className='topBox'>
            <h1>Consumption Ranking</h1>
            <div className="list">

                {energyRankingData.map(item => (
                    <div className="listItem " key={item.rank} style={item.rank === 1 ? { animation: "float 2s infinite", boxShadow: "0 0 8px rgba(0, 0, 0, 0.2)" } : {}}>
                        <div className="ranking" >
                            <div className="rankingTexts">
                                <span className="rank" style={item.rank < 6 ? { color: "red" } : {}}>{item.rank}</span>
                                <span className="name" style={item.rank < 6 ? { color: "#FF8042" } : {}}>{item.name}</span>
                            </div>
                        </div>
                        <span className="amount">{item.energyConsumption}</span>
                    </div>
                ))}

            </div>
        </div >
    );
}

export default Topbox;