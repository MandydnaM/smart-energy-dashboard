import './tracking.scss'
import RepairMap from '../../components/repairMap/RepairMap'

const workOrders = [
    { id: 1, title: "Fix Solar Panel", assignee: "Eula Hubbard", status: "Pending", repairLocation: "GreenHorizon Tech Park", startDate: "2025-03-01", expectedDuration: "3 days" },
    { id: 2, title: "Replace Wind Turbine Blade", assignee: "Stella Manning", status: "In Progress", repairLocation: "EcoPower Valley Complex", startDate: "2025-03-03", expectedDuration: "5 days" },
    { id: 3, title: "Check Battery Storage", assignee: "Mary Greer", status: "Completed", repairLocation: "PowerVista Energy Complex", startDate: "2025-02-28", expectedDuration: "2 days" },
    { id: 4, title: "Inspect Generator", assignee: "Mildred Williamson", status: "Pending", repairLocation: "FutureGrid Energy Park", startDate: "2025-03-04", expectedDuration: "4 days" },
    { id: 5, title: "Repair Transformer", assignee: "Jose Gross", status: "In Progress", repairLocation: "EcoSynergy Industrial Hub", startDate: "2025-03-05", expectedDuration: "6 days" },
    { id: 6, title: "Replace Circuit Breaker", assignee: "Jeremy Sharp", status: "Completed", repairLocation: "GreenTech Energy Campus", startDate: "2025-02-26", expectedDuration: "1 day" },
    { id: 7, title: "Update Control Software", assignee: "Christina Lowe", status: "Pending", repairLocation: "CleanPower Production Zone", startDate: "2025-03-06", expectedDuration: "3 days" },
    { id: 8, title: "Inspect Cooling System", assignee: "Garrett Dean", status: "In Progress", repairLocation: "EcoDynamics Industrial Park", startDate: "2025-03-07", expectedDuration: "2 days" },
    { id: 9, title: "Calibrate Sensors", assignee: "Leah Parsons", status: "Completed", repairLocation: "RenewaTech Production Campus", startDate: "2025-03-02", expectedDuration: "1 day" },
    { id: 10, title: "Check Generator Oil", assignee: "Elnora Reid", status: "Pending", repairLocation: "SunHarbor Industrial Park", startDate: "2025-03-08", expectedDuration: "2 days" },
    { id: 11, title: "Repair AC Unit", assignee: "Gertrude Dunn", status: "In Progress", repairLocation: "EnergyNexus Tech Valley", startDate: "2025-03-09", expectedDuration: "3 days" },
    { id: 12, title: "Replace Cooling Fan", assignee: "Mark Williams", status: "Completed", repairLocation: "TerraNova Energy Hub", startDate: "2025-03-10", expectedDuration: "1 day" },
    { id: 13, title: "Inspect Fuel System", assignee: "Charlotte Cruz", status: "Pending", repairLocation: "PowerGrid Innovation Zone", startDate: "2025-03-11", expectedDuration: "4 days" },
    { id: 14, title: "Test Emergency Backup", assignee: "Sara Harper", status: "In Progress", repairLocation: "EcoSphere Energy Zone", startDate: "2025-03-12", expectedDuration: "2 days" },
    { id: 15, title: "Check Power Distribution", assignee: "Eric Griffin", status: "Completed", repairLocation: "Solaris Renewable Campus", startDate: "2025-03-13", expectedDuration: "3 days" },
    { id: 16, title: "Repair Insulation", assignee: "Eula Hubbard", status: "Pending", repairLocation: "GreenTech Energy Campus", startDate: "2025-03-14", expectedDuration: "1 day" },
    { id: 17, title: "Replace Wiring", assignee: "Stella Manning", status: "In Progress", repairLocation: "EcoPower Valley Complex", startDate: "2025-03-15", expectedDuration: "5 days" },
    { id: 18, title: "Upgrade Control Panel", assignee: "Mary Greer", status: "Completed", repairLocation: "PowerVista Energy Complex", startDate: "2025-03-16", expectedDuration: "2 days" },
    { id: 19, title: "Inspect Electrical System", assignee: "Mildred Williamson", status: "Pending", repairLocation: "FutureGrid Energy Park", startDate: "2025-03-17", expectedDuration: "3 days" },
    { id: 20, title: "Test System Performance", assignee: "Jose Gross", status: "In Progress", repairLocation: "EcoSynergy Industrial Hub", startDate: "2025-03-18", expectedDuration: "4 days" }
];

function Tracking() {
    return (
        <div className="trackingcontent">
            <div className="cards">
                <h1>Tracking map</h1>
                <div className="map"><RepairMap /></div>
                <div className="cardsflow">
                    <div className="card-flow-container">
                        {workOrders.map((card) => (
                            <div className={`card ${card.status === "Pending" ? "pending" : ""}`} key={card.id}>
                                <h3>{card.title}</h3>
                                <p>{card.status}</p>
                                <p>{card.assignee}</p>
                            </div>
                        ))}
                        {/* 为了实现无缝循环，可以复制一份卡片内容 */}
                        {workOrders.map((card) => (
                            <div className={`card ${card.status === "Pending" ? "pending" : ""}`} key={`clone-${card.id}`}>
                                <h3>{card.title}</h3>
                                <p>{card.status}</p>
                                <p>{card.assignee}</p>
                            </div>
                        ))}
                    </div></div>
            </div >
        </div>

    );

}

export default Tracking