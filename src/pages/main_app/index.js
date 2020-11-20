import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Header, Main , Footer} from '../../components/organism'
import {Lab1, Lab2, Lab3, Lab4, Lab5, Lab6, Lab7, Lab8} from '../../components/templates';

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
                    <Route path="/codelabs4">
                        <Lab4 />
                    </Route>
                    <Route path="/codelabs5">
                        <Lab5 />
                    </Route>
                    <Route path="/codelabs6">
                        <Lab6 />
                    </Route>
                    <Route path="/codelabs7">
                        <Lab7 />
                    </Route>
                    <Route path="/codelabs8">
                        <Lab8 />
                    </Route>
                    <Route path="/">
                        <Main />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </div>
    )
}

export default MainApp
