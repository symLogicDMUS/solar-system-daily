import React, {Suspense, lazy} from 'react';
import {Route, Switch} from "react-router-dom";
import {MuiThemeProvider} from "@material-ui/core";
import {BrowserRouter as Router} from "react-router-dom";
import {planetarySystems} from "./planetarySystems";
import {theme} from "./theme.jss";
import Loading from "./Loading";
import Home from "./Home";
import './App.css';

const PlanetOrMoonInfo = lazy(() => import('./Components/PlanetOrMoonInfo/PlanetOrMoonInfo'));
const ResponsiveDrawer = React.lazy(() => import('./Components/ResponsiveDrawer/ResponsiveDrawer'));

function App() {

    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route exact path="/" component={props => <Home {...props} />}/>
                        {Object.keys(planetarySystems).map(system =>
                            planetarySystems[system].map(planetOrMoon =>
                                <Route
                                    key={planetOrMoon}
                                    exact path={`/${planetOrMoon}`}
                                    component={(props) =>
                                        <ResponsiveDrawer title={planetOrMoon}>
                                            <PlanetOrMoonInfo {...props} page={planetOrMoon} />
                                        </ResponsiveDrawer>
                                    }
                                />
                            )
                        )}
                    </Switch>
                </Suspense>
            </Router>
        </MuiThemeProvider>
    )
}

export default App;