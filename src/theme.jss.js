import {createMuiTheme, darken, lighten} from "@material-ui/core";
import {blueGrey, orange, teal} from "@material-ui/core/colors";

export const paper = blueGrey[900];

export const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 960,
            md: 1280,
            lg: 1440,
            xl: 1920,
        }
    },
    palette: {
        type: "dark",
        primary: {
            main: darken(paper, 0.02),
            contrastText: orange[400],
        },
        text: {
            primary: teal[100],
            secondary: orange[400],
        },
        background: {
            paper: paper,
            default: darken(paper, 0.35),
        },
        action: {
            hover: lighten(paper, 0.025),
        },
        divider: "rgba(10, 0, 0, 0.25)",
    },
    typography: {},
});