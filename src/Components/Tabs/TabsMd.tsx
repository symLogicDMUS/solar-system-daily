import React from "react";
import {labels} from "./labels";
import a11yProps from "./a11yProps";
import Tab from "@material-ui/core/Tab";
import {AppBar} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import { TabsMdParams } from "./TabsMdParams";
import { useStyles } from "../AppBar/AppBar.jss";

export function TabsMd(props: TabsMdParams) {
    const { value, onChange } = props;
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Tabs
                value={value}
                onChange={onChange}
                className={classes.tabsMd}
                variant={"fullWidth"}
            >
                <Tab label={labels[0]} {...a11yProps(0)} />
                <Tab label={labels[1]} {...a11yProps(1)} />
                <Tab label={labels[2]} {...a11yProps(2)} />
                <Tab label={labels[3]} {...a11yProps(3)} />
            </Tabs>
        </AppBar>
    );
}