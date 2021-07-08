import React from "react";
import ResponsiveDrawer from "./Components/ResponsiveDrawer/ResponsiveDrawer";

function Home() {
    return (
        <>
            <ResponsiveDrawer title="Home">
                <img src={"/Images/solar-system-template.svg"} style={{maxWidth: '100%', maxHeight: '100%'}} />
            </ResponsiveDrawer>
        </>
    );
}

export default Home;