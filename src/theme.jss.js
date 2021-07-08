import {createMuiTheme, lighten} from "@material-ui/core";

const paper = "#353333";

export const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#353333",
            contrastText: "#ffac33",
        },
        text: {
            primary: "#ffac33"
        },
        background: {
            paper: paper,
            default: "#212121",
        },
        action: {
            hover: lighten(paper, 0.025),
        },
        divider: 'rgba(10, 0, 0, 0.25)',
    },
});