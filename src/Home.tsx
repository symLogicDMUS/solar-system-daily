import React from "react";
import ResponsiveDrawer from
        "./Components/ResponsiveDrawer/ResponsiveDrawer";
import NavBar from "./Components/NavBar/NavBar";
// import { useStyles } from "./Home.jss";

function Home() {
    // const classes = useStyles();

    return (
        <>
            <ResponsiveDrawer>
                <img src={"/Images/solar-system-template.svg"} />
            </ResponsiveDrawer>
        </>
    );
}

export default Home;