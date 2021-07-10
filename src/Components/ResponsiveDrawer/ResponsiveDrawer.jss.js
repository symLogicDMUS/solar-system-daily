import { createStyles, makeStyles } from "@material-ui/core/styles";

export const drawerWidth = 240;
export const appBarHeightSm = 48;
export const appBarHeightMd = 56;
export const appBarHeightLg = 64;

export const useStyles = makeStyles((theme) =>
    createStyles({
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
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up("sm")]: {
                display: "none",
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
        content: {
            flexGrow: 1,
            width: "100vw",
            height: `calc(100vh - ${appBarHeightMd}px)`,
            "@media (min-width:0px) and (orientation: landscape)": {
                height: `calc(100vh - ${appBarHeightSm}px)`,
            },
            "@media (min-width:960px)": {
                width: `calc(100vw - ${drawerWidth}px)`,
                height: `calc(100vh - ${appBarHeightLg}px)`,
            },
        },
    })
);
