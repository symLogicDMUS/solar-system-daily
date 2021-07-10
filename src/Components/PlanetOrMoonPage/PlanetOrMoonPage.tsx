import React, { useEffect, useState } from "react";
import {lorem} from "../../helpers/lorem";
import { AppBarMd } from "../AppBar/AppBarMd";
import { AppBarLg } from "../AppBar/AppBarLg";
import { TabPanel } from "../TabPanel/TabPanel";
import { NavDrawer } from "../NavDrawer/NavDrawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import BackgroundInfo from "../BackgroundInfo/BackgroundInfo";
import { capitalize } from "../../helpers/capitalize";
import { useStyles } from "./PlanetOrMoonPage.jss";
import {imgDict} from "./imgDict";

/**
 * Uses Material-UI Tabs for different types of info about a planet or moon (given by the page prop)
 * @param props
 * @constructor
 */
export default function PlanetOrMoonPage(props: any) {
    const { page, ...other }: any = props;
    const classes = useStyles();

    useEffect(() => {
        //GraphQL call here
    }, [page]);

    const [value, setValue] = useState(0);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // @ts-ignore
    const planetImg = imgDict[page];

    return (
        <div className={classes.root} {...other}>
            <CssBaseline />
            <AppBarMd
                value={value}
                title={capitalize(page)}
                onChange={handleChange}
                handleDrawerToggle={handleDrawerToggle}
            />
            <AppBarLg
                value={value}
                title={capitalize(page)}
                onChange={handleChange}
            />
            <NavDrawer open={mobileOpen} onClose={handleDrawerToggle} />
            <main className={classes.main}>
                <div className={classes.toolbar} />
                <div className={classes.content}>
                    <TabPanel value={value} index={0}>
                        <BackgroundInfo name={capitalize(page)} info={lorem} image={planetImg} title="page" />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Insert table (Material UI Table component) of all
                        non-image data here
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Insert dropdown for the type of data and graph below it,
                        here
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Insert images from Nasa's API, here
                    </TabPanel>
                </div>
            </main>
        </div>
    );
}