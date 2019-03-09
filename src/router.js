import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import App from "./App";
import Admin from "./admin";
import Login from "./pages/Login";
import Button from "./pages/ui/button";

export default class Router extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path={"/login"} component={Login}/>
                    {/*<Route path={"/admin"} component={Admin} />*/}
                    <Route path={"/admin"} render={() =><Admin>
                        <Route path={"/admin/ui/buttons"} component={Button}/>
                    </Admin>}/>
                </App>
            </HashRouter>
        )
    }
}
