import {createMuiTheme, darken, lighten} from "@material-ui/core";

const paper = "#263238";

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
            contrastText: "#80cbc4"
        },
        secondary: {
            main: darken(paper, 0.1),
        },
        text: {
            primary: "#b3e5fc",
            secondary: "#35baf6",
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
