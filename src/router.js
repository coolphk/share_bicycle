import React from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import App from "./App";
import Admin from "./admin";
import Home from "./pages/home";
import Login from "./pages/login";
import Buttons from "./pages/ui/buttons";
import Modals from './pages/ui/modals';
import Tabs from './pages/ui/tabs';
import NoMath from "./pages/nomatch";

export default class Router extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path={"/login"} component={Login}/>
                        <Route path={"/admin"} render={() => <Admin>
                            <Switch>
                                <Route path={"/admin/home"} component={Home}/>
                                <Route path={"/admin/ui/buttons"} component={Buttons}/>
                                <Route path={"/admin/ui/modals"} component={Modals}/>
                                <Route path={"/admin/ui/tabs"} component={Tabs}/>
                                <Route component={NoMath}/>
                            </Switch>
                        </Admin>}/>
                        <Redirect exact path={"/"} to="/admin/home"/>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}
