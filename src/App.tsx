import React, { Suspense } from 'react';
import {Route, Switch} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import Home from "./Home";
import Loading from "./Loading";
import {pages} from "./pages";
import './App.css';

const PlanetInfo = React.lazy(() => import('./Components/PlanetOrMoonInfo/PlanetOrMoonInfo'));

function App() {
    // @ts-ignore
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route exact path="/"
                           component={(props: JSX.IntrinsicAttributes) =>
                               <Home {...props} />
                           }
                    />
                    {pages.map(page =>
                        <Route
                            key={page}
                            exact path={`/${page}`}
                            component={(props: JSX.IntrinsicAttributes) =>
                                <PlanetInfo {...props} page={page} />
                            }
                        />
                    )}
                </Switch>
            </Suspense>
        </Router>
    )
}

export default App;