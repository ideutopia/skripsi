import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Header, Footer, Main } from '../../components/organism'
import {Lab1, Lab2, Lab3} from '../../components/templates';

const MainApp = () => {
    return (
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route path="/codelabs1">
                        <Lab1 />
                    </Route>
                    <Route path="/codelabs2">
                        <Lab2 />
                    </Route>
                    <Route path="/codelabs3">
                        <Lab3 />
                    </Route>
                    <Route path="/">
                        <Main />
                    </Route>
                </Switch>
            </Router>
            {/* <Footer /> */}
        </div>
    )
}

export default MainApp
