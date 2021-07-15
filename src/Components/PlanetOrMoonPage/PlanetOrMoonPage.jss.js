import { makeStyles } from "@material-ui/core/styles";
import {drawerWidth} from "../ResponsiveDrawer/ResponsiveDrawer.jss";

export const tabHeightSm = 48;
const tabTopBottomPadding = 6;

export const useStyles = makeStyles(
    (theme) => ({
        root: {
            display: "flex",
        },
        drawer: {
            [theme.breakpoints.up("sm")]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up("sm")]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        drawerPaper: {
            width: drawerWidth,
        },
        main: {
            display: "flex",
            flexDirection: "column",
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        tabBar: {
            '@media screen and (max-width: 960px)': {
                height: tabHeightSm + tabTopBottomPadding*2,
            },
        },
        content: {
            display: 'flex',
        },
    }),
    { index: 1 }
);
