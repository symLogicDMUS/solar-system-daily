import {createMuiTheme, darken, lighten} from "@material-ui/core";

export const paper = "#263238";

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
            contrastText: "#ffa726",
        },
        text: {
            primary: "#b3e5fc",
            secondary: "#ffa726",
        },
        background: {
            paper: paper,
            default: darken('#263238', 0.35),
        },
        action: {
            hover: lighten(paper, 0.025),
        },
        divider: "rgba(10, 0, 0, 0.25)",
    },
});