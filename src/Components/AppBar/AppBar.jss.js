import { makeStyles } from "@material-ui/core/styles";
import {
    appBarHeightLg,
    drawerWidth,
} from "../ResponsiveDrawer/ResponsiveDrawer.jss";

export const useStyles = makeStyles(
    (theme) => ({
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up("sm")]: {
                display: "none",
            },
        },
        appBar: {
            [theme.breakpoints.up("sm")]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        tabsLg: {
            flexGrow: 1,
            "& .MuiTab-root": {
                height: appBarHeightLg,
            },
        },
        tabsMd: {
            flexGrow: 1,
        },
        hidden: {
            display: "none",
        },
    }),
    { index: 1 }
);
