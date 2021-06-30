import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {appBarHeightLg, appBarHeightSm, drawerWidth} from "../ResponsiveDrawer/ResponsiveDrawer.jss";

const listItemHeight = 48;
const listPadding = 8;

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: (props: any) => ({
            display: 'flex',
            "& .MuiListItemIcon-root": {
                justifyContent: 'flex-end',
            },
        }),
        planetAndMoonsMenu: (props: any) => ({
            paddingTop: 8,
            paddingBottom: 8,
            borderRadius: 6,
            backgroundColor: '#fff',
            position: 'absolute',
            left: drawerWidth,
            '@media screen and (max-width: 600px)': {
                top: listItemHeight * props.index + appBarHeightLg + listPadding*2.5,
            },
            '@media screen and (min-width: 600px)': {
                top: listItemHeight * props.index + appBarHeightSm + listPadding*2.5,
            },
        }),
    }),
);