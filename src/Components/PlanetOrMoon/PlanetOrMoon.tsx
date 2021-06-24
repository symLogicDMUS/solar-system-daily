import React from "react";
import {useHistory} from "react-router-dom";
import {MenuItem} from "@material-ui/core";
//import { useStyles } from "./PlanetOrMoon.jss";

function PlanetOrMoon(props: any) {
    const {label, page, ...other}: any = props;
    const history = useHistory();

    const toInfoPage = () => {
        history.push(`/${page}`);
    };

    return (
        <MenuItem {...other} onClick={toInfoPage}>
            {label}
        </MenuItem>
    );
}

export default PlanetOrMoon;