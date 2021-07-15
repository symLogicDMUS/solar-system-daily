import {makeStyles} from "@material-ui/core/styles";
import {drawerWidth} from "../ResponsiveDrawer/ResponsiveDrawer.jss";

const padding = 24;

export const useStyles = makeStyles({
    root: {
        '@media screen and (max-width: 960px)': {
            width: `calc(100vw - ${padding*2}px)`,
        },
        '@media screen and (min-width: 960px)': {
            width: `calc(100vw - ${drawerWidth + padding*2}px)`,
        },
    },
});