import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { filledInputClasses } from '@mui/material/FilledInput';
import { inputBaseClasses } from '@mui/material/InputBase';
import { useState } from 'react';
import './dispatch.scss'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

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


function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function Dispatch() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 600, margin: 3 }}
        >

            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                {workOrders.map((item) => (
                    <Tab key={item.id} label={`Order ${item.id}`} {...a11yProps(0)} />
                ))}

            </Tabs>
            {workOrders.map((item) => (
                <TabPanel key={item.id} value={value} index={item.id - 1}>
                    <h1>Task: {item.title}</h1>
                    <div className="info">
                        <div>
                            <img src="pending.svg" alt="" />
                            <span>status: {item.status}</span>
                        </div>
                        <div>
                            <img src="location.svg" alt="" />
                            <span>repair location: {item.repairLocation}</span>
                        </div>
                        <div>
                            <img src="clock.svg" alt="" />
                            <span>expected duration: {item.expectedDuration}</span>
                        </div>
                        <div>
                            <img src="icon-personnel.svg" alt="" />
                            <span>assignee: {item.assignee}</span>
                        </div>
                        <div>
                            <img src="calendar.svg" alt="" />
                            <span>start date: {item.startDate}</span>
                        </div>
                    </div>
                    <div className="change">
                        <h2>change details</h2>
                        <img src="change.svg" alt="" />
                    </div>
                    <div className="changeContent">
                        <div className="changeRow">
                            <TextField
                                id="filled-suffix-shrink"
                                label="change duration to"
                                variant="filled"
                                slotProps={{
                                    input: {
                                        endAdornment: (
                                            <InputAdornment
                                                position="end"
                                                sx={{
                                                    alignSelf: 'flex-end',
                                                    opacity: 0,
                                                    pointerEvents: 'none',
                                                    [`.${filledInputClasses.root} &`]: {
                                                        marginBottom: '7.5px',
                                                    },
                                                    [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                                                        opacity: 1,
                                                    },
                                                }}
                                            >
                                                days
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                            <TextField
                                id="filled-suffix-shrink"
                                label="change assignee to"
                                variant="filled"
                                slotProps={{
                                    input: {
                                        endAdornment: (
                                            <InputAdornment
                                                position="end"
                                                sx={{
                                                    alignSelf: 'flex-end',
                                                    opacity: 0,
                                                    pointerEvents: 'none',
                                                    [`.${filledInputClasses.root} &`]: {
                                                        marginBottom: '7.5px',
                                                    },
                                                    [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                                                        opacity: 1,
                                                    },
                                                }}
                                            >
                                                assignee
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                            <TextField
                                id="filled-suffix-shrink"
                                label="contact email"
                                variant="filled"
                                slotProps={{
                                    input: {
                                        endAdornment: (
                                            <InputAdornment
                                                position="end"
                                                sx={{
                                                    alignSelf: 'flex-end',
                                                    opacity: 0,
                                                    pointerEvents: 'none',
                                                    [`.${filledInputClasses.root} &`]: {
                                                        marginBottom: '7.5px',
                                                    },
                                                    [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                                                        opacity: 1,
                                                    },
                                                }}
                                            >
                                                @email.com
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        </div>
                        <h3>Note</h3>
                        <TextField
                            id="outlined-multiline-static"
                            label="Multiline"
                            multiline
                            rows={3}
                            defaultValue="Leave a note"
                        />

                    </div>
                    <button>submit change</button>
                </TabPanel>
            ))}

        </Box>
    );
}
export default Dispatch;
