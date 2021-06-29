import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import a11yProps from "./a11yProps";
import {TabPanel} from "./TabPanel";
import {useStyles} from "./PlanetOrMoonInfo.jss";

/**
 * Uses Material-UI Tabs for different types of info about a planet or moon (given by the page prop)
 * @param props
 * @constructor
 */
export default function PlanetOrMoonInfo(props: any) {
    const {page, ...other}: any = props;

    const classes = useStyles();

    useEffect(() => {
        //GraphQL call here
    }, [page])

    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root} {...other}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Background" {...a11yProps(0)} />
                    <Tab label="Table" {...a11yProps(1)} />
                    <Tab label="Graphs" {...a11yProps(2)} />
                    <Tab label="Images" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                Insert background info (Material-UI Card component) here
            </TabPanel>
            <TabPanel value={value} index={1}>
                Insert table (Material UI Table component) of all non-image data here
            </TabPanel>
            <TabPanel value={value} index={2}>
                Insert dropdown for the type of data and graph below it, here
            </TabPanel>
            <TabPanel value={value} index={3}>
                Insert images from Nasa's API, here
            </TabPanel>
        </div>
    );
}
