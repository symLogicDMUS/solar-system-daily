import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { BackgroundInfoParams } from "./BackgroundInfoParams";
import {useStyles} from "./BackgroundInfo.jss";

export default function BackgroundInfo(props: BackgroundInfoParams) {
    const {name, info, image, title} = props;
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                image={image}
                title={title}
                className={classes.img}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5" paragraph>
                        {name}
                    </Typography>
                    <Typography variant="body2">
                        {info}
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
}