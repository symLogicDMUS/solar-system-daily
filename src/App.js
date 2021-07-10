import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import { planetarySystems } from "./planetarySystems";
import Loading from "./Loading";
import { theme } from "./theme.jss";
import "./App.scss";

const Home = React.lazy(() => import("./Home"));
const PlanetOrMoonPage = React.lazy(() =>
    import("./Components/PlanetOrMoonPage/PlanetOrMoonPage")
);

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={(props) => <Home {...props} />}
                        />
                        {Object.keys(planetarySystems).map((system) =>
                            planetarySystems[system].map((planetOrMoon) => (
                                <Route
                                    key={planetOrMoon}
                                    exact
                                    path={`/${planetOrMoon}`}
                                    component={(props) => (
                                        <PlanetOrMoonPage
                                            {...props}
                                            page={planetOrMoon}
                                        />
                                    )}
                                />
                            ))
                        )}
                    </Switch>
                </Suspense>
            </Router>
        </MuiThemeProvider>
    );
}

export default App;
