import {makeStyles} from "@material-ui/core";
import {createStyles} from "@material-ui/core/styles";
import {appBarHeightLg, appBarHeightSm, drawerWidth} from "../ResponsiveDrawer/ResponsiveDrawer.jss";

const padding = 24;

export const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            '@media screen and (max-width: 501px)': {
                flexDirection: 'column',
            },
            '--containerWidthSm': `calc(100vw - ${padding * 2}px)`,
            '--containerWidthLg': `calc(100vw - ${drawerWidth + padding * 2}px)`,
            '--containerHeightSm': `calc(100vh - ${appBarHeightSm + padding*2}px)`,
            '--containerHeightLg': `calc(100vh - ${appBarHeightLg + padding*2}px)`,
            '--widthMinusHeightSm': 'calc(var(--containerWidthSm) - var(--containerHeightSm))',
            '--widthMinusHeightLg': 'calc(var(--containerWidthLg) - var(--containerHeightLg))',
        },
        planetImg: {
            '@media screen and (max-width: 501px)': {
                width: 'var(--containerWidthSm)',
                height: 'var(--containerWidthSm)',
            },
            '@media screen and (min-width: 501px) and (max-width: 960px)': {
                width: 'calc(var(--containerWidthSm) * 0.5)',
                height: 'calc(var(--containerWidthSm) * 0.5)',
            },
            '@media screen and (min-width: 960px) and (max-width: 1080px)': {
                width: 'calc(var(--containerWidthLg) * 0.6)',
                height: 'calc(var(--containerWidthLg) * 0.6)',
            },
            '@media screen and (min-width: 1080px)': {
                width: 'var(--containerHeightLg)',
                height: 'var(--containerHeightLg)',
            },
        },
        cardContent: {
            overflow: 'scroll',
            padding: theme.spacing(3),
            '@media screen and (max-width: 501px)': {
                width: 'var(--containerWidthSm)',
            },
            '@media screen and (min-width: 501px) and (max-width: 960px)': {
                width: 'calc(var(--containerWidthSm) * 0.5)',
                height: 'calc(var(--containerWidthSm) * 0.5)',
            },
            '@media screen and (min-width: 960px) and (max-width: 1080px)': {
                width: 'calc(var(--containerWidthLg) * 0.4)',
                height: 'calc(var(--containerWidthLg) * 0.6)',
            },
            '@media screen and (min-width: 1080px)': {
                width: 'var(--widthMinusHeightLg)',
                height: 'var(--containerHeightLg)',
            },
        },
        paragraph: {
            lineHeight: '1.8rem',
        },
    }),
);