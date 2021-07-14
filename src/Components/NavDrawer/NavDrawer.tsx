import React from "react";
import { useTheme } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import PlanetarySystems from "../PlanetarySystems/PlanetarySystems";
import { useStyles } from "./NavDrawer.jss";

export function NavDrawer(props: { open: boolean; onClose: () => void }) {
    const { open, onClose } = props;
    const classes = useStyles();
    const theme = useTheme();

    return (
        <nav className={classes.drawer}>
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor={theme.direction === "rtl" ? "right" : "left"}
                    open={open}
                    onClose={onClose}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <div>
                        <div className={classes.toolbar} />
                        <Divider />

                        <PlanetarySystems />
                    </div>
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    <div>
                        <div className={classes.toolbar} />
                        <Divider />
                        <PlanetarySystems />
                    </div>
                </Drawer>
            </Hidden>
        </nav>
    );
}
