import {makeStyles} from "@material-ui/core";
import {createStyles} from "@material-ui/core/styles";
import {drawerWidth} from "../ResponsiveDrawer/ResponsiveDrawer.jss";

const padding = 24;

const widthAndHeightQueries = {
    '@media screen and (max-width: 600px)': {
        width: `calc(100vw - ${padding*2}px)`,
        height: `calc(100vw - ${padding*2}px)`,
    },
    '@media screen and (min-width: 600px) and (max-width: 960px)': {
        '--initWidth': `calc(100vw - ${padding*2}px)`,
        width: 'calc(var(--initWidth) * 0.5)',
        height: 'calc(var(--initWidth) * 0.5)',
    },
    '@media screen and (min-width: 960px)': {
        '--initWidth': `calc(100vw - ${drawerWidth + padding*2}px)`,
        width: 'calc(var(--initWidth) * 0.5)',
        height: 'calc(var(--initWidth) * 0.5)',
    },
}

export const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            '@media screen and (max-width: 600px)': {
                flexDirection: 'column',
            },
        },
        planetImg: {
            ...widthAndHeightQueries
        },
        info: {
            ...widthAndHeightQueries,
            overflow: 'scroll',
        },
    }),
);