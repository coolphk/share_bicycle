import React from 'react';
import {HashRouter as Router,Route} from 'react-router-dom'
import Main from "./Main"
import About from "./About"
import Topics from "./Topics"
import Home from './Home'

export default class IRouter extends React.Component {
    render() {
        return (
            <Router>
                <Home>
                    {/*<Route exact path={"/main"} component={Main}></Route>*/}
                    <Route path={"/main"} render={()=>
                        <Main>
                            <Route path={"/main/a"} component={About}></Route>
                        </Main>
                    }></Route>
                    <Route path={"/about"} component={About}></Route>
                    <Route path={"/topics"} component={Topics}></Route>
                </Home>
            </Router>
        );
    }
}
