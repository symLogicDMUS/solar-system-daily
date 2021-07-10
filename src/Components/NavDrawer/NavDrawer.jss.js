import { makeStyles } from "@material-ui/core/styles";
import { drawerWidth } from "../ResponsiveDrawer/ResponsiveDrawer.jss";

export const useStyles = makeStyles(
    (theme) => ({
        drawer: {
            [theme.breakpoints.up("sm")]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        drawerPaper: {
            width: drawerWidth,
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
    }),
    { index: 1 }
);
