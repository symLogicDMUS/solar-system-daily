import React from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import { AppBarMdParams } from "./AppBarMdParams";
import { useMediaQuery } from "@material-ui/core";
import { TabsMd } from "../Tabs/TabsMd";
import { ToolbarMd } from "../Toolbar/ToolbarMd";
import { useStyles } from "./AppBar.jss";

export function AppBarMd(props: AppBarMdParams) {
    const { value, onChange, handleDrawerToggle, title } = props;
    const classes = useStyles();
    const lg = useMediaQuery("(min-width: 960px)");

    return (
        <AppBar className={clsx(classes.appBar, { [classes.hidden]: lg })}>
            <ToolbarMd handleDrawerToggle={handleDrawerToggle} title={title} />
            <TabsMd value={value} onChange={onChange} />
        </AppBar>
    );
}
