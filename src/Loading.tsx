import React from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./Loading.jss";

function Loading() {
    const classes = useStyles();

    return (
        <div className={classes.background}>
            <Typography className={classes.text} variant={"h2"}>
                Loading...
            </Typography>
        </div>
    );
}

export default Loading;
