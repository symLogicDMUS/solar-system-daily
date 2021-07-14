import {makeStyles} from "@material-ui/core/styles";
import {drawerWidth} from "../ResponsiveDrawer/ResponsiveDrawer.jss";

const padding = 24;

export const useStyles = makeStyles({
    root: {
        width: `calc(100vw - ${drawerWidth + padding*2}px)`,
        "& .MuiTableHead-root": {
            border: '1px dashed red',
        },
    },
});