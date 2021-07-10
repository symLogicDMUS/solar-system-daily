import clsx from "clsx";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { AppBarLgParams } from "./AppBarLgParams";
import { useMediaQuery } from "@material-ui/core";
import { useStyles } from "./AppBar.jss";
import { TabsLg } from "../Tabs/TabsLg";

export function AppBarLg(props: AppBarLgParams) {
    const { value, onChange, title } = props;
    const classes = useStyles();
    const sm = useMediaQuery("(max-width: 960px)");

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, { [classes.hidden]: sm })}
        >
            <Toolbar>
                <Typography variant="h6" noWrap>
                    {title}
                </Typography>
                <TabsLg value={value} onChange={onChange} />
            </Toolbar>
        </AppBar>
    );
}
