import {createMuiTheme} from "@material-ui/core";
import {blueGrey} from "@material-ui/core/colors";

export const paper = '#252321';

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
        primary: {
            main: '#212121',
            light: '#484848',
            dark: '#000000',
            contrastText: '#FFCC80',
        },
        secondary: {
            light: "#7986cb",
            main: "#3f51b5",
            dark: "#303f9f",
            contrastText: "#fff",
        },
        background: {
            paper: paper,
            default: '#111111'
        },
        type: "dark",
    },
});