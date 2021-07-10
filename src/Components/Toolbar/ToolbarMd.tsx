import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { ToolbarMdParams } from "./ToolbarMdParams";
import { useStyles } from "../AppBar/AppBar.jss";

export function ToolbarMd(props: ToolbarMdParams) {
    const { handleDrawerToggle, title } = props;
    const classes = useStyles();

    return (
        <Toolbar>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
                {title}
            </Typography>
        </Toolbar>
    );
}
