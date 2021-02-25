import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Join from './pages/Join';
import Team from './pages/Team';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/our-team">
                        <Team />
                    </Route>
                    <Route path="/join">
                        <Join />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
