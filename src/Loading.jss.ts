import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
    {
        background: (props) => ({
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#1b1b1b",
        }),
        text: (props) => ({
            color: "#fff",
            margin: "auto",
        }),
    },
    { index: 1 }
);
