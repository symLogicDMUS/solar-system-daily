import {makeStyles} from "@material-ui/core";
import {createStyles} from "@material-ui/core/styles";
import {appBarHeightLg, appBarHeightMd, appBarHeightSm} from "../ResponsiveDrawer/ResponsiveDrawer.jss";

export const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexGrow: 1,
            height: '90vh',
            maxHeight: `calc(100vh - ${appBarHeightMd + theme.spacing(6)}px)`,
            "@media (min-width:0px) and (orientation: landscape)": {
                maxHeight: `calc(100vh - ${appBarHeightSm + theme.spacing(6)}px)`,
            },
            "@media (min-width:960px)": {
                maxHeight: `calc(100vh - ${appBarHeightLg + theme.spacing(6)}px)`,
            },
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
            overflow: 'scroll',
        },
        content: {
            flex: '1 0 auto',
        },
        img: {
            minWidth: '45vw',
        },
    }),
);