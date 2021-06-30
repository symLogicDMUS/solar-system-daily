import React from "react";
import {useHistory} from "react-router-dom";
import {ListItem} from "@material-ui/core";

function PlanetOrMoonListItem(props: any) {
    const {label, page, ...other}: any = props;
    const history = useHistory();

    const toInfoPage = () => {
        history.push(`/${page}`);
    };

    return (
        <ListItem button onClick={toInfoPage} {...other}>
            {label}
        </ListItem>
    );
}

export default PlanetOrMoonListItem;