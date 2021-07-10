import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
    appBarHeightLg,
    appBarHeightMd,
    appBarHeightSm,
    drawerWidth,
} from "../ResponsiveDrawer/ResponsiveDrawer.jss";

const listItemHeight = 48;
const listPadding = 8;

const getListItemDisp = (index, appBarHeight) =>
    listItemHeight * index + appBarHeight + listPadding;

export const useStyles = makeStyles((theme) =>
    createStyles({
        root: (props) => ({
            display: "flex",
            "& .MuiListItemIcon-root": {
                justifyContent: "flex-end",
                color: theme.palette.text.primary,
            },
        }),
        planetAndMoonsMenu: (props) => ({
            zIndex: 1600,
            paddingTop: 8,
            paddingBottom: 8,
            borderRadius: 6,
            backgroundColor: theme.palette.background.paper,
            position: "absolute",
            left: drawerWidth,
            top: getListItemDisp(props.index, appBarHeightMd),
            "@media (min-width:0px) and (orientation: landscape)": {
                top: getListItemDisp(props.index, appBarHeightSm),
            },
            "@media screen and (min-width: 960px)": {
                top: getListItemDisp(props.index, appBarHeightLg),
            },
        }),
        hidden: {
            display: "none",
        },
    })
);
