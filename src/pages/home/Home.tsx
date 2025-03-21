import './home.scss'
import Topbox from "../../components/topbox/Topbox"
import ChartBox from '../../components/chartBox/ChartBox'
import BarChartBox from '../../components/barChartBox/BarChartBox'
import PieChartBox from '../../components/pieChartBox/PieChartBox'
import BigChartBox from '../../components/bigChartBox/BigChartBox'
import ConversionBox from '../../components/conversionBox/ConversionBox'
import { barChartBoxAlerts } from '../../data'

function Home() {
    return (
        <div className="home">
            <div className="box box1"><Topbox /></div>
            <div className="box box2"><ChartBox /></div>
            <div className="box box4"><PieChartBox /></div>
            <div className="box box5"><ConversionBox /></div>

            <div className="box box7"><BigChartBox /></div>

            <div className="box box8"><BarChartBox {...barChartBoxAlerts} /></div>
        </div>
    )
}

export default Home