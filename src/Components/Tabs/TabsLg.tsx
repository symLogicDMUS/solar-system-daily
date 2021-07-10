import React from "react";
import {labels} from "./labels";
import a11yProps from "./a11yProps";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { TabsLgParams } from "./TabsLgParams";
import { useStyles } from "../AppBar/AppBar.jss";

export function TabsLg(props: TabsLgParams) {
    const { value, onChange } = props;
    const classes = useStyles();

    return (
        <Tabs
            value={value}
            onChange={onChange}
            className={classes.tabsLg}
            centered
        >
            <Tab label={labels[0]} {...a11yProps(0)} />
            <Tab label={labels[1]} {...a11yProps(1)} />
            <Tab label={labels[2]} {...a11yProps(2)} />
            <Tab label={labels[3]} {...a11yProps(3)} />
        </Tabs>
    );
}
