import React from 'react';
import {HashRouter as Router,Route} from 'react-router-dom'
import Main from "./Main"
import About from "./About"
import Topics from "./Topics"
import Home from './Home'
import Info from './Info'
import NoMatch from "./NoMatch"

export default class IRouter extends React.Component {
    render() {
        return (
            <Router>
                <Home>
                    {/*<Route exact path={"/main"} component={Main}></Route>*/}
                    <Route path={"/main"} render={()=>
                        <Main>
                            <Route path={"/main/:mainId"} component={Info}></Route>
                        </Main>
                    }></Route>
                    <Route path={"/about"} component={About}></Route>
                    <Route path={"/topics"} component={Topics}></Route>
                    <Route component={NoMatch}></Route>
                </Home>
            </Router>
        );
    }
}
