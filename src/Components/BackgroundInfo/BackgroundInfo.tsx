import React from 'react';
import {Card} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import CardContent from "@material-ui/core/CardContent";
import { BackgroundInfoParams } from "./BackgroundInfoParams";
import {useStyles} from "./BackgroundInfo.jss";

function BackgroundInfo(props: BackgroundInfoParams) {
    const {name, info, image} = props;
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <img
                alt={name}
                src={image}
                className={classes.planetImg}
            />
            <CardContent className={classes.info}>
                <Typography variant="body2">
                    {info}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default BackgroundInfo;